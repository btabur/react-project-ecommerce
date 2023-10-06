import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BasketContext } from '../context/basketContext'

const Header = () => {
  const {basket} = useContext(BasketContext);

  //toplam ürün miktarını hesaplama
  const total = basket.reduce((total,i)=>total+i.amount,0)


  return (
    <header className='d-flex justify-content-between align-items-center p-1 sticky-top bg-primary shadow'>
        <Link to={'/'}>
        <h2 className='text-white ms-4'>E- Store</h2>
        </Link>
        <Link to={'/sepet'}>
        <i className="bi bi-basket fs-4 text-white "></i>
        <span className='badge bg-danger mx-2 fs-6'>{total}</span>
        </Link>
      
    </header>
  )
}

export default Header
