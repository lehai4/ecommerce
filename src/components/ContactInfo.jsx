const ContactInfo = (props) => {
  const { title, contentList } = props;
  return (
    <div className="contact__info">
      <div className="contact__info__name">
        <span>{title}</span>
      </div>
      <div className="contact__info__content">
        {contentList.map((item, index) => (
          <p key={index}>{item.content}</p>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
