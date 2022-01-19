import { useState,useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { collection,getDoc,doc } from 'firebase/firestore'
import { db } from '../../firebase'
const ItemDetailContainer = () => {

const {id} = useParams ()  
const [seleccion, setSeleccion]= useState({});

    useEffect(() => {
        
        const prodcollection = collection(db, "productos")
        const refDoc = doc(prodcollection, id)

        getDoc(refDoc)
        .then((resultado) => {
            setSeleccion(resultado.data())   
        })
        .catch((error) =>{
            console.log(error);
        })
    }, [id,seleccion]);



return (
    !seleccion.length  === 0 ?    
    ( <>
    <div className="text-center m-5"> 
        <Spinner animation="border" role="status" variant="dark" ></Spinner>
    </div> 
</> ) :
    (<div>
            <ItemDetail producto={seleccion} /> {/*le estoy pasando el estado*/}
        </div>

    )   
)
}

export default ItemDetailContainer
