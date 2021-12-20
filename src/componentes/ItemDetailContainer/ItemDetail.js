import React from 'react'
import ItemCount from '../ItemCount'
import swal from 'sweetalert'

//producto es un objeto//
const ItemDetail = ({producto}) => {
    const onAdd=(cantidad)=>{
        swal({ text:"añadido al carrito",
                icon:"success" 
                });
                console.log(cantidad)//a modo de prueba para ver si el padre reciba la cant//
        }

    return (
        <> 
        <div>
            <p>HOLA SON DETALLES</p>
            <h3>nombre:{producto.nombre}</h3>
            <p> precio: ${producto.precio}</p>
            <img src={producto.imagen} alt="" />
            <ItemCount stock= {5}initial={0} onAdd={onAdd}/>
        </div>
        </>  )
}

export default ItemDetail
