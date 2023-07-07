import React from 'react'
import style from '../Shop/shopdetails.module.css'
import { Link } from 'react-router-dom'
import chocolateice from '../../../images/chocolate-ice.jpg'
import bananamuffin from '../../../images/banana-muffin.jpg'
import bananabread from '../../../images/banana-bread.jpg'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from '@emotion/styled'
import InputBase from '@mui/material/InputBase';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';  
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ShopDetails = () => {
  const [color, setColor] = React.useState('');
  const [size, setSize] = React.useState('');

  const handleChange = (event) => {
    setColor(event.target.value);
  };
  const handleBlur = (event) => {
    setSize(event.target.value);
  };
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      border: '1px solid #ced4da',
      fontSize: 11,
      padding: '15px 15px 10px 12px',
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: 'blue',
      },
    },
  }));


  return (
    <>
      <section className={style.shop}>
        <div className={style.shopwrite}>
          <h1>SHOP</h1>
          <Link to='/'>Home</Link>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className={style.detailsrow}>
            <div className={style.detailsflex}>
              <div className={style.shoppic}>
                <img src={chocolateice} alt='' />
              </div>
              <div className={style.shopinc}>
                <h1>Chocolate Ice Cream</h1>
                <p>100,00$</p>
                <p>Phasellus nec nulla eu nisl rhoncus sodales varius
                  vitae tellus. Maecenas pharetra, purus vel pulvinar
                  scelerisque, dolor nibh elementum orci, maximus dictum
                  nunc leo ut nunc. Proin non venenatis elit.</p>

                <div className={style.color}>
                  <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                    <InputLabel id="demo-select-small-label">COLOR</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Age"
                      value={color}
                      onChange={handleChange}
                    >
                      <MenuItem value={10} >Navy</MenuItem>
                      <MenuItem value={20}>Black</MenuItem>
                      <MenuItem value={30} >Grown</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className={style.size}>
                  <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                    <InputLabel id="demo-select-small-label">SIZE</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Age"
                      value={size}
                      onChange={handleBlur}
                    >
                      <MenuItem value={10} >S</MenuItem>
                      <MenuItem value={20}>M</MenuItem>
                      <MenuItem value={30} >L</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className='number'>
                  <FormControl sx={{ m: 1, minWidth: 50 }} size="small" >
                    <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
                    <BootstrapInput id="demo-customized-textbox" />
                  </FormControl>
                </div>
                <button>ADD TO CARD</button>
                <div className={style.share}>
                  <h4>SHARE THIS :</h4>
                  <ul>
                    <li><FacebookIcon/></li>
                    <li><TwitterIcon/></li>
                    <li><LinkedInIcon/></li>
                  </ul>
                </div>

              </div>
              <div className={style.categories}>
                <h2>CATEGORIES</h2>
                <ul>
                  <li>Cake </li>
                  <li>Bread</li>
                  <li>Quick Bread </li>
                  <li>Pie and Tart</li>
                  <li>Chocolate</li>
                  <li>Donut</li>
                </ul>
                <img src={bananamuffin} alt='' />
                <img src={bananabread} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopDetails