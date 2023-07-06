import React, { useEffect, useState } from 'react'
import style from '../Contact/contact.module.css'
import { getAllContacts } from '../../../api/contactrequests'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import n from '../../../images/n.png'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, TextField, TextareaAutosize } from '@mui/material';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getAllContacts().then((res) => {
      setContacts(res.data);
      console.log(res.data);
    });
  }, []);


  return (
    <>
      <main>
        <section className={style.contact}>
          <div className={style.contactwrite}>
            <h1>CONTACT</h1>
            <p>Amazing Bakery Kit</p>
            <p>Di Cantina Valpolicella Negrar è la storia di uomini e donne dediti
              <br></br> alla Nullam dui dolor, sagittis ut ante eget Aliquam eratvolutpat.
              <br></br>Vivamus tincidunt justo in eros cursus, et viverra elit dignissim.
              <br></br>Nulla facilisi</p>
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='inforow'>
              <div className={style.infoflex}>
                {contacts &&
                  contacts.map((contact) => {
                    return (
                      <div className={style.infocrud}>
                        <img src={contact.imageURL} alt='' />
                        <p>{contact.desc}</p>
                        <p>{contact.about}</p>
                      </div>
                    )
                  }
                  )}
                <div className={style.infocrud}>
                  <img src={n} alt='' />
                  <ul >
                    <li>
                      <FacebookIcon />
                    </li>
                    <li>
                      <TwitterIcon />
                    </li>
                    <li>
                      <YouTubeIcon />
                    </li>
                    <li>
                      <GoogleIcon />
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={style.emailsubmit}>
            <form className={style.formemail} ref={form} onSubmit={sendEmail}>
              <TextField
                name="name"
                label="Name"
                type="text"
                className={style.firstinput}
                variant='standard'
              />

              <TextField
                name="user_email"
                label="Email"
                className={style.firstinput}
                type="email"
                variant='standard'
              />
              <TextField
                name="user_subject"
                label="Subject"
                className={style.firstinput}
                type="text"
                variant='standard'
              />
              <TextField style={{fontSize:'120%'}}
                name="message"
                label="Message"
                className={style.firstinput}
                type="text"
                variant='standard'
              />
            </form>
            <Button>SEND</Button>
          </div>
        </section>


      </main>
    </>
  )
}

export default Contact