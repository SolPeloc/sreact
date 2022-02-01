
import Item from './Item'

const ItemList = ({lista}) => {


    return (
        <>
            <div>
                <h3>Nuestros productos</h3>
            </div>
                <div className='cardStyle'>
                    {lista.map(lista =><Item 
                    key={lista.id}
                    nombre={lista.nombre}
                    precio={lista.precio}
                    imagen={lista.imagen}
                    stock={lista.stock}
                    id={lista.id}
                    />)}
                </div>
        </> 
        )
}

export default ItemList
