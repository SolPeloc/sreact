import React from 'react'
import Item from './Item'

const ItemList = ({producto}) => {


    return (
        <>
            <h3>Nuestros productos</h3>
            <div>
            {producto.map(producto =><Item 
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio} 
            stock={producto.stock}/>)}
            </div>
        </> 
        )
}

export default ItemList
