import { Link } from "react-router-dom";
import style from '../../Main/Navbar/navbar.module.css'
import logo1 from '../../../images/Logo-1.png'
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const Navbar = () => {

  return (
    <>
      <header className={style.mainnav}>
        <nav>
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
                    <Link to='/service'>Service</Link>
                  </li>
                </ul>
              </div>

              <div className={style.navlogo}>
                <img src={logo1} alt='' />
              </div>
              <div className={style.leftnav}>
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
                  <li style={{color:"white"}}><Link to='/register'><PersonAddIcon/></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </nav>
        
      </header>

    </>
  )
}

export default Navbar