const Refer = ({ data }) => {
  return (
    <>
      <span className="product__view__refer__right__rating__evaluate">
        <u style={{ marginRight: 5 }}>6.4k</u>
        <span style={{ opacity: 0.7 }}>Đánh giá</span>
      </span>
      <span className="line__straight"></span>
      <span className="product__view__refer__right__rating__sell">
        {data} <span style={{ opacity: 0.7 }}>Đã bán</span>
      </span>
    </>
  );
};

export default Refer;
