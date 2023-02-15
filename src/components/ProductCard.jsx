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
        id: data.id,
        title: data.title,
        image: data.image,
        price: data.price,
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
          <div className="product-image-inner">
            <Link
              to={`/catelog/${props.data.id}`}
              className="button add_to_cart_button"
            >
              Add to cart
            </Link>
            <div className="product-additional-content">
              <div className="lines"></div>
              <div className="product-additional-content__view">
                <button className="product-additional-content__view-icon">
                  <Link to="#">
                    <i className="fa-regular fa-eye"></i>
                  </Link>
                </button>
              </div>
              <div className="product-additional-content__heart">
                <button className="product-additional-content__view-icon">
                  <Link to={`add_to_wishlist?=${props.data.id}`}>
                    <i className="fa-regular fa-heart"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
