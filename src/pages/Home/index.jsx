import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Marqee from "../../components/Marqee";

import "./Home.scss";
import VideoHome from "../../components/VideoHome";

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

  const brandList = [
    {
      img: "https://res.cloudinary.com/rubiescloud/image/upload/v1737349827/aristino/logo-aris_d1e6f8113115416692f92a6ff18e0a85_xto2fg.webp",
      title: "Aristino",
      link: "/",
    },
    {
      img: "https://res.cloudinary.com/rubiescloud/image/upload/v1737349832/aristino/logo-business_4c98189ade0a4b13835053fd2ba5390f_wum6xm.webp",
      title: "Aristino Business",
      link: "/collections/aristino-business",
    },
    {
      img: "https://res.cloudinary.com/rubiescloud/image/upload/v1737349834/aristino/logo-online_c6fd5a2dcde74339bcdb0cce3d88a5ff_cmgoqk.webp",
      title: "Aristino Online",
      link: "/",
    },
    {
      img: "https://res.cloudinary.com/rubiescloud/image/upload/v1737349841/aristino/logo-golf_b6d9a0fa577d4dbea9be558fab05b20a_gs5k43.webp",
      title: "Aristino Golf",
      link: "/collections/aristino-golf",
    },
    {
      img: "https://res.cloudinary.com/rubiescloud/image/upload/v1737349846/aristino/logo-uni_a1b428211a6b43c587321cfa8d0a93bc_te8esp.webp",
      title: "Aristino Uniform",
      link: "/",
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
        <section className="section brand">
          <div className="container-fluid pd-0">
            <Swiper
              spaceBetween={0}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
            >
              {brandList.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="item-brand">
                    <div className="logo">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <Link to={item.link} className="link" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <VideoHome />
      </main>
    </>
  );
};

export default Home;
