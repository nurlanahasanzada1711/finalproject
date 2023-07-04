import React from 'react'
import style from '../../Main/Footer/footer.module.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import logo from '../../../images/Logo-1.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className={style.footerbackground}>
          <div className={style.container}>
            <div className='row'>
              <div className={style.centerfooter}>
                <div className={style.leftfooter}>
                  <h5>CONTACT US</h5>
                  <p>PO Box 16122 Collins Victoria 3000 Australia</p>
                  <span>Email: info@chiart.abcdf.com</span>
                  <br></br>
                  <span>Phone: + 33 323 34522</span>
                  <br></br>
                  <span>Fax: +33 3467888</span>
                </div>
                <div className={style.footerlogo}>
                  <img src={logo} alt='' />
                </div>
                <div className={style.rightfooter}>
                  <h5>ABOUT SAY</h5>
                  <p>“ Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet ”</p>
                  <p>JOIN DOER COOK</p>
                  <br></br>
                  <p>Ceo Bakery</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.icons}>
            <ul>
              <li>
                <FacebookOutlinedIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
              <li>
                <YouTubeIcon />
              </li>
              <li>
                <EmailIcon />
              </li>
              <li>
                <LanguageIcon />
              </li>
            </ul>
            <p>Copyright © 2023 Bakery – Design by ArrowHitech – All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer