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
            if(contador>0 ){
                setContador(contador -1)
            }
        
        }

    const AgregarCarrito=()=>{
        if (contador!==0){
        onAdd(contador)
        }
        else{
            alert("tu carrito esta vacio")
        }
    }

    return (
        <> 
            <div>
                
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Producto</Card.Title>
                    <p>cantidad: {contador}</p>
                    <Button onClick={sumar} variant="secondary">+</Button>
                    <Button onClick={restar} variant="secondary">-</Button>
                    <Button onClick={AgregarCarrito} variant="primary">Agregar al carrito</Button>
                </Card.Body>
                </Card>
                </div>
        </> 
        )
}

export default ItemCount
