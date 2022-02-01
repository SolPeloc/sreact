import  "./estilos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/header/Navbar';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Footer from "./componentes/Footer/Footer";
import Home from "./componentes/Home.js/Home";
import Cart from "./componentes/Cart.js/Cart";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import CustomProvider from "./componentes/Context/CartContext"
import Formulario from "./componentes/Formulario"
function App(){
    const links = [
        { href: "/productos", name: "Productos", id:1 },
        { href: "/categoria/Mujer", name: "Mujer", id:2},
        { href: "/categoria/Accesorios", name: "Accesorios", id:3},   
    ]
    return (
        <CustomProvider> 
            <BrowserRouter>
                <Navbar links={links}/>
                <main> 
                    <Routes> 
                        <Route path="/" element={<Home/>}/>
                        <Route path="/productos" element={<ItemListContainer/>} />
                        <Route path="/Cart" element={<Cart/>}/>
                        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
                        <Route path="/producto/:id" element={<ItemDetailContainer/>} />
                        <Route path="/Formulario" element={<Formulario/>} />
                    </Routes>  
                </main>
                <Footer/> 
            </BrowserRouter> 
        </CustomProvider>
    )

}

export default App;