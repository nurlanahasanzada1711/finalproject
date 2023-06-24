import React from 'react'
import { Link } from "react-router-dom";
import style from '../Shop/shop.module.css'
const Shop = () => {
  return (
    <main>
      <section className={style.shop}>
        <div className={style.shopwrite}>
          <h1>SHOP</h1>
          <Link to = '/'>Home</Link>
        </div>
      </section>
    </main>
  )
}

export default Shop