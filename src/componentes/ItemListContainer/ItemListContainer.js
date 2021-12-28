
import React from 'react'
import { Spinner } from 'react-bootstrap'

//componentes//
import { useState,useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
const productos=[
  {   
          "id":1,
          "nombre":"BUZO MAX",
          "precio":2000,
          "imagen":"/media/mujer-buzo.png",
          "stock":5,
          "categoria":"sale",       
      },
      {
          "id":2,
          "nombre":"JEAN MONTANA ",
          "precio":3500,
          "imagen":"/media/mujer-jean.png",
          "stock":5,
          "categoria":"sale", 
      },
      {
          "id":3,
          "nombre":"SACO CLARA",
          "precio":4200,
          "imagen":"/media/mujer-tapado.png",
          "stock":5,
          "categoria":"sale", 
      },
      {
        "id":4,
        "nombre":"BUFANDA LOLA",
        "precio":1200,
        "imagen":"/media/acc-bufanda.png" ,
        "stock":5,
        "categoria":"newin", 
    },
    {
      "id":5,
      "nombre":"BOINA SOL",
      "precio":1800,
      "imagen":"/media/acc-boina.png",
      "stock":5,
      "categoria":"newin", 
  },
  {
    "id":6,
    "nombre":"GORRO SU",
    "precio":1500,
    "imagen":"/media/acc-gorro.png",
    "stock":5,
    "categoria":"newin", 
},
      
]

const ItemListContainer = ({nombre}) => {
 




const [lista,setlista]= useState([])

const {categoria}=useParams()



    useEffect(() => {
     
      const promesa1 = new Promise((res,rej)=>{
        setTimeout(() => {
          if(!categoria){
            res(productos)//array de productos//
          }else{
            res(productos.filter((prod) => prod.categoria === categoria))
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
