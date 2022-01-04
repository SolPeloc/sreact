import  "./estilos.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//componentes//

import Navbar from './componentes/header/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Footer from "./componentes/Footer/Footer";
import Home from "./componentes/Home.js/Home";
import Cart from "./componentes/Cart.js/Cart";
import datos from './datos.json';
function App(){
    const links = [
        { href: "/productos", name: "Productos", id:1 },
        { href: "/categoria/Mujer", name: "Mujer", id:2},
        { href: "/categoria/Accesorios", name: "Accesorios", id:3},   
    ]
    return (
            <BrowserRouter>
                <Navbar nombre="ATIA" links={links}/>
                <main> 
                <Routes> 
                    <Route path="/" element={<Home/>}/>
                    <Route path="/productos" element={<ItemListContainer datos={datos} nombre= "ATIA"/>} />
                    <Route path="/Cart" element={<Cart/>}/>
                    <Route path="/categoria/:categoria" element={<ItemListContainer datos={datos}  nombre= "ATIA"/>} />
                    <Route path="/producto/:id" element={<ItemDetailContainer datos={datos}/>} />
                </Routes>  
                </main>
            <Footer/>
            </ BrowserRouter> 
            )

}

export default App;