import { Box, Button } from "@mui/material";
import { ChangeEvent } from "react";

import RowSearch from "./RowSearch";

const Toolbar = (props: any) => {
  const { searchText, onSearchProps, setSearchText, component, addProps, buttonProps } = props;

  const handleTextChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = e.target.value;
    if (value?.startsWith(" ")) value = value.trim();
    setSearchText(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "space-between",
        paddingBottom: 1,
      }}
    >
      {onSearchProps ? (
        <Box width={300}>
          <RowSearch
            value={searchText}
            onChange={(e) => handleTextChange(e)}
            placeholder="Search"
            setSearchText={setSearchText}
          />
        </Box>
      ) : null}
      <Box sx={{
        display: "flex",
        gap: 1,
        justifyContent: "end",
        paddingBottom: 1,
      }}>


        {component ? <Box> {component}</Box> : null}
        {buttonProps?.title ? (
          <Button
            variant="contained"
            color="secondary"
            sx={{
              padding: "6px 30px",
            }}
            onClick={buttonProps.onClick}
            disabled={buttonProps?.disabled}
          >
            {buttonProps.title}
          </Button>
        ) : null}
        {addProps?.title ? (
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "6px 30px",
            }}
            onClick={addProps.onClick}
            disabled={addProps?.disabled}
          >
            {addProps.title}
          </Button>
        ) : null}
      </Box>

    </Box>
  );
};

export default Toolbar;
