const Rating = (props) => {
  const { data } = props;
  return (
    <>
      {Math.round(data) === 1 ? (
        <span style={{ color: "#fb6e2e" }}>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bx-star"></i>
          <i className="bx bx-star"></i>
          <i className="bx bx-star"></i>
        </span>
      ) : Math.round(data) === 2 ? (
        <span style={{ color: "#fb6e2e" }}>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bx-star"></i>
          <i className="bx bx-star"></i>
          <i className="bx bx-star"></i>
        </span>
      ) : Math.round(data) === 3 ? (
        <span style={{ color: "#fb6e2e" }}>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bx-star"></i>
          <i className="bx bx-star"></i>
        </span>
      ) : Math.round(data) === 4 ? (
        <span style={{ color: "#fb6e2e" }}>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bx-star"></i>
        </span>
      ) : (
        <span style={{ color: "#fb6e2e" }}>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
        </span>
      )}
    </>
  );
};

export default Rating;
