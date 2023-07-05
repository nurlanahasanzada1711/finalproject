import React, { useEffect, useRef } from 'react'
import style from '../Home/home.module.css'
import icon from '../../../images/icon.png'
import icon5 from '../../../images/icon-5.png'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import chocolate from '../../../images/chocolate.jpg'
import fruit from '../../../images/fruit.jpg'
import bakery from '../../../images/bakery.jpg'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import logo from '../../../images/Logo-1.png'
import { getAllNumbers } from '../../../api/numbersrequests'
import { getAllHistories } from '../../../api/historyrequests'
import { getAllServices } from '../../../api/servicesrequests'
import { getAllTimes } from '../../../api/timesrequests'
import { getAllBlogs } from '../../../api/blogsrequests'
import { getAllMenus } from '../../../api/menurequests'
import { getAllProducts } from '../../../api/productrequests'



const Home = () => {
  const [isOpen, setOpen] = useState(false)
  const [numbers, setNumbers] = useState([]);
  const [histories, setHistories] = useState([]);
  const [services, setServices] = useState([]);
  const [times, setTimes] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [menus, setMenus] = useState([]);
  const [products, setProducts] = useState([]);

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    getAllNumbers().then((res) => {
      setNumbers(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    getAllHistories().then((res) => {
      setHistories(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    getAllServices().then((res) => {
      setServices(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    getAllTimes().then((res) => {
      setTimes(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    getAllBlogs().then((res) => {
      setBlogs(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    getAllMenus().then((res) => {
      setMenus(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);


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
        <section>
          <div className='container'>
            <div className={style.freshservices}>
              {services &&
                services.map((service) => {
                  return (
                    <div className={style.cakecrud}>
                      <img src={service.imageURL} alt='' />
                      <h2>{service.desc}</h2>
                      <p>{service.about}</p>
                    </div>
                  )
                }
                )}

            </div>
          </div>
        </section>

        <section className='history'>
          <div className='container'>
            <div className={style.abouthistory}>
              {histories &&
                histories.map((history) => {
                  return (
                    <div className={style.lefthistory}>
                      <h2>ABOUT HISTORY</h2>
                      <h6> Discovery Story Since 1978</h6>
                      <p>{history.desc}</p>
                      <p>{history.about}</p>
                      <p>JONT NICOLIN – CEO</p>
                    </div>

                  )
                }
                )}
              {histories &&
                histories.map((history) => {
                  return (
                    <div className={style.imagehistory}>
                      <img src={history.imageURL} alt='' />
                    </div>
                  )
                }
                )}
            </div>
          </div>
        </section>
        <section className={style.testimonals}>
          <h2>TESTIMONALS</h2>
          <h6>What Clients Say About Us</h6>
        </section>

        <section className={style.menubackground}>
          <div className={style.menuborder}>
            <div className={style.menu}>
              <h2>SPECIAL MENU</h2>
              <h6>The Best Our Menu Bakery</h6>
            </div>
            {menus &&
              menus.map((menu) => {
                return (
                  <div className={style.menuprice}>

                    <div className={style.menuimg}>
                      <img src={menu.imageURL} alt='' />
                    </div>
                    <div className={style.menuinc}>
                      <h4>{menu.dessert}</h4>
                      <h5>{menu.price}</h5>
                      <p>{menu.desc}</p>
                    </div>

                  </div>
                )
              }
              )}

            <img className={style.logoimg} src={logo} alt='' />
          </div>


        </section>

        <section className={style.care}>
          <img src={icon5} alt='' />
          <h2>BAKERY CARE</h2>
          <h6>A Few Of Our Favourite Things</h6>
          <div className='container'>
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
          </div>
        </section>

        <section className={style.times}>
          {times &&
            times.map((time) => {
              return (
                <div className={style.opentimes}>
                  <img src={time.imageURL} alt='' />
                  <h2>OPEN TIMES</h2>
                  <p>HOTLINE:<b>{time.phone}</b></p>
                  <p>HOURS: {time.hours}</p>
                  <button>HOW TO <br></br>FIND US</button>
                </div>
              )
            }
            )}

        </section>
        <section className={style.news}>
          <h2>NEWS & BLOG</h2>
          <h6>A Love Story From The Blog</h6>
          <div className='container'>
            <div className={style.newsblog}>
              <div className={style.blogs}>
                <div className={style.blog}>
                  {blogs &&
                    blogs.map((blog) => {
                      return (
                        <div className={style.imagewrite}>

                          <div className={style.image}>
                            <img src={blog.imageURL} alt='' />
                          </div>
                          <div className={style.write}>
                            <h3>{blog.desc}</h3>
                            <h4>{blog.admin}</h4>
                            <p>{blog.about}</p>
                            <h5>READ MORE</h5>
                          </div>

                        </div>
                      )
                    }
                    )}
                </div>
              </div>
              <div className={style.newswrite}>
                <p> Aliquam faucibus nec, tempor semper tortor.
                  Duis eget orci risus. Pellentesque nec dui sed
                  facilisis condimentum justo nec, tempor semper
                  tortor. Duis eget orci risus. Pellentesque nec
                  dui sed nulla tempor semper tortor. Duis eget
                  orci risus. Pellentesque nec dui sed facilisis
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={style.booktable}>
          <div className={style.container}>
            <div className={style.row}>
              <div className={style.book}>
                <h2>BOOK A TABLE</h2>
                <h6>Submit Information To Place Order</h6>
                <form className={style.inputs}>
                  <TextField fullWidth style={{ display: "block", width: "465px", marginTop: "20px", color: "FFF" }}
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
                  <Button type="submit" variant="contained" style={{ marginTop: "20px", backgroundColor: " #7E5A4E", padding: "10px" }}>MAKE RESERVATION</Button>
                </form>
              </div>
              <div className={style.contactus}>
                <h2>CONTACT US</h2>
                <p><b>PO Box 16122 Collins Victoria 3000 Australia</b></p>
                <h6>GALLERY</h6>
                <p></p>
                <p></p>
                <p></p>
                <div className={style.images}>
                  <img src={chocolate} alt='' />
                  <img src={fruit} alt='' />
                  <img src={bakery} alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={style.videomodal}>
            <video
              ref={videoRef}
              // width="80%"
              // height="80%"
              poster="https://bake.arrowtheme.com/wp-content/uploads/elementor/thumbs/bg-video-ovat3a9oe3xtudhpm5vi8u4ysxfcqlkxihlrmlj40w.png"
              controls
            >
              <source src="https://www.youtube.com/watch?v=ad5_MXzibSM" type="video/mp4" />
              <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

              <button className="btn-primary" onClick={() => setOpen(true)}>VIEW DEMO</button>
            </video>
          </div>
        </section>
        <section className='numbers'>
          <div className='container'>
            <div className={style.numbers}>
              {numbers &&
                numbers.map((number) => {
                  return (
                    <div key={number._id} className={style.pastry}>
                      <h1>{number.count}</h1>
                      <p>{number.desc}</p>
                    </div>
                  )
                }
                )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home