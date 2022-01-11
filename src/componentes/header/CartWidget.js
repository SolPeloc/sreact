
import React from 'react'
import { NavLink} from 'react-router-dom'
import { useContexto } from '../Context/CartContext'

const CartWidget = () => {

    const {cantidad_total} = useContexto ()
    console.log(cantidad_total)
    
    
    return (
        <> 
        <NavLink  to="/Cart" className="material-icons cartWidget">shopping_cart</NavLink>
        {cantidad_total}
        </>
    )
}

export default CartWidget
