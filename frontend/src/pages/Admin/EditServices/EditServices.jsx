import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editServices, getServicesById } from "../../../api/servicesrequests";
import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useTeamContext } from "../../../context/ServiceContext";
import * as yup from 'yup'


const EditServices = () => {

  const[team,setTeam] = useTeamContext( );
  console.log('team context: ',team);
  const { id } = useParams();
  const navigate = useNavigate();
  const [services, setServices] = useState({});
  const[loading,setLoading] = useState(true);
  useEffect(() => {
    getServicesById(id).then((res) => {
      setTeam(res);
      formik.values.desc = res.desc;
      formik.values.about = res.about;
      formik.values.imageURL = res.imageURL;
      setLoading(false);
    });
  }, [id]);

  const Validation = yup.object().shape({
    desc: yup.string().required("Required"),
    about: yup.string().required("Required"),
    imageURL: yup.string().required("Required")
  });
  const handleEdit = async(values, actions) => {
    // artist.find((x)=>x._id===id)
    setServices(values);
    await editServices(id,values);
    navigate('');
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      desc: services.desc,
      about: services.about,
      imageURL: services.imageURL,
    },
    onSubmit: handleEdit,
    validationSchema: Validation,
  });
  return (
    <>
    <Typography
        style={{ textAlign: "center", marginTop: "40px", fontSize: "30px" }}
      >
        {services.desc} Edit
      </Typography>
      { loading ? <div>loading...</div> : <form style={{width:'60%',margin:'0 auto'}} onSubmit={formik.handleSubmit}>
        <div style={{display:'flex',justifyContent:'center'}}>
        <TextField
          type="text"
          placeholder="artist desc"
          name="desc"
          value={formik.values.desc}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         <TextField
          type="text"
          placeholder="artist about"
          name="about"
          value={formik.values.about}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         <TextField
          type="text"
          placeholder="artist image"
          name="imageURL"
          value={formik.values.imageURL}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        </div>
        <Button style={{margin:'0 auto',display:'block',marginTop:'20px'}} variant="contained" color="primary" type="submit">Edit</Button>
      </form> }
    </>
  )
}

export default EditServices