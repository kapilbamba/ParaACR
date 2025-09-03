import { Card } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

import { AgedocumentsAPI } from "src/http/server-apis";
import MiniSpinner from "src/views/spinner/MiniSpinner";
import PageContainer from "src/components/common/components/PageContainer";
import Breadcrumb from "src/layouts/full/shared/breadcrumb/Breadcrumb";
import FilesList from "src/components/apps/agency/document/FilesList";
import { RootState } from "src/store/Store";

const Documents = () => {
  const { UserID } = useSelector((state: RootState) => state?.user);
  const [listData, setListData] = useState<any>([]);
  const [openFile, setOpenFile] = useState(false);
  const [openFolder, setOpenFolder] = useState(false);

  const queryData = useQuery(
    ["get-all-AgedocumentsAPI",UserID],
    () =>
      AgedocumentsAPI("get", {
        postfix: `?AgencyID=${UserID}`,
      }),
    {
      refetchOnWindowFocus: false,
      onSuccess(data) {
        if (data?.status === 200) {
          setListData(data?.data);
        }
      },
    }
  );
  if (queryData?.isLoading) {
    return <MiniSpinner />;
  }

  return (
    <PageContainer title={`Documents`}>
      <Breadcrumb title={`Documents`} showBackButton={true} />

      <Card>
        <FilesList
          {...queryData}
          listData={listData}
          openFile={openFile}
          openFolder={openFolder}
          closeFile={() => {
            setOpenFile(false);
          }}
          closeFolder={() => {
            setOpenFolder(false);
          }}
        />
      </Card>
    </PageContainer>
  );
};

export default Documents;
