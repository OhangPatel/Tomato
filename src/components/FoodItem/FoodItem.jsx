import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext.jsx";
import "./FoodItem.css";
import { useContext } from "react";
// import { useState } from 'react';

const FoodItem = ({ id, name, price, description, image }) => {
  // const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {
          // itemCount is replaced by cartItems[id]
          !cartItems[id] ? (
            <img
              className="add"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt="add_icon_white"
            />
          ) : (
            <div className="food-item-counter">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt="remove_icon_red"
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt="add_icon_green"
              />
            </div>
          )
        }
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating stars" />
        </div>

        <div className="food-item-desc">{description}</div>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
