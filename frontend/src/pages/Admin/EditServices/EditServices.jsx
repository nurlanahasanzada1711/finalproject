import { editServices, getServicesById } from '../../../api/servicesrequests';
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
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
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageURL}
          name="imageURL"
          type="text"
          placeholder="imageURL"
          required=""
        />
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.desc}
          name="desc"
          type="text"
          placeholder="desc"
          required=""
        />
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.about}
          name="about"
          type="text"
          placeholder="about"
          required=""
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default EditServices