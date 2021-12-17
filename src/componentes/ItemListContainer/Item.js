import React from 'react'
import { Card } from 'react-bootstrap'
const Item = ({nombre,precio,stock}) => {



    return (
        <>
           <div>
           <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Producto:{nombre}</Card.Title>
                    <p>Precio:$ {precio}</p>
                     <h4>stock:{stock}</h4>
                  
                </Card.Body>
                </Card>

           </div>




        </>
    )
}

export default Item

