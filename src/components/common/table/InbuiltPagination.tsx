import React from "react";
import { styled } from "@mui/material/styles";
import { Pagination, Select, MenuItem, Typography, Alert,Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

const Option = styled(MenuItem)({
  fontSize: "small",
});

interface IInbuiltPagination {
  pageSize: number;
  setPageSize: (a: number) => void;
  count: number;
  setPageIndex: (a: number) => void;
  currentPage: number;
  totalData: number;
}

const InbuiltPagination: React.FC<IInbuiltPagination> = (props) => {
  const { pageSize, setPageSize, count, setPageIndex, currentPage, totalData } =
    props;

  const [snack, setSnack] = React.useState({
    message: "",
    open: false,
  });
  const sizeArray = [10, 25, 50, 100];

  const handleChangePage = (event: any, value: number) => {
    setPageIndex(value - 1);
  };

  const onChangePageSize = (event: any) => {
    const value = event.target.value;
    setPageSize(+value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "end",
        alignItems: "center",
        gap: 1,
        marginTop: "20px",
      }}
    >
      <Typography fontSize="small">
        Page {currentPage + 1 || 0} of {count || 0}
      </Typography>
      <Typography fontSize="small">Total {totalData || 0} items</Typography>
      <Pagination
        count={count}
        color="secondary"
        variant="outlined"
        shape="rounded"
        page={currentPage + 1}
        onChange={handleChangePage}
      />

      <>
        <Select
          color="secondary"
          sx={{
            fontSize: "small",
            ".MuiSelect-select": {
              p: 0.8,
            },
          }}
          value={pageSize || sizeArray[0].toString()}
          onChange={onChangePageSize}
        >
          {sizeArray.map((item, index) => (
            <Option value={item.toString()} key={index}>
              show {item} entries
            </Option>
          ))}
        </Select>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={snack.open}
          onClose={() => setSnack({ message: "", open: false })}
        >
          <Alert severity="error" sx={{ width: "100%" }}>
            {snack.message}
          </Alert>
        </Snackbar>
      </>
    </Box>
  );
};

export default InbuiltPagination;
