import {
  Box,
  Button,
  DialogContent,
  CircularProgress,
  Dialog,
  Typography,
  useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  UPDATE_MESSAGE,
  UPDATE_ERROR_MESSAGE,
  ADD_MESSAGE,
  ADD_ERROR_MESSAGE,
} from "src/utils/constants";
import { AgeusersAPI } from "src/http/server-apis";
import RequiredFormText from "src/components/common/uiElements/RequiredFormText";
import { agencyUserValidation } from "src/components/common/forms/validation";
import { RootState } from "src/store/Store";
import UserAgencyBasicForm from "./UserAgencyBasicForm";
import useImage from "src/hook/useImage";
import dayjs from "dayjs";

interface IParticipantAddEditDialogProps {
  open: boolean;
  close: () => void;
  user: any;
  reload: () => void;
  variant: string;
}

const ParticipantAddEditDialog: React.FC<IParticipantAddEditDialogProps> = (
  props
) => {
  const { open, close, user, reload, variant } = props;
  const theme = useTheme();
  const { uploadImage, uploadFile } = useImage();
  const { UserID } = useSelector((state: RootState) => state.user);

  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<any>({
    Photo: null,
    SupportDocuments: null,
  });
  const upload = async () => {
    let photoRes = image?.Photo && (await uploadImage(image?.Photo, "profile"));
    let supportDocumentsRes = image?.SupportDocuments && (await uploadFile(image?.SupportDocuments, "agencydocuments"));

    return {
      photoRes,
      supportDocumentsRes
    };
  };
  const [userTypeData] = useState({
    Active: 0,
    AgencyID: UserID,
    NewEntry: user?.FirstName ? 0 : 1,
    FirstName: user?.FirstName || "",
    MiddleName: user?.MiddleName || "",
    LastName: user?.LastName || "",
    Designation: user?.Designation || "",
    FatherName: user?.FatherName || "",
    EmailID: user?.EmailID || "",
    MobileNo: user?.MobileNo || "",
    DOB: user?.DOB || `${dayjs().subtract(10, 'year').format("YYYY-MM-DD")}`,
    Gender: user?.Gender || "",
    Address: user?.Address || "",
    Photo: user?.Photo || "",
    SupportDocuments: user?.SupportDocuments || "",
    Venue: user?.Venue || "Patliputra Stadium",
    Zone1: user?.Zone1 || "0",
    Zone2: user?.Zone2 || "0",
    Zone3: user?.Zone3 || "0",
    Zone4: user?.Zone4 || "0",
    Zone5: user?.Zone5 || "0",
    Zone6: user?.Zone6 || "0",
    IdenID: user?.IdenID || "0",

  });

  const onUpdate = async (values: any, uploaddRes?: any) => {
    const { photoRes, supportDocumentsRes } = uploaddRes;

    if (!(photoRes?.data?.FileName || values?.Photo)) {
      return enqueueSnackbar('Profile Photo is not uploaded yet!', {
        variant: "error",
      });
    }

    if (!(supportDocumentsRes?.data?.FileName || values?.SupportDocuments)) {
      return enqueueSnackbar('Document/Identity ID is not uploaded yet!', {
        variant: "error",
      });
    }

    let payload = {
      ...values,
      Photo: photoRes?.data?.FileName || values?.Photo,
      SupportDocuments: supportDocumentsRes?.data?.FileName || values?.SupportDocuments,
    };

    try {
      const data = await AgeusersAPI("put", {
        params: `${user.UserID}`,
        data: payload,
      });
      if (data?.status === 200)
        if (data.data?.status === "success") {
          enqueueSnackbar(data.data?.message || UPDATE_MESSAGE, {
            variant: "success",
          });
          resetForm();
          reload();
          close();
        } else
          enqueueSnackbar(data.data?.message || UPDATE_ERROR_MESSAGE, {
            variant: "error",
          });
      resetForm();
    } catch (error: any) {
      enqueueSnackbar(error?.response?.data?.message || UPDATE_ERROR_MESSAGE, {
        variant: "error",
      });
    }
  };

  const onAdd = async (values: any, uploaddRes?: any) => {
    const { photoRes, supportDocumentsRes } = uploaddRes;
    if (!photoRes?.data?.FileName) {
      return enqueueSnackbar('Profile Photo is not uploaded yet!', {
        variant: "error",
      });
    }

    if (!supportDocumentsRes?.data?.FileName) {
      return enqueueSnackbar('Document/Identity ID is not uploaded yet!', {
        variant: "error",
      });
    }
    try {
      const data = await AgeusersAPI("post", {
        data: {
          ...values,
          SupportDocuments: supportDocumentsRes?.data?.FileName || values?.SupportDocuments,
          Photo: photoRes?.data?.FileName || values?.Photo,
        },
      });
      if (data?.status === 200)
        if (data.data?.status === "success") {
          enqueueSnackbar(data.data?.message || ADD_MESSAGE, {
            variant: "success",
          });
          resetForm();
          reload();
          close();
        } else
          enqueueSnackbar(data.data?.message || ADD_ERROR_MESSAGE, {
            variant: "error",
          });
      resetForm();
    } catch (error: any) {
      console.log(error);
      enqueueSnackbar(error?.response.data?.message || ADD_ERROR_MESSAGE, {
        variant: "error",
      });
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
    setFieldTouched,
    resetForm,
  } = useFormik({
    initialValues: userTypeData,
    enableReinitialize: true,
    validationSchema: agencyUserValidation,
    async onSubmit(values) {
      setLoading(true);
      const uploadres = await upload();
      if (variant === "edit") {
        await onUpdate(values, uploadres);
      } else {
        await onAdd(values, uploadres);
      }
      setLoading(false);
    },
  });

  return (
    <Dialog open={open} maxWidth="lg" fullWidth>
      <DialogContent>
        <Typography
          variant="h6"
          sx={{
            backgroundColor: theme?.palette?.slate?.main,
            marginBottom: "20px",
            paddingY: 1,
            paddingX: 2,
            borderRadius: "8px",
          }}
        >
          Person Details
        </Typography>
        <div className="px-2">
          <form onSubmit={handleSubmit}>
            <UserAgencyBasicForm
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setFieldValue={setFieldValue}
              isSubmitting={isSubmitting}
              setFieldTouched={setFieldTouched}
              image={image}
              setImage={setImage}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
                alignItems: "center",
              }}
            >
              <RequiredFormText />

              <Box gap={2}>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={close}
                  sx={{
                    marginRight: "10px",
                  }}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  sx={{
                    padding: "6px 30px",
                  }}
                  color="primary"
                  variant="contained"
                  disabled={loading}
                  startIcon={
                    loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : undefined
                  }
                >
                  {"Submit"}
                </Button>
              </Box>
            </Box>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ParticipantAddEditDialog;
