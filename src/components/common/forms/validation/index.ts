import * as yup from "yup";
import { minText, maxText, requiredText } from "./message";

export const agencyUserValidation = yup.object({
  FirstName: yup
    .string()
    .min(2, minText("First Name", 2))
    .max(50, maxText("First Name", 50))
    .required(requiredText("First Name")),
  MiddleName: yup
    .string()
    .min(2, minText("Middle Name", 2))
    .max(50, maxText("Middle Name", 50)),
  LastName: yup
    .string()
    .min(2, minText("Last Name", 2))
    .max(50, maxText("Last Name", 50))
    .required(requiredText("Last Name")),
  DOB: yup.string().required(requiredText("Date of Birth")),

  Designation: yup.string().required(requiredText("Title/Position")),
  // FatherName: yup
  //   .string()
  //   .min(2, minText("Father's Name", 2))
  //   .max(50, maxText("Father's Name", 50))
  //   .required(requiredText("Father's Name")),
  Gender: yup
    .string()
    .oneOf(["Male", "Female"], "Invalid gender")
    .required(requiredText("Gender")),
  EmailID: yup
    .string()
    .email("Email is not valid")
    .required(requiredText("Email")),
  MobileNo: yup
    .string()
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
});
