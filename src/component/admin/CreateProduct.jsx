import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productCreate } from "../../slide/productSlice";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [brand, setBrand] = useState("");
  const [qty, setQty] = useState("");
  const [img, setImg] = useState("");
  
  const handleProductImage = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };

  const TransformFile = (file) => {
    const render = new FileReader();
    if (file) {
      render.readAsDataURL(file);
      render.onloadend = () => {
        setImg(render.result);
      };
    } else {
      setImg("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      productCreate({
        name,
        brand,
        price,
        desc,
        qty,
        image: img,
      })
    );
  };
  return (
    <div className="create-container">
      <form action="" className="create-form" onSubmit={handleSubmit}>
        <h3>Create a Product</h3>
        <input type="file" accept="image/" onChange={handleProductImage} />
        <select
          name=""
          id=""
          onChange={(e) => setBrand(e.target.value)}
          required
        >
          <option value="">Thương hiệu</option>
          <option value="fresh-market">Fresh Market</option>
          <option value="bapi">Bapi</option>
          <option value="th-true-milk">TH True Milk</option>
        </select>
        <input
          type="text"
          required
          placeholder="Tên sản phẩm"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Đơn giá"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Số lượng"
          onChange={(e) => setQty(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Mô tả"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="submit">Nhập hàng</button>
      </form>
      <div className="imgReview">
        {img ? (
          <>
            <img src={img} alt="product" />
          </>
        ) : (
          <>Image preview will appear here!</>
        )}
      </div>
    </div>
  );
};

export default CreateProduct;
