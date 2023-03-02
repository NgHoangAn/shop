import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { categoryDelete } from "../../../slide/categorySlice";

const CategoryList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.category);
  console.log(items);
  const rows =
    items &&
    items.map((item) => {
      return {
        id: item._id,
        cName: item.name,
      };
    });
  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "cName",
      headerName: "Name",
      width: 120,
    },
    {
      field: "actions",
      headerName: "Tác vụ",
      sortable: false,
      width: 200,
      renderCell: (params) => {
        return (
          <Actions>
            <Delete onClick={() => handleDelete(params.row.id)}>Xóa</Delete>
            <EditProduct>Sửa</EditProduct>
            <View>Xem</View>
          </Actions>
        );
      },
    },
  ];
  const handleDelete = (id) => {
    dispatch(categoryDelete(id));
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default CategoryList;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    border: none;
    outline: none;
    padding: 3px 5px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
`;
const Delete = styled.button`
  background-color: #dc3545;
  :hover {
    background-color: #c82333;
  }
`;
const EditProduct = styled.button`
  background-color: #17a2b8;
  :hover {
    background-color: #138496;
  }
`;
const View = styled.button`
  background-color: #28a745;
  :hover {
    background-color: #218838;
  }
`;
