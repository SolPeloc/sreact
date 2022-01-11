import { useState,useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
 
const ItemDetailContainer = ({datos}) => {
const {id} = useParams ()  
const [seleccion, setSeleccion]= useState({});

useEffect(() =>{ 
 
    const promesa2 = new Promise((res,rej)=>{
        setTimeout(() => {
            if(!id){
                res(datos) 
                }else{
                res(datos.find(prod => prod.id == id)) 
                }
        },2000);
    })
    promesa2
    .then((prod)=>{
        console.log("ok detalles")
        setSeleccion(prod) //parametro indentificador del producto//
        })
        .catch(()=>{
        console.log("Todo mal detalles")
}) 

}, [id,datos])

return (
    !seleccion.length  === 0 ?    
    ( <>
    <div className="text-center m-5"> 
        <Spinner animation="border" role="status" variant="dark" ></Spinner>
    </div> 
</> ) :
    (<div>
            <ItemDetail producto={seleccion} /> {/*le estoy pasando el estado*/}
        </div>

    )   
)
}

export default ItemDetailContainer
