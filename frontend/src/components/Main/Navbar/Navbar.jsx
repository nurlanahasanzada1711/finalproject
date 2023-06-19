import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import style from '../../Main/Navbar/navbar.module.css'
import { getAll, post } from '../../../api/requests';
import axios from 'axios';
import logo1 from '../../../images/Logo-1.png'


const Navbar = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getAll().then((res) => {
      setData(res);
    });
  }, []);

  function uploadImage() {
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "m0t3zqcy");
    axios
      .post("https://api.cloudinary.com/v1_1/dlytnxzbx/image/upload", formData)
      .then((res) => {
        const newData = {
          name: name,
          imageURL: res.data.secure_url,
        };
        setData([...data, newData]);
        post(newData);
      });
  }
  return (
    <>
      <header>
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
                    <Link to='/servies'>Services</Link>
                  </li>
                </ul>
              </div>

              <div className={style.navlogo}>
                <img src={logo1} alt='' />
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
        </nav>
        
      </header>

    </>
  )
}

export default Navbar