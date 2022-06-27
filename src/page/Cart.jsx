import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Helmet, Banner, Button } from "../Common";
import {
  clearAllCart,
  deleteCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartItemSlice";
const Cart = () => {
  const cartSlice = useSelector((state) => state.cart.carts);
  const getNumberCart = useSelector((state) => state.cart.numberCart);
  const [carts, setCarts] = useState([...cartSlice]);
  const [total, setTotal] = useState(0);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOrder = () => {
    if (carts.length === 0) {
      toast.warning("Giỏ hàng bạn đang trống. Vui lòng đặt hàng trước ^ ^");
      setTimeout(() => {
        navigate("/catelog");
      }, 3500);
    } else {
      dispatch(clearAllCart());
      toast.success(
        "Cảm ơn bạn đã mua hàng. Vui lòng kiểm tra mail sau 3 ngày ^ ^"
      );
    }
  };
  const handleChangQuantity = (type, id) => {
    if (type === "PLUS") {
      setCarts((preV) => {
        return preV.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      });
      setCheck(false);
    } else if (type === "MINUS") {
      setCarts((preV) => {
        return preV.map((item) => {
          if (item.id === id) {
            if (item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            } else if (item.quantity === 1) {
              alert("Số lượng tối thiểu là một");
              return {
                ...item,
              };
            }
          }
          return item;
        });
      });
      setCheck(true);
    }
  };
  const removeCartItem = (id) => {
    let result = carts.filter((item) => item.id === id);
    const removeCart = {
      id: result[0].id,
      quantity: result[0].quantity,
      title: result[0].title,
      image: result[0].image,
      price: result[0].price,
    };
    dispatch(deleteCart(removeCart));
  };
  useEffect(() => {
    check
      ? dispatch(decreaseQuantity(carts))
      : dispatch(increaseQuantity(carts));
    setTotal(
      carts.reduce((acc, cur) => {
        let total = cur.price * cur.quantity;
        let totalCart = acc + total;
        return totalCart;
      }, 0)
    );
  }, [carts]);
  return (
    <Fragment>
      <Helmet title="cart">
        <Banner
          img="https://magiamgialazada.vn/wp-content/uploads/2018/01/voucher-bi-mat-lazada-khuyen-mai-tet-am-lich-2018-truyen-nhan-sam-tet.png"
          marginBottom={50}
        />
        <div className="cart">
          <div className="cart__list">
            {carts.length === 0 ? (
              <img
                src="https://bizweb.dktcdn.net/100/368/179/themes/738982/assets/empty-cart.png?1609300798440"
                alt=""
              />
            ) : (
              <>
                {carts.map((cart, i) => (
                  <div className="cart__item" key={i}>
                    <div className="cart__item__img">
                      <img src={cart.image} alt="" />
                    </div>
                    <div className="cart__item__info">
                      <div className="cart__item__info__name">
                        <span>{cart.title}</span>
                      </div>
                      <div className="cart__item__info__name__price">
                        {cart.price.toLocaleString("en-US")}$
                      </div>
                      <div className="cart__item__info__quantity">
                        <div className="product__view__right__item__quantity">
                          <div
                            className="product__view__right__item__quantity__btn"
                            onClick={() =>
                              handleChangQuantity("MINUS", cart.id)
                            }
                          >
                            <i className="bx bx-minus"></i>
                          </div>
                          <div className="product__view__right__item__quantity__input">
                            {cart.quantity}
                          </div>
                          <div
                            className="product__view__right__item__quantity__btn"
                            onClick={() => handleChangQuantity("PLUS", cart.id)}
                          >
                            <i className="bx bx-plus"></i>
                          </div>
                        </div>
                      </div>
                      <div
                        className="cart__item__info__del"
                        onClick={() => removeCartItem(cart.id)}
                      >
                        <i className="bx bx-trash"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="cart__info">
            <div className="cart__info__txt">
              <p>Shopping Bag ({getNumberCart})</p>
              <div className="cart__info__txt__price">
                <span>Thành tiền</span>
                <span>{total.toLocaleString("en-US")}$</span>
              </div>
            </div>
            <div className="cart__info__btn">
              <Button size="block" onClick={handleOrder}>
                Đặt hàng
              </Button>
              <Button size="block">
                <Link to="/catelog">Tiếp tục mua hàng</Link>
              </Button>
            </div>
          </div>
        </div>
      </Helmet>
    </Fragment>
  );
};
export default React.memo(Cart);
