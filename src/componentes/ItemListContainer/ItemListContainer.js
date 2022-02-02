
import React from 'react'
import { Spinner } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase'
import { getDocs, query, collection, where} from "firebase/firestore"


const ItemListContainer = () => {

  const [lista,setlista]= useState([])
  const {categoria} = useParams ()
  
  useEffect(() => {
            const prodcollection= collection(db,"productos")
                  const consulta = (datos) =>{
                    getDocs(datos)
                    .then ((resultado) =>{
                      const docs = resultado.docs
                      const listado = docs.map((doc)=>{
                        const id = doc.id
                        const data = doc.data()
                        const prods = {
                          id :  id,
                          ...data
                        }
                        return prods;
                      })
                      setlista(listado)
                    })
                    .catch((error)=>{
                      console.log(error);
                    })
                  }

                  if(categoria){
                    const consultas = query(prodcollection, where ("categoria", "==" , categoria))
                    consulta(consultas)
                  }else{
                    consulta(prodcollection)
                  }
            },[categoria]);
          
      return ( 
        lista.length === 0 ?
        (  
          <div className="text-center ">
              <Spinner animation="border" role="status"variant="info" ></Spinner>
          </div>
          ) :   
            ( <div className='text-center'>
                <ItemList lista={lista}/> 
              </div>
            )
          )  
}

export default ItemListContainer
