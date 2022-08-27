import React, { memo } from "react";
import { Button } from "rsuite";
import { useProduct } from "../context/Product.context";

function Product({ prod }) {
  const { state: {cart} , dispatch } = useProduct();

  return (
    <div className="card">
      <div className="card-img">
      <img src={prod.thumbnail} alt="" width="230px" height="150px" />
      </div>
      <br />
      <span className="name">{prod.name}</span>
      <br />
      <span className="currency">{prod.currency} {prod.price}</span>
      <br />
      <span className={prod.inStock ? 'text-green' : 'text-red'}>{prod.inStock ? "In stock" : "Out of stock"}</span>
      <br />
      {cart.some((p) => p.id === prod.id) ? (
            <Button
            block
              color="red"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
            block
              color="green"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              Add to cart
            </Button>
          )}
    </div>
  );
}

export default memo(Product);
