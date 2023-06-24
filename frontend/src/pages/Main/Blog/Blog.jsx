import React from 'react'
import style from '../Blog/blog.module.css'
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
    </main>
  )
}

export default Blog