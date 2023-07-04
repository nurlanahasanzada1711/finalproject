import React from 'react'
// import Navbar from '../../../components/Main/HomeNavbar/Navbar'
// import { Input, Space } from 'antd';
import { Button, TextField } from '@mui/material';
// import '../Login/_style.scss'

import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { signUp } from '../../../api/loginrequests';
import Swal from 'sweetalert2';

export default function NewAcc() {
    const navigate = useNavigate();
    const handleSubmit = async (values, actions) => {
        await signUp({
            name: values.name,
            username: values.username,
            email: values.email,
            password: values.password,
            isAdmin: false
        });
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Uğurla qeydiyyatdan keçildi!',
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
            password: '',
            confirmPassword: ''
        },
        onSubmit: handleSubmit
    })
    return (
        <>
            {/* <Navbar /> */}
            <div className='login-div'>
                <div className='na-text'>
                    Yeni hesab yaradın
                </div>
                <div className='na-sub-text'>
                    Müvafiq xanalara məlumatları daxil edin
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='input-div'>
                        <TextField
                            name="name"
                            label="Ad"
                            className="form-input"
                            type="text"
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className='input-div' >
                        <TextField
                            type='text'
                            label='Soyad'
                            name="username"
                            className="form-input"
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                    </div>
                    {/* <div className='input-div'>
                        <Space.Compact style={{
                            width: '100%',
                            height: '60px',
                            border: '1px solid rgba(0, 0, 0, .04) !important'
                        }}>
                            <Input
                                style={{
                                    width: '20%',
                                    backgroundColor: '#ffffff',
                                    color: 'black',
                                    fontSize: '16px',
                                    border: '1px solid rgba(0, 0, 0, .04) !important'
                                }}
                                defaultValue="+994"
                                disabled={true}
                            />
                            <Input
                                style={{
                                    fontSize: '16px',
                                    border: '1px solid rgba(0, 0, 0, .04) !important'
                                }}
                                type='number'
                                placeholder='xxxxxxxxx'
                            />
                        </Space.Compact>
                    </div> */}
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
                    <div className='input-div' >
                        <TextField
                            name="confirmPassword"
                            type="password"
                            className="form-input"
                            label='Şifrəniz yenidən'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                        />
                    </div>
                    <div className='login-btn-div'>
                        <Button
                            className='login-btn'
                            variant="contained"
                            type="submit"
                        >Daxil ol</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

// import React from 'react'
// import style from '../RegisterPage/register.module.css'
// import { Button, TextField } from '@mui/material';
// import { useFormik } from 'formik';
// import { useNavigate } from "react-router-dom";
// import { signUp } from '../../../api/loginrequests';
// import Swal from 'sweetalert2';


// const RegisterPage = () => {

//     const navigate = useNavigate();
//     const handleSubmit = async (values, actions) => {
//         await signUp({
//             username: values.username,
//             email: values.email,
//             password: values.password,
//             isAdmin: false
//         });
//         Swal.fire({
//             position: 'top-end',
//             icon: 'success',
//             title: 'User signed up successfully!',
//             showConfirmButton: false,
//             timer: 1200
//         })
//         actions.resetForm();
//         navigate('/login');
//     }
//     const formik = useFormik({
//         initialValues: {
//             username: '',
//             email: '',
//             password: '',
//             confirmPassword: ''
//         },
//         onSubmit: handleSubmit
//     })
//     return (
//         <>
//             <section className={style.registerbackground}>
//                 <div className={style.registerimage}>
//                     <h1>Register</h1>
//                 </div>
//             </section>

//             <section>
//                 <div>
//                     <form onSubmit={formik.handleSubmit}>
//                         <TextField
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             name="Name"
//                             type="text"
//                             id="outlined-basic"
//                             label="Name"
//                             variant="standard"
//                         />

//                         <TextField
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             name="Username"
//                             type="text"
//                             id="outlined-basic"
//                             label="Username"
//                             variant="standard"
//                         />


//                         <TextField
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             name="Password"
//                             type="password"
//                             id="outlined-basic"
//                             label="Password"
//                             variant="standard"
//                         />

//                         <TextField
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             name="Email"
//                             type="email"
//                             id="outlined-basic"
//                             label="Email"
//                             variant="standard"
                            
//                         />

//                         <Button
//                             type="submit"
//                             variant="contained"
//                         >
//                             Register
//                         </Button>
//                     </form>

//                 </div>
//             </section>

//         </>
//     )
// }

// export default RegisterPage