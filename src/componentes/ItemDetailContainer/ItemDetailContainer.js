import React, { useState,useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
const productodetail =
    {   
            "id":1,
            "nombre":"BUZO MAX",
            "precio":2000,
            "imagen":"media/mujer-buzo.png",
            "stock":5,       
    }

const ItemDetailContainer = () => {


const [producto, Setproducto]= useState({});
const {id} = useParams()


useEffect(() => {
    

    const promesa2 = new Promise((res,rej)=>{
        setTimeout(() => {
        res(productodetail)// producto//
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
    Object.keys(producto).length === 0 ?    
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
