import { useContexto } from "../Context/CartContext"
import { Button,Table} from "react-bootstrap"
import { Link,NavLink } from "react-router-dom"
import { useEffect } from "react"

const Cart = () => {

      const{ carrito,BorrarDelCarrito,LimpiarCarrito,setPrecio_total,precio_total}= useContexto()

            useEffect(() => {
              let total = 0;
              carrito.map(item => {
                return total += item.cantidad * item.precio;
              })
              setPrecio_total(total)
              
            },[carrito,setPrecio_total])    

    return (<>
                      <h2 className="text-center">Tu carrito</h2>
                        
            {carrito.length > 0 ? (   
                  <> <Table  striped bordered className="text-center">
                          <thead >
                            <tr >
                              <th>Nombre</th>
                              <th>Categoria</th>
                              <th>Cantidad</th>
                              <th>Precio Unitario</th>
                              <th>Subtotal</th>
                              <th>Quitar</th>
                            </tr>
                          </thead>
                          {carrito.map((producto,indice) =>
                            <tbody key= {indice}>
                            <tr>
                              <td>{producto.nombre}</td>
                              <td>{producto.categoria}</td>
                              <td>{producto.cantidad}</td>
                              <td>${producto.precio}</td>
                              <td>${producto.precio * producto.cantidad} </td>
                              <td><Button  variant="outline-light"
                              onClick={() => BorrarDelCarrito(producto.id,producto.cantidad)}><img src="/media/tacho.jpg" alt=""/></Button></td>
                              </tr>      
                          </tbody>)}
                    </Table>
                        <div className="text-end textStyle">
                            Total: ${precio_total}
                        </div>
                        <div className="mt-3"> 
                              <Button variant="danger"onClick={() =>LimpiarCarrito()}>Vaciar Carrito</Button>
                              <NavLink to={"/Formulario"}><Button >Comprar</Button></NavLink>        
                        </div>
                        </>) : 
                            <div className="text-center"> 
                                <p>No hay productos en tu carrito </p>
                                <Link to={"/"}><Button variant="primary">Volver al Inicio</Button></Link>
                            </div>
              }
      </>)

}

export default Cart
