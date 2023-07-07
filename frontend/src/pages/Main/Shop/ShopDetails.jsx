import React from 'react'
import style from '../Shop/shopdetails.module.css'
import { Link } from 'react-router-dom'

const ShopDetails = () => {
  return (
    <>
      <section className={style.shop}>
        <div className={style.shopwrite}>
          <h1>SHOP</h1>
          <Link to='/'>Home</Link>
        </div>
      </section>
    </>
  )
}

export default ShopDetails