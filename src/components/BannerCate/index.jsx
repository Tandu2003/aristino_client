import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ReactComponent as IconPattern } from "../../assets/svg/circlepattern.svg";
import { ReactComponent as IconSent } from "../../assets/svg/sent.svg";

import "./BannerCate.scss";

const BannerCate = ({ type, data }) => {
  return (
    <>
      <div className="section banner-cate">
        <div className="container-fluid pd-0">
          <div className="banner-cate-main">
            <div className="banner-cate-heading">
              <h3>
                <IconPattern />
                <span>
                  {data.title}
                  {data.highlight && <span style={{ color: "#68bd46" }}> {data.highlight}</span>}
                </span>
              </h3>
              <Link to={data.link} className="btn-kg btn-outline-2">
                <span>Xem tất cả</span>
                <IconSent />
              </Link>
            </div>
            {type === "grid" && (
              <div className="grid-cates">
                <div className="col-left">
                  <div className="box-banner">
                    <div
                      className="aspect-ratio"
                      style={{
                        "--height-desk": 560,
                        "--width-desk": 400,
                        "--height-mb": 1506,
                        "--width-mb": 999,
                      }}
                    >
                      <Link to={data.img_main.link}>
                        <picture>
                          <source media="(min-width: 992px)" srcSet={data.img_main.img_pc} />
                          <source media="(max-width: 991px)" srcSet={data.img_main.img_mb} />
                          <img src={data.img_main.img_mb} alt={data.img_main.title} />
                        </picture>
                      </Link>
                    </div>
                  </div>
                </div>

                {data.img_sub.map((item, index) => (
                  <>
                    <div className="col-right box-banner">
                      <div
                        key={index}
                        className="aspect-ratio"
                        style={{
                          "--height-desk": 513,
                          "--width-desk": 400,
                          "--height-mb": 720,
                          "--width-mb": 716,
                        }}
                      >
                        <Link to={item.link}>
                          <picture>
                            <source media="(min-width: 992px)" srcSet={item.img_pc} />
                            <source media="(max-width: 991px)" srcSet={item.img_mb} />
                            <img src={item.img_mb} alt={item.title} />
                          </picture>
                        </Link>
                      </div>
                      <div className="desc">
                        <Link to={item.link}>
                          <span>{item.desc}</span>
                        </Link>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            )}
            {type === "slide" && (
              <div className="slide-cates">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={20}
                  breakpoints={{
                    0: {
                      slidesPerView: 1.15,
                    },
                    768: {
                      slidesPerView: 1.5,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {data.img.map((item, index) => (
                    <SwiperSlide key={index}>
                      <picture>
                        <source media="(min-width: 992px)" srcSet={item.img_pc} />
                        <source media="(max-width: 991px)" srcSet={item.img_mb} />
                        <img src={item.img_mb} alt={item.title} />
                      </picture>
                      <h4>
                        <Link to={item.link}>{item.title}</Link>
                      </h4>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerCate;
