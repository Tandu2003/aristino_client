import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./Brand.scss";

const Brand = () => {
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
  );
};

export default Brand;
