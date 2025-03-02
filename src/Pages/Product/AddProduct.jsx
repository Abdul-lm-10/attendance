import React, { useContext, useState } from "react";
import { AddProduct } from "../../Component/Usecontext/Usecontext";
import { MdOutlineCancel } from "react-icons/md";
import { RiImageAddLine } from "react-icons/ri";

const AddPro = () => {
  const { product, setProduct } = useContext(AddProduct);
  const option = ["Kg", "ml", "Gram"];

  const [data, setData] = useState({
    image: "",
    p_name: "",
    category: "",
    currentQty: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const [err, setErr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.p_name || !data.category || !data.currentQty || !data.type) {
      setErr("Fill All Blanks");
      return;
    }

    setErr("");
    setProduct([...product, { ...data }]);
    alert("✅ Product Stored Successfully");
    setData({ image: "", p_name: "", category: "", currentQty: "", type: "" });
  };

  const handleImage = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((prev) => ({ ...prev, image: reader.result })); // This line is fine
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImage(file);
  };

  const removeImage = () => {
    setData((prev) => ({ ...prev, image: "" }));
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
        Add Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-1">
          <input
            name="p_name"
            value={data.p_name}
            onChange={handleChange}
            placeholder="Product Name"
            type="text"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            name="category"
            value={data.category}
            onChange={handleChange}
            placeholder="Category"
            type="text"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex gap-1">
          <input
            name="currentQty"
            value={data.currentQty}
            onChange={handleChange}
            placeholder="Quantity"
            type="number"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <select
            name="type"
            value={data.type}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Option</option>
            {option.map((item, i) => (
              <option value={item} key={i}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div
          className="border-dashed border-2 border-blue-500 rounded-lg p-6 text-center cursor-pointer"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => handleImage(e.target.files[0])}
            className="hidden"
            id="fileInput"
          />

          {data.image ? (
            <div className="text-center">
              <div className="text-right">
                <button
                  type="button"
                  onClick={removeImage}
                  className=" text-black text-2xl cursor-pointer"
                >
                  <MdOutlineCancel />
                </button>
              </div>
              <img
                src={data.image}
                alt="Preview"
                className="w-35 h-35 object-cover rounded-lg mx-auto border mb-2"
              />
            </div>
          ) : (
            <label
              htmlFor="fileInput"
              className="cursor-pointer flex flex-col items-center justify-center text-center"
            >
              <span className="text-7xl mb-4">
                <RiImageAddLine />
              </span>
              <span>Drag & Drop or Click to Upload Image</span>
            </label>
          )}
        </div>
        {err && <div className="text-red-500 text-base text-right">{err}</div>}

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-4/12 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPro;
