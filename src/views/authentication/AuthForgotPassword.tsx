import { Button, Stack, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

import CustomTextField from "src/components/common/forms/input-elements/CustomTextField";
import { AgenciesAPI } from "src/http/server-apis";

const AuthForgotPassword = () => {
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        EmailID: "",
      },
      validationSchema: Yup.object({
        EmailID: Yup.string()
          .email("Please enter valid email")
          .required("Email is mandatory")
          .max(25),
      }),
      async onSubmit(values: any) {
        try {
          const res = await AgenciesAPI("post", {
            params: "forgot",
            data: {
              ...values,
            },
          });

          const data = res?.data;
          if (data?.status === "success") {
            navigate("/auth/info", {
              state: {
                message: data?.message || "",
              },
            });
          } else
            navigate("/auth/info", {
              state: {
                message: data?.message || "",
              },
            });
        } catch (error: any) {
          navigate("/auth/info", {
            state: {
              message: error?.response?.data?.message || "",
            },
          });
        }
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <Stack mt={2} spacing={2}>
        <CustomTextField
          sx={{
            marginTop: "0px !important",
          }}
          type="text"
          label="Email"
          isRequired={true}
          name="EmailID"
          id="reset-email"
          fullWidth
          onChange={handleChange}
          value={values.EmailID}
          error={errors.EmailID && touched.EmailID ? true : false}
          helperText={touched?.EmailID ? errors?.EmailID : ""}
          onBlur={handleBlur}
        />

        <Box
          display="flex"
          justifyContent="end"
          sx={{
            marginTop: "35px !important",
          }}
          gap={1}
        >
          <Button
            color="secondary"
            variant="outlined"
            component={Link}
            to="/auth/login"
          >
            Back to Login
          </Button>
          <Button color="primary" type="submit" variant="contained">
            Send Password
          </Button>
        </Box>
      </Stack>
    </form>
  );
};

export default AuthForgotPassword;
