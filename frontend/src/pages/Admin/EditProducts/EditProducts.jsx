import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from '../EditProducts/editproduct.module.css'
import { Button, TextField } from '@mui/material';
import { editProducts, getProductsById } from '../../../api/productrequests';

const EditProducts = () => {

  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  async function fetchData() {
    const datas = await getProductsById(id);
    setProduct(datas.data);
    formik.setValues({
      desc: datas.data.desc,
      price: datas.data.price,
      imageURL: datas.data.imageURL,
    });
  }
  useEffect(() => {
    fetchData();
  }, [id]);



  const handleSubmit = async (values, actions) => {
    await editProducts(id, values);
    setProduct(values);
    actions.resetForm();
    navigate("/admin/products");
  };
  const ProductSchema = Yup.object().shape({
    imageURL: Yup.string().required(),
    desc: Yup.string().required(),
    price: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      desc: product.desc,
      price: product.price,
      imageURL: product.imageURL,
    },
    onSubmit: handleSubmit,
    validationSchema: ProductSchema,
  });
  return (
   <>
     <form className={style.formedit} onSubmit={formik.handleSubmit}>
        <div className={style.formflex}>
          <div className={style.formdiv}>
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.imageURL}
              className={style.forminput}
              name="imageURL"
              type="text"
              placeholder="imageURL"

            />
          </div>
          <div className={style.formdiv}>
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.desc}
              className={style.forminput}
              name="desc"
              type="text"
              placeholder="desc"
              required=""
            />
          </div>
          <div className={style.formdiv}>
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              className={style.forminput}
              name="price"
              type="text"
              placeholder="price"
              required=""
            />
          </div>
        </div>
        <Button className={style.registerbtn} type="submit">
          Submit
        </Button>
      </form>
   </>
  )
}

export default EditProducts