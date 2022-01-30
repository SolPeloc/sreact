import React from 'react'
import ItemCount from '../ItemCount'
import swal from 'sweetalert'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContexto } from '../Context/CartContext'
import { Button,Card } from 'react-bootstrap'

//producto es un objeto//
const ItemDetail = ({producto}) => {

    const [ocultar, setOcultar] = useState(true)
    const [cantidad, setCantidad] = useState(0)
    const {AgregarAlCarrito}= useContexto([])
    
    
    const onAdd=(cantidad)=>{
        swal({ text:"añadido al carrito",
                icon:"success" 
                });
                setOcultar(false)
                setCantidad(cantidad)
                AgregarAlCarrito( cantidad,producto)
                
        }

    return (
            ocultar?
        (<> 
            <Card style={{ width: '25rem' }} >
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
            <Card.Title>Detalle: </Card.Title>
            <Card.Subtitle className="mb-2 ">{producto.nombre}</Card.Subtitle>
            <Card.Text>
            {producto.descripcion}
            </Card.Text>
            <Card.Text>
            Precio: ${producto.precio}
            </Card.Text>
            </Card.Body>
            <ItemCount stock= {5}initial={1} onAdd={onAdd}/>
            </Card>
            </>) : (<>
            <Card style={{ width: '25rem' }} >
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
            <Card.Title>Detalle :</Card.Title>
            <Card.Subtitle className="mb-2 ">{producto.nombre}</Card.Subtitle>
            <Card.Text>
            {producto.descripcion}
            </Card.Text>
            <Card.Text>
            Precio: ${producto.precio}
            </Card.Text>
            <Card.Text>
            cantidad añadida: {cantidad}
            </Card.Text>
            <div className='botones'> 
            <Link to={`/cart`}><Button variant="info mr-2" >Ir a Carrito</Button> </Link>
            <Link to={`/productos`}><Button variant="secondary" >Seguir comprando</Button> </Link>
            </div>
            </Card.Body> 
            </Card>
        </> ) 
        )
}

export default ItemDetail
