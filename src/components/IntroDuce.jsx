import { Fragment, useState } from "react";
import { IntroDucerData, Grid, Line } from "../Common";
const IntroDuce = () => {
  const [introDucer, setIntroDucer] = useState(IntroDucerData.getIntroCount(2));
  const [toggle, setToggle] = useState(false);
  const handleClickMore = () => {
    setToggle(!toggle);
    setIntroDucer(IntroDucerData.getAllIntro);
  };
  const handleClickLittle = () => {
    setToggle(!toggle);
    setIntroDucer(IntroDucerData.getIntroCount(2));
  };
  return (
    <Fragment>
      <div className="intro">
        <Line />
        <Grid col={1} mdCol={1} smCol={1} gap={30}>
          {introDucer.map((intro) => (
            <div className="intro__content" key={intro.id}>
              <h3 className="intro__content__title">{intro.title}</h3>
              <span className="intro__content__description">
                {intro.description}
              </span>
            </div>
          ))}
        </Grid>
        <div
          style={{
            cursor: "pointer",
            color: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          {!toggle ? (
            <>
              <span onClick={handleClickMore}>Xem thêm</span>
              <i className="bx bx-chevrons-right"></i>
            </>
          ) : (
            <>
              <span onClick={handleClickLittle}>Rút gọn</span>
              <i className="bx bx-chevrons-left"></i>
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
};
export default IntroDuce;
