import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReactComponent as IconPattern } from "../../assets/svg/circlepattern.svg";
import { ReactComponent as IconSent } from "../../assets/svg/sent.svg";

import BannerCate from "../../components/BannerCate";
import Brand from "../../components/Brand";
import Marqee from "../../components/Marqee";
import VideoHome from "../../components/VideoHome";

import { Slider } from "../../api/slider";

import "./Home.scss";

const Home = () => {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    Slider.getSliders().then((data) => {
      setSliderList(data);
    });
  }, []);

  const bannerCateGrids = [
    {
      featuredImage: {
        desktopImage:
          "https://res.cloudinary.com/rubiescloud/image/upload/v1737436375/aristino/1_030e851ef0754c7caaee4e74a2bf9805_sf0exe.webp",
        mobileImage:
          "https://res.cloudinary.com/rubiescloud/image/upload/v1737436375/aristino/1_030e851ef0754c7caaee4e74a2bf9805_sf0exe.webp",
        title: "BUSINESS COLLECTION",
        link: "/collections/aristino-business",
      },
      subImages: [
        {
          desktopImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436410/aristino/2_c377d36bf8854da1bfe70fcf30a8e9ae_bhfji4.webp",
          mobileImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436410/aristino/2_c377d36bf8854da1bfe70fcf30a8e9ae_bhfji4.webp",
          title: "Áo khoác bán chạy",
          desc: "ÁO KHOÁC",
          link: "/collections/ao-khoac",
        },
        {
          desktopImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436411/aristino/3_b91406561b2b46bd90236c68b6d41551_cbc5bb.webp",
          mobileImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436411/aristino/3_b91406561b2b46bd90236c68b6d41551_cbc5bb.webp",
          title: "Thời trang bán chạy",
          desc: "NEW ARRIVAL",
        },
      ],
      categoryLink: "/collections/bo-suu-tap",
      categoryTitle: "TIMELESS ELEGANCE",
    },
  ];

  const bannerCateSlide = [
    {
      images: [
        {
          desktopImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436586/aristino/4_444bb0ee01864ec49a5dbd39f55de5fd_feoolu.webp",
          mobileImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436586/aristino/4_444bb0ee01864ec49a5dbd39f55de5fd_feoolu.webp",
          title: "PHONG THÁI DOANH NHÂN",
        },
        {
          desktopImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436594/aristino/giay_uaehag.webp",
          mobileImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436594/aristino/giay_uaehag.webp",
          title: "ELEGANCE LEADER",
        },
        {
          desktopImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436596/aristino/5_35c1170d88d348ed878bb30f4bdf67ef_unxfru.webp",
          mobileImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436596/aristino/5_35c1170d88d348ed878bb30f4bdf67ef_unxfru.webp",
          title: "ÁO SƠ MI KNIT NHẬT CHỐNG NHĂN",
        },
      ],
      categoryLink: "/collections/phong-thai-doanh-nhan",
      categoryTitle: "ARISTINO BUSINESS",
    },
    {
      images: [
        {
          desktopImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436619/aristino/golf_2_h1mhpg.webp",
          mobileImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436619/aristino/golf_2_h1mhpg.webp",
          title: "GIAO ĐIỂM COLLECTION",
        },
        {
          desktopImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436643/aristino/golf_1_vexm8b.webp",
          mobileImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436643/aristino/golf_1_vexm8b.webp",
          title: "ÁO POLO ANTI UV",
        },
        {
          desktopImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436645/aristino/slide_3_pr94mz.webp",
          mobileImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436645/aristino/slide_3_pr94mz.webp",
          title: "TECH GOLF DYNAMICFIT TROUSERS",
        },
      ],
      categoryLink: "/collections/aristino-golf",
      categoryTitle: "ARISTINO",
      categoryHighlight: "GOLF",
    },
    {
      images: [
        {
          desktopImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436665/aristino/11_4761fd16507d41149bfc546fb34b0dbb_dkfuuf.webp",
          mobileImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436665/aristino/11_4761fd16507d41149bfc546fb34b0dbb_dkfuuf.webp",
          title: "Áo sơ mi nam casual style",
        },
        {
          desktopImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436673/aristino/13_087e3095779c469ea9a485d398785a7b_vviby0.webp",
          mobileImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436673/aristino/13_087e3095779c469ea9a485d398785a7b_vviby0.webp",
          title: "quần âu nam casual style",
        },
        {
          desktopImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436676/aristino/12_d2sxbh.webp",
          mobileImage:
            "https://res.cloudinary.com/rubiescloud/image/upload/v1737436676/aristino/12_d2sxbh.webp",
          title: "PHỤ KIỆN đồ da cao cấp",
        },
      ],
      categoryLink: "/collections/tu-do-quy-ong",
      categoryTitle: "TỦ ĐỒ QUÝ ÔNG",
    },
  ];

  const handmadeList = [
    {
      image:
        "https://res.cloudinary.com/rubiescloud/image/upload/v1737471595/aristino/8_fb086358a65c4ea6bb69fda45d768bf5_vdtofy.webp",
      title: "Áo Polo Casual Nam",
      link: "/collections/ao-polo",
    },
    {
      image:
        "https://res.cloudinary.com/rubiescloud/image/upload/v1737471598/aristino/9_j0ta76.webp",
      title: "Polo Formal",
      link: "/collections/ao-polo",
    },
    {
      image:
        "https://res.cloudinary.com/rubiescloud/image/upload/v1737471616/aristino/10_lmkgp9.webp",
      title: "Áo Khoác Nam",
      link: "/collections/ao-khoac",
    },
  ];

  useEffect(() => {
    document.title = "Thời trang nam cao cấp | Thương hiệu quần áo nam Aristino - ARISTINO";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="home">
        <Marqee />
        <section className="section slider">
          {sliderList.length > 0 && (
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000 }}
              spaceBetween={2}
              loop={true}
              className="slider"
            >
              {sliderList?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link to={item.link}>
                    <picture>
                      <source media="(min-width: 992px)" srcSet={item.image.desktop} />
                      <source media="(max-width: 991px)" srcSet={item.image.mobile} />
                      <img src={item.image.desktop} alt={item.title} />
                    </picture>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </section>
        <Brand />
        <VideoHome />
        {bannerCateGrids.map((item, index) => (
          <BannerCate key={`grid-${index}`} type="grid" data={item} />
        ))}
        {bannerCateSlide.map((item, index) => (
          <BannerCate key={`slide-${index}`} type="slide" data={item} />
        ))}
        <section className="section handmade">
          <div className="container-fluid pd-0">
            <div className="handmade-heading">
              <h3>
                <IconPattern />
                <span> ARISTINO HANDMADE</span>
              </h3>
              <Link to="/collections/tat-ca-suit" className="btn-kg btn-outline-2">
                <span>Xem tất cả</span>
                <IconSent />
              </Link>
            </div>
            <div className="handmade-main">
              <div className="handmade-slide">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={12}
                  breakpoints={{
                    0: {
                      slidesPerView: 1.2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {handmadeList.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="handmade-item">
                        <div className="handmade-item-img">
                          <Link to={item.link}>
                            <img src={item.image} alt={item.title} />
                          </Link>
                        </div>
                        <div className="handmade-item-title">
                          <Link to={item.link}>{item.title}</Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
