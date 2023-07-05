import React from 'react'
import { useFormik } from "formik";
import { postServices } from "../../../api/servicesrequests";
import Swal from "sweetalert2";
import style from '../AddServices/addservice.module.css'
import * as yup from 'yup';

const AddServices = () => {
  const Validation = yup.object().shape({
    about: yup.string().required('Zəhmət olmasa xananı doldurun'),
    desc: yup.string().required('Zəhmət olmasa xananı doldurun'),
    imageURL: yup.string().required('Zəhmət olmasa xananı doldurun'),
  })
  const handleSubmit = async (values, actions) => {
    await postServices(values)
    console.log(values);

    actions.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      about: '',
      desc: '',
      imageURL: '',
    },
    onSubmit: handleSubmit,
    validationSchema: Validation,
  })
  // const navigate = useNavigate();
  // const [service, setService] = useState([]);
  // const handleSubmit = async (values, actions) => {
  //   await postServices(values);
  //   console.log(values);

  //   setService([...service, values])
  //   Swal.fire({
  //     position: 'top-end',
  //     icon: 'success',
  //     title: `${values.name} posted successfully!`,
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  //   actions.resetForm();
  //   navigate('/admin/services');
  // };
  // const formik = useFormik({
  //   initialValues: {
  //     desc: "",
  //     imageURL: "",
  //     about: "",
  //   },
  //   validationSchema: ServicesValidation,
  //   onSubmit: handleSubmit,
  // });
  return (
    <>
      <div className={style.addlogin}>
        <h2>Add New Service</h2>
        <form onSubmit={formik.handleSubmit}>
          <div style={{ width: "40%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <input
              style={{ padding: "10px" }}
              placeholder='Kategoriya adı'
              type="text"
              name="about"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.about}
            />
            {formik.errors.about && formik.touched.about ? (
              <span style={{ color: "#bb221a", marginTop: "15px" }}>{formik.errors.about}</span>
            ) : <span style={{ visibility: "hidden", marginTop: "15px" }}>error message</span>}
          </div>
          <div style={{ width: "40%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <input
              style={{ padding: "10px" }}
              placeholder='Kategoriya adı'
              type="text"
              name="desc"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.desc}
            />
            {formik.errors.desc && formik.touched.desc ? (
              <span style={{ color: "#bb221a", marginTop: "15px" }}>{formik.errors.desc}</span>
            ) : <span style={{ visibility: "hidden", marginTop: "15px" }}>error message</span>}
          </div>
          <div style={{ width: "40%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <input
              style={{ padding: "10px" }}
              placeholder='Kategoriya adı'
              type="text"
              name="imageURL"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.imageURL}
            />
            {formik.errors.imageURL && formik.touched.imageURL ? (
              <span style={{ color: "#bb221a", marginTop: "15px" }}>{formik.errors.imageURL}</span>
            ) : <span style={{ visibility: "hidden", marginTop: "15px" }}>error message</span>}
          </div>
          {/* <div class="user-box">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.imageURL}
              name="imageURL"
              type="text"
              placeholder="imageURL"
            />

            {formik.errors.imageURL && formik.touched.imageURL && (
              <span>{formik.errors.imageURL}</span>
            )}
          </div>
          <div class="user-box">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.desc}
              name="desc"
              type="text"
              placeholder="desc"
            />

            {formik.errors.desc && formik.touched.desc && (
              <span>{formik.errors.desc}</span>
            )}
          </div>
          <div class="user-box">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.about}
              name="about"
              type="text"
              placeholder="about"
            />

            {formik.errors.about && formik.touched.about && (
              <span>{formik.errors.about}</span>
            )}
          </div> */}
          <div className='product-send'>
            <button
              disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0 ? true : false}
              type="submit"
              style={{ cursor: "pointer", marginTop: "20px" }}
              variant="contained"
            >Göndər</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddServices