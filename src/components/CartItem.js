import React from "react";
import { Badge } from "rsuite";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useProduct } from "../context/Product.context";
import { Link } from "react-router-dom";

function CartItem() {
  const {
    state: { cart },
  } = useProduct();
  
  return (
    <div className="cart">
      <Badge style={{ background: 'grey' }} className="badge" content={cart.length} />
      <Link to='/checkout' className="link"><AiOutlineShoppingCart fontSize="20px" /></Link>
    </div>
  );
}

export default CartItem;
