import "./ProductItem.css";
import { addToCart } from "../../Redux/slice";
import { useDispatch } from "react-redux";

function ProductItem(data) {

  const { name, price, image } = data
  const dispatch = useDispatch()
  const addToCartHandler = () => dispatch(addToCart(data));
  
  return (
    <div className="productCard">
      <div className="cardImage">
        <img className="img-fluid" src={image} alt="" />
      </div>
      <div className="cardBody">
        <h5>{name}</h5>
        <p className="price">price : {price.toLocaleString()}</p>
        <button onClick={addToCartHandler} className="btn btn-primary">
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
