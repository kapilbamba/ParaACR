import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  CircularProgress,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useSelector } from "react-redux";

import { changePasswordSchema } from "src/components/common/forms/validation/authentication";
import { AgenciesAPI } from "src/http/server-apis";
import CustomTextField from "src/components/common/forms/input-elements/CustomTextField";
import { RootState } from "src/store/Store";

interface IChangePasswordModal {
  open: boolean;
  onClose: (y?: boolean) => void;
}

const ChangePasswordModal: React.FC<IChangePasswordModal> = ({
  open,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);
  const { UserID } = useSelector((state: RootState) => state.user);

  const onSubmitFormHandler = async (values: {
    Password: any;
    ConfirmPassword?: string;
  }) => {
    const data = {
      Password: values.Password,
      ChangePassword: 1,
    };
    const res = await AgenciesAPI("put", {
      params: `${UserID}`,
      data,
    });
    if (res?.status === 200) {
      enqueueSnackbar("Password Changed", {
        variant: "success",
      });
      onClose(false);
      resetForm();
    } else {
      enqueueSnackbar("Something went wrong", {
        variant: "error",
      });
    }
  };

  const theme:any = useTheme();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: { Password: "", ConfirmPassword: "" },
    validationSchema: changePasswordSchema,
    async onSubmit(values) {
      setLoading(true);
      await onSubmitFormHandler(values);
      setLoading(false);
    },
  });

  return (
    <Dialog fullWidth maxWidth="sm" open={open}>
      <DialogContent>
        <Typography
          variant="h6"
          sx={{
            backgroundColor: theme?.palette?.slate?.main,
            marginBottom: "20px",
            paddingY: 1,
            paddingX: 2,
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Change Password
        </Typography>
        <div className="px-2">
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item md={6} pr={1}>
                <Box>
                  <CustomTextField
                    isRequired={true}
                    textLimit={20}
                    label="New Password"
                    type="text"
                    id="Password"
                    name="Password"
                    fullWidth
                    onChange={handleChange}
                    value={values.Password}
                    onBlur={handleBlur}
                    error={
                      errors["Password"] && touched["Password"] ? true : false
                    }
                    helperText={touched["Password"] ? errors["Password"] : ""}
                  />
                </Box>
              </Grid>

              <Grid item md={6} pl={1}>
                <Box>
                  <CustomTextField
                    label="Confirm New Password"
                    isRequired={true}
                    textLimit={20}
                    type="text"
                    id="ConfirmPassword"
                    name="ConfirmPassword"
                    fullWidth
                    onChange={handleChange}
                    value={values.ConfirmPassword}
                    onBlur={handleBlur}
                    error={
                      errors["ConfirmPassword"] && touched["ConfirmPassword"]
                        ? true
                        : false
                    }
                    helperText={
                      touched["ConfirmPassword"]
                        ? errors["ConfirmPassword"]
                        : ""
                    }
                  />
                </Box>
              </Grid>
            </Grid>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="end"
              gap={2}
              mt={4}
            >
              <Button
                color="secondary"
                variant="outlined"
                onClick={() => {
                  onClose(false);
                  resetForm();
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={loading}
                startIcon={
                  loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : undefined
                }
              >
                Change Password
              </Button>
            </Box>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordModal;
