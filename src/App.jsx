import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route path="/dashboard"/>
          <Route path="/product"/>
          <Route path="/addproduct"/>
          <Route path="/category"/>
          <Route path="/addcategory"/>
          <Route path="/orders"/>
          <Route path="/setting"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
