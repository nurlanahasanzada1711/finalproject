import React from 'react'
import style from '../Home/home.module.css'
import icon from '../../../images/icon.png'
import icon5 from '../../../images/icon-5.png'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import chocolate from '../../../images/chocolate.jpg'
import fruit from '../../../images/fruit.jpg'
import bakery from '../../../images/bakery.jpg'
// import React,{useState} from 'react'
// import ReactDOM from 'react-dom'
// import ModalVideo from 'react-modal-video'
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
        <section>
          <div className='container'>
            <div className={style.row}>
              <div className={style.book}>
                <h2>BOOK A TABLE</h2>
                <h6>Submit Information To Place Order</h6>
                <form>
                  <TextField fullWidth style={{ display: "block", width: "465px", marginTop: "20px" }}
                    id="outlined-basic"
                    name="your name"
                    label="Your name"
                    type="string"
                    variant='standard'
                  />
                  <TextField fullWidth style={{ display: "block", width: "465px", marginTop: "20px" }}
                    id="outlined-basic"
                    name="email"
                    label="Email"
                    type="email"
                    variant='standard'
                  />
                  <TextField fullWidth style={{ display: "block", width: "465px", marginTop: "20px" }}
                    id="outlined-basic"
                    name="phone"
                    label="Phone"
                    type="phone"
                    variant='standard'
                  />
                  <TextField fullWidth style={{ display: "block", width: "465px", marginTop: "20px" }}
                    id="outlined-basic"
                    name="date"
                    label="Date"
                    type="date"
                    variant='standard'
                  />
                  <TextField fullWidth style={{ display: "block", width: "465px", marginTop: "20px" }}
                    id="outlined-basic"
                    name="time"
                    label="Time"
                    type="time"
                    variant='standard'
                  />
                  <TextField fullWidth style={{ display: "block", width: "465px", marginTop: "20px" }}
                    id="outlined-basic"
                    name="message"
                    label="Message"
                    type="text"
                    variant='standard'

                  />
                  <Button type="submit" variant="contained" style={{ marginTop: "20px", backgroundColor: " #7E5A4E" }}>MAKE RESERVATION</Button>
                </form>
              </div>
              <div className={style.contactus}>
                <h2>CONTACT US</h2>
                <p>PO Box 16122 Collins Victoria 3000 Australia</p>
                <h6>GALLERY</h6>
                <div className={style.images}>
                  <img src={chocolate} alt='' />
                  <img src={fruit} alt='' />
                  <img src={bakery} alt='' />
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home