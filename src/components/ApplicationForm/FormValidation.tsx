import * as Yup from "yup";
import { useFormik } from "formik";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  country: Yup.string().required("Country is required"),
  categoryName: Yup.string().required("Category and Program is required"),
  dateOfBirth: Yup.date().required("Date is required"),
});

interface ApplicationFormProps {
  onSubmit: (values: Record<string, any>) => void;
}

export function FormValidation({ onSubmit }: ApplicationFormProps) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      country: "",
      categoryName: "",
      dateOfBirth: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
    validateOnMount: true,
  });

  return formik;
}
export function getValidationFunction(fieldName: string) {
  return (value: any) => {
    try {
      const schema = Yup.object().shape({
        //@ts-ignore
        [fieldName]: validationSchema.fields[fieldName],
      });
      schema.validateSync({ [fieldName]: value });
      return null; // Valid
    } catch (error: any) {
      return error.message; // Validation error message
    }
  };
}
