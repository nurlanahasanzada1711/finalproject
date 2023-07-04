// import React from 'react'
// import { useNavigate } from "react-router-dom";
// import { Button, TextField } from "@mui/material";
// import { useFormik } from "formik";
// import { signIn } from "../../../api/loginrequests";
// import Swal from "sweetalert2";
// import style from '../LoginPage/login.module.css'
// import { useUserContext } from "../../../context/UserContext";

// const LoginPage = () => {

//     const [user, setUser] = useUserContext();
//     console.log(user);
//     const navigate = useNavigate();
//     const handleSubmit = async (values, actions) => {
//         const response = await signIn({
//             email: values.email,
//             password: values.password,
//         });
//         if (response.auth) {
//             localStorage.setItem('token', response.token);
//             localStorage.setItem('user', JSON.stringify(response.user));
//             setUser(response.user);
//             Swal.fire({
//                 position: "top-end",
//                 icon: "success",
//                 title: "User signed in successfully!",
//                 showConfirmButton: false,
//                 timer: 1200,
//             });
//             actions.resetForm();
//             navigate("/users");
//         }
//     };
//     const formik = useFormik({
//         initialValues: {
//             email: "",
//             password: "",
//         },
//         onSubmit: handleSubmit,
//     });
//     return (
//         <>
//             <section className={style.registerbackground}>
//                 <div className={style.registerimage}>
//                     <h1>LOGIN</h1>
//                 </div>
//             </section>
//             <section>
//                 <div>
//                     <form onSubmit={formik.handleSubmit}>
//                         <TextField
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             name="email"
//                             type="email"
//                             id="outlined-basic"
//                             label="Email"
//                             variant="standard"
//                             value={formik.values.email}
//                         />
//                         <TextField
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             name="password"
//                             type="password"
//                             id="outlined-basic"
//                             label="Password"
//                             variant="standard"
//                             value={formik.values.password}
//                         />
//                         <Button
//                             type="submit"
//                             variant="contained"
//                         >
//                             Login
//                         </Button>
//                     </form>

//                 </div>
//             </section>
//         </>
//     )
// }

// export default LoginPage


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
            navigate("/");
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
            {/* <Navbar /> */}
            <div className='login-div'>
                <div className='login-desc'>Şəxsi kabinetə giriş</div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='input-div'>
                        <TextField
                            name="email"
                            label="Email"
                            type="email"
                            className="form-input"
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className='input-div' >
                        <TextField
                            type='password'
                            name="password"
                            label='Şifrəniz'
                            className="form-input"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                    <div className='login-btn-div'>
                        <Button
                            className='login-btn'
                            variant="contained"
                            type="submit"
                        >Daxil ol</Button>
                    </div>
                    <div className='login-forget-password-div'>
                        <Link className='login-forget-password' to='http://localhost:3000/forget-password'>
                            Şifrəmi unutdum
                        </Link>
                    </div>
                    <div className='login-text'>
                        <div>Hesabınız yoxdur?
                            <span style={{ borderBottom: '1px solid #051934' }}>
                                <Link style={{ color: '#051934' }} to='http://localhost:3000/new-account'>
                                    Qeydiyyatdan keçin.
                                </Link>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
