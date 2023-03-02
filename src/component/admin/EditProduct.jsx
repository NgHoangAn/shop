import { useState } from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { productsEdit } from "../../slide/productSlice";

export default function EditProduct({ paramsId }) {
  const [open, setOpen] = useState(false);
  const [productImg, setProductImg] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  //const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const { items, editStatus } = useSelector((state) => state.products);
  const [currentProd, setCurrentProd] = useState({});
  const [previewImg, setPreviewImg] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [cateName, setCateName] = useState("");
  const cateItems = useSelector((state) => state.category.items);
  console.log(cateName);
  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };
  const TransformFile = (file) => {
    const render = new FileReader();
    if (file) {
      render.readAsDataURL(file);
      render.onloadend = () => {
        setProductImg(render.result);
        setPreviewImg(render.result);
      };
    } else {
      setProductImg("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      productsEdit({
        productImg,
        product: {
          ...currentProd,
          name: name,
          categoryId: categoryId,
          brand: brand,
          price: price,
          desc: desc,
        },
      })
    );
  };
  const handleClickOpen = () => {
    setOpen(true);
    let selectedProp = items.filter((item) => item._id === paramsId);
    selectedProp = selectedProp[0];
    setCurrentProd(selectedProp);
    setPreviewImg(selectedProp.image.url);
    setProductImg("");
    setCategoryId(selectedProp.categoryId);
    setBrand(selectedProp.brand);
    setName(selectedProp.name);
    setPrice(selectedProp.price);
    setDesc(selectedProp.desc);
    cateItems &&
      cateItems.map((cate) => {
        if (cate._id === categoryId) {
          setCateName(cate.name);
        }
        return cateName;
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Edit variant="outlined" onClick={handleClickOpen}>
        Edit
      </Edit>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <StyledCreateProduct>
            <StyledForm onSubmit={handleSubmit}>
              <div className="edit-filed-area">
                <label className="filed-title" htmlFor="">
                  Hình ảnh
                </label>
                <input
                  className="filed-content"
                  type="file"
                  accept="image/"
                  onChange={handleProductImageUpload}
                />
              </div>

              <div className="edit-filed-area">
                <label className="filed-title" htmlFor="">
                  Loại sản phẩm
                </label>
                <select
                  className="filed-content"
                  name=""
                  id=""
                  onChange={(e) => setCategoryId(e.target.value)}
                  required
                  value={categoryId}
                >
                  {cateItems ? (
                    <>
                      <option value=""> Nhóm, Loại </option>
                      {cateItems.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      ))}
                    </>
                  ) : (
                    <option value=""> Nhóm, Loại </option>
                  )}
                </select>
              </div>
              <div className="edit-filed-area">
                <label className="filed-title" htmlFor="">
                  Tên sản phẩm
                </label>
                <input
                  className="filed-content"
                  type="text"
                  required
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="edit-filed-area">
                <label className="filed-title" htmlFor="">
                  Thương hiệu
                </label>
                <input
                  className="filed-content"
                  type="text"
                  required
                  placeholder="name"
                  value={brand}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="edit-filed-area">
                <label className="filed-title" htmlFor="">
                  Đơn giá
                </label>
                <input
                  className="filed-content"
                  type="text"
                  required
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="edit-filed-area">
                <label className="filed-title" htmlFor="">
                  Mô tả
                </label>
                <input
                  className="filed-content"
                  type="text"
                  required
                  placeholder="Short Description"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>

              <div className="btn-area">
                <PrimaryButton type="submit">
                  {editStatus === "pending" ? "Submitting" : "Submit"}
                </PrimaryButton>
              </div>
            </StyledForm>
            <ImagePreview>
              {previewImg ? (
                <>
                  <img src={previewImg} alt="product" />
                </>
              ) : (
                <>Image preview will appear here!</>
              )}
            </ImagePreview>
          </StyledCreateProduct>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const Edit = styled.button`
  border: none;
  outline: none;
  padding: 3px 5px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  background-color: #4b70e2;
`;
const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 2rem 0 0 2rem;
  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;
    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }
  select {
    color: rgb(95, 95, 95);
  }
  .edit-filed-area {
    display: flex;
    align-items: center;
    .filed-title {
      width: 30%;
    }
    .filed-content {
      width: 70%;
    }
  }
  .btn-area {
    display: flex;
    justify-content: center;
    button {
      width: 40%;
    }
  }
`;

const ImagePreview = styled.div`
  width: 30%;
  margin: 2rem 0 2rem 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(78, 78, 78);
  img {
    max-width: 100%;
  }
`;
export const PrimaryButton = styled.button`
  padding: 9px 12px;
  border-radius: 5px;
  font-weight: 400;
  letter-spacing: 1.15px;
  background-color: #4b70e2;
  color: #f9f9f9;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0.5rem 0;
`;
