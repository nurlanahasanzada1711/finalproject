import React from 'react'
import style from '../Home/home.module.css'
import icon from '../../../images/icon.png'
import icon5 from '../../../images/icon-5.png'
const Home = () => {
  return (
    <>
      <main>
        <section className={style.hero}>
          <div className={style.home}>
            <h5>WELCOME TO</h5>
            <h1>FRESH BAKERY</h1>
            <h6>Dicovery The Amazing Bakery</h6>
          </div>
        </section>
        <section className={style.sect2}>
          <img src={icon} alt='' />
          <h2>FRESH SERVICES</h2>
          <h6>The Best Of Our Services</h6>
        </section>
        <section className={style.testimonals}>
          <h2>TESTIMONALS</h2>
          <h6>What Clients Say About Us</h6>
        </section>
        <section className={style.care}>
          <img src={icon5} alt='' />
          <h2>BAKERY CARE</h2>
          <h6>A Few Of Our Favourite Things</h6>
        </section>
        <section className={style.news}>
          <h2>NEWS & BLOG</h2>
          <h6>A Love Story From The Blog</h6>
        </section>
      </main>
    </>
  )
}

export default Home