import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Collapse,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import {
  initialValues,
  validationSchema,
} from "../../utils/validation/LoginValidation";
import CustomTextField from "src/components/common/forms/input-elements/CustomTextField";
import { setUserID, setUserInfo } from "src/store/slice/user/userSlice";
import { AgenciesAPI } from "src/http/server-apis";
import { RootState } from "src/store/Store";

interface IAuthLogin {
  subtitle?: string;
  subtext?: string;
}

const AuthLogin: React.FC<IAuthLogin> = ({ subtitle, subtext }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { token, platform } = useSelector((state: RootState) => state.appInfo);

  const onSubmit = async () => {
    let payload = {
      EmailID: formik.values.EmailID,
      Password: formik.values.Password,
      Token: token || "",
      Platform: platform || "Android",
    };

    try {
      const res = await AgenciesAPI("post", {
        params: "login",
        data: payload,
      });
      if (res?.status === 200) {
        dispatch(setUserID(res.data?.AgencyID));
        dispatch(setUserInfo(res.data));
        navigate("/agency");
      } else {
        enqueueSnackbar(res?.data?.message, {
          variant: "error",
        });
      }
    } catch (error: any) {
      navigate("/auth/login-failed", {
        state: {
          message: error?.response?.data?.message || "",
        },
      });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box className="px-[20px] mt-8 w-full">
      <Collapse in={true}>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 gap-3">
            <CustomTextField
              type="email"
              fullWidth
              name="EmailID"
              label="Email"
              isRequired={true}
              value={formik.values.EmailID}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.EmailID && Boolean(formik.errors.EmailID)}
              helperText={formik.touched.EmailID ? formik.errors.EmailID : ""}
            />

            <CustomTextField
              type={showPassword ? "text" : "password"}
              fullWidth
              name="Password"
              label="Password"
              isRequired={true}
              value={formik.values.Password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Password && Boolean(formik.errors.Password)}
              helperText={formik.touched.Password ? formik.errors.Password : ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

          </div>

          <div className="flex gap-4 justify-between items-center mt-5">
            <Typography
              variant="body1"
              className="text-end text-yellow-500 cursor-pointer"
              onClick={() => navigate("/auth/forgot-password")}
            >
              Forgot Password
            </Typography>
            {/* <Button
              color="secondary"
              variant="outlined"
              sx={{
                padding: "6px 30px",
              }}
              onClick={() => navigate("/dashboard")}
            >
              Back
            </Button> */}
            <Button
              color="primary"
              sx={{
                padding: "6px 30px",
              }}
              disabled={formik.isSubmitting}
              variant="contained"
              size="large"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </Collapse>

      {subtitle}
    </Box>
  );
};

export default AuthLogin;
