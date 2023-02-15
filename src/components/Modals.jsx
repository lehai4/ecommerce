import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Grid from "./Grid";

const BasicModal = (props) => {
  const { open, handleClose, item } = props;
  console.log(item.data);
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
