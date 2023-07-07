


import React from 'react'
// import Navbar from '../../../components/Main/HomeNavbar/Navbar'
import { Button, TextField } from '@mui/material';
// import '../Login/_style.scss'
import { Link } from 'react-router-dom';


import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signIn } from '../../../api/loginrequests';

import Swal from "sweetalert2";
import { useUserContext } from "../../../context/UserContext";
import style from '../LoginPage/login.module.css'

export default function LoginM() {

    const [user, setUser] = useUserContext();
    const navigate = useNavigate();
    const handleSubmit = async (values, actions) => {
        const response = await signIn({
            email: values.email,
            password: values.password,
        });
        console.log(response);
        if (response.auth) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            setUser(response.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Uğurla daxil olundu!",
                showConfirmButton: false,
                timer: 1200,
            });
            actions.resetForm();
            navigate("/admin/users");
        }
    };
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: handleSubmit,
    });
    return (
        <>
            <section className={style.registerbackground}>
                <div className={style.registerimage}>
                    <h1>LOGIN</h1>
                </div>
            </section>

            <div className={style.registerinputs}>
                <div className={style.registertext}>
                    <h1>Access to a private office</h1>

                </div>
                <div className='login-div'>

                    <form onSubmit={formik.handleSubmit}>
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
                        <div className={style.registerbtn}>
                            <Button
                                className='login-btn'
                                variant="contained"
                                type="submit"
                            >LOGIN</Button>
                        </div>
                        <div  className={style.loginforget}>
                            <Link  to='http://localhost:3000/forget-password'>
                                Forgot password
                            </Link>
                        </div>
                        <div className={style.logintext}>
                            <div>Don't have an account?
                                <span style={{ borderBottom: '1px solid #051934' }}>
                                    <Link style={{ color: '#051934' }} to='http://localhost:3000/new-account'>
                                        Sign up.
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
