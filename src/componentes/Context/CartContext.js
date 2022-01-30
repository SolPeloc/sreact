import { createContext,useContext, useState} from "react"


const cartcontext = createContext({});//creo contexto//
export const {Provider} = cartcontext

//custom hook//
export const useContexto = () => {
    return useContext(cartcontext)
}

const CostumProvider= ({children}) => {
    
    const [cantidad_total,setCantidadTotal] = useState(0)
    const [carrito,SetCarrito] = useState([])
    const [precio_total,setPrecio_total]=useState(0)

    const AgregarAlCarrito = (cantidad,producto) =>{
        const id = producto.id
        
        
        if(isInCart(id)){
            const copia_carrito =[...carrito]
            
            let prod_en_carrito = copia_carrito.find((p)=>p.id ===producto.id)
            prod_en_carrito.cantidad = prod_en_carrito.cantidad + cantidad 
            SetCarrito(copia_carrito)
        } else{
                    const producto_mas_cantidad = {
                        ...producto,
                        cantidad
                    }
                    SetCarrito([...carrito,producto_mas_cantidad])  
            }
            setCantidadTotal(cantidad_total + cantidad)
    }


    const BorrarDelCarrito = (id,cantidad) => {
        const copia= carrito.filter(producto=>(producto.id) !==id)
        SetCarrito(copia)
        setCantidadTotal(cantidad_total-cantidad)
    }


    const LimpiarCarrito = () =>{
        SetCarrito([])
        setCantidadTotal(0)
    }


    const isInCart = (id) => {
        return  carrito.some((producto) => producto.id === id)
    }

    const valorContexto={
            cantidad_total,
            setPrecio_total,
            setCantidadTotal,
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
