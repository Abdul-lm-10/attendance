import React, { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";
import { TbCategoryPlus } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideNav = () => {
  const sideNav = [
    {
      image: <MdOutlineSpaceDashboard />,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      image: <AiFillProduct />,
      title: [
        { subtitle: "Product", path: "/product" },
        { subtitle: "Add Product", path: "/addproduct" },
      ],
    },
    {
      image: <TbCategoryPlus />,
      title: [
        { subtitle: "Category", path: "/category" },
        { subtitle: "Add Category", path: "/addcategory" },
      ],
    },
    { image: <FaShop />, title: "Orders", path:"/orders" },
    { image: <IoSettingsOutline />, title: "Settings", path: "/setting" },
  ];

  const [drop, setDrop] = useState(null);

  const handleDrop = (index) => {
    setDrop(drop === index ? null : index);
  };

  return (
    <div>
      <div className="w-2/12 bg-gradient-to-r from-green-400 to-blue-500 h-screen fixed left-0 top-0 ">
        {sideNav.map((item, i) => (
          <div key={i}>
            <div
              className={`flex flex-row justify-between text-lg px-5 py-3 text-white font-medium cursor-pointer ${
                drop === i ? "backdrop-blur-3xl" : "bg-transparent"
              }`}
              onClick={() => handleDrop(i)}
            >
              <Link to={item.path}>
                <div className={`flex flex-row gap-2 `}>
                  <p className="mt-1 text-xl">{item.image}</p>
                  <p>
                    {Array.isArray(item.title)
                      ? item.title[0].subtitle
                      : item.title}{" "}
                  </p>
                </div>
                </Link>
                <div>
                  {Array.isArray(item.title) && (
                    <p
                      className={`transition-all duration-300  py-1 text-2xl font-bold ${
                        drop === i ? "rotate-90" : "rotate-0"
                      }`}
                    >
                      <MdKeyboardArrowRight />
                    </p>
                  )}
                </div>
             
            </div>

            {/* Dropdown */}
            {drop === i && Array.isArray(item.title) && (
              <div className="ml-10">
                {item.title.map((sub, index) => (
                  <p
                    key={index}
                    className="text-base text-white cursor-pointer py-1"
                  >
                    <Link to={sub.path}>- {sub.subtitle}</Link>{" "}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
