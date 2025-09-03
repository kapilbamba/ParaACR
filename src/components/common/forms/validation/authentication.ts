import * as Yup from "yup";
import { maxText, minText, requiredText } from "./message";

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is mandatory"),
  password: Yup.string().trim().required("Password is mandatory").max(25),
});

const changePasswordSchema = Yup.object({
  Password: Yup.string()
    .required(requiredText("Password"))
    .min(2, minText("Password", 2))
    .max(25, maxText("Password", 25)),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref("Password")], "Password must match")
    .required(requiredText("Password")),
});
export { loginValidationSchema, changePasswordSchema };
