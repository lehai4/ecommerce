import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Rating, numberWithCommas } from "../Common";
import { addCart } from "../redux/cartItemSlice";
const ProductCard = (props) => {
  const { data } = props;
  const [user, setUser] = useState("");
  const [isAdded, setAdded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    if (user) {
      setAdded(true);
      const newItems = {
        title: data.title,
        description: data.description,
        price: data.price,
        image: data.image,
        quantity: 1,
      };
      dispatch(addCart(newItems));
    } else if (!user) {
      alert("Please login account!");
      navigate("/login");
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="product__card">
      <div className="product__card__item">
        <Link to={`/catelog/${data.id}`}>
          <div className="product__card__item__img">
            <img
              src={data.image}
              alt=""
              className="product__card__item__img__view"
            />
          </div>
          <div className="product__card__item__info">
            <h1 className="product__card__item__info__name">{data.title}</h1>
            <div className="product__card__item__info__content">
              <p className="product__card__item__info__content__price">
                {numberWithCommas(data.price)}&nbsp;đ&nbsp;&nbsp;
              </p>
              <div className="product__card__item__info__content__rate">
                <Rating data={data.rating.rate} />
              </div>
            </div>
          </div>
          <div className="product__card__canvas"></div>
          {isAdded === false ? (
            <button onClick={handleAdd} className="product__card__btn">
              ADD TO CARD
            </button>
          ) : (
            <button
              onClick={handleAdd}
              className="product__card__btn product__card__btn__disable"
            >
              ADDED
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
