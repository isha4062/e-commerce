/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Grid } from "rsuite";
import Products from "../products.json";
import CartItem from "./CartItem";
import Product from "./Product";

function Category() {
  const { pid } = useParams();
  const [item, setItem] = useState([]);
  const [checked, setChecked] = useState("all");
  useEffect(() => {
    const data = [];
    Products.map((product) => {
      if (product.categoryId === pid) {
        data.push(product);
      }
    });
    setItem(data);
  }, [pid]);

  const handleChange = (e) => {
    setChecked(e.target.value);
  };

  return (
    <>
      <Grid>
        <Col xs={24} md={6}>
          <div className="filter">
            <h1>Filters</h1>
            <div className="radio">
              <label htmlFor="all">All</label>
              <input type="radio" name="fiter" value="all" id="all" onChange={handleChange} />
            </div>
            <div className="radio">
              <label htmlFor="delivery">Delivery</label>
              <input type="radio" name="fiter" value="delivery" id="delivery" onChange={handleChange} />
            </div>
            <h4>Price</h4>
            <div className="radio">
              <label htmlFor="80">Below 80 USD</label>
              <input type="radio" name="fiter" value="80" id="80" onChange={handleChange} />
            </div>
            <div className="radio">
              <label htmlFor="80-100">Between 80-100 USD</label>
              <input type="radio" name="fiter" value="80-100" id="80-100" onChange={handleChange} />
            </div>
            <div className="radio">
              <label htmlFor="100">Above 100 USD</label>
              <input type="radio" name="fiter" value="100" id="100" onChange={handleChange} />
            </div>
          </div>
        </Col>
        <Col xs={24} md={18}>
          <CartItem />
          {checked === "all" && (
            <div className="products">
              {item.map((ele) => (
                <Product prod={ele} key={ele.id} />
              ))}
            </div>
          )}
          {checked === "delivery" && (
            <div className="products">
              {item.map((ele) => {
                if (ele.delivery) {
                  return <Product prod={ele} key={ele.id} />;
                }
              })}
            </div>
          )}
          {checked === "80" && (
            <div className="products">
              {item.map((ele) => {
                if (ele.price < 80) {
                  return <Product prod={ele} key={ele.id} />;
                }
              })}
            </div>
          )}
          {checked === "80-100" && (
            <div className="products">
              {item.map((ele) => {
                if (ele.price >= 80 && ele.price <= 100) {
                  return <Product prod={ele} key={ele.id} />;
                }
              })}
            </div>
          )}
          {checked === "100" && (
            <div className="products">
              {item.map((ele) => {
                if (ele.price > 100) {
                  return <Product prod={ele} key={ele.id} />;
                }
              })}
            </div>
          )}
        </Col>
      </Grid>
    </>
  );
}

export default Category;
