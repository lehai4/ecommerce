import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addCart } from "../redux/cartItemSlice";
import { Grid } from "../Common";

const BasicModal = (props) => {
  const { open, handleClose, item } = props;
  const [quantity, setQuantity] = useState(1);
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleQuantity = (type) => {
    if (type === "PLUS") {
      setQuantity((prev) => prev + 1);
    } else if (type === "MINUS") {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (user) {
      const newItems = {
        id: item.data.id,
        title: item.data.title,
        image: item.data.image,
        price: item.data.price,
        quantity: quantity,
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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <div className="product">
            <Grid col={2} mdCol={1} smCol={1}>
              <div className="product-left">
                <figure className="product-left-image">
                  <img src={item.data.image} alt={`${item.data.title}`} />
                </figure>
              </div>
              <div className="product-right">
                <h1 className="product-right-title">{item.data.title}</h1>
                <p className="product-right-price">{item.data.price}đ</p>
                <p className="product-right-desc">{item.data.description}</p>

                <div className="product-right-inner">
                  <div className="product-right-inner-quantity">
                    <span>{quantity}</span>
                    <div className="product-right-inner-quantity-btn">
                      <button onClick={() => handleQuantity("PLUS")}>+</button>
                      <button onClick={() => handleQuantity("MINUS")}>-</button>
                    </div>
                  </div>
                  <button
                    className="btn btn-add-to-cart btn-modal"
                    onClick={handleAdd}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </Grid>
          </div>
          <button className="btn btn-close btn-modal" onClick={handleClose}>
            x
          </button>
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
