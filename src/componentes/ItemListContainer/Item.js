import React from 'react'
import { Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({nombre,precio,imagen,id}) => {
    return (
        <>
         <div > 
            <div className="text-center  ">
            <Card style={{ width: '18rem'}} className='card m-1' >
            <Card.Img variant="top" src={imagen} className='imgProducts' />
                    <Card.Body>
                    <Card.Title>Producto:{nombre}</Card.Title>
                    <p>Precio:$ {precio}</p>
                   <Link to={`/producto/${id}`}><Button variant="btn btn-primary">Ver Detalle</Button> </Link>
                    </Card.Body>
                </Card>
            </div>
            </div>
        </>
    )
}

export default Item

