import { useContexto } from "../Context/CartContext"
import { Button,Table} from "react-bootstrap"
import { Link } from "react-router-dom"
const Cart = () => {
        const{ carrito,BorrarDelCarrito,LimpiarCarrito,cantidad_total,precio_total}= useContexto()
         console.log(carrito)
    return (
         <>
          
            <h2>Tu carrito</h2>
            
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>Nombre</th>
      <th>Categoria</th>
      <th>Cantidad</th>
      <th>Precio Unitario</th>
      <th>Precio Final</th>
      <th>Eliminar</th>
    </tr>
  </thead>
{carrito.map((producto  ) => 
  <tbody >
    <tr>
      <td>{producto.producto.id }</td>
      <td>{producto.producto.nombre}</td>
      <td>{producto.producto.categoria}</td>
      <td>{producto.cantidad}</td>
      <td>${producto.producto.precio}</td>{/*me falta resolver precio total*/}
      <td>${precio_total} </td>
      <td></td>
      <td><Button variant="dark" on click= {BorrarDelCarrito}>x</Button></td>
      
    </tr>
    
   
  </tbody>)}
  
</Table>
<Button variant="danger" on onClick={LimpiarCarrito}>Vaciar carrito</Button>   
<Link to={"/"}><Button variant="primary">Volver al Inicio</Button></Link>       
        </>
    )
}

export default Cart
