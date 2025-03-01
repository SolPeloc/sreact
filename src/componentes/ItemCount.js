import React from 'react'
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { useState } from 'react'



const ItemCount = ({stock,initial,onAdd}) => {

    const [contador,setContador] = useState(initial)
        const sumar =()=>{   
            if(contador<stock){
                setContador(contador +1)
            }
        }

        const restar =()=>{
            if(contador>1 ){
                setContador(contador -1)
            }         
        }

    const AgregarCarrito=()=>{
        if (contador!==0){
        onAdd(contador)
        
        }
        
    }

        return (
            <div>
                <Card border="light"style={{ width: '18rem' }} >
                <Card.Body className='d-flex align-items-center justify-content-space-around'>
                <Button onClick={restar} variant="secondary">-</Button>
                    <p className="m-2">{contador}</p> 
                    <Button onClick={sumar} variant="secondary">+</Button>
                    <Button onClick={AgregarCarrito} variant="primary">Agregar al carrito</Button>
                </Card.Body>
                </Card>
            </div>  
        )
}

export default ItemCount
