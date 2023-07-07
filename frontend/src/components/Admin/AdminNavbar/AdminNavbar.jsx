import React from 'react'
import { Link } from 'react-router-dom'
import style from '../AdminNavbar/adminnavbar.module.css'
import logo1 from '../../../images/Logo-1.png'

const AdminNavbar = () => {
  return (
    <header className={style.adminnav}>
      <nav>
        <div className='container'>
          <div className={style.adminnavbar}>
            <div className={style.adminlogo}>
              <img src={logo1} alt='' />
            </div>
            <div className={style.adminlinks}>
              <ul>
                <li><Link to='/admin'>Home</Link></li>
                <li><Link to='/admin/login'>Login</Link></li>
                <li><Link to='/admin/services'>Services</Link></li>
                <li><Link to='/admin/products'>Products</Link></li>
                <li><Link to='/admin/employees'>Employees</Link></li>
                <li><Link to='/admin/users'>Users</Link></li>
              </ul>
            </div>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default AdminNavbar