import "./ProductItemInCart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {increaseInCart, decreaseInCart, removeFromCart}  from '../../Redux/slice'

function ProductItemInCart({ id, name, price, image, count, totalPrice }) {
  const dispatch = useDispatch()
  const decreaseHandler = () => dispatch(decreaseInCart(id))
  const increaseHandler = () => dispatch(increaseInCart(id))
  const removeHandler = () => dispatch(removeFromCart(id))
  
  return (
    <div className="productItemInCart">
      <div className="cardLeft">
        <img src={image} />
      </div>

      <div className="cardMiddle">
        {count > 1 ? (
          <button onClick={decreaseHandler}>-</button>
        ) : (
          <button onClick={removeHandler}>
            <RiDeleteBin6Line />
          </button>
        )}
        <span>{count}</span>
        <button onClick={increaseHandler}>+</button>
      </div>

      <div className="cardRight">
        <h5>{name}</h5>
        <p>price : {totalPrice.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default ProductItemInCart;
