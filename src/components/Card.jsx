import React from 'react'
import { useContext } from 'react'



const Card = ({item}) => {
    //context yapısına abone olma
    //context tarafından sağlanan verilere erişim
    const context = useContext(BasketContext)

  return (
    <div className='card py-2 shadow  card-product' style={{width:'250px'}}>
      <div className='d-flex justify-content-center '>
        <img className='object-fit-contain p-3 rounded  ' src={item.image} height={120} alt="" />
      </div>
      <div className='card-body d-flex flex-column justify-content-between  '>
        <h5>{item.title.slice(0,30)+'...'}</h5>
        <span className='text-success'>${item.price}</span>
        <p>{item.category}</p>
        <button onClick={()=> {
          context.addToBasket(item)
               
          }} className='btn btn-primary'>Sepete Ekle</button>

      </div>
    </div>
  )
}

export default Card
