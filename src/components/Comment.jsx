import { useEffect, useState } from "react";
import clsx from "clsx";
import { Rating, CommentData, stars } from "../Common";

const Comment = (props) => {
  const { data } = props;
  const [comment, setComment] = useState(CommentData.getComment(3));
  const [active, setActive] = useState(1);
  const [evaluate, setEvaluate] = useState(data);
  const [like, setLike] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleChangeLike = (id) => {
    console.log(id);
    setLike((prev) => prev + 1);
  };
  const handleChangeMore = () => {
    setToggle(!toggle);
    setComment(CommentData.getAllComment);
  };
  const handleChangeLittle = () => {
    setToggle(!toggle);
    setComment(CommentData.getComment(3));
  };

  useEffect(() => {
    let result = stars.find((item) => {
      return item.id === active;
    });
    if (result.name === "Tất cả") {
      setEvaluate(data);
    } else if (result.name !== "Tất cả") {
      setEvaluate(Number(result.name.slice(0, 1)));
    }
  }, [active]);
  return (
    <div
      className="comment-container"
      style={{ backgroundColor: "rgba(0,0,0,0.04)" }}
    >
      <div className="comment-ratings">
        <div className="comment-ratings__header">ĐÁNH GIÁ SẢN PHẨM</div>
        <div className="comment-ratings__overview">
          <div className="comment-ratings__overview__friefing">
            <div className="comment-ratings__overview__friefing__score">
              <span className="comment-ratings__overview__friefing__score__new">
                {evaluate}
              </span>
              <span className="comment-ratings__overview__friefing__score-out-of">
                trên{Math.round(evaluate)}
              </span>
            </div>
            <div className="comment-ratings__overview__friefing__star">
              <Rating data={evaluate} />
            </div>
          </div>
          <div className="comment-ratings__overview__filters">
            {stars.map((star, i) => (
              <div
                className={clsx(
                  `comment-ratings__overview__filter`,
                  `${
                    active === star.id
                      ? "comment-ratings__overview__filter--active"
                      : ""
                  }`
                )}
                key={i}
                onClick={() => setActive(star.id)}
              >
                {star.name}
              </div>
            ))}
          </div>
        </div>
        <div className="comment-ratings__list">
          <div className="comment-ratings__list--item">
            {comment.length > 1 ? (
              comment.map((comment, i) => (
                <div
                  className={`comment-ratings__list--item__single comment-ratings__list--item__single${i}`}
                  key={i}
                >
                  <div className="comment-ratings__list--item__single__avatar">
                    {comment.avarUrl ? (
                      <img src={comment.avarUrl} alt="" />
                    ) : (
                      <img
                        src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="comment-ratings__list--item__single__main">
                    <div className="comment-ratings__list--item__single__main__author-name">
                      <span>{comment.name}</span>
                    </div>
                    <div className="comment-ratings__list--item__single__main__star">
                      <Rating data={comment.rating} />
                    </div>
                    <div className="comment-ratings__list--item__single__main__time">
                      <span>{comment.date}</span>
                    </div>
                    <div className="comment-ratings__list--item__single__main__content">
                      <span>{comment.content}</span>
                    </div>
                    <div className="comment-ratings__list--item__single__main__image">
                      {comment.image.map((item, id) => {
                        if (item.url) {
                          return <img src={item.url} alt="" key={id} />;
                        }
                      })}
                    </div>
                    <div className="comment-ratings__list--item__single__main--action">
                      <div
                        style={{ display: "flex" }}
                        onClick={() => handleChangeLike(comment.id)}
                      >
                        <div className="comment-ratings__list--item__single__main--action__like__button">
                          <i className="bx bx-like"></i>
                        </div>
                        <div className="comment-ratings__list--item__single__main--action__like__count">
                          {like === 0 ? "Hữu ích?" : like}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Chưa có đánh giá nào đây</p>
            )}
          </div>
          <div className="comment-ratings__list--pagination">
            {!toggle ? (
              <>
                <span onClick={handleChangeMore}>Xem thêm</span>
                <i className="bx bx-chevrons-right"></i>
              </>
            ) : (
              <>
                <span onClick={handleChangeLittle}>Rút gọn</span>
                <i class="bx bx-chevrons-left"></i>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
