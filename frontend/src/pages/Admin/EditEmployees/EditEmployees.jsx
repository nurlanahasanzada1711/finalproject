import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from '../EditServices/editservice.module.css'
import { Button, TextField } from '@mui/material';
import { editTeams, getTeamsById } from '../../../api/teamrequests';

const EditEmployees = () => {

  const navigate = useNavigate();
  const [team, setTeam] = useState({});
  const { id } = useParams();

  async function fetchData() {
    const datas = await getTeamsById(id);
    setTeam(datas.data);
    formik.setValues({
      desc: datas.data.desc,
      chef: datas.data.chef,
      imageURL: datas.data.imageURL,
    });
  }
  useEffect(() => {
    fetchData();
  }, [id]);



  const handleSubmit = async (values, actions) => {
    await editTeams(id, values);
    setTeam(values);
    actions.resetForm();
    navigate("/admin/employees");
  };
  const TeamSchema = Yup.object().shape({
    imageURL: Yup.string().required(),
    desc: Yup.string().required(),
    chef: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      desc: team.desc,
      chef: team.chef,
      imageURL: team.imageURL,
    },
    onSubmit: handleSubmit,
    validationSchema: TeamSchema,
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
              value={formik.values.chef}
              className={style.forminput}
              name="chef"
              type="text"
              placeholder="chef"
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

export default EditEmployees