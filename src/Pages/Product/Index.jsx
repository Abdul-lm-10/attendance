import React, { useContext, useState } from "react";
import { AddProduct } from "../../Component/Usecontext/Usecontext";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = () => {
  const { product, setProduct } = useContext(AddProduct);
  const [search, setSearch] = useState("");

  const filteredProducts = product.filter((item) =>
    item.p_name.toLowerCase().includes(search.toLowerCase())
  );

  const searchHandle = (e) => {
    setSearch(e.target.value);
  };

  const deletRow = (i) => {
    setProduct((prev) => prev.filter((item, index) => index !== i));
  };
  
  return (
    <div className="p-4">
      {product.length > 0 ? (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <div className="mb-5 px-5 flex justify-between">
            <input
              type="search"
              value={search}
              onChange={searchHandle}
              className="border rounded p-1 text-base"
              placeholder="Search Product.."
            />
            <button className="bg-blue-400 p-2 rounded text-white cursor-pointer">
             <Link to="/addproduct"> + Add Product</Link>  
                </button>
          </div>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-2 px-4 border-b">S.No</th>
                <th className="py-2 px-4 border-b">Product Name</th>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Type</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody >
              {filteredProducts.map((item, i) => (
                <tr key={i} className="hover:bg-gray-100 border-b">
                  <td className="py-2 px-4">{i + 1}</td>
                  <td className="py-2 px-4">{item.p_name}</td>
                  <td className="py-2 px-4">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt="Product"
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="py-2 px-4">{item.category}</td>
                  <td className="py-2 px-4">{item.currentQty}</td>
                  <td className="py-2 px-4">{item.type}</td>
                  <td className="py-2 px-4 mt-6 gap-2 text-xl text-blue-500 cursor-pointer flex">
                    <MdModeEditOutline className="hover:text-blue-700" />
                    <MdDelete className="hover:text-red-700" onClick={()=>deletRow(i)}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No Products Added Yet ❌</p>
      )}
    </div>
  );
};

export default Product;
