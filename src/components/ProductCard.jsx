import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { Rating, numberWithCommas, BasicModal } from "../Common";
import { addCart } from "../redux/cartItemSlice";

const ProductCard = (props) => {
  const { data } = props;
  const [user, setUser] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (user) {
      const newItems = {
        id: data.id,
        title: data.title,
        image: data.image,
        price: data.price,
      };
      dispatch(addCart(newItems));
      toast.success("Thêm vào giỏ hàng thành công!!");
    } else if (!user) {
      alert("Vui lòng đăng nhập trước!");
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
            <span>Add to cart</span>
          </Link>
          <div className="product-additional-content">
            <div className="lines"></div>
            <div className="product-additional-content__view">
              <span className="product-additional-content__view-icon">
                <i className="fa-regular fa-eye" onClick={handleOpen}></i>
              </span>
              {open ? (
                <BasicModal
                  item={props}
                  open={open}
                  handleClose={handleClose}
                />
              ) : (
                <></>
              )}
            </div>
            <div className="product-additional-content__heart">
              {/* <button
                // to={`add_to_wishlist?=${props.data.id}`}
                className="product-additional-content__view-icon"
              >
                <i className="fa-regular fa-heart"></i>
              </button> */}
              <p
                onClick={handleAdd}
                className="product-additional-content__view-icon"
              >
                <i className="fa-regular fa-heart"></i>
              </p>
            </div>
          </div>
        </div>
        <Link to={`/catelog/${data.id}`}></Link>
      </div>
    </div>
  );
};

export default ProductCard;
