import { useState,useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { collection, getDoc , doc } from 'firebase/firestore'
import { db } from '../../firebase'
const ItemDetailContainer = () => {

    const {id} = useParams ()  
    const [seleccion, setSeleccion]= useState({});
        useEffect(() => {
            
            const prodcollection = collection(db, "productos")
            const refDoc = doc(prodcollection, id)
            getDoc(refDoc)
            .then((resultado) => {
                const id = resultado.id
                const data = resultado.data()
                const prod = { id:id, ...data}
                setSeleccion(prod)   
            })
            .catch((error) =>{
                console.log(error);
            })
        }, [id]);

        return (
                Object.keys(seleccion).length  === 0 ?    
                ( 
                <div className="text-center mb-5"> 
                    <Spinner animation="border" role="status" variant="success" ></Spinner>
                </div> 
                ) :
                (   <div className='d-flex justify-content-center'>
                        <ItemDetail producto={seleccion}/> 
                    </div>
                )   
            )
}

export default ItemDetailContainer
