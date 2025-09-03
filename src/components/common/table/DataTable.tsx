import React, { useState, useEffect } from "react";
import {
  useReactTable,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  getPaginationRowModel,
  getFilteredRowModel as FilteredRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses,
  Box,
  TableBody,
  TableContainer,
  CircularProgress,
  styled,
} from "@mui/material";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import RawDataNotFound from "./RawDataNotFound";
import InbuiltPagination from "./InbuiltPagination";

const TableHeaderCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.slate.main,
    color: theme.palette.secondary.dark,
    borderRight: "1px solid white",
    fontSize: 15,
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export interface DataTableProps {
  columns: ColumnDef<{ [key: string]: any }>[];
  data: Array<{ [key: string]: any }>;
  loading?: boolean;
  components?: {
    pagination?: React.ReactNode;
  };
  showNotFound?: boolean;
  children?: React.ReactNode;
  tablePagination?: any;
  searchText?: string;
  tableProps?: {
    disableSorting?: boolean;
    filtersHidden?: boolean;
  };
}

const DataTable = (props: DataTableProps) => {
  const {
    columns,
    data,
    loading,
    showNotFound,
    children,
    tablePagination,
    searchText,
    tableProps,
  } = props;
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: tablePagination ? tablePagination?.size || 10  : 25,
  });

  useEffect(() => {
    setGlobalFilter(searchText ?? "");
  }, [searchText]);

  const {
    getHeaderGroups,
    getRowModel,
    getState,
    setPageSize,
    setPageIndex,
    getPageCount,
    getFilteredRowModel,
  } = useReactTable({
    columns,
    data,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 25,
      },
    },
    state: {
      ...(!tableProps?.disableSorting && { sorting }),
      pagination,
      globalFilter,
    },

    onSortingChange: setSorting,
    enableGlobalFilter: true,
    enableSorting: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: FilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
  });

  const {
    pagination: { pageIndex, pageSize },
  } = getState();

  // Get the total length of the filtered rows
  const filteredRowLength = getFilteredRowModel().rows.length;

  return (
    <Box
      sx={{
        marginBottom: 2,
      }}
    >
      <TableContainer
        sx={{
          borderRadius: "8px",
          // border:"1px groove #cbd5e1 "
        }}
      >
        <Table>
          <TableHead>
            {getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    colSpan={header.colSpan}
                    sx={{
                      padding: 1.2,
                      minWidth: header.column.columnDef.minSize
                        ? `${header.column.columnDef.minSize}px`
                        : "auto",
                      maxWidth: header.column.columnDef.minSize
                        ? `${header.column.columnDef.maxSize}px`
                        : "auto",
                      width: header.column.columnDef.size
                        ? `${header.column.columnDef.size}%`
                        : "auto",

                      position: "relative",
                    }}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 0.2,
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                      {{
                        asc: (
                          <Box
                            sx={{
                              position: "absolute",
                              right: "1px",
                              opacity: "0.5",
                              fontSize: "0.7rem",
                            }}
                            component={"span"}
                          >
                            <AiFillCaretDown />
                          </Box>
                        ),
                        desc: (
                          <Box
                            sx={{
                              position: "absolute",
                              right: "1px",
                              opacity: "0.5",
                              fontSize: "0.7rem",
                            }}
                            component={"span"}
                          >
                            <AiFillCaretUp />
                          </Box>
                        ),
                      }[header.column.getIsSorted() as string] ?? null}
                    </Box>
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  align="center"
                  colSpan={columns.length}
                  sx={{ py: 1 }}
                >
                  <CircularProgress color="secondary" />
                </TableCell>
              </TableRow>
            ) : showNotFound || getRowModel().rows.length === 0 ? (
              <TableRow>
                <TableCell
                  align="center"
                  colSpan={columns.length}
                  sx={{ py: 1 }}
                >
                  <RawDataNotFound />
                </TableCell>
              </TableRow>
            ) : (
              getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      sx={{
                        paddingX: 2,
                        paddingY: 1,
                        minWidth: cell.column.columnDef.minSize
                          ? `${cell.column.columnDef.minSize}px`
                          : "auto",
                        maxWidth: cell.column.columnDef.minSize
                          ? `${cell.column.columnDef.maxSize}px`
                          : "auto",
                        width: cell.column.columnDef.size
                          ? `${cell.column.columnDef.size}% `
                          : "auto",
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {tablePagination ? (
        <InbuiltPagination
          pageSize={pageSize}
          setPageSize={setPageSize}
          count={getPageCount()}
          setPageIndex={setPageIndex}
          currentPage={pageIndex}
          totalData={filteredRowLength || 0} // Pass the filtered row length here
        />
      ) : null}
      {children}
    </Box>
  );
};

export default DataTable;
