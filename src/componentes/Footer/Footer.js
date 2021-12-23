import { Container,Row,Col } from "react-bootstrap"

const Footer = () => {


    return (
        <div>
                <footer>
                <Container className="pt-5">
                <hr className="m-1"/>
                <Row className="text-center">
                    <Col>
                    <p className="text-center fs-5 pt-3 m-0 copyright">Copyright - 2021. Todos los derechos reservados.</p>
                    <p className="text-center">E-Commerce creado por Sol Peloc.</p>. 
                    </Col>
                    <Col>
                        <p className="fs-3">Redes Sociales</p>
                        <ul className="d-flex text-center justify-content-center">
                            <li className="list-unstyled  ms-2 me-2"><a href="https://www.facebook.com/ATIAMULTIMARCA"> <img  src="media/facebook.png" alt="face"/></a></li>
                            <li className="list-unstyled  ms-2 me-2"><a href="https://www.instagram.com/atia_multimarca/"><img  src="media/instagram.png" alt="ig"/></a></li>
                            
                        </ul>
                    </Col>
                </Row>
                </Container>
                </footer>
        </div>
    )
}

export default Footer
