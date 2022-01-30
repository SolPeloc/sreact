
import React from 'react'
import { Spinner } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase'
import { getDocs, query, collection, where } from "firebase/firestore"


const ItemListContainer = () => {

  const [lista,setlista]= useState([])
  const {categoria} = useParams ()
  
    useEffect(() => {
    
      const prodcollection= collection(db,"productos")
            if (categoria){
              const consulta = query(prodcollection, where ("categoria", "==" , categoria))
              getDocs(consulta)
              .then(({ docs }) =>{
              setlista(docs.map((doc) => ({ id: doc.id, ...doc.data()})))
              })
              .catch((error) => {
                console.log(error);
                })
            }else{
                getDocs(prodcollection)
                .then(({docs}) => {
                setlista(docs.map((doc) =>({ id: doc.id, ...doc.data()})))   
                })
                .catch((error)=>{
                  console.log(error);
                })
              }
      
  }, [categoria]);

    
      return ( 
        !lista.length === 0 ?
        (  <>
          <div className="text-center ">
              <Spinner animation="border" role="status"variant="info" ></Spinner>
          </div>
          </>)   :   
        (
            <> 
            
            <div className='text-center'>
              <ItemList lista={lista}/> {/* le estoy pasando el estado*/}
            </div>
            
            </> 
            )
          )  
}

export default ItemListContainer
