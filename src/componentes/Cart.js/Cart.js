import { useContexto } from "../Context/CartContext"
import { Button,Table} from "react-bootstrap"
import { Link } from "react-router-dom"
const Cart = () => {

            const{ carrito,BorrarDelCarrito,LimpiarCarrito,setPrecio_total,precio_total}= useContexto()
          

            let total = 0;
            carrito.map(item => {
                return total += item.cantidad * item.precio;
               
            })
            setPrecio_total(total)
           
           
        return (
            <>
            <h2>Tu carrito</h2>
              
      {/*  {carrito.lenght > 0 ? (   */   }   
      <> <Table hover>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Subtotal</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                {carrito.map((producto,indice) =>
                 <tbody key= {indice}>
                  <tr>
                    <td> {producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.categoria}</td>
                    <td>{producto.cantidad}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.precio * producto.cantidad} </td>
                    <td><Button variant="dark" on click={() => BorrarDelCarrito(producto.id,producto.cantidad)}>x</Button></td>
                    </tr>
                      <div>Precio Total:{precio_total}</div>
                </tbody>)}
              </Table>
              <Button variant="danger" onClick={() =>LimpiarCarrito()}>Vaciar carrito</Button>
              </> {/*) :*/}
                  <> <p>no hay productos en el carrito </p>
                    <Link to={"/"}><Button variant="primary">Volver al Inicio</Button></Link>
                  </> {/*}*/}
</>)

}

export default Cart
