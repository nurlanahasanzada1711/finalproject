import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { signIn } from "../../../api/loginrequests";
import Swal from "sweetalert2";
import { useState } from "react";
import style from '../AdminLogin/login.module.css'


const Login = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    const response = await signIn({
      username: values.username,
      password: values.password,
    });
    if (response.auth) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      setUser(response.user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User signed in successfully!",
        showConfirmButton: false,
        timer: 1200,
      });
      actions.resetForm();
      navigate("/admin");
    }
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <div className={style.inputs}
    >

      <div className={style.useradmin}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className={style.nameadmin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="username"
            value={formik.values.username}
            type="text"
            id="outlined-basic"
            label="Username"
            variant="standard"
          />

          <TextField
            className="passwordadmin"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
            value={formik.values.password}
            type="password"
            id="outlined-basic"
            label="Password"
            variant="standard"
          />

          <Button
            className={style.submitbtn}
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </form>
      </div>

    </div>
  );
};

export default Login;