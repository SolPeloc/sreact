import { createContext,useContext, useState} from "react"


const cartcontext = createContext({});//creo contexto//
const {Provider} = cartcontext

//custom hook//
export const useContexto = () => {
    return useContext(cartcontext)
}

const CostumProvider= ({children}) => {
    
    const [cantidad_total,setCantidadTotal] = useState(0)
    const [carrito,SetCarrito] = useState([])
    const [precio_total,setPrecio_total]=useState(0)
    const AgregarAlCarrito = (producto,cantidad) =>{

        if(isInCart(producto.id)){
            let prod_en_carrito = carrito.find(p=>p.id ===producto.id)
            prod_en_carrito.cantidad += cantidad
            
           SetCarrito([...carrito])
                }else{
                SetCarrito([...carrito,{
                    producto,cantidad //pusheo//
                   
                }])
            }
            setCantidadTotal(cantidad_total+cantidad)
           
    }


    const BorrarDelCarrito = (id) => SetCarrito(carrito.filter(prod =>prod.id !==id))

    //me falta esto//

    const LimpiarCarrito = () =>{
        SetCarrito([])
    }
    const isInCart = id =>carrito.find(producto => producto.id === id)
      
     


    const valorContexto={
            cantidad_total,
            precio_total,
            carrito,
            SetCarrito,
            AgregarAlCarrito,
            BorrarDelCarrito,
            LimpiarCarrito
        }
    return (
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CostumProvider
