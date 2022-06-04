import { Grid } from "../Common";
const ContactFeedBack = () => {
  const handleSubmit = () => {};
  return (
    <div className="contact__feedback">
      <Grid col={1} mdCol={1} smCol={1} gap={30}>
        <div className="contact__feedback__title">
          <span>FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE</span>
        </div>
        <div className="content__feedback__content">
          <Grid col={1} mdcol={1} smCol={1} gap={30}>
            <form
              className="content__feedback__content__form"
              onSubmit={handleSubmit}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <label className="content__feedback__content__form__label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="content__feedback__content__form__input"
                  />
                </div>
                <div>
                  <label className="content__feedback__content__form__label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="content__feedback__content__form__input"
                  />
                </div>
              </div>
              <div>
                <label className="content__feedback__content__form__label">
                  First Name
                </label>
                <input
                  type="text"
                  className="content__feedback__content__form__input"
                />
              </div>
              <div>
                <label className="content__feedback__content__form__label">
                  First Name
                </label>
                <input
                  type="text"
                  className="content__feedback__content__form__input"
                />
              </div>
              <div>
                <label className="content__feedback__content__form__label">
                  First Name
                </label>
                <input
                  type="text"
                  className="content__feedback__content__form__input"
                />
              </div>
              <button type="submit" className="btn btn-submit">
                Gửi
              </button>
            </form>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default ContactFeedBack;
