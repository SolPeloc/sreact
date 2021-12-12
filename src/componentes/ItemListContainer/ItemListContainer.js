
import React from 'react'
import swal from 'sweetalert'

//componentes//
import ItemCount from '../ItemCount'


const onAdd=()=>{
swal({ text:"añadido al carrito",
        icon:"success" 
        });
}

const ItemListContainer = (props) => {
    return (
        <> 
            <div>
                <h1>Bienvenidos a TIENDA {props.nombre} </h1>
            </div>
            <ItemCount stock= {5}initial={0} onAdd={onAdd}/>
            </> 
            )
}

export default ItemListContainer
