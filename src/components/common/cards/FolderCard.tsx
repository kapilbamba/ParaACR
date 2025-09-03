import {
  Avatar,
  Box,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import {
  BiEdit,
  BiRightArrowAlt,
  BiTrash,
} from "react-icons/bi";
import { FcFolder } from "react-icons/fc";

const FolderCard = (props: any) => {
  const { FolderName, onClickFolder, onClickDelete, edit } = props;
  const theme = useTheme();
  return (
    <div className="group overflow-hidden relative cursor-pointer border border-gray-200 p-5 rounded-md shadow-sm">
      <div className="flex items-center justify-between">
        <FcFolder size={60} onClick={onClickFolder} />

        <div className="flex items-center flex-col justify-center gap-4">
          <Tooltip title="Edit" arrow>
            <Avatar
              onClick={edit}
              sx={{
                width: 30,
                height: 30,
                backgroundColor: theme.palette.success.lighter,
                color: theme.palette.success.dark,
                cursor: "pointer",
              }}
            >
              <BiEdit size={18} />
            </Avatar>
          </Tooltip>
          <Tooltip title="Delete" arrow>
            <Avatar
              onClick={onClickDelete}
              sx={{
                width: 30,
                height: 30,
                backgroundColor: theme.palette.error.lighter,
                color: theme.palette.error.main,
                cursor: "pointer",
              }}
            >
              <BiTrash size={18} />
            </Avatar>
          </Tooltip>
        </div>
      </div>

      <Box
        className="flex items-center justify-center mt-3"
        onClick={onClickFolder}
      >
        <Typography variant="h6"  color="secondary.main" className="flex flex-1 !font-bold">
          {FolderName}
        </Typography>

        <Avatar
          sx={{
            width: 30,
            height: 30,
            backgroundColor: theme.palette.primary.lighter,
            color: theme.palette.primary.main,
            cursor: "pointer",
          }}
          className=" scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0  transition-all duration-300 group-hover:duration-500"
        >
          <BiRightArrowAlt size={18} />
        </Avatar>
      </Box>
    </div>
  );
};

export default FolderCard;
