
import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'



const Navbar = ({nombre,links}) => {
    return (
        <>
                <header id="headerStyle"> 
                        <div>
                        <h1>Tienda {nombre} </h1>
                        <NavLink  to="/" >
                            <img src="/media/icono2.png" alt="home" /> 
                            
                        </NavLink>
                        </div>
                            <nav className="navStyle">
                                { links.map( (elemento,indice)=>{
                                return <NavLink key= {elemento.id} to={elemento.href}>{elemento.name} </NavLink>
                                })}
                            <CartWidget />
                            </nav> 
                </header>
        </>
    )
}

export default Navbar



