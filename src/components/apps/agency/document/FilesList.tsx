/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Tooltip, Typography, useTheme } from "@mui/material";
import { BiFile } from "react-icons/bi";
import { BsExclamationTriangle, BsFileExcel, BsFilePdf, BsFilePpt, BsFiletypeCsv, BsFiletypeDoc, BsImage } from "react-icons/bs";
import { IconEye } from "@tabler/icons-react";

import CustomLinkTag from "src/components/common/uiElements/CustomLinkTag";
import { getFileExtension, getImageUrl } from "src/utils";

const fileTypes: any = {
  docx: <BsFiletypeDoc size={25} />,
  doc: <BsFiletypeDoc size={25} />,
  ppt: <BsFilePpt size={25} />,
  pptx: <BsFilePpt size={25} />,
  excel: <BsFileExcel size={25} />,
  xls: <BsFileExcel size={25} />,
  xlsx: <BsFileExcel size={25} />,
  csv: <BsFiletypeCsv size={25} />,
  pdf: <BsFilePdf size={25} />,
  default: <BiFile size={25} />,
  png: <BsImage size={25} />,
  jpg: <BsImage size={25} />,
  jpeg: <BsImage size={25} />,
  gif: <BsImage size={25} />,
  bmp: <BsImage size={25} />,
  svg: <BsImage size={25} />,
};

function getFileIconByExtension(name: any) {
  const extension = name?.split(".").pop().toLowerCase();
  return fileTypes[extension] || fileTypes.default;
}

const FilesList = ({
  listData,
}: any) => {
  const theme = useTheme();

  return (
    <div className="column items-center justify-center">
      {listData?.length === 0 ? (
        <div className="flex items-center justify-center flex-col h-[50vh]">
          <BsExclamationTriangle size={45} color={theme.palette.gray?.light} />
          <Typography variant="h6" mt={1} color={theme.palette.secondary.main}>
            No Record Found
          </Typography>
        </div>
      ) : (
        <>
          {listData?.length > 0 ? (
            <div className="grid grid-cols-5 gap-3 bg-[#e0e0e0] mb-1 rounded-ss-md rounded-se-md  p-2 py-3">
              <Typography
                variant="subtitle1"
                className="col-span-3"
                fontWeight={600}
                lineHeight="20px"
              >
                File Name
              </Typography>

              <Typography
                variant="subtitle1"
                className="text-center"
                fontWeight={600}
                lineHeight="20px"
              >
                File Type
              </Typography>

              <Typography
                variant="subtitle1"
                className="text-center"
                fontWeight={600}
                lineHeight="20px"
              >
                Action
              </Typography>
            </div>
          ) : (
            null
          )}
          <ul className=" gap-2 grid grid-cols-1">
            {listData?.map((x: any, i: number) => (
              <li
                className={`grid grid-cols-5 gap-3 ${(i + 1) % 2 === 0 ? "bg-[#f1f5f9]" : "bg-[#fff]"
                  } p-2 `}
                key={x.DocumentID}
              >
                <div className="flex items-center col-span-3 gap-3">
                  <Avatar sx={{
                    backgroundColor: theme.palette.gray?.lighter,
                    color: theme.palette.gray?.dark,
                  }} >
                    {getFileIconByExtension(x.Document)}
                  </Avatar>

                  <Typography variant="subtitle2" className="flex flex-1">
                    {x.DocumentTitle}
                  </Typography>
                </div>

                <div className="flex flex-col items-center justify-center   px-1">
                  <Typography variant="subtitle2">{getFileExtension(x?.Document || '')}</Typography>
                </div>

                <div className="flex  items-center justify-center   px-1">
                  <CustomLinkTag
                    to={
                      getImageUrl('agencydocuments', x.Document)
                    }
                    target="_blank"
                  >
                    <Tooltip title="View" arrow>
                      <IconEye size={20} className="blueIcon-hover" />
                    </Tooltip>
                  </CustomLinkTag>

                </div>
              </li>
            ))}
          </ul>
        </>
      )}

    </div>
  );
};

export default FilesList;
