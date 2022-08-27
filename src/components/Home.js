import React from "react";
import { Link } from "react-router-dom";
import categories from "../categories.json";
import CartItem from "./CartItem";

function Home() {
  return (
    <>
      <div>
        <CartItem />
      </div>
      <div className="category-page">
        {categories.map((category) => {
          return (
            <div key={category.id} className="category">
              <Link to={`/category/${category.id}`} className="link">
                <h2 className="text-grey">{category.name}</h2>
              </Link>
              <p className="text-black">{category.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
