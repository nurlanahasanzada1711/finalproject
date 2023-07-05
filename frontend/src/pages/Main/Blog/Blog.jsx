import React from 'react'
import style from '../Blog/blog.module.css'
import freshly from '../../../images/freshly-baked.jpg'
const Blog = () => {
  return (
    <main>
      <section className={style.blog}>
        <div className={style.blogwrite}>
          <h1>BLOG</h1>
          <p>Amazing Bakery Kit</p>
          <p>Di Cantina Valpolicella Negrar è la storia di uomini e donne dediti
            <br></br> alla Nullam dui dolor, sagittis ut ante eget Aliquam eratvolutpat.
            <br></br>Vivamus tincidunt justo in eros cursus, et viverra elit dignissim.
            <br></br>Nulla facilisi</p>
        </div>
      </section>

      <section>
        <div className={style.down}>
          <div className={style.strowberry}>
            <img src={freshly} alt='' />
            <h2>MORBI FERMENTUM RISUS NON EROS TEMPUS CONGUE</h2>
            <p>SEPTEMBER 8, 2020</p>
            <p>Mauris tincidunt purus blandit arcu ullamcorper finibus.
              Aliquam a iaculis est, eu vehicula elit. Vestibulum urna magna,
              varius in</p>
             
          </div>
        </div>

      </section>
    </main>
  )
}

export default Blog