import * as Yup from "yup";
const initialValues = {
  EmailID: "",
  Password: "",
  Token: "12345678",
  Platform: "12345678",
};

const validationSchema = Yup.object({
  EmailID: Yup.string().trim().email().required("Email is mandatory"),
  Password: Yup.string().trim().required("Password is mandatory"),
});

export { initialValues, validationSchema };
