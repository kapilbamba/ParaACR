import { Avatar, Button, Card, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import { BiBuilding, BiGroup, BiPhone, BiUser } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { MdEmail, MdOutlineStadium } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import { PiMapPinSimpleArea } from "react-icons/pi";
import dayjs from "dayjs";

import { AgenciesAPI } from "src/http/server-apis";
import Spinner from "src/views/spinner/Spinner";
import PageContainer from "src/components/common/components/PageContainer";
import Breadcrumb from "src/layouts/full/shared/breadcrumb/Breadcrumb";
import Toolbar from "src/components/common/Toolbar";
import AgencyUserList from "src/components/apps/agency/registration/AgencyUserList";
import { RootState } from "src/store/Store";
import AlertBreadcrumb from "src/components/common/components/AlertBreadcrumb";
import DeleteDialogBox from "src/components/common/DeleteDialog";
import { getImageUrl } from "src/utils";
import { MobileScreenShare } from "@mui/icons-material";
import { zoneData } from "src/components/apps/agency/registration/UserAgencyBasicForm";
import CountdownTimer from "src/components/common/uiElements/CountdownTimer";

export const colorData = [
  { value: "Gold", label: "Gold", color: "bg-yellow-500" },
  { value: "Silver", label: "Silver", color: "bg-gray-400" },
  { value: "Red", label: "Red", color: "bg-red-500" },
  { value: "Blue", label: "Blue", color: "bg-blue-500" },
  { value: "Pink", label: "Pink", color: "bg-pink-500" },
  { value: "Purple", label: "Purple", color: "bg-purple-500" },
  { value: "White", label: "White", color: "bg-white-800" },
  { value: "Brown", label: "Brown", color: "bg-amber-700" },
];

const AgencyUserRegistration = () => {
  const { UserID } = useSelector((state: RootState) => state?.user);
  const [open, setOpen] = useState(false);
  const theme: any = useTheme();
  const [data, setData] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [isLockDialog, setIsLockDialog] = useState(false);

  const { isLoading, refetch } = useQuery(
    ["get-all-agensies", UserID],
    () =>
      AgenciesAPI("get", {
        postfix: `/${UserID}`,
      }),
    {
      onSuccess(data: { status: number; data: any }) {
        if (data?.status === 200) {
          setData(data.data || []);
        }
      },
    }
  );

  const onLockHandler = async () => {
    try {
      const response = await AgenciesAPI("post", {
        postfix: `/locked`,
        data: {
          AgencyID: UserID,
          LockedType: "All",
          Locked: 1,
        },
      });
      if (response?.status === 200 && response.data?.status === "success") {
        enqueueSnackbar(response.data?.message, { variant: "success" });
        refetch();
        setIsLockDialog(false);
      } else {
        enqueueSnackbar(response?.data?.message || "Error saving data", {
          variant: "error",
        });
      }
    } catch (error) {
      enqueueSnackbar("Error submitting data", { variant: "error" });
    }
  };

  if (isLoading) return <Spinner />;


  return (
    <PageContainer title={data?.CompanyName || ""}>
      <div className="bg-white shadow-md rounded-lg flex items-center justify-between mt-5 py-5 px-5">
        <Typography variant="h6">
          You have to submit these details by{" "}
          {data?.TentativeDate ? (
            <span className="text-sky-600">
              {dayjs(data?.TentativeDate).endOf('day').format("MMM DD, YYYY hh:mm A")}
            </span>
          ) : null}
        </Typography>{" "}
        <CountdownTimer endDate={data?.TentativeDate} />
      </div>
      <div className="shadow-sm bg-white rounded-lg p-5  my-5 bg-[url('./assets/images/white_wave.png')]  !bg-no-repeat  bg-posRight">
        <div className="grid items-center  grid-cols-3 gap-5 ">
          <div className="col-span-2 pr-5">
            <Typography variant="h5" className="flex ">
              {data?.AgencyName} ({data?.Organisation || "-"})
            </Typography>
            <ul className="flex flex-col gap-4 mt-5 w-full">
              <li className="grid grid-cols-4  gap-5 ">
                <div className="flex gap-2">
                  <BiUser className="mt-1 text-gray-300" />
                  <div>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {data?.Salutation || "-"} {data?.ContactName || "-"}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.gray.dark,
                      }}
                    >
                      Contact Name
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-2">
                  <BiUser className="mt-1 text-gray-300" />
                  <div>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {data?.Designation || "-"}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.gray.dark,
                      }}
                    >
                      Title/Position
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-2">
                  <MdEmail className="mt-1 text-gray-300" />
                  <div className="">
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {data?.EmailID || "-"}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.gray.dark,
                      }}
                    >
                      Email
                    </Typography>
                  </div>
                </div>
              </li>

              <li className="grid grid-cols-4  gap-5  ">
                <div className="flex gap-2">
                  <BiPhone className="mt-1 text-gray-300" />
                  <div>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {data?.MobileNo || "-"}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.gray.dark,
                      }}
                    >
                      Mobile No.
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-2">
                  <BiUser className="mt-1 text-gray-300" />
                  <div>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {data?.AcrName || '-'}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.gray?.dark,
                      }}
                    >
                      ACR Type
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-2">

                  <Typography
                    className={`w-[12px] h-[12px] !mt-2 !rounded-sm ${data?.ColorCode}`}

                  />
                  <div>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {data?.Color || "-"}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.gray?.dark,
                      }}
                    >
                      Color
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-2">
                  <BiGroup className="mt-1 text-gray-300" />
                  <div className="">
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {data?.AgencyUsers?.length}/{data?.Quota || "-"}

                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.gray.dark,
                      }}
                    >
                      Quota
                    </Typography>
                  </div>
                </div>

                <div className="flex gap-2">
                  <BiBuilding className="mt-1 text-gray-300" />
                  <div>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {data?.Address || "-"}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.gray.dark,
                      }}
                    >
                      Address
                    </Typography>
                  </div>
                </div>
              </li>
              <li className="grid grid-cols-4  gap-5  ">
                <div className="flex col-span-2 gap-2">
                  <PiMapPinSimpleArea className="mt-1 text-gray-300" />
                  <div>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                      }}
                    >
                      <div className="flex gap-2">
                        {zoneData?.map((z) => {
                          if (!+data[`Zone${z.label}`]) return null;
                          return (
                            <div className="bg-gray-100 border rounded-full h-6 w-6 flex justify-center items-center">
                              {z.label}
                            </div>
                          );
                        })}
                      </div>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.gray.dark,
                      }}
                    >
                      Zones
                    </Typography>
                  </div>
                </div>

                <div className="flex gap-2">
                  <MdOutlineStadium className="mt-1 text-gray-300" />
                  <div>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {data?.Venue || "-"}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.gray.dark,
                      }}
                    >
                      Venues
                    </Typography>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {data?.Photo ? (
            <div className="flex flex-col items-center">
              <Avatar
                src={getImageUrl("profile", data?.Photo)}
                alt="Orginization Logo"
                className="!rounded-lg !w-[120px] !h-[120px]"
              />
            </div>
          ) : null}
        </div>
      </div>

      {/* <AlertBreadcrumb
        success={data?.Locked ? true : false}
        title={
          data?.Locked
            ? "This section has been submitted and locked. Changes are not permitted anymore."
            : `Once this section is final, click the lock button to submit the data for further processing.`
        }
        btnProps={
          data?.Locked
            ? undefined
            : {
              title: "Confirm & Submit",
              onClick: () => setIsLockDialog(true),
            }
        }
      /> */}

      <div className="flex justify-between items-center mb-2">
        <Typography variant="h5">Person Details</Typography>
        {data?.AgencyUsers?.length < Number(data?.Quota) ? <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Add
        </Button> : null}
      </div>
      <Card>




        <Toolbar
          searchText={searchText}
          setSearchText={setSearchText}
          onSearchProps={true}
        />

        <AgencyUserList
          addOpen={open}
          addClose={() => setOpen(false)}
          reload={refetch}
          searchText={searchText}
          listData={data?.AgencyUsers || []}
          TeamName={data?.TeamName}
        />
      </Card>

      <DeleteDialogBox
        open={isLockDialog}
        onClickClose={() => setIsLockDialog(false)}
        onClickOk={onLockHandler}
        headerTitle="Confirm and Submit"
        title={`
          Please ensure that all records are accurate and final. Once submitted, any changes will NOT be permitted.`}
        confirmButtonTitle="Confirm & Lock"
        cancelButtonTitle="Cancel"
      />
    </PageContainer>
  );
};

export default AgencyUserRegistration;
