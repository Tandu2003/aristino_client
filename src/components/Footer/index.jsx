import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Footer.scss";

import { ReactComponent as IconCoffee } from "../../assets/svg/coffee.svg";
import { ReactComponent as IconDelivery } from "../../assets/svg/delivery.svg";
import { ReactComponent as IconPay } from "../../assets/svg/pay.svg";
import { ReactComponent as IconGuarantee } from "../../assets/svg/guarantee.svg";
import { ReactComponent as IconSent } from "../../assets/svg/sent.svg";
import { ReactComponent as LogoFooter } from "../../assets/svg/logofooter.svg";
import { ReactComponent as IconFacebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as IconInstagram } from "../../assets/svg/instagram.svg";
import { ReactComponent as IconYoutube } from "../../assets/svg/youtube.svg";
import { ReactComponent as IconTiktok } from "../../assets/svg/tiktok.svg";
import { ReactComponent as IconShipCod } from "../../assets/svg/shipcod.svg";
import { ReactComponent as IconVisa } from "../../assets/svg/visa.svg";
import { ReactComponent as IconMasterCard } from "../../assets/svg/mastercard.svg";
import { ReactComponent as IconEWallet } from "../../assets/svg/ewallet.svg";
import { ReactComponent as IconBoCongThuong } from "../../assets/svg/bo-cong-thuong-verified-icon.svg";

const list_policies = [
  {
    svg: <IconCoffee />,
    title: "Free trà và cafe",
    desc: "Tại showroom",
  },
  {
    svg: <IconDelivery />,
    title: "Giao hàng",
    desc: "Free ship đơn >800k",
  },
  {
    svg: <IconPay />,
    title: "Thanh toán",
    desc: "Bảo Mật an toàn",
  },
  {
    svg: <IconGuarantee />,
    title: "Bảo hành",
    desc: "Lên đến 180 ngày",
  },
];

const footerData = [
  {
    title: "CHÍNH SÁCH BÁN HÀNG",
    links: [
      { label: "Đối tác affiliate", to: "/pages/doi-tac-affiliate" },
      { label: "Hotline : 1800 6226", to: "tel:18006226" },
      { label: "Email: online@kgvietnam.com", to: "mailto:online@kgvietnam.com" },
    ],
  },
  {
    title: "QUY ĐỊNH HOẠT ĐỘNG",
    links: [
      { label: "Chính sách đổi hàng", to: "/pages/chinh-sach-doi-tra" },
      { label: "Chính sách bảo hành", to: "/pages/chinh-sach-bao-hanh" },
      { label: "Chính sách hội viên", to: "/pages/chinh-sach-hoi-vien" },
      { label: "Chính sách giao nhận", to: "/pages/chinh-sach-giao-hang" },
      { label: "Hướng dẫn mua hàng", to: "/pages/huong-dan-mua-hang" },
      { label: "Chính sách bảo mật", to: "/pages/chinh-sach-bao-mat" },
    ],
  },
  {
    title: "DỊCH VỤ KHÁCH HÀNG",
    links: [
      { label: "Trạng thái đơn hàng", to: "/" },
      { label: "Câu hỏi thường gặp", to: "/pages/dieu-khoan-dich-vu" },
      { label: "Chính sách hội viên", to: "/pages/chinh-sach-hoi-vien" },
      { label: "Liên hệ 1800 6226", to: "/" },
    ],
  },
];

const Footer = () => {
  const location = useLocation();

  const listPolicyRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isShowMore, setIsShowMore] = useState(footerData.map(() => false));

  useEffect(() => {
    const checkScrollable = () => {
      if (listPolicyRef.current) {
        setIsScrollable(listPolicyRef.current.scrollWidth > listPolicyRef.current.clientWidth);
      }
    };
    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, []);

  const handleMouseDown = (e) => {
    if (!isScrollable) return;
    setIsDragging(true);
    setStartX(e.pageX - listPolicyRef.current.offsetLeft);
    setScrollLeft(listPolicyRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !isScrollable) return;
    e.preventDefault();
    const x = e.pageX - listPolicyRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    listPolicyRef.current.scrollLeft = scrollLeft - walk;
  };

  const toggleShowMore = (index) => {
    setIsShowMore((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) {
        setIsShowMore(footerData.map(() => false));
      } else {
        setIsShowMore(footerData.map(() => true));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 991) {
      setIsShowMore(footerData.map(() => false));
    } else {
      setIsShowMore(footerData.map(() => true));
    }
  }, [location.pathname]);

  return (
    <>
      <section className="section section-policy">
        <div className="container-fluid">
          <div
            className="list-policy"
            ref={listPolicyRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
              overflowX: isScrollable ? "auto" : "hidden",
              scrollbarWidth: "none",
              userSelect: "none",
            }}
          >
            {list_policies.map((item, index) => (
              <div key={index} className="item">
                <div className="box">
                  <div className="thumb">{item.svg}</div>
                  <div className="detail">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container-fluid">
          <div className="footer-wrapper">
            <div className="footer-col footer-one">
              <div className="footer-block block-intro">
                <div className="block-left">
                  <Link to="/" className="footer-logo">
                    <img
                      src="https://res.cloudinary.com/rubiescloud/image/upload/v1736298313/aristino/logo-kgvietnam-doc.webp"
                      alt="logo-footer"
                    />
                    <LogoFooter />
                  </Link>
                </div>
                <div className="block-right">
                  <div className="footer-title">
                    <h4>CÔNG TY CỔ PHẦN ĐẦU TƯ K&G VIỆT NAM</h4>
                  </div>

                  <div className="footer-content">
                    <ul className="ul-listing-wrap">
                      <li>
                        Trụ sở chính: Tầng 11 khối A, tòa nhà Sông Đà, Đường Phạm Hùng, Phường Mỹ
                        Đình 1, Quận Nam Từ Liêm, Hà Nội, Việt Nam
                      </li>
                      <li>Mã số thuế: 0105911105.</li>
                      <li>Chi Nhánh:84 Nguyễn Trãi, Phường 03, Quận 5, Hồ Chi Minh, Việt Nam.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-block block-newsletter">
                <div className="footer-title">
                  <h4>Đăng ký nhận tin điện tử</h4>
                  <p>Hãy nhập email của bạn để nhận những tin tức mới nhất của chúng tôi</p>
                </div>
                <div className="footer-content">
                  <form action="" className="sub-newsletter">
                    <input type="email" placeholder="Địa chỉ Email" />
                    <button type="submit" className="btn-kg btn-dark">
                      <span>GỬI</span>
                      <IconSent />
                    </button>
                  </form>
                </div>
              </div>
              <div className="footer-row">
                <div className="footer-block block-social">
                  <div className="block-left">
                    <div className="footer-title">
                      <h4>Theo dõi chúng tôi</h4>
                    </div>
                  </div>
                  <div className="block-right">
                    <div className="footer-content">
                      <ul>
                        <li>
                          <Link to="https://www.facebook.com/ilovearistino">
                            <IconFacebook />
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.instagram.com/aristino_official/">
                            <IconInstagram />
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.youtube.com/@Aristino_Official.Channel">
                            <IconYoutube />
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.tiktok.com/@aristino.official">
                            <IconTiktok />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-block block-hotline">
                  <div className="footer-hotline">
                    <span>HOTLINE: </span>
                    <Link to="tel:18006226">18006226</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-col footer-two">
              <div className="footer-two-box">
                <div className="col col-half">
                  <div className="footer-block">
                    <div className="footer-title">
                      <h4>VỀ CHÚNG TÔI</h4>
                    </div>
                    <div className="footer-content">
                      <ul className="ul-listing-wrap">
                        <li>
                          <Link to="/pages/ve-aristino">Giới thiệu Aristino</Link>
                        </li>

                        <li>
                          <Link to="pages/he-thong-cua-hang">Cửa hàng gần bạn</Link>
                        </li>

                        <li>
                          <Link to="https://ngoinhachung.vn">Ngôi Nhà Chung K&amp;G</Link>
                        </li>

                        <li>
                          <Link to="https://tuyendung.kgvietnam.com">Tuyển dụng</Link>
                        </li>

                        <li>
                          <Link to="/blogs/ware-care-share-new">Wear-Care-Share</Link>
                        </li>

                        <li>
                          <Link to="/blogs/news">Tin tức</Link>
                        </li>

                        <li>
                          <Link to="/pages/nha-may-san-xuat">Nhà máy sản xuất</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {footerData.map((item, index) => (
                  <div key={index} className="col">
                    <div
                      className="footer-block block-toogle"
                      onClick={() => toggleShowMore(index)}
                    >
                      <div className={`footer-title${isShowMore[index] ? " active" : ""}`}>
                        <h4>{item.title}</h4>
                      </div>
                      <div className={`footer-content${isShowMore[index] ? " active" : ""}`}>
                        <ul className="ul-listing-wrap">
                          {item.links.map((link, i) => (
                            <li key={i}>
                              <Link to={link.to}>{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col col-full">
                  <div className="footer-block block-payment">
                    <div className="footer-title">
                      <h4>Thanh toán</h4>
                    </div>
                    <div className="footer-content">
                      <ul>
                        <li>
                          <IconShipCod />
                        </li>
                        <li>
                          <IconVisa />
                        </li>
                        <li>
                          <IconMasterCard />
                        </li>
                        <li>
                          <IconEWallet />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-col footer-three">
              <div className="footer-block block-copyright">
                <span>Bản quyền © 2024 KGVIETNAM</span>
                <Link to="http://online.gov.vn/Home/WebDetails/27344" target="_blank">
                  <IconBoCongThuong />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
