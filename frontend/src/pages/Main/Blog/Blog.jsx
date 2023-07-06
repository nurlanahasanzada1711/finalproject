import React, { useEffect, useState } from 'react'
import style from '../Blog/blog.module.css'
import { Link } from 'react-router-dom'
import { getAllBlogs } from '../../../api/blogsrequests'

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getAllBlogs().then((res) => {
      setBlogs(res.data);
      console.log(res.data);
    });
  }, []);
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
        <div className='container'>
          <div className={style.newsblog}>
            <div className={style.blogs}>
              <div className={style.blogcard}>
                {blogs &&
                  blogs.map((blog) => {
                    return (
                      <div className={style.strowberry}>
                        <img src={blog.imageURL} alt='' />


                        <Link to={`/blog/detail/${blog._id}`}><h2>{blog.desc}</h2></Link>
                        <p>{blog.admin}</p>
                        <p>{blog.about}</p>
                      </div>
                    )
                  }
                  )}
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}

export default Blog