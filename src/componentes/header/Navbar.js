
import React from 'react'
import CartWidget from './CartWidget'




const Navbar = ({nombre}) => {
    return (
        <>
                <header id="headerStyle"> 
                        <div>
                        <h1>Tienda {nombre} </h1>
                        <img src="/media/icono2.png" alt="icono" />
                        </div>
                            <nav className="navStyle">
                            <ul className="styleList d-flex">
                                <li><a className='nav-link' href="a">Mujer</a></li>
                                <li><a className='nav-link'href="b">Accesorios</a></li>
                            </ul>
                            <CartWidget/>
                            </nav> 
                </header>
        </>
    )
}

export default Navbar



