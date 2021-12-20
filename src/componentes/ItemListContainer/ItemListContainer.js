
import React from 'react'
import { Spinner } from 'react-bootstrap'

//componentes//
import { useState,useEffect } from 'react'
import ItemList from './ItemList'

const productos=[
  {   
          "id":1,
          "nombre":"BUZO MAX",
          "precio":2000,
          "stock":5,       
      },
      {
          "id":2,
          "nombre":"JEAN MONTANA ",
          "precio":3500,
          "stock":5,
      
      },
      {
          "id":3,
          "nombre":"SACO CLARA",
          "precio":4200,
          "stock":5,
      },
]

const ItemListContainer = ({nombre}) => {

  
  
let [lista,setlista]= useState([])



    useEffect(() => {

      const promesa1 = new Promise((res,rej)=>{
        setTimeout(() => {
          res(productos)//array de productos//
        }, 2000);
      
      })
      promesa1

      .then((productosres)=>{
      console.log("ok")
      setlista(productosres) //parametro indentificador del array//
    
      })
      .catch(()=>{
        console.log("Todo mal")
    })

    },[])


   
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
              <ItemList producto={lista}/> {/* le estoy pasando el estado*/}
            </div>
            
            </> 
            )
          )  
}

export default ItemListContainer
