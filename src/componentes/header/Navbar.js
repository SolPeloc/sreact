
import React from 'react'
import CartWidget from './CartWidget'




const Navbar = () => {
    return (
        <>
                <header id="headerStyle"> 
                    <div>
                        <img src="/media/icono2.png" alt="icono" />
                    </div>
                    <nav className="navStyle">
                            <ul className="styleList d-flex">
                                <li><a className='nav-link' href="#">Mujer</a></li>
                                <li><a className='nav-link'href="#">Accesorios</a></li>
                            </ul>
                            <CartWidget/>
                    </nav> 
            
                </header>
        </>
    )
}

export default Navbar



