import { editServices, getServicesById } from '../../../api/servicesrequests';
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from '../EditServices/editservice.module.css'
import { Button, TextField } from '@mui/material';

const EditServices = () => {

  const navigate = useNavigate();
  const [service, setService] = useState({});
  const { id } = useParams();

  async function fetchData() {
    const datas = await getServicesById(id);
    setService(datas.data);
    formik.setValues({
      desc: datas.data.desc,
      about: datas.data.about,
      imageURL: datas.data.imageURL,
    });
  }
  useEffect(() => {
    fetchData();
  }, [id]);



  const handleSubmit = async (values, actions) => {
    await editServices(id, values);
    setService(values);
    actions.resetForm();
    navigate("/admin/services");
  };
  const ServiceSchema = Yup.object().shape({
    imageURL: Yup.string().required(),
    desc: Yup.string().required(),
    about: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      desc: service.desc,
      about: service.about,
      imageURL: service.imageURL,
    },
    onSubmit: handleSubmit,
    validationSchema: ServiceSchema,
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
              value={formik.values.about}
              className={style.forminput}
              name="about"
              type="text"
              placeholder="about"
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

export default EditServices