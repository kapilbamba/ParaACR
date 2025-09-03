import {
  Avatar,
  Card,
  CardContent,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { IconEye, IconPencil, IconTrash, IconUsers } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

import NoImg from "src/assets/images/noImg.svg";
import { getImageUrl } from "src/utils";

const TeamCard = ({ TeamName, Image, onEdit, onDelete, TeamID }: any) => {
  const theme: any = useTheme();
  const navigate = useNavigate();
  return (
    <Card
      className="!p-0"
      id="graphCard"
      sx={{
        position: "relative",
        borderBottom: "4px solid",
        overflow: "hidden",
        transition: "ease-in-out 0.5s",
        cursor: "pointer",
        "&:hover": {
          transition: "ease-in-out 0.5s",
          transform: "scale(1.02)",
        },
      }}
    >
      <CardContent className="flex gap-2">
        <div className="flex flex-col basis-[70%]">
          <Typography
            variant="h5"
            className="flex-1 !mb-2"
            color={theme.palette.indigo.main}
          >
            {TeamName}
          </Typography>

          <Typography variant="body2" color={theme.palette.gray.main}>
            Action
          </Typography>

          <div className="flex gap-3 mt-2">
            <Tooltip title="Team" arrow>
              <Avatar
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: theme.palette.primary.lighter,
                  cursor: "pointer",
                }}
                onClick={() => navigate(`${TeamID}`)}
              >
                <IconUsers size={20} color={theme.palette.primary.dark} />
              </Avatar>
            </Tooltip>
            <Tooltip title="View" arrow>
              <Avatar
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: theme.palette.warning.lighter,
                  cursor: "pointer",
                }}
                onClick={() => navigate(`${TeamID}`)}
              >
                <IconEye size={20} color={theme.palette.warning.dark} />
              </Avatar>
            </Tooltip>
            <Tooltip title="Edit" arrow>
              <Avatar
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: theme.palette.success.lighter,
                  cursor: "pointer",
                }}
                onClick={onEdit}
              >
                <IconPencil size={20} color={theme.palette.success.dark} />
              </Avatar>
            </Tooltip>
            <Tooltip title="Edit" arrow>
              <Avatar
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: theme.palette.error.lighter,
                  cursor: "pointer",
                }}
                onClick={onDelete}
              >
                <IconTrash size={20} color={theme.palette.error.dark} />
              </Avatar>
            </Tooltip>
          </div>
        </div>
        <div className="w-[30%]" onClick={() => navigate(`${TeamID}`)}>
          <img
            src={Image ? getImageUrl("country", Image) : NoImg}
            alt="ChennaiImage"
            className="w-full rounded-md h-[15vh] object-contain"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
