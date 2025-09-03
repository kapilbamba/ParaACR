import {
  Box,
  Button,
  DialogContent,
  Dialog,
  useTheme,
  Typography,
} from "@mui/material";
import {  IconFileTypePdf } from "@tabler/icons-react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import ProfileAvtar from "src/components/common/image/ProfileAvtar";
import { getFileExtension, getImageUrl } from "src/utils";

interface ROUserDetailCardProps {
  open: boolean;
  close: () => void;
  data: any;
  refetch?: VoidFunction;
}

const ROUserDetailCard: React.FC<ROUserDetailCardProps> = (props) => {
  const theme: any = useTheme();
  const { open, close, data } = props;



  return (
    <Dialog open={open} maxWidth="md" fullWidth onClose={close}>
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
        <div className="grid grid-cols-4 gap-2 px-4">
          <div>
            <Typography
              variant="subtitle1"
              color="secondary.main"
              display="flex"
              alignItems={"center"}
            >
              {data?.FirstName || "-"}
            </Typography>
            <Typography variant="body2" color="secondary.light">
              <span>First Name</span>
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle1"
              color="secondary.main"
              display="flex"
              alignItems={"center"}
            >
              {data?.MiddleName || "-"}
            </Typography>
            <Typography variant="body2" color="secondary.light">
              <span>Middle Name</span>
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle1"
              color="secondary.main"
              display="flex"
              alignItems={"center"}
            >
              {data?.LastName || "-"}
            </Typography>
            <Typography variant="body2" color="secondary.light">
              <span>Last Name</span>
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle1"
              color="secondary.main"
              display="flex"
              alignItems={"center"}
            >
              {dayjs(data?.DOB).format("MMM DD, YYYY") || "-"}
            </Typography>
            <Typography variant="body2" color="secondary.light">
              <span>DOB</span>
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle1"
              color="secondary.main"
              display="flex"
              alignItems={"center"}
            >
              {data?.Designation || "-"}
            </Typography>
            <Typography variant="body2" color="secondary.light">
              <span>Title/Position</span>
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle1"
              color="secondary.main"
              display="flex"
              alignItems={"center"}
            >
              {data?.FatherName || "-"}
            </Typography>
            <Typography variant="body2" color="secondary.light">
              <span>Father's Name</span>
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle1"
              color="secondary.main"
              display="flex"
              alignItems={"center"}
            >
              {data?.Gender || "-"}
            </Typography>
            <Typography variant="body2" color="secondary.light">
              <span>Gender</span>
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle1"
              color="secondary.main"
              display="flex"
              alignItems={"center"}
            >
              {data?.EmailID || "-"}
            </Typography>
            <Typography variant="body2" color="secondary.light">
              <span>Email</span>
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle1"
              color="secondary.main"
              display="flex"
              alignItems={"center"}
            >
              {data?.MobileNo || "-"}
            </Typography>
            <Typography variant="body2" color="secondary.light">
              <span>Mobile</span>
            </Typography>
          </div>

          <div>
            <Typography
              variant="subtitle1"
              color="secondary.main"
              display="flex"
              alignItems={"center"}
            >
              {data?.Venue || "-"}
            </Typography>
            <Typography variant="body2" color="secondary.light">
              <span>Venue</span>
            </Typography>
          </div>
          <div className="col-span-2">
            <Typography
              variant="subtitle1"
              color="secondary.main"
              display="flex"
              gap={1}
              alignItems={"center"}
            >
              {data?.Zone1 != 0 ? <div className="bg-gray-100 border rounded-full h-6 w-6 flex justify-center items-center">
                1
              </div> : ''}
              {data?.Zone2 != 0 ? <div className="bg-gray-100 border rounded-full h-6 w-6 flex justify-center items-center">
                2
              </div> : ''}
              {data?.Zone3 != 0 ? <div className="bg-gray-100 border rounded-full h-6 w-6 flex justify-center items-center">
                3
              </div> : ''}
              {data?.Zone4 != 0 ? <div className="bg-gray-100 border rounded-full h-6 w-6 flex justify-center items-center">
                4
              </div> : ''}
              {data?.Zone5 != 0 ? <div className="bg-gray-100 border rounded-full h-6 w-6 flex justify-center items-center">
                5
              </div> : ''}
              {data?.Zone6 != 0 ? <div className="bg-gray-100 border rounded-full h-6 w-6 flex justify-center items-center">
                6
              </div> : ''}
            </Typography>
            <Typography variant="body2" color="secondary.light">
              <span>Zone</span>
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <ProfileAvtar
              src={getImageUrl(
                "profile",
                data?.Photo
              )}
              download={data?.Photo || false}
            />
            <Typography variant="body2" color="secondary.light">
              <span>Profile Photo</span>
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle1"
              color="secondary.main"
              display="flex"
              alignItems={"center"}
            >
              {data?.IdentifyName}
            </Typography>
            <Typography variant="body2" color="secondary.light">
              <span>Identity ID</span>
            </Typography>
          </div>

          <div className="flex items-center gap-2">
            <Typography
              variant="subtitle1"
              color="secondary.main"
              display="flex"
              alignItems={"center"}
            >

              {data?.SupportDocuments && getFileExtension(data?.SupportDocuments) === 'pdf' ? <Link
                to={
                  data?.SupportDocuments
                    ? getImageUrl("agencydocuments", data?.SupportDocuments)
                    : "#"
                }
                target="_blank"
              > <IconFileTypePdf
                  size={20}
                  className="blueIcon-hover"
                  color="gray"
                />
              </Link>
                : <ProfileAvtar
                  src={getImageUrl(
                    "agencydocuments",
                    data?.SupportDocuments
                  )}
                  download={data?.SupportDocuments || false}
                />
              }


            </Typography>
            <Typography variant="body2" color="secondary.light">
              <span>Document/Identity ID</span>
            </Typography>
          </div>
          <div className="col-span-4">
            <Typography
              variant="subtitle1"
              color="secondary.main"
              display="flex"
              alignItems={"center"}
            >
              {data?.Address || '-'}
            </Typography>
            <Typography variant="body2" color="secondary.light">
              <span>Address</span>
            </Typography>
          </div>
        </div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "30px",
          }}
        >
          <Button color="primary" variant="contained" onClick={close}>
            Cancel
          </Button>
        </Box>
      </DialogContent>
    </Dialog >
  );
};

export default ROUserDetailCard;
