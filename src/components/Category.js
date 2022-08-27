/* eslint-disable array-callback-return */
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Checkbox, Col, Grid } from "rsuite";
import Products from "../products.json";
import CartItem from "./CartItem";
import Product from "./Product";

function Category() {
  const { pid } = useParams();
  const [item, setItem] = useState([]);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const data = [];
    Products.map((product) => {
      if (product.categoryId === pid) {
        data.push(product);
      }
    });
    setItem(data);
  }, [pid]);

  const onChecked = useCallback(() => {
    setChecked((p) => !p);
  }, []);

  return (
    <>
      <Grid>
        <Col xs={24} md={6}>
          <div className="filter">
            <h1>Filters</h1>
            <Checkbox onClick={onChecked} value={checked}>
              Delivery
            </Checkbox>
          </div>
        </Col>
        <Col xs={24} md={18}>
          <CartItem />
          {checked && (
            <div className="products">
              {item.map((ele) => {
                if (ele.delivery) {
                  return <Product prod={ele} key={ele.id} />;
                }
              })}
            </div>
          )}
          {!checked && (
            <div className="products">
              {item.map((ele) => (
                <Product prod={ele} key={ele.id} />
              ))}
            </div>
          )}
        </Col>
      </Grid>
    </>
  );
}

export default Category;
