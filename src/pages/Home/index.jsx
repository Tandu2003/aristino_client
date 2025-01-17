import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Marqee from "../../components/Marqee";

import "./Home.scss";

const Home = () => {
  const sliderList = [
    {
      img_pc:
        "https://res.cloudinary.com/rubiescloud/image/upload/v1737121739/aristino/kv-tet_ilnckf.webp",
      img_mb:
        "https://res.cloudinary.com/rubiescloud/image/upload/v1737122634/aristino/artboard-30_ouvml4.webp",
      title: "Tết",
      link: "/pages/bo-suu-tap-do-da-aristino-2025",
    },
    {
      img_pc:
        "https://res.cloudinary.com/rubiescloud/image/upload/v1737121740/aristino/z6121842896280_d535a763ba7299ce388c76ca62068cda_ci3juo.webp",
      img_mb:
        "https://res.cloudinary.com/rubiescloud/image/upload/v1737122640/aristino/z6121843274480_ddcd644b70a5811fd89e3706cb96f647_eiktjs.webp",
      title: "Bộ sưu tập Sơ mi Hà Nội",
      link: "/pages/bo-suu-tap-so-mi-ha-noi-aristino-2025",
    },
    {
      img_pc:
        "https://res.cloudinary.com/rubiescloud/image/upload/v1737121750/aristino/destop-ngang--2880-1080-8_qok6tw.webp",
      img_mb:
        "https://res.cloudinary.com/rubiescloud/image/upload/v1737122645/aristino/mobile_doc-_1000x1986-8_wll3dj.webp",
      title: "Đồ da",
      link: "/pages/bo-suu-tap-do-da-aristino-2025",
    },
    {
      img_pc:
        "https://res.cloudinary.com/rubiescloud/image/upload/v1737121744/aristino/banner-aristino-pc_hmfrhm.webp",
      img_mb:
        "https://res.cloudinary.com/rubiescloud/image/upload/v1737122647/aristino/huyenthoaiphuongdong-mb-2_moh0l7.webp",
      title: "Bộ sưu tập Phương Đông",
      link: "/collections/huyen-thoai-phuong-dong",
    },
  ];

  return (
    <>
      <main className="home">
        <Marqee />
        <section className="section slider">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000 }}
            spaceBetween={2}
            loop={true}
            className="slider"
          >
            {sliderList.map((item, index) => (
              <SwiperSlide key={index}>
                <Link to={item.link}>
                  <picture>
                    <source media="(min-width: 992px)" srcSet={item.img_pc} />
                    <source media="(max-width: 991px)" srcSet={item.img_mb} />
                    <img src={item.img_pc} alt={item.title} />
                  </picture>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
    </>
  );
};

export default Home;
