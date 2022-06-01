import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteCart } from "../redux/cartItemSlice";
const CartItem = (props) => {
  const { item } = props;
  const { e } = item;
  const [quantity, setQuantity] = useState(e.quantity);
  const [price, setPrice] = useState(e.price * e.quantity);
  const dispatch = useDispatch();
  const handleChangQuantity = (type = null) => {
    if (type === "PLUS") {
      setQuantity((prev) => prev + 1);
    } else if (type === "MINUS") {
      setQuantity((prev) => prev - 1);
      if (quantity === 1) {
        alert("tối thiểu là một sản phẩm ");
        setQuantity(1);
      }
    }
  };
  const removeCartItem = () => {
    const removeCart = {
      title: e.title,
      description: e.description,
      price: price,
      image: e.image,
      quantity: quantity,
    };
    dispatch(deleteCart(removeCart));
  };
  useEffect(() => {
    let result = e.price * quantity;
    setPrice(result);
  }, [quantity]);
  useEffect(() => {}, [price]);
  return (
    <div className="cart__item">
      <div className="cart__item__img">
        <img src={e.image} alt="" />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <span>{e.title}</span>
        </div>
        <div className="cart__item__info__name__price">{price}$</div>
        <div className="cart__item__info__quantity">
          <div className="product__view__right__item__quantity">
            <div
              className="product__view__right__item__quantity__btn"
              onClick={() => handleChangQuantity("MINUS")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__view__right__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__view__right__item__quantity__btn"
              onClick={() => handleChangQuantity("PLUS")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="cart__item__info__del" onClick={() => removeCartItem()}>
          <i className="bx bx-trash"></i>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
