
import React from 'react'
import { NavLink} from 'react-router-dom'
import { useContexto } from '../Context/CartContext'

const CartWidget = () => {

 const {cantidad_total} = useContexto ()
   
 

    return (
        <> 
            {cantidad_total > 0 ? ( 
            <><NavLink to="/Cart" className="material-icons cartWidget">shopping_cart</NavLink><span>{cantidad_total}</span></>
            ) : 
                <span className="material-icons cartWidget">shopping_cart</span>  
            }
        </>
    )
}

export default CartWidget
