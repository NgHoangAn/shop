import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const ProductsList = () => {
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.products);
  console.log(items);
  const rows =
    items &&
    items.map((item) => {
      return {
        id: item._id,
        imageUrl: item.image.url,
        pName: item.name,
        pDesc: item.desc,
        price: item.price.toLocaleString(),
        qty: item.qty.toLocaleString(),
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "imageUrl",
      headerName: "Hình ảnh",
      width: 100,
      renderCell: (params) => {
        return (
          <ImageContainer>
            <img src={params.row.imageUrl} alt="product" />
          </ImageContainer>
        );
      },
    },
    { field: "pName", headerName: "Tên sản phẩm", width: 200 },
    { field: "pDesc", headerName: "Mô tả chi tiết", width: 220 },
    { field: "price", headerName: "Đơn giá", width: 120 },
    { field: "qty", headerName: "Tồn kho", width: 120 },
    {
      field: "actions",
      headerName: "Tác vụ",
      sortable: false,
      width: 200,
      renderCell: (params) => {
        return (
          <Actions>
            <Delete>Xóa</Delete>
            <EditProduct>Sửa</EditProduct>
            <View onClick={() => navigate(`/product/${params.row.id}`)}>
              Xem
            </View>
          </Actions>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      ></DataGrid>
    </div>
  );
};

export default ProductsList;

const ImageContainer = styled.div`
  img {
    height: 40px;
    width: 50px;
  }
`;
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
