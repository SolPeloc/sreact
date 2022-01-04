import React from 'react'
import ItemCount from '../ItemCount'
import swal from 'sweetalert'
import { useState } from 'react'
import { Link } from 'react-router-dom'
//producto es un objeto//
const ItemDetail = ({producto}) => {
 
    const [ocultar, setOcultar] = useState(true)
    const [cantidad, setCantidad] = useState(0)

 


    const onAdd=(cantidad)=>{
        swal({ text:"añadido al carrito",
                icon:"success" 
                });
                console.log(cantidad)//a modo de prueba para ver si el padre reciba la cant//
                setOcultar(false)
                setCantidad(cantidad)
        }

    return (
            ocultar?
        (<> 
        <div>
            <p>HOLA SOY DETALLES</p>
            <h3>Nombre:{producto.nombre}</h3>
            <p> Precio: ${producto.precio}</p>
            <img src={producto.imagen} alt="" />
            <h2>Descripción:{producto.descripcion}</h2>
            <ItemCount stock= {5}initial={0} onAdd={onAdd}/>
        </div>
        </>) : (<>
            <div>
            <p>HOLA SOY DETALLES</p>
            <h3>Nombre:{producto.nombre}</h3>
            <p> Precio: ${producto.precio}</p>
            <img src={producto.imagen} alt="" />
            <h2>Descripción:{producto.descripcion}</h2>
            <p> cantidad añadida:{cantidad}</p> 
            <Link to={`/cart`}>finalizar compra </Link>
            </div>
            </> ) 
        )
}

export default ItemDetail
