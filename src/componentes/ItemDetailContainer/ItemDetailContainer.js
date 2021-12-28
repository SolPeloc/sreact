import React, { useState,useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
const productosdetalle=[
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
  

const ItemDetailContainer = () => {


const [producto, Setproducto]= useState([]);
const {id}=useParams()



useEffect(() => {
    

    const promesa2 = new Promise((res,rej)=>{
        setTimeout(() => {
            if(!id){
                res(productosdetalle)
               
              }else{
                res(productosdetalle.filter(producto=>producto.id==id))
                
                }


        res(productosdetalle)// producto//
        }, 2000);
    })
    promesa2
    .then((productomues)=>{
        console.log("ok detalles")
        Setproducto(productomues) //parametro indentificador del producto//
    
        })
        .catch(()=>{
        console.log("Todo mal detalles")
})
}, [id])


return (
    !producto.length === 0 ?    
    ( <>
    <div className="text-center m-5"> 
        <Spinner animation="border" role="status" variant="dark" ></Spinner>
    </div> 
</> ) :
     
 (   <div>
            <ItemDetail producto={producto} /> {/*le estoy pasando el estado*/}
        </div>
 
)   
)
}

export default ItemDetailContainer
