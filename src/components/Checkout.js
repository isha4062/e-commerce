/* eslint-disable array-callback-return */
import React, { memo } from "react";
import { AiFillDelete } from "react-icons/ai";
import { RiAddCircleFill } from "react-icons/ri";
import { Col, Grid, Row } from "rsuite";
import { useProduct } from "../context/Product.context";

function Checkout() {
  const {
    state: { cart },
    dispatch,
  } = useProduct();
  return (
      <Grid className="table">
        <Row>
            <Col md={6}>item</Col>
            <Col md={5}>name</Col>
            <Col md={5}>price</Col>
            <Col md={3}>quantity</Col>
            <Col md={2}>add</Col>
            <Col md={2}>remove</Col>
          </Row>
          <hr />
          {cart.length === 0 && <h6 className="no-item">No items in the cart</h6>}
          {cart.length > 0 && cart.map((ele) => {
            return (
              <div key={ele.id}>
                <Row>
                  <Col md={6}>
                    <img
                      src={ele.thumbnail}
                      alt={ele.name}
                      width="200px"
                      height="100px" />
                  </Col>
                  <Col md={5}>{ele.name}</Col>
                  <Col md={5}>
                    {ele.currency} {ele.price}
                  </Col>
                  <Col md={3}>{ele.qty}</Col>
                  <Col md={2}>
                    <RiAddCircleFill
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch({
                        type: "ADD_QTY",
                        payload: ele
                      })} />
                  </Col>
                  <Col md={2}>
                    <AiFillDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: ele,
                      })} />
                  </Col>
                </Row>
                <hr />
              </div>
            );
          })}
      </Grid>
  );
}

export default memo(Checkout);
