import React, { useContext, useState } from "react";
import { AddProduct } from "../../Component/Usecontext/Usecontext";
import { MdOutlineCancel } from "react-icons/md";
import { RiImageAddLine } from "react-icons/ri";

const AddCate = () => {
  const { category, setCategory } = useContext(AddProduct);
  const option = ["Active", "Deactive"];

  const [data, setData] = useState({
    image: "",
    category_name: "",
    category: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const [err, setErr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.category_name || !data.category || !data.status) {
      setErr("Fill All Blanks");
      return;
    }

    setErr("");
    setCategory([...category, { ...data }]);
    alert("✅ Product Stored Successfully");
    setData({ image: "", category_name: "", category: "", status: "" });
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
        Add Category
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex  gap-5">
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

          <div className="flex flex-col justify-between gap-1">
            <input
              name="category_name"
              value={data.category_name}
              onChange={handleChange}
              placeholder="Category Name"
              type="text"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              name="category"
              value={data.category}
              onChange={handleChange}
              placeholder="Category Code"
              type="text"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <select
              name="status"
              value={data.status}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Status</option>
              {option.map((item, i) => (
                <option value={item} key={i}>
                  {item}
                </option>
              ))}
            </select>
          </div>
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

export default AddCate;
