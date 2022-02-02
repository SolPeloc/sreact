
import React from 'react'
import { NavLink} from 'react-router-dom'
import { useContexto } from '../Context/CartContext'

const CartWidget = () => {

const {cantidad_total} = useContexto () 
    return (
        <> 
            {cantidad_total > 0 ? ( 
            <><NavLink to="/Cart" ><img src="/media/carrito.png" alt="" className='iconoStyle traslate'/></NavLink> <span className='count'>{cantidad_total}</span></>
            ) : 
            <> <NavLink to="/Cart"><img src="/media/carrito.png" alt=""className='iconoStyle traslate' /></NavLink> <span className='count'>{cantidad_total}</span> </>
            }
        </>
    )
}

export default CartWidget
