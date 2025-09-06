/* eslint-disable eqeqeq */
import { NumericFormat } from "react-number-format";
import dayjs from "dayjs";
import { Box, FormControlLabel, FormLabel, Radio, RadioGroup, Typography, useTheme } from "@mui/material";
import { MdOutlineFlight, MdOutlineStadium, MdOutlineUploadFile } from "react-icons/md";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { useState } from "react";

import AsyncAutocomplete from "src/components/common/forms/input-elements/AsyncAutoComplete";
import CustomDatePicker from "src/components/common/forms/input-elements/CustomDatePicker";
import CustomTextField from "src/components/common/forms/input-elements/CustomTextField";
import { formInuputStep1 } from "./playerData";
import {
  designationData,
  genderData,
  getFileExtension,
  getImageUrl,
  participantTypeData,
} from "src/utils";
import FileUploader from "src/components/common/uiElements/FileUploader";
import ShopAvtar from "src/components/common/image/ShopAvtar";
import CustomTextArea from "src/components/common/forms/input-elements/CustomTextArea";
import fileUpload from "src/assets/images/file_upload.png";
import CustomCheckBox from "src/components/common/forms/input-elements/CustomCheckBox";
import { RootState } from "src/store/Store";
import { AgenciesAPI, IdentifyAPI } from "src/http/server-apis";
import { Link } from "react-router-dom";
import { BiDish, BiHotel } from "react-icons/bi";
import { IconBus, IconShieldCheck } from "@tabler/icons-react";
import { CgGym } from "react-icons/cg";

export const zoneData = [
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
];


export default function UserAgencyBasicForm(props: any) {
  const theme = useTheme();
  const {
    values,
    handleChange,
    errors,
    handleBlur,
    touched,
    setFieldValue,
    image,
    setImage,
  } = props;
  const { UserID } = useSelector((state: any) => state?.user);
  const [data, setData] = useState<any>({});
  const [idData, setIdData] = useState([]);

  useQuery(["get-all-agensies", UserID], 
    () => AgenciesAPI("get", { params: `${UserID}` }), {
    refetchOnWindowFocus: false,
    onSuccess(data) {
      if (data?.status === 200) {
        setData(data.data || []);
      }
    },
  });
  const { isLoading: photoIdLoading } = useQuery(
    ["get-all-identity"], 
    () => IdentifyAPI("get"), {
    refetchOnWindowFocus: false,
    onSuccess(data) {
      if (data?.status === 200) {
        setIdData(data.data || []);
      }
    },
  });
  function options(name: string) {
    const optionDataMap: Record<string, any> = {
      AcrName: participantTypeData(values),
      Designation: designationData,
      Gender: genderData,
      IdenID: idData
    };
    return optionDataMap[name] || [];
  }

  function loading(name: string) {
    const loadingMap: Record<string, boolean> = {
      IdenID: photoIdLoading
    };
    return loadingMap[name] || false;
  }

  function objFilter(name: string) {
    const filterMap: Record<string, { title: string; value: string }> = {
      IdenID: { title: "IdentifyName", value: "IdenID" }
    };
    return filterMap[name] || { title: "label", value: "label" };
  }
  return (
    <div>
      <div className="grid grid-cols-6 gap-2">
        {formInuputStep1()?.map((x) => {
          const { className, type, name, ...rest } = x;
          return (
            <div className={className} key={name}>
              {type === "text" ? (
                <CustomTextField
                  name={name}
                  type={type}
                  fullWidth
                  value={values[name] || ""}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  error={!!(errors[name] && touched[name])}
                  helperText={touched[name] ? errors[name] : ""}
                  onBlur={handleBlur}
                  {...rest}
                />
              ) : type === "password" ? (
                <CustomTextField
                  name={name}
                  type={type}
                  fullWidth
                  value={values[name] || ""}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  error={!!(errors[name] && touched[name])}
                  helperText={touched[name] ? errors[name] : ""}
                  onBlur={handleBlur}
                  {...rest}
                />
              ) : type === "number" ? (
                <NumericFormat
                  min="1"
                  customInput={CustomTextField}
                  name={name}
                  allowNegative={false}
                  allowLeadingZeros={false}
                  displayType="input"
                  valueIsNumericString
                  onChange={handleChange}
                  fullWidth
                  value={values[name] || ""}
                  error={!!(errors[name] && touched[name])}
                  helperText={touched[name] ? errors[name] : ""}
                  onBlur={handleBlur}
                  {...rest}
                />
              ) : type === "date" ? (
                <CustomDatePicker
                  name={name}
                  value={values[name] || ""}
                  maxDate={dayjs().subtract(9, "year")}
                  handleChange={(val) => setFieldValue(name, val)}
                  TextInputProps={{
                    error: !!(errors[name] && touched[name]),
                    helperText: touched[name] ? errors[name] : "",
                    onBlur: handleBlur,
                  }}
                  {...rest}
                />
              ) : type === "textarea" ? (
                <CustomTextArea
                  name={name}
                  value={values[name] || ""}
                  onChange={handleChange}
                  error={!!(errors[name] && touched[name])}
                  helperText={touched[name] ? errors[name] : ""}
                  onBlur={handleBlur}
                  {...rest}
                />
              ) : (
                <AsyncAutocomplete
                  id={name}
                  loading={loading(name)}
                  options={options(name) || []}
                  objFilter={objFilter(name)}
                  value={values[name]}
                  TextInputProps={{
                    error: !!(errors[name] && touched[name]),
                    helperText: touched[name] ? errors[name] : "",
                    onBlur: handleBlur,
                  }}
                  onChangeOption={(value) => {
                    setFieldValue(name, `${value}`);
                  }}
                  {...rest}
                />
              )}
            </div>
          );
        })}

        <div className="col-span-2 flex flex-col gap-5">
          <div className="">
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{
              color: theme.palette.grey[600],
              fontSize: "12px",
              paddingLeft: "10px",
            }}>
              Venues
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={values.Venue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFieldValue(`Venue`, (event.target as HTMLInputElement).value)
              }
              sx={{
                flexWrap: "nowrap",
              }}
            >
              {[
                {
                  VenueName: "Jawaharlal Nehru Stadium",
                },
              ]?.map((x: { VenueName: string }) => (
                <FormControlLabel
                  key={x.VenueName}
                  value={x.VenueName}
                  control={<Radio size="small" />}
                  label={x.VenueName}
                />
              ))}
            </RadioGroup>
          </div>

          <div className="flex flex-col">
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              sx={{
                color: theme.palette.grey[600],
                fontSize: "12px",
                paddingLeft: "10px",
                marginBottom: "12px",
              }}
            >
              Zone
            </FormLabel>
            <div className="flex gap-5">
              {zoneData?.map((x) => (
                +data?.[`Zone${x.label}`] ?
                  <CustomCheckBox
                    key={x.label}
                    value={[`Zone${x.label}`]}
                    checked={values?.[`Zone${x.label}`] == 1 ? true : false}
                    checkBoxLabel={x.label}
                    disabled={!+data?.[`Zone${x.label}`]}
                    onChange={(e: { target: { checked: any } }) => {
                      if (e.target.checked) {
                        setFieldValue(`Zone${x.label}`, "1");
                      } else {
                        setFieldValue(`Zone${x.label}`, "0");
                      }
                    }}
                  /> : null
              ))}
            </div>
          </div>

         <div className="flex flex-col mt-4">
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              sx={{
                color: theme.palette.grey[600],
                fontSize: "12px",
                paddingLeft: "10px",
                marginBottom: "12px",
                marginTop: "5px",
              }}
            >
              Services
            </FormLabel>
            <div className="flex gap-5 flex-wrap">
              {[
                { label: "ADM", key: "ADM", 
                  // icon: <BiHotel size={20} /> 
                },
                {
                  label: "Flight",
                  key: "Flight",
                  // icon: <MdOutlineFlight size={20} />,
                },
                {
                  label: "SEC",
                  key: "SEC",
                  // icon: <IconShieldCheck size={20} />,
                },
                { label: "TPT", key: "TPT", 
                  // icon: <IconBus size={20} /> 
                },
                {
                  label: "Catering",
                  key: "Catering",
                  // icon: <BiDish size={20} />,
                },
                {
                  label: "STA",
                  key: "STA",
                  // icon: <MdOutlineStadium size={20} />,
                },
                { label: "TRN", key: "TRN", 
                  // icon: <CgGym size={20} /> 
                },
              ].map((service) =>
                +data?.[service.key] ? (
                  <div key={service.key} className="flex items-center gap-2">
                    <CustomCheckBox
                      size="small"
                      value={service.key}
                      checked={values?.[service.key] == 1}
                      label={service.label}
                      disabled={!+data?.[service.key]}
                      onChange={(e: { target: { checked: boolean } }) => {
                        setFieldValue(
                          service.key,
                          e.target.checked ? "1" : "0"
                        );
                      }}
                    />
                    {/* {service.icon} */}
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.grey[600],
              fontSize: "12px",
              paddingLeft: "10px",
              lineHeight: 0,
            }}
          >
            Profile
            {/* <span className="text-red-600 text-base">*</span> */}

          </Typography>
          <div className="grid grid-cols-1 gap-2 py-2">
            <ShopAvtar
              src={image?.Photo || values["Photo"]}
              type="profile"
              download={values["Photo"] || false}
              imgRectangle
              sx={{
                width: "100%",
                height: 120,
                objectFit: "contain",
                "& .MuiAvatar-img": {
                  objectFit: "contain",
                },
              }}
              variant="rounded"
              crop={{
                image: image?.Photo,
                handleChange: (file: any) =>
                  setImage({ ...image, Photo: file }),
              }}
            />
            <FileUploader
              handleChange={(file: any) => {
                setImage({ ...image, Photo: file });
              }}
            />
          </div>
        </div>

        <div className="col-span-2">
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.grey[600],
              fontSize: "12px",
              paddingLeft: "10px",
              lineHeight: 0,
            }}
          >
            Document/Identity ID
            {/* <span className="text-red-600 text-base">*</span> */}
          </Typography>
          <div className="grid grid-cols-1 gap-2 py-2">
            {(image?.SupportDocuments?.name || values["SupportDocuments"]) &&
              getFileExtension(
                image?.SupportDocuments?.name || values["SupportDocuments"]
              ) === "pdf" ? (
              <Link to={values?.SupportDocuments
                ? getImageUrl("agencydocuments", values?.SupportDocuments)
                : "#"}
                onClick={(e) => (image?.SupportDocuments?.name ? e.preventDefault() : null)}
                target="_blank"
                className="h-[120px] flex items-center justify-center border shadow-md flex-col gap-2 cursor-pointer"
              >
                <Box
                  className="h-[120px] flex items-center justify-center border shadow-md flex-col gap-2 cursor-pointer"
                >

                  <img src={fileUpload} alt="uploadfile" className="w-[20%]" />
                  {!image?.SupportDocuments?.name ? <Typography variant="subtitle1" className="!font-semibold">
                    Click to Preview
                  </Typography> : <Typography variant="subtitle1" className="!font-semibold">
                    File Uploaded
                  </Typography>}
                </Box>
              </Link>

            ) : getFileExtension(
              image?.SupportDocuments?.name || values["SupportDocuments"]
            ) ? (
              <ShopAvtar
                src={image?.SupportDocuments || values["SupportDocuments"]}
                type="agencydocuments"
                download={values["SupportDocuments"] || false}
                imgRectangle
                sx={{
                  width: "100%",
                  height: 120,
                  objectFit: "contain",
                  "& .MuiAvatar-img": {
                    objectFit: "contain",
                  },
                }}
                variant="rounded"
              />
            ) : (
              <Box className="h-[120px] flex items-center justify-center border shadow-md">
                <MdOutlineUploadFile size={60} className="text-gray-100" />
              </Box>
            )}

            <FileUploader
              handleChange={(file: any) => {
                setImage({ ...image, SupportDocuments: file });
              }}
              types={["pdf", "JPEG", "PNG", "JPG", "WEBP"]}
            />
          </div>
        </div>
      </div>

    </div>
  );
}
