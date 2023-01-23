import * as React from "react";
import { useEffect } from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/store";
//import styled from "styled-components";
import { selectEmployeesList } from "../store/employee.slice";

// const rows: GridRowsProp = [];

const columns: GridColDef[] = [
  {
    field: "col1",
    headerName: "Name",
    headerAlign: "center",
    align: "center",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "col2",
    headerName: "Birthdate",
    headerAlign: "center",
    align: "center",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "col3",
    headerName: "Address",
    headerAlign: "center",
    align: "center",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "col4",
    headerName: "State",
    headerAlign: "center",
    align: "center",
    flex: 1,
    minWidth: 50,
  },
  {
    field: "col5",
    headerName: "Department",
    headerAlign: "center",
    align: "center",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "col6",
    headerName: "Start date",
    headerAlign: "center",
    align: "center",
    flex: 1,
    minWidth: 100,
  },
];

const TableDataGrid = () => {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const [pageSize, setPageSize] = React.useState<number>(10);
  const employeesArray = useTypedSelector(selectEmployeesList);
  const rows: GridRowsProp = employeesArray;

  return (
    <div style={{ height: "80%", width: "100%" }}>
      <DataGrid
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        pagination
        rows={rows}
        getRowHeight={() => "auto"}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 250 },
            printOptions: { disableToolbarButton: true },
            csvOptions: { disableToolbarButton: true },
          },
        }}
        sx={{
          m: 3,
          "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": { py: "8px" },
          "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
            py: "15px",
          },
          "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell": {
            py: "22px",
          },
        }}
      />
    </div>
  );
};

export default TableDataGrid;
