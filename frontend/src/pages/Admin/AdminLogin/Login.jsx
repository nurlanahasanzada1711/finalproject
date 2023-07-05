import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { signIn } from "../../../api/loginrequests";
import Swal from "sweetalert2";
import { useUserContext } from "../../../context/UserContext";

const Login = () => {
  const [user, setUser] = useUserContext();
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    console.log(values);
    const response = await signIn({
      email: values.email,
      password: values.password,
    });
    if (response.auth) {
      localStorage.setItem('token',response.token);
      localStorage.setItem('user',JSON.stringify(response.user));
      setUser(response.user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User signed in successfully!",
        showConfirmButton: false,
        timer: 1200,
      });
      actions.resetForm();
      if (values.email == 'nurlana@code.edu.az') {
        navigate('/admin')
      }
      else{
        navigate('/users')
      }
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
    <div
      style={{
        display: "flex",
        height: "80vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            value={formik.values.email}
            type="text"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
            value={formik.values.password}
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </div>
        <Button
          type="submit"
          style={{ display: "block", margin: "30px auto" }}
          variant="contained"
          color="warning"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;