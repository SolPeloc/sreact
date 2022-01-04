
import React from 'react'
import { Spinner } from 'react-bootstrap'

//componentes//
import { useState,useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({datos,nombre}) => {
 

const [lista,setlista]= useState([])

const {categoria}=useParams()
 


    useEffect(() => {
     
      const promesa1 = new Promise((res,rej)=>{
        setTimeout(() => {
          if(!categoria){
            res(datos)//array de productos//
          }else{
            res(datos.filter((prod) => prod.categoria === categoria))
            console.log(categoria)
          }
          
        }, 2000);
      
      })
      promesa1.then((productosres)=>{
      console.log("ok")
      setlista(productosres) //parametro indentificador del array//
    
      })
      .catch(()=>{
        console.log("Todo mal")
    })

    },[categoria])


   
      return ( 
        lista.length === 0 ?

       (  <>
          <div className="text-center m-5">
              <Spinner animation="border" role="status"variant="info" ></Spinner>
          </div>
          </>)   :   
        (
            <> 
            <div>
                <h2>Bienvenidos a TIENDA {nombre} </h2>
                
            </div>
            <div>
              <ItemList lista={lista}/> {/* le estoy pasando el estado*/}
            </div>
            
            </> 
            )
          )  
}

export default ItemListContainer
