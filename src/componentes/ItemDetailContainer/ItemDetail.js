import React from 'react'
import ItemCount from '../ItemCount'
import swal from 'sweetalert'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContexto } from '../Context/CartContext'
import { Button } from 'react-bootstrap'
//producto es un objeto//
const ItemDetail = ({producto}) => {
 
    const [ocultar, setOcultar] = useState(true)
    const [cantidad, setCantidad] = useState(0)
    const {AgregarAlCarrito}= useContexto([])
    
    const onAdd=(cantidad)=>{
        swal({ text:"añadido al carrito",
                icon:"success" 
                });
                console.log(cantidad)//a modo de prueba para ver si el padre reciba la cant//
                setOcultar(false)
                setCantidad(cantidad)
                AgregarAlCarrito( cantidad,producto)
                
        }

    return (
            ocultar?
        (<> 
        <div>
            <p>HOLA SOY DETALLES</p>
            <p>ID:{producto.id}</p>
            <h3>Nombre:{producto.nombre}</h3>
            <p> Precio: ${producto.precio}</p>
            <img src={producto.imagen} alt="" />
            <h2>Descripción:{producto.descripcion}</h2>
            <ItemCount stock= {5}initial={1} onAdd={onAdd}/>
        </div>
        </>) : (<>
            <div>
            <p>HOLA SOY DETALLES</p>
            <p>ID:{producto.id}</p>
            <h3>Nombre:{producto.nombre}</h3>
            <p> Precio: ${producto.precio}</p>
            <img src={producto.imagen} alt="" />
            <h2>Descripción:{producto.descripcion}</h2>
            <p> cantidad añadida:{cantidad}</p> 
            <Link to={`/cart`}><Button variant="info">Ir a Carrito</Button> </Link>
            <Link to={`/productos`}><Button variant="secondary">Seguir comprando</Button> </Link>
            </div>
            </> ) 
        )
}

export default ItemDetail
