import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Loading from '../components/Loading';


const MainPage = () => {
    const [products,setProducts] = useState(null);

    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products')
        .then(res=> setProducts(res.data) )
        .catch(err=>console.log(err))
    },[])


   
  return (
    <div className='my-5 container d-flex flex-wrap justify-content-center justify-content-md-around gap-5'>
      {products ?
      products.map((item) =><Card key={item.id} item={item}/>)
      : <Loading/>
      }
    </div>
  )
}

export default MainPage
