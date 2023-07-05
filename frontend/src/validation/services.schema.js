import * as yup from "yup";

export const ServicesValidation = yup.object().shape({
  imageURL: yup.string().required("image is required"),
  about: yup.string().required("about is required"),
  desc: yup.string().required("desc is required")
});