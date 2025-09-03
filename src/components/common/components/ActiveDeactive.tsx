/* eslint-disable eqeqeq */
import { Box, Tooltip } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";
import { getPayload } from "src/utils";
import MyCustomSwitch from "../forms/input-elements/CustomSwitch";

export default function ActiveDeactive(props: {
  cell: { [key: string]: any };
  idAccessor?: string;
  axiosFunction?: any;
  setData?: any;
  postfix?: string;
  payload?: Array<string>;
  refetch?: Function;
  disabled?:boolean;
  validation?: {
    params: string;
    postfix: string;
    message: string;
  };
}) {
  const {
    cell,
    axiosFunction,
    idAccessor,
    payload,
    postfix,
    setData,
    refetch,
    disabled,
  } = props;
  const { getValue } = cell;
  const { original } = cell.row;
  const [loading, setLoading] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const updateStatus = async (active: number, id: any) => {
    try {
      let res = await axiosFunction("put", {
        params: id,
        data: JSON.stringify({
          ...getPayload(original, payload),
          Active: `${active}`,
        }),
      });

      if (res.status === 200) {
        enqueueSnackbar(active === 1 ? "Activated" : "Deactivated", {
          variant: active === 1 ? "success" : "error",
        });
        if (refetch) await refetch();
        else {
          res = await axiosFunction("get", { postfix: postfix });
          if (res.status === 200) setData(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandle = async () => {
    setLoading(true);
    if (axiosFunction && idAccessor) {
      const active = getValue() == 1 ? 0 : 1;
      const id = original[idAccessor];
      await updateStatus(active, id);
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Tooltip title={getValue() ? "Deactivate" : "Activate"} arrow>
        <MyCustomSwitch
          checked={getValue()}
          onChange={clickHandle}
          loading={loading}
          disabled={disabled}
        />
      </Tooltip>
    </Box>
  );
}
