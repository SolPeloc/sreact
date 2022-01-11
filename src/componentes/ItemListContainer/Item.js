import React from 'react'
import { Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,precio,imagen}) => {
    return (
        <>
            <div > 
            <div className="text-center  ">
            <Card style={{ width: '18rem'}} className='card m-1' >
            <Card.Img variant="top" src={imagen} className='imgProducts'/>
                    <Card.Body>
                    <Card.Title>Producto:{nombre}</Card.Title>
                    <p>ID:{id}</p>
                    <p>Precio:$ {precio}</p>
                    <Link to={`/producto/${id}`}><Button variant="info">Ver Detalle</Button></Link>
                    </Card.Body>
                </Card>
            </div>
            </div>
        </>
    )
}

export default Item

