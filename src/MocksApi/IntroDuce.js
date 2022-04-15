const introDucer = [
  {
    id: 1,
    title: "RESTO - GÌ CŨNG CÓ, MUA HẾT Ở RESTO",
    description:
      "Resto - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và miễn phí! Resto là nền tảng giao dịch trực tuyến hàng đầu ở Đông Nam Á, Việt Nam, Singapore, Malaysia, Indonesia, Thái Lan, Philipin, Đài loan và Brazil. Với sự đảm bảo của Resto, bạn sẽ mua hàng trực tuyến an tâm và nhanh chóng hơn bao giờ hết!",
  },
  {
    id: 2,
    title: "MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN",
    description:
      "Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì Resto.vn là một sự lựa chọn tuyệt vời dành cho bạn. Bản chất của Resto là một social E-commerce platform - nền tảng trang web thương mại điện tử tích hợp mạng xã hội. Điều này cho phép người mua và người bán hàng dễ dàng tương tác, trao đổi thông tin về sản phẩm và chương trình khuyến mãi của shop. Nhờ nền tảng đó, việc mua bán trên Resto trở nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng sản phẩm chính hãng, uy tín, Resto Mall chính là sự lựa chọn lí tưởng dành cho bạn. Để bạn có thể dễ dàng khi tìm hiểu và sử dụng sản phẩm, Resto Blog - trang blog thông tin chính thức của Resto - sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời trang, review công nghệ, mẹo làm đẹp, tin tức tiêu dùng và deal giá tốt bất ngờ.Đến với Resto, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể đăng bán ngay những sản phẩm của mình. Không những thế, các nhà bán hàng có thể tự tạo chương trình khuyến mãi trên Resto để thu hút người mua với những sản phẩm có mức giá hấp dẫn. Khi đăng nhập tại Resto Kênh người bán, bạn có thể dễ dàng phân loại sản phẩm, theo dõi đơn hàng, chăm sóc khách hàng và cập nhập ngay các hoạt động của shop.",
  },
  {
    id: 3,
    title: "TẢI ỨNG DỤNG RESTO NGAY ĐỂ MUA BÁN ONLINE MỌI LÚC, MỌI NƠI",
    description:
      "Ưu điểm của ứng dụng Resto là cho phép bạn mua và bán hàng mọi lúc, mọi nơi. Bạn có thể tải ứng dụng Resto cũng như đăng sản phẩm bán hàng một cách nhanh chóng và tiện lợi. Ngoài ra, ứng dụng Resto còn có những ưu điểm sau: - Giao diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy được ngay những sản phẩm nổi bật cũng như dễ dàng tìm đến các ô tìm kiếm, giỏ hàng hoặc tính năng chat liền tay. - Ứng dụng tích hợp công nghệ quản lý đơn mua và bán hàng tiện lợi trên cùng một tài khoản. Bạn sẽ vừa là người mua hàng, vừa là người bán hàng rất linh hoạt, dễ dàng. - Cập nhập thông tin khuyến mãi, Resto flash sale nhanh chóng và liên tục. Tại Resto, bạn có thể lấy các mã giảm giá Resto và mã miễn phí vận chuyển toàn quốc. Bên cạnh đó, Resto cũng sẽ có những chiến dịch khuyến mãi lớn hằng năm như Siêu hội mua sắm 4.4, Resto 9.9 sale, Resto 10.10 sale, Resto 11.11 sale, Resto 12.12 sale, Resto Tết Sale. Đây là thời điểm để người mua hàng có thể nhanh tay chọn ngay cho mình những mặt hàng ưa thích với mức giá giảm kỉ lục.",
  },
];
const getAllIntro = () => introDucer;
const getIntroCount = (count) => {
  const max = introDucer.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return introDucer.slice(start, start + count);
};
export const IntroDucerData = {
  getAllIntro,
  getIntroCount,
};
export default introDucer;
