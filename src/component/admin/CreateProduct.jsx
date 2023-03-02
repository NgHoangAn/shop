import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productCreate } from "../../slide/productSlice";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(10000);
  const [desc, setDesc] = useState("");
  const [brand, setBrand] = useState("");
  const [qty, setQty] = useState("");
  const [img, setImg] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const { items } = useSelector((state) => state.category);
  console.log(price);
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

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const random = () => {
    let ran = Math.floor(Math.random() * 100000);
    const ranF = `#FRESH${ran}`;
    return ranF;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      productCreate({
        name,
        brand,
        price,
        desc,
        code: random(),
        qty,
        image: img,
        categoryId,
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
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          {items ? (
            <>
              <option value=""> Nhóm, Loại </option>
              {items.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </>
          ) : (
            <option value=""> Nhóm, Loại </option>
          )}
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
          placeholder="Thương hiệu"
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Đơn giá"
          onChange={(e) => handlePrice(e)}
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
