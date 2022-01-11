import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
const Home = () => {
    return (
        <div >
            <div>
                <img src="/media/nosotros2.png" className="img-fluid mb-3 mr-3" alt="" />
            </div>
            <div>
                <h1 className="text-center"> bienvenidos a Atia!! :)</h1>
                <p>
                    Desde sus orígenes en Argentina en 1992, ATIA se distinguió instantáneamente por crear diseños vanguardistas e innovadores. Hoy en día la marca impone tendencia y se ha convertido en sinónimo de tecnología, calidad y estilo. Trabajamos para tener una constante renovación de productos, lo que nos ayuda a brindarle a las mujeres una gran diversidad de prendas de moda para que pueda usar en diferentes momentos del día.
                </p>
                <Link to={"/productos"}> <Button variant="success">Ver Productos</Button></Link>
            </div>
        </div>
    )
}

export default Home
