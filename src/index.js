import React from "react";
/*import ReactDOM from "react-dom";*/
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
/*import "./estilos.css"*/


/*ReactDOM.render(<App/>, document.getElementById("root"))*/
const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(
     <React.StrictMode> <App /> </React.StrictMode> 
    );