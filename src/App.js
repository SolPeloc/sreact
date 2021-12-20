import  "./estilos.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//componentes//

import Navbar from './componentes/header/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

/*const links = [
    { href: "#", name: "Productos", id:1 },
    { href: "#", name: "Mujer", id:2},
    { href: "#", name: "Accesorios", id:3},   
]*/

function App(){

    return (
            <>
                <Navbar nombre="ATIA"/>
                <ItemListContainer nombre= "ATIA"/>
                <ItemDetailContainer/>
            </> 
            )

}

export default App;