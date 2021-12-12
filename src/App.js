import  "./estilos.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//componentes//

import Navbar from './componentes/header/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

/*const links = [
    { href: "#", name: "Productos" },
    { href: "#", name: "Mujer" },
    { href: "#", name: "Accesorios" },   
]*/

function App(){

    return (
            <>
                <Navbar />
                <ItemListContainer nombre= "ATIA"/>
                
            </> 
            )

}

export default App;