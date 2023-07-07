import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import style from '../Shop/shop.module.css'
import { getAllProducts } from '../../../api/productrequests'

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <main>
      <section className={style.shop}>
        <div className={style.shopwrite}>
          <h1>SHOP</h1>
          <Link to='/'>Home</Link>
        </div>
      </section>


      <section>
        <p>Showing 1–9 of 15 results </p>
        <div className='container'>
          <div className='shoprow'>
            <div className={style.shopflex}>
            
                <div className={style.productrow}>
                  <div className={style.productcrud}>
                    {products &&
                      products.map((product) => {
                        return (
                          <div className={style.productcards}>
                            <img src={product.imageURL} alt='' />
                            <h3>{product.desc}</h3>
                            <h5>{product.price}</h5>
                            <button>SELECT OPTIONS</button>
                          </div>
                        )
                      }
                      )}
                  </div>
                </div>
            
              <div className={style.categories}>
                <h2>CATEGORIES</h2>
                <ul>
                  <li>Cake </li>
                  <li>Bread</li>
                  <li>Quick Bread </li>
                  <li>Pie and Tart</li>
                  <li>Chocolate</li>
                  <li>Donut</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Shop