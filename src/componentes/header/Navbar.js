
import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'



const Navbar = ({links}) => {
    return (  
                <header id="headerStyle"> 
                        <div id= "logo">
                            <NavLink  to="/" >
                                <img src="/media/icono2.png" className='logosize' alt="home" /> 
                            </NavLink>
                        </div>
                            <nav >
                                { links.map( (elemento)=>{
                                return <NavLink key= {elemento.id} to={elemento.href } className="navstyle">{elemento.name} </NavLink>
                                })} 
                                <CartWidget/>
                            </nav> 
                </header>
        
    )
}

export default Navbar



