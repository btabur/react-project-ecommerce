import React, { useContext } from 'react'
import { BasketContext } from '../context/basketContext'


const Checkout = () => {
  const context = useContext(BasketContext)

  const total = context.basket.reduce((total,i)=>total+(i.amount * i.price),0);

  return (
    <div>
      {context.basket == 0 && 
     <h3 className='text-center my-5'>Sepette ürün yok!!!</h3>
      }

      {context.basket?.map(item => (
        <div key={item.id} className='d-flex justify-content-around align-items-center mt-3 shadow border border-primary mx-5 rounded p-1'>
         <img className='img-fluid p-3 rounded shadow ' src= {item.image} style={{height:'120px'}} />
         <h4>{item.title.slice(0,25)+'...'}</h4>
         {/* toFixed(2) noktadan sonraki basamak sayısını belirler */}
         <h3>${(item.price * item.amount).toFixed(2)}</h3>
         <p>miktar: {item.amount}</p>
         <div className='btn-group'>
          <button onClick={()=> context.addToBasket(item)} className='btn btn-primary '>+</button>
          <button onClick={()=>context.removeFromBasket(item.id)} className='btn btn-warning'>-</button>
         </div>
          
        </div>
      ))}

      <h4 className='mt-3 ms-3'>Toplam: ${total.toFixed(2)}</h4>
     
    </div>
  )
}

export default Checkout
