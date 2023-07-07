import React from 'react'
import { useFormik } from "formik";
import { postProducts } from "../../../api/productrequests";
import Swal from "sweetalert2";
import style from '../AddServices/addservice.module.css'
import * as yup from 'yup';

const AddProducts = () => {

  const ProductsValidation = yup.object().shape({
    price: yup.string().required('Please fill in the box'),
    desc: yup.string().required('Please fill in the box'),
    imageURL: yup.string().required('Please fill in the box'),
  })
  const handleSubmit = async (values, actions) => {
    await postProducts(values)
    console.log(values);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Product posted successfully!`,
      showConfirmButton: false,
      timer: 1500
    })
    actions.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      price: '',
      desc: '',
      imageURL: '',
    },
    onSubmit: handleSubmit,
    validationSchema: ProductsValidation,
  })
  return (
    <>
       <div className={style.addlogin}>
        <h2>Add New Products</h2>
        <form onSubmit={formik.handleSubmit}>
          <div style={{ width: "40%", margin: "15px auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <input
              style={{ padding: "15px" }}
              placeholder='Add product image'
              type="text"
              name="imageURL"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.imageURL}
            />
            {formik.errors.imageURL && formik.touched.imageURL ? (
              <span style={{ color: "#7E5A4E", marginTop: "15px" }}>{formik.errors.imageURL}</span>
            ) : <span style={{ visibility: "hidden", marginTop: "15px" }}>error message</span>}
          </div>
          <div style={{ width: "40%", margin: "15px auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <input
              style={{ padding: "15px" }}
              placeholder='Add new product name'
              type="text"
              name="desc"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.desc}
            />
            {formik.errors.desc && formik.touched.desc ? (
              <span style={{ color: "#7E5A4E", marginTop: "15px" }}>{formik.errors.desc}</span>
            ) : <span style={{ visibility: "hidden", marginTop: "15px" }}>error message</span>}
          </div>
          <div style={{ width: "40%", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <input
              style={{ padding: "15px" }}
              placeholder='Price'
              type="text"
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}

            />
            {formik.errors.price && formik.touched.price ? (
              <span style={{ color: "#7E5A4E", marginTop: "15px" }}>{formik.errors.price}</span>
            ) : <span style={{ visibility: "hidden", marginTop: "15px" }}>error message</span>}
          </div>
              
          <div className={style.addbutton}>
            <button
            
              disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0 ? true : false}
              type="submit"
              style={{ cursor: "pointer", marginTop: "20px" }}
              variant="contained"
              
            >Add</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddProducts