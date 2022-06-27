import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Home,
  Product,
  Catelog,
  Blog,
  Contact,
  Cart,
  Login,
  Register,
  NotFound,
} from "../Common";
const Router = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://fakestoreapi.com/products");
      return res;
    }
    getData()
      .then((res) => setDatas(res.data))
      .catch((err) => console.log(err));
  }, []);
  const getAllProducts = datas;
  const getProducts = (count) => {
    const max = datas?.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return datas.slice(start, start + count);
  };
  const getProductBySlug = (slug) => datas.find((e) => e.id === Number(slug));
  const getCartItemDetails = (cartItems) => {
    let res = [];
    if (cartItems.length > 0) {
      cartItems.forEach((cart) => {
        res.push({
          cart,
        });
      });
    }
    return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
  };

  const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemDetails,
  };
  return (
    <Routes>
      <Route exact path="/" element={<Home data={datas} />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route exact path="/catelog" element={<Catelog data={datas} />} />
      <Route
        path="/catelog/:slug"
        element={
          <Product
            getProductBySlug={productData.getProductBySlug}
            getProducts={productData.getProducts}
          />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;
