import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addCart } from "../redux/cartItemSlice";
import clsx from "clsx";
import {
  Helmet,
  Button,
  Refer,
  Rating,
  Section,
  SectionBody,
  Comment,
  options,
  colors,
} from "../Common/index";
const ProductView = ({ product }) => {
  const [user, setUser] = useState("");
  const [selectPlace, setSelectPlace] = useState("Tp.HCM");
  const [color, setColor] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const check = () => {
    if (quantity < 0) {
      return false;
    }
    return true;
  };
  const handleColor = (props) => {
    setActive(props);
    setColor(colors.find((item) => item.id === props).name);
  };
  const handleQuantity = (type) => {
    if (type === "PLUS") {
      setQuantity((prev) => prev + 1);
    } else if (type === "MINUS") {
      setQuantity((prev) => prev - 1);
      if (quantity === 1) {
        alert("Tổi thiểu là một sản phẩm");
        setQuantity(1);
      }
    }
  };
  const goToCart = () => {
    if (user && check) {
      toast.success(
        "Cảm ơn bạn đã mua hàng. Vui lòng kiểm tra mail sau 3 ngày ^^"
      );
    } else if (!user) {
      alert("Please login account");
      navigate("/login");
    }
  };
  const addToCart = () => {
    if (user) {
      const newProduct = {
        title: product?.title,
        description: product?.description,
        price: product?.price,
        image: product?.image,
        quantity: quantity,
      };
      dispatch(addCart(newProduct));
      toast.success("Đã thêm thành công sản phẩm");
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
    <Helmet title={product?.title}>
      <div className="product">
        <div className="product__view">
          <img
            src="https://ldnam.net/wp-content/uploads/2017/08/gi%E1%BA%A3m-gi%C3%A1-3.jpg"
            alt=""
          />
          <div className="product__view__refer">
            <div className="product__view__refer__left">
              <div className="product__view__refer__left__img">
                <img
                  src={product?.image}
                  alt=""
                  className="product__view__refer__left__img--avt"
                />
              </div>
            </div>
            <div className="product__view__refer__right">
              <h1 className="product__view__refer__right__name">
                {product?.title}
              </h1>
              <div className="product__view__refer__right__rating">
                <i style={{ marginRight: 5 }}>
                  <u>{product?.rating.rate}</u>
                </i>
                <Rating data={product.rating.rate} />
                <span className="line__straight"></span>
                <Refer data={product.rating.count} />
              </div>
              <div className="product__view__refer__right__price">
                <span>{product.price}đ</span>
              </div>
              <div className="product__view__refer__right__tranpost">
                <div className="product__view__refer__right__tranpost__content">
                  <span className="product__view__refer__right__tranpost__content__title">
                    Vận chuyển
                  </span>
                  <div className="product__view__refer__right__tranpost__content__arrive">
                    <span>Vận chuyển đi</span>
                    <div className="custom-select">
                      <select onChange={(e) => setSelectPlace(e.target.value)}>
                        {options.map((option, i) => (
                          <option value={option.name} key={i}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__view__refer__right__color">
                <span className="product__view__refer__right__color__title">
                  Màu sắc
                </span>
                {colors.map((color, i) => (
                  <button
                    className={clsx(
                      `product__view__refer__right__color__btn`,
                      `${
                        active === color.id
                          ? "product__view__refer__right__color__btn--active"
                          : ""
                      } `
                    )}
                    onClick={() => handleColor(color.id)}
                    key={i}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
              <div className="product__view__refer__right__count">
                <span className="product__view__refer__right__count__title">
                  Số lượng
                </span>
                <div className="cart__item__info__quantity">
                  <div className="product__view__right__item__quantity">
                    <div
                      className="product__view__right__item__quantity__btn"
                      onClick={() => handleQuantity("MINUS")}
                    >
                      <i className="bx bx-minus"></i>
                    </div>
                    <div className="product__view__right__item__quantity__input">
                      {quantity}
                    </div>
                    <div
                      className="product__view__right__item__quantity__btn"
                      onClick={() => handleQuantity("PLUS")}
                    >
                      <i className="bx bx-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__view__refer__right__item">
                <div className="product__view__refer__right__item__add">
                  <Button size="sm" onClick={() => goToCart()}>
                    Mua ngay
                  </Button>
                  <Button size="sm" onClick={() => addToCart()}>
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://ldnam.net/wp-content/uploads/2017/08/gi%E1%BA%A3m-gi%C3%A1-3.jpg"
            alt=""
          />
        </div>
        <Section>
          <SectionBody>
            <div className="line"></div>
            <Comment data={product?.rating.rate} />
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default ProductView;
