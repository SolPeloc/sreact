
import React from 'react'
import swal from 'sweetalert'

//componentes//
import ItemCount from '../ItemCount'
import { useState,useEffect } from 'react'
import ItemList from './ItemList'

const onAdd=()=>{
swal({ text:"añadido al carrito",
        icon:"success" 
        });
}
const productos=[
  {   
          "id":1,
          "nombre":"BUZO MAX",
          "precio":2000,
          "stock":5,       
      },
      {
          "id":2,
          "nombre":"JEAN MONTANA ",
          "precio":3500,
          "stock":5,
      
      },
      {
          "id":3,
          "nombre":"SACO CLARA",
          "precio":4200,
          "stock":5,
      },
]

const ItemListContainer = ({nombre}) => {

  
let [producto,setproducto]= useState([])




    useEffect(() => {


  
      const promesa = new Promise((res,rej)=>{
        setTimeout(() => {
          res(productos)
        }, 2000);
      
      })
      promesa
      .then((productos)=>{
      console.log("ok")
      setproducto(productos)
      })
    }, [])




    return (
        <> 
            <div>
                <h2>Bienvenidos a TIENDA {nombre} </h2>
                
            </div>
            <div>
              <ItemList producto={productos}/>
            </div>
            <ItemCount stock= {5}initial={0} onAdd={onAdd}/>
            </> 
            )
}

export default ItemListContainer
