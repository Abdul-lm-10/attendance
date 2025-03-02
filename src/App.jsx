import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout";
import Product from "./Pages/Product/Index";
import { AddProduct } from "./Component/Usecontext/Usecontext";
import AddPro from "./Pages/Product/AddProduct";
import Category from "./Pages/Category/Category";
import AddCate from "./Pages/Category/AddCate";

const App = () => {
  const [product, setProduct] = useState([]); // Fixed here ✅
  const [category , setCategory]=useState([])

  return (
    <AddProduct.Provider value={{ product, setProduct, category, setCategory }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" />
            <Route path="/product" element={<Product />} />
            <Route path="/addproduct" element={<AddPro />} />
            <Route path="/category" element={<Category/>}/>
            <Route path="/addcategory" element={<AddCate/>}/>
            <Route path="/orders" />
            <Route path="/setting" />
          </Route>
        </Routes>
      </BrowserRouter>
    </AddProduct.Provider>
  );
};

export default App;
