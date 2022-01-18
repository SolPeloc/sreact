
import React from 'react'
import { Spinner } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase'
import {getDocs,query,collection,where} from "firebase/firestore"



const ItemListContainer = ({datos,nombre}) => {
 
  const [lista,setlista]= useState([])
  const {categoria} = useParams ()
   
  
    useEffect(() => {

      const prodcollection= collection(db,"productos")

      

      if (categoria) {
          const consulta = query(prodcollection, where ("categoria", "==" , categoria))
          getDocs(consulta)
            .then(({ docs }) =>{
              setlista(docs.map((doc) => ({ id: doc.categoria, ...doc.data() })))
            })
            .catch((error) => {
              console.log(error);
            })
      }else{
        getDocs(prodcollection)
         .then(({docs}) => {
           setlista(docs.map((doc) =>({ id: doc.categoria, ...doc.data()})))
         })
         .catch((error)=>{
           console.log(error);
         })
      }
      
  }, [categoria]);

   console.log(lista)

     /* const promesa1 = new Promise((res,rej)=>{
        setTimeout(() => {
          if(!categoria){
            res(datos)//array de productos//
          }else{
            res(datos.filter((prod) => prod.categoria === categoria))
            console.log(categoria)
          }
        }, 2000);
      })
      promesa1
      .then((productosres)=>{
      console.log("ok")
      setlista(productosres) //parametro indentificador del array//
      })
      .catch(()=>{
        console.log("Todo mal")
    })
  }, [categoria,datos])/*/
      return ( 
        !lista.length === 0 ?

       (  <>
          <div className="text-center m-5">
              <Spinner animation="border" role="status"variant="info" ></Spinner>
          </div>
          </>)   :   
        (
            <> 
            <div>
                <h2>Bienvenidos a TIENDA {nombre} </h2>
                
            </div>
            <div>
              <ItemList lista={lista}/> {/* le estoy pasando el estado*/}
            </div>
            
            </> 
            )
          )  
}

export default ItemListContainer
