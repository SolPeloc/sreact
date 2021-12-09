import  "./estilos.css";
import 'bootstrap/dist/css/bootstrap.min.css';


//componentes//


import Navbar from './componentes/header/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App(){

     

    return (
            <>
                <Navbar/>
              
                <ItemListContainer nombre= "ATIA"/>
                
        
            </>
         )

}

export default App;