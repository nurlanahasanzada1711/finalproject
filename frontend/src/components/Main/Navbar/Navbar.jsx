import React from 'react'
import { Link } from "react-router-dom";
import style from '../../Main/Navbar/navbar.module.css'
const Navbar = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className={style.centernav}>
            <div className={style.leftnav}>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/servies'>Services</Link>
                </li>
              </ul>
            </div>
            <div className='navlogo'>
              <img src='' alt='' />
            </div>
            <div className='rightnav'>
              <ul>
                <li>
                  <Link to='/shop'>Shop</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                     <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar