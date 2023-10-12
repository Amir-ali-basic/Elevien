import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  country: Yup.string().required("Last Name is required"),
  categoryName: Yup.string().required("Last Name is required"),
  dateOfBirth: Yup.string().required("Last Name is required"),
});
