import React from "react";
import "../styles/categories.styles.scss";
import CategoryItems from "./CategoryItems";
import { categories } from "../utils/data";
import { Outlet } from "react-router-dom";

// console.log(categories);

const EcommerceView = () => {
  return (
    <>
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryItems key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default EcommerceView;
