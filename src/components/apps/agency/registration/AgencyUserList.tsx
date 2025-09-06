import { useMemo, useState } from "react";
import { Avatar, Box, Tooltip, Typography, useTheme } from "@mui/material";
import { useSnackbar } from "notistack";
import { BiTrash } from "react-icons/bi";
import { IconCircleCheck, IconEdit, IconExclamationCircle, IconEye, IconFileTypeDoc, IconLock, IconLockOpen } from "@tabler/icons-react";
import dayjs from "dayjs";
import { AgeusersAPI } from "src/http/server-apis";
import TeamAddEditDialog from "./ParticipantAddEditDialog";
import { getImageUrl } from "src/utils";
import TableActionIcon from "src/components/common/table/TableActionIcon";
import {
  DELETE_ERROR_MESSAGE,
  DELETE_MESSAGE,
  SOMETHING_WENT_WRONG,
  UPDATE_MESSAGE,
} from "src/utils/constants";
import DataTable from "src/components/common/table/DataTable";
import DeleteDialogBox from "src/components/common/DeleteDialog";
import PlayerImg from "src/assets/images/playerGroup.png";
import { Link } from "react-router-dom";
import ProfileAvtar from "src/components/common/image/ProfileAvtar";
import { FaCheckCircle } from "react-icons/fa";
import ROUserDetailCard from "./ROUserDetailCard";
export const avatarStyles = {
  width: 70,
  height: 40,
  margin: "auto",
};
interface ITeamListProps {
  addOpen: boolean;
  addClose: () => void;
  searchText: string;
  RightID?: any;
  listData: any;
  usertype?: string;
  TeamName: string;
  reload: () => void;
}

const AgencyUserList: React.FC<ITeamListProps> = (props) => {
  const { addOpen, addClose, searchText, listData, reload } = props;
  const { enqueueSnackbar } = useSnackbar();
  const theme: any = useTheme();
  const [edit, setEdit] = useState({
    value: null,
    open: false,
  });
  const [view, setView] = useState({
    value: null,
    open: false,
  });
  const [isLockDialog, setIsLockDialog] = useState<{
    open: boolean;
    value: {
      UserID: number;
      ButtonTitle: string;
      Locked: number;
    } | null;
  }>({
    open: false,
    value: null,
  });

  const [deleteData, setDeleteData] = useState({
    value: {},
    open: false,
  });

  const deleteBoxClose = () => setDeleteData({ open: false, value: {} });

  const onLockHandler = async () => {
    try {
      const UserID = isLockDialog?.value?.UserID;
      const res = await AgeusersAPI("put", {
        params: `${UserID}`,
        data: {
          Locked: isLockDialog.value?.Locked,
        },
      });
      if (res?.status === 200) {
        reload();
        enqueueSnackbar(res?.data?.message || UPDATE_MESSAGE, {
          variant: "success",
        });
        setIsLockDialog({ open: false, value: null });
      }
    } catch (err: any) {
      enqueueSnackbar(SOMETHING_WENT_WRONG, { variant: "error" });
    }
    deleteBoxClose();
  };


  const columns = useMemo(
    () => [
      {
        header: "Person Details",
        accessorKey: "PreferredName",
        size: 40,
        cell: (cell: any) => (
          <Box className="flex items-center">
            <ProfileAvtar
              src={getImageUrl(
                "profile",
                cell.row.original.Photo,
                cell.row.original.Gender
              )}
              download={cell.row.original?.Photo || false}
            />
            <div className="flex flex-col">
              <Typography fontSize={"small"} textAlign="left" pl={2}>
                {cell.getValue()}
              </Typography>

              <Typography color="secondary.light" variant="body2" pl={2}>
                {cell.row.original.Gender}{" "}
                {cell.row.original.DOB
                  ? `|| ${dayjs().diff(cell.row.original.DOB, "year")} years`
                  : null}
              </Typography>
            </div>
          </Box>
        ),
      },
      {
        header: "Title/Position",
        accessorKey: "Designation",
        size: 10,
        cell: (cell: any) => (
          <Typography fontSize={"small"} textAlign="center">
            {cell.getValue()}
          </Typography>
        ),
      },
      {
        header: "Accreditation Number",
        accessorKey: "ACRCardNo",
        size: 10,
        cell: (cell: any) => (
          <Typography fontSize={"small"} textAlign="center">
            {cell.getValue()}
          </Typography>
        ),
      },

      {
        header: "Zones",
        accessorKey: "Active",
        size: 10,
        cell: (cell: any) => (
          <Typography
            variant="subtitle1"
            color="secondary.main"
            display="flex"
            gap={1}
            alignItems={"center"}
          >
            {cell.row.original?.Zone1 != 0 ? <div className="bg-gray-100 border rounded-full h-6 w-6 flex justify-center items-center">
              1
            </div> : ''}
            {cell.row.original?.Zone2 != 0 ? <div className="bg-gray-100 border rounded-full h-6 w-6 flex justify-center items-center">
              2
            </div> : ''}
            {cell.row.original?.Zone3 != 0 ? <div className="bg-gray-100 border rounded-full h-6 w-6 flex justify-center items-center">
              3
            </div> : ''}
            {cell.row.original?.Zone4 != 0 ? <div className="bg-gray-100 border rounded-full h-6 w-6 flex justify-center items-center">
              4
            </div> : ''}
            {cell.row.original?.Zone5 != 0 ? <div className="bg-gray-100 border rounded-full h-6 w-6 flex justify-center items-center">
              5
            </div> : ''}
            {cell.row.original?.Zone6 != 0 ? <div className="bg-gray-100 border rounded-full h-6 w-6 flex justify-center items-center">
              6
            </div> : ''}
          </Typography>
        ),
      },
      {
        header: "Status",
        accessorKey: "Photo",
        size: 10,
        cell: (cell: any) => (
          <Box className='flex items-center justify-center gap-2'>
            <Tooltip title="Photo" arrow>
              <Typography fontSize={"small"} textAlign="center" className="w-[15px] h-[15px] rounded-full cursor-pointer" sx={{
                backgroundColor: cell.getValue() ? theme.palette.success.light : theme.palette.error.light,
              }} /></Tooltip>
            <Tooltip title="Document/Identity ID">
              <Typography fontSize={"small"} textAlign="center" className="w-[15px] h-[15px] rounded-full cursor-pointer" sx={{
                backgroundColor: cell.row.original.SupportDocuments ? theme.palette.success.light : theme.palette.error.light,
              }} /></Tooltip>

          </Box>
        ),
      },
      {
        header: "Remark",
        accessorKey: "Remark",
        size: 10,
        cell: (cell: any) => (
          <Box className="flex items-center justify-center gap-2">{
            cell.row.original.Approved ?

              <Tooltip title={"Approved"}>
                <TableActionIcon>
                  <IconCircleCheck color={theme.palette.success.light} />
                </TableActionIcon>

              </Tooltip>
              :
              <Tooltip title={cell.getValue() ? <>
                {cell.getValue()}<br />
                {cell.row.original.Other}
              </> : undefined}>
                <TableActionIcon>
                  <IconExclamationCircle color={!cell.getValue()
                    ? theme.palette.success.light
                    : theme.palette.error.light} />
                </TableActionIcon>

              </Tooltip>
          }


          </Box>
        ),
      },
      {
        header: "Action",
        size: 10,
        cell: (cell: any) => (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Tooltip title="Document" arrow>
              <TableActionIcon
                sx={{
                  visibility: cell.row.original?.SupportDocuments
                    ? "inherit"
                    : "hidden",
                }}
              >
                <Link
                  to={
                    cell.row.original?.SupportDocuments
                      ? getImageUrl(
                        "agencydocuments",
                        cell.row.original?.SupportDocuments
                      )
                      : "#"
                  }
                  target="_blank"
                >
                  <IconFileTypeDoc
                    size={20}
                    className="blueIcon-hover"
                    color="gray"
                  />
                </Link>
              </TableActionIcon>
            </Tooltip>
            <Tooltip title="View" arrow>
              <TableActionIcon
                onClick={() =>
                  setView({ open: true, value: cell.row.original })
                }
              >
                <IconEye size={20} className="blueIcon-hover" />
              </TableActionIcon>
            </Tooltip>
            {!cell.row.original?.Approved ? <>
              <Tooltip title="Edit" arrow>
                <TableActionIcon
                  onClick={() =>
                    setEdit({ open: true, value: cell.row.original })
                  }
                >
                  <IconEdit size={20} className="blueIcon-hover" />
                </TableActionIcon>
              </Tooltip>
              <Tooltip title="Delete" arrow>
                <TableActionIcon
                  onClick={() =>
                    setDeleteData({
                      open: true,
                      value: cell.row.original.UserID,
                    })
                  }
                >
                  <BiTrash
                    size={20}
                    className="group-hover:text-[#fa896b] transition duration-150 group-hover:duration-500"
                  />
                </TableActionIcon>
              </Tooltip>
            </> : null}

            {/* {cell.row.original?.Locked ? (
              <Tooltip title="Sorry, You are locked." arrow>
                <TableActionIcon>
                  <IconLock size={20} className="blueIcon-hover " />
                </TableActionIcon>
              </Tooltip>
            ) : (
              <>
                <Tooltip title={"Lock"} arrow>
                  <TableActionIcon
                    onClick={() =>
                      setIsLockDialog({
                        open: true,
                        value: {
                          UserID: cell.row.original.UserID,
                          Locked: 1,
                          ButtonTitle: "Confirm & Lock",
                        },
                      })
                    }
                  >
                    <IconLockOpen size={20} className="blueIcon-hover" />
                  </TableActionIcon>
                </Tooltip>
              </>
            )} */}
          </Box>
        ),
      },
    ],
    [theme.palette.error.light, theme.palette.success.light]
  );

  const onDelete = async () => {
    try {
      const UserID = deleteData?.value;
      const res = await AgeusersAPI("delete", {
        params: UserID,
        data: {
          Deleted: 1,
        },
      });
      if (res?.status === 200) {
        enqueueSnackbar(DELETE_MESSAGE, {
          variant: "success",
        });
        reload();
      }
    } catch (err: any) {
      enqueueSnackbar(DELETE_ERROR_MESSAGE, { variant: "error" });
    }
    deleteBoxClose();
  };

  return (
    <>
      {listData?.length === 0 ? (
        <Box className="flex flex-col items-center">
          <img src={PlayerImg} alt="player" className="w-[10%]" />
          <Typography variant="h6">Your Team Awaits</Typography>
        </Box>
      ) : (
        <DataTable
          loading={false}
          showNotFound={false}
          data={listData || []}
          columns={columns}
          tablePagination={true}
          searchText={searchText}
        />
      )}
      <DeleteDialogBox
        open={deleteData?.open}
        onClickClose={deleteBoxClose}
        onClickOk={onDelete}
      />
      {edit.open && (
        <TeamAddEditDialog
          open={edit.open}
          close={() => setEdit({ open: false, value: null })}
          user={edit.value}
          reload={reload}
          variant="edit"
        />
      )}

      {addOpen && (
        <TeamAddEditDialog
          open={addOpen}
          close={addClose}
          user={null}
          reload={reload}
          variant="add"
        />
      )}

      {isLockDialog?.open && (
        <DeleteDialogBox
          open={isLockDialog?.open}
          onClickClose={() => setIsLockDialog({ open: false, value: null })}
          onClickOk={onLockHandler}
          headerTitle={"Confirm and Submit"}
          title={`
          Please ensure that record are accurate and final. Once submitted, any changes will NOT be permitted.`}
          confirmButtonTitle={isLockDialog?.value?.ButtonTitle}
          cancelButtonTitle="Cancel"
        />
      )}
      {view.open && (
        <ROUserDetailCard
          open={view.open}
          close={() => setView({ open: false, value: null })}
          data={view.value}
        />
      )}

    </>
  );
};

export default AgencyUserList;
