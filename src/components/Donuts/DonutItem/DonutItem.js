import { useContext } from "react";

import classes from "./DonutItem.module.css";
import DonutItemForm from "./DonutItemForm";
import CartContext from "../../../store/cart-context";

function DonutItem(props) {
  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.donut}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <DonutItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default DonutItem;
