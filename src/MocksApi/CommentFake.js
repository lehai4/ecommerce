const CommentFake = [
  {
    id: 1,
    name: "Hiyatoshi",
    avarUrl:
      "https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/273529826_1587502258270721_2017072480732351037_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=GJun5RpyfzEAX_eh29g&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT8yQtOexyrsV2Bc9ykg5ElkPRtShjLCx2JDQA1bU-ED3w&oe=622D39C7",
    rating: 2,
    content: "Đồ gì quá xấu",
    image: [{ url: "", id: 1 }],
    date: "2022/01/01 10:10",
  },
  {
    id: 2,
    name: "Ryuk",
    avarUrl:
      "https://imgt.taimienphi.vn/cf/Images/np/2021/11/26/hinh-anh-avatar-dep-5.jpg",
    rating: 3,
    content: "ảnh trên shop và mua về khác xa, quá tệ !!",
    image: [
      {
        url: "https://img5.thuthuatphanmem.vn/uploads/2021/12/14/meme-gau-truc-ca-khia_032214477.jpg",
        id: 1,
      },

      {
        url: "https://meta.vn/Data/image/2021/11/05/hinh-anh-meme-hai-huoc-anh-che-meme-15.jpg",
        id: 1,
      },
    ],
    date: "2022/01/01 10:10",
  },
  {
    id: 3,
    name: "LazyFish",
    avarUrl:
      "https://tophinhanh.com/wp-content/uploads/2021/12/anh-avatar-dep-cho-con-gai.jpg",
    rating: 5,
    content: "Ổn lắm shop, mua về cho gia đình dùng quá ok tym tym",
    image: [
      {
        url: "https://cf.shopee.vn/file/5c427c34e252fbf889412aefbbe73e8d_tn",
        id: 1,
      },
      {
        url: "https://cf.shopee.vn/file/5c427c34e252fbf889412aefbbe73e8d_tn",
        id: 2,
      },
      {
        url: "https://cf.shopee.vn/file/5c427c34e252fbf889412aefbbe73e8d_tn",
        id: 3,
      },
    ],
    date: "2022/01/01 10:10",
  },
  {
    id: 4,
    name: "Ruby",
    avarUrl:
      "https://i.pinimg.com/474x/62/ee/a8/62eea8996641733c2a071b98da328364--seul-lips.jpg",
    rating: 5,
    content:
      "Đóng gói sp chắc chắn, thời gian giao hàng rất nhanh. Sản phẩm ok lắm",
    image: [
      {
        url: "",
        id: 1,
      },
    ],
    date: "2022/01/01 10:10",
  },
];
const getAllComment = CommentFake;
const getComment = (count) => {
  const max = CommentFake.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return CommentFake.slice(start, start + count);
};
const getCommentBySlug = (slug) => CommentFake.find((e) => e.slug === slug);

export const CommentData = {
  getAllComment,
  getComment,
  getCommentBySlug,
};
export default CommentFake;
