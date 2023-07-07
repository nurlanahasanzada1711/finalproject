import React from 'react'
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { signUp } from '../../../api/loginrequests';
import Swal from 'sweetalert2';
import style from '../RegisterPage/register.module.css'

export default function  NewAcc() {
    const navigate = useNavigate();
    const handleSubmit = (values, actions) => {
        signUp({
            name: values.name,
            username: values.username,
            email: values.email,
            age: values.age,
            password: values.password,
            isAdmin: false
        });
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully registered!',
            showConfirmButton: false,
            timer: 1200
        })
        actions.resetForm();
        navigate('/login');
        console.log(values);
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            email: '',
            age:'',
            password: '',
            confirmPassword: ''
        },
        onSubmit: handleSubmit
    })
    return (
        <>
            <section className={style.registerbackground}>
                <div className={style.registerimage}>
                    <h1>REGISTER</h1>
                </div>
            </section>

            <section>
                <div className={style.registerinputs}>
                    <div className={style.registertext}>
                        <h1> Create a new account</h1>
                        <h2> Enter the information in the appropriate cells</h2>
                    </div>
                    <form className={style.registerinfo} onSubmit={formik.handleSubmit}>
                        <div className={style.nameinput}>
                            <TextField
                                name="name"
                                label="Name"
                                className={style.forminput}
                                type="text"
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                variant='standard'

                            />
                        </div>
                        <div className='input-div' >
                            <TextField
                                type='text'
                                label='Username'
                                name="username"
                                className={style.forminput}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                variant='standard'

                            />
                        </div>

                        <div className={style.nameinput}>
                            <TextField
                                name="age"
                                label="Age"
                                className={style.forminput}
                                type="number"
                                onBlur={formik.handleBlur}
                                value={formik.values.age}
                                onChange={formik.handleChange}
                                variant='standard'

                            />
                        </div>
                        <div className='input-div'>
                            <TextField
                                name="email"
                                label="Email"
                                type="email"
                                className={style.forminput}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                variant='standard'

                            />
                        </div>
                        <div className='input-div' >
                            <TextField
                                type='password'
                                name="password"
                                label='Password'
                                className={style.forminput}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                variant='standard'

                            />
                        </div>
                        <div className='input-div' >
                            <TextField
                                name="confirmPassword"
                                type="password"
                                className={style.forminput}
                                label='Again password'
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.confirmPassword}
                                variant='standard'

                            />
                        </div>
                        <div className={style.registerbtn}>
                            <Button
                                className='login-btn'
                                variant="contained"
                                type="submit"
                            >REGISTER</Button>
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}

