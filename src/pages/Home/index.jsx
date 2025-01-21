import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Marqee from "../../components/Marqee";
import VideoHome from "../../components/VideoHome";
import BannerCate from "../../components/BannerCate";

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

  const bannerCateGrids = [
    {
      img_main: {
        img_pc:
          "https://res.cloudinary.com/rubiescloud/image/upload/v1737436375/aristino/1_030e851ef0754c7caaee4e74a2bf9805_sf0exe.webp",
        img_mb:
          "https://res.cloudinary.com/rubiescloud/image/upload/v1737436375/aristino/1_030e851ef0754c7caaee4e74a2bf9805_sf0exe.webp",
        title: "BUSINESS COLLECTION",
        link: "/collections/aristino-business",
      },
      img_sub: [
        {
          img_pc:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436410/aristino/2_c377d36bf8854da1bfe70fcf30a8e9ae_bhfji4.webp",
          img_mb:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436410/aristino/2_c377d36bf8854da1bfe70fcf30a8e9ae_bhfji4.webp",
          title: "Áo khoác bán chạy",
          desc: "ÁO KHOÁC",
          link: "/collections/ao-khoac",
        },
        {
          img_pc:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436411/aristino/3_b91406561b2b46bd90236c68b6d41551_cbc5bb.webp",
          img_mb:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436411/aristino/3_b91406561b2b46bd90236c68b6d41551_cbc5bb.webp",
          title: "Thời trang bán chạy",
          desc: "NEW ARRIVAL",
        },
      ],
      link: "/collections/bo-suu-tap",
      title: "TIMELESS ELEGANCE",
    },
  ];

  const bannerCateSlide = [
    {
      img: [
        {
          img_pc:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436586/aristino/4_444bb0ee01864ec49a5dbd39f55de5fd_feoolu.webp",
          img_mb:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436586/aristino/4_444bb0ee01864ec49a5dbd39f55de5fd_feoolu.webp",
          title: "PHONG THÁI DOANH NHÂN",
        },
        {
          img_pc:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436594/aristino/giay_uaehag.webp",
          img_mb:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436594/aristino/giay_uaehag.webp",
          title: "ELEGANCE LEADER",
        },
        {
          img_pc:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436596/aristino/5_35c1170d88d348ed878bb30f4bdf67ef_unxfru.webp",
          img_mb:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436596/aristino/5_35c1170d88d348ed878bb30f4bdf67ef_unxfru.webp",
          title: "ÁO SƠ MI KNIT NHẬT CHỐNG NHĂN",
        },
      ],
      link: "/collections/phong-thai-doanh-nhan",
      title: "ARISTINO BUSINESS",
    },
    {
      img: [
        {
          img_pc:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436619/aristino/golf_2_h1mhpg.webp",
          img_mb:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436619/aristino/golf_2_h1mhpg.webp",
          title: "GIAO ĐIỂM COLLECTION",
        },
        {
          img_pc:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436643/aristino/golf_1_vexm8b.webp",
          img_mb:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436643/aristino/golf_1_vexm8b.webp",
          title: "ÁO POLO ANTI UV",
        },
        {
          img_pc:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436645/aristino/slide_3_pr94mz.webp",
          img_mb:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436645/aristino/slide_3_pr94mz.webp",
          title: "TECH GOLF DYNAMICFIT TROUSERS",
        },
      ],
      link: "/collections/aristino-golf",
      title: "ARISTINO",
      highlight: "GOLF",
    },
    {
      img: [
        {
          img_pc:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436665/aristino/11_4761fd16507d41149bfc546fb34b0dbb_dkfuuf.webp",
          img_mb:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436665/aristino/11_4761fd16507d41149bfc546fb34b0dbb_dkfuuf.webp",
          title: "Áo sơ mi nam casual style",
        },
        {
          img_pc:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436673/aristino/13_087e3095779c469ea9a485d398785a7b_vviby0.webp",
          img_mb:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436673/aristino/13_087e3095779c469ea9a485d398785a7b_vviby0.webp",
          title: "quần âu nam casual style",
        },
        {
          img_pc:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436676/aristino/12_d2sxbh.webp",
          img_mb:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436676/aristino/12_d2sxbh.webp",
          title: "PHỤ KIỆN đồ da cao cấp",
        },
      ],
      link: "/collections/tu-do-quy-ong",
      title: "TỦ ĐỒ QUÝ ÔNG",
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
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              autoplay={{ delay: 4000 }}
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
        {bannerCateGrids.map((item, index) => (
          <BannerCate key={index} type="grid" data={item} />
        ))}
        {bannerCateSlide.map((item, index) => (
          <BannerCate key={index} type="slide" data={item} />
        ))}
      </main>
    </>
  );
};

export default Home;
