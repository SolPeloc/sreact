import React, { useState,useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
 
const ItemDetailContainer = ({datos}) => {
const {id}=useParams()
    
    
const [producto, setProducto]= useState({});

useEffect(() =>{ 
    console.log(id)
    const promesa2 = new Promise((res,rej)=>{
        setTimeout(() => {
            if(!id){
                res(datos) 
                }else{
                res(datos.filter(producto=>producto.id === id)) 
                }
        res(datos)// producto//
        }, 2000);
    })
    promesa2
    .then((producto)=>{
        console.log("ok detalles")
        setProducto(producto) //parametro indentificador del producto//
        })
        .catch(()=>{
        console.log("Todo mal detalles")
}) 

}, [id])

return (
    !producto.length  === 0 ?    
    ( <>
    <div className="text-center m-5"> 
        <Spinner animation="border" role="status" variant="dark" ></Spinner>
    </div> 
</> ) :
    (<div>
            <ItemDetail producto={producto} /> {/*le estoy pasando el estado*/}
        </div>

    )   
)
}

export default ItemDetailContainer
