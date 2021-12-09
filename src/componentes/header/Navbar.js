
import React from 'react'
import CartWidget from './CartWidget'



const Navbar = () => {
    return (
        <>
                <CartWidget/>
                <nav>
                  
                         <ul className="estiloLista">
                            <li><a href="#">Mujer</a></li>
                            <li><a href="#">Accesorios</a></li> 

                        </ul>
               
                </nav> 
         
           

        </>
    )
}

export default Navbar



