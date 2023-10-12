import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  country: Yup.string().required("Country is required"),
  categoryName: Yup.string().required("Category and Program is required"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
});
