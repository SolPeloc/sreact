
import React from 'react'
import { NavLink} from 'react-router-dom'

const CartWidget = () => {
    return (
        <> 
        <NavLink  to="/Cart" className="material-icons cartWidget">shopping_cart</NavLink> 
        </>
    )
}

export default CartWidget
