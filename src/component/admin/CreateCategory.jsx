import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { categoryCreate } from "../../slide/categorySlice";

const CreateCategory = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  console.log(img);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      categoryCreate({
        name,
        image: img,
      })
    );
  };
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
  return (
    <div className="create-container">
      <form action="" className="create-form" onSubmit={handleSubmit}>
        <h3>Create a Category</h3>
        <input type="file" accept="image/" onChange={handleProductImage} />
        <input
          type="text"
          required
          placeholder="Tên sản phẩm"
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Nhập hàng</button>
      </form>
    </div>
  );
};

export default CreateCategory;
