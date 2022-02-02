
import React from 'react';
import { collection,serverTimestamp,addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useContexto } from './Context/CartContext';
import { Form,Button } from 'react-bootstrap';
import { useState } from 'react';
import swal from 'sweetalert';

const Formulario = () => {
  
  const {carrito, precio_total,LimpiarCarrito} = useContexto() ;
  const [comprador, setComprador] = useState({nombre:"",email:""})
  
    const ecomprador = (e) =>{
        setComprador({...comprador,[e.target.name]: e.target.value})
    };
          const finalizarCompra = () =>{
                        const pedido = {
                          comprador : comprador,
                          items:{...carrito},
                          fecha: serverTimestamp(),
                          total : precio_total
                        }
                        
                            const ventas = collection(db,"ventas")    
                            addDoc(ventas,pedido).then(({id}) =>{
                                swal({
                                  title: "listo!",
                                  text: `tu pedido ${id} ha sido confirmado`,
                                  icon: "success",
                                  button: "ok!",
                                })
                                LimpiarCarrito()
                              })   
                            setComprador({nombre:"", email:""}) 
            }
      return ( <>  
                      <h3> Solicitud Pedido </h3>
                    <div className='col-5'> 
                        <Form>
                              <div className='mb-4'>
                                  <Form.Label>Nombre Completo</Form.Label>
                                  <Form.Control type="text" placeholder="Nombre y Apellido" name="nombre"value={comprador.nombre} onChange={ecomprador} required/>
                                </div>
                              <div className='mb-4'>
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control type="email" placeholder="tucorreo@electronico.com" name="email"value={comprador.email} onChange={ecomprador} required />
                              </div>
                               <Button variant="info"type="submit" onClick={finalizarCompra} disabled={
                                !(comprador.nombre && comprador.email )}>Finalizar Compra </Button>     
                        </Form>
                     </div>
          </>)
};

export default Formulario;
