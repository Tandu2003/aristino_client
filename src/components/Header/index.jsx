import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import AuthContext from "../../context/AuthProvider";

import "./Header.scss";

import { ReactComponent as IconAccount } from "../../assets/svg/account.svg";
import { ReactComponent as IconCart } from "../../assets/svg/cart.svg";
import { ReactComponent as IconClose } from "../../assets/svg/close.svg";
import { ReactComponent as IconDropDown } from "../../assets/svg/dropdown.svg";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as IconMenu } from "../../assets/svg/menu.svg";
import { ReactComponent as IconSearch } from "../../assets/svg/search.svg";
import { ReactComponent as IconStore } from "../../assets/svg/store.svg";
import { ReactComponent as IconWishlist } from "../../assets/svg/wishlist.svg";

const menuData = [
  {
    title: "Giá mới",
    link: "/collections/gia-moi-moi-ngay",
    highlight: true,
    subMenu: [
      {
        title: "Giá mới mỗi ngày",
        link: "/collections/gia-moi-moi-ngay",
      },
    ],
  },
  {
    title: "Hàng mới",
    link: "/collections/hang-moi",
    subMenu: [
      {
        title: "Hàng mới",
        link: "/collections/hang-moi",
      },
      {
        title: "Áo sơ mi mới",
        link: "/collections/ao-so-mi-new",
      },
    ],
  },
  {
    title: "Bộ sưu tập",
    link: "/collections/bo-suu-tap",
    subMenu: [
      {
        title: "Huyền Thoại Phương Đông",
        link: "/collections/huyen-thoai-phuong-dong",
      },
      {
        title: "Đông Hồ",
        link: "/collections/dong-ho",
      },
      {
        title: "Ánh Dương Nắng Biển",
        link: "/collections/anh-duong-nang-bien",
      },
      {
        title: "Phong Thái Doanh Nhân",
        link: "/collections/phong-thai-doanh-nhan",
      },
      {
        title: "Onward",
        link: "/collections/onward-khong-ngung-tien-buoc",
      },
      {
        title: "Bộ Sưu Tập Đồ Da",
        link: "/collections/bo-suu-tap-do-da",
      },
    ],
  },
  {
    title: "Áo",
    link: "/collections/tat-ca-ao",
    subMenu: [
      {
        title: "Áo sơ mi",
        link: "/collections/ao-so-mi",
        subMenu: [
          {
            title: "Áo sơ mi ngắn tay",
            link: "/collections/ao-so-mi-ngan-tay",
          },
          {
            title: "Áo sơ mi dài tay",
            link: "/collections/ao-so-mi-dai-tay",
          },
        ],
      },
      {
        title: "Áo Polo",
        link: "/collections/ao-polo",
        subMenu: [
          {
            title: "Áo Polo ngắn tay",
            link: "/collections/ao-polo-ngan-tay",
          },
          {
            title: "Áo Polo dài tay",
            link: "/collections/ao-polo-dai-tay",
          },
        ],
      },
      {
        title: "Áo thun",
        link: "/collections/ao-thun",
        subMenu: [
          {
            title: "Áo thun ngắn tay",
            link: "/collections/ao-thun-ngan-tay",
          },
          {
            title: "Áo thun dài tay",
            link: "/collections/ao-thun-dai-tay",
          },
        ],
      },
      {
        title: "Áo khoác",
        link: "/collections/ao-khoac",
      },
      {
        title: "Áo Tanktop",
        link: "/collections/ao-tanktop",
      },
      {
        title: "Áo Nỉ Sweatshirt",
        link: "/collections/ao-ni-sweatshirt",
      },
      {
        title: "Áo dài",
        link: "/collections/ao-dai",
      },
      {
        title: "Áo len",
        link: "/collections/ao-len",
      },
    ],
  },
  {
    title: "Quần",
    link: "/collections/tat-ca-quan",
    subMenu: [
      {
        title: "Quần Âu",
        link: "/collections/quan-au",
      },
      {
        title: "Quần Kaki",
        link: "/collections/quan-kaki",
      },
      {
        title: "Quần Jeans",
        link: "/collections/quan-jeans",
      },
      {
        title: "Quần Short",
        link: "/collections/quan-short",
      },
      {
        title: "Quần Dệt Kim",
        link: "/collections/quan-det-kim",
      },
    ],
  },
  {
    title: "Suits",
    link: "/collections/tat-ca-suit",
    subMenu: [
      {
        title: "Bộ Suit",
        link: "/collections/bo-suit",
      },
      {
        title: "Blazer & Suit",
        link: "/collections/blazer-suit",
      },
    ],
  },
  {
    title: "Bộ",
    link: "/collections/bo",
    subMenu: [
      {
        title: "Bộ Đồ Thu Đông",
        link: "/collections/bo-do-thu-dong",
      },
      {
        title: "Bộ Đồ Dệt Kim",
        link: "/collections/bo-do-det-kim",
      },
      {
        title: "Bộ Đồ Gió",
        link: "/collections/bo-do-gio",
      },
    ],
  },
  {
    title: "Quần lót",
    link: "/collections/quan-lot",
    subMenu: [
      {
        title: "Quần Boxer",
        link: "/collections/quan-boxer",
      },
      {
        title: "Quần Brief",
        link: "/collections/quan-brief",
      },
    ],
  },
  {
    title: "Phụ kiện",
    link: "/collections/phu-kien",
    subMenu: [
      {
        title: "Tất",
        link: "/collections/tat",
      },
      {
        title: "Ví Da",
        link: "/collections/vi-da",
      },
      {
        title: "Cà Vạt",
        link: "/collections/ca-vat",
      },
      {
        title: "Cặp Da",
        link: "/collections/cap-da",
      },
      {
        title: "Thắt Lưng",
        link: "/collections/that-lung",
      },
      {
        title: "Giày Da",
        link: "/collections/giay-da",
      },
      {
        title: "Dây Lưng Lẻ",
        link: "/collections/day-lung-le",
      },
    ],
  },
  {
    title: "Thương hiệu",
    link: "/collections/thuong-hieu",
    subMenu: [
      {
        title: "Aristino",
        link: "/collections/aristino",
      },
      {
        title: "Aristino Gold",
        link: "/collections/aristino-gold",
      },
      {
        title: "Aristino Business",
        link: "/collections/aristino-business",
      },
    ],
    banner: [
      {
        title: "GIAO ĐIỂM - SUMMER COLLECTION 2024",
        link: "/collections/aristino-gold",
        image_min_768:
          "https://res.cloudinary.com/rubiescloud/image/upload/v1736244735/aristino/giaodiem_waux4b.webp",
        image_max_768:
          "https://res.cloudinary.com/rubiescloud/image/upload/v1736244739/aristino/giaodiemmb_meqckh.webp",
        style: {
          WidthDesk: 560,
          HeightDesk: 336,
          "--width-mb": 236,
          "--height-mb": 324,
        },
      },
      {
        title: "Tủ đồ quý ông",
        link: "/collections/aristino-business",
        image_min_768:
          "https://res.cloudinary.com/rubiescloud/image/upload/v1736244728/aristino/tu-do-quy-ong_fo4zqs.webp",
        image_max_768:
          "https://res.cloudinary.com/rubiescloud/image/upload/v1736244730/aristino/tu-do-quy-ong-mb_o6rkpw.webp",
        style: {
          WidthDesk: 760,
          HeightDesk: 512,
          "--width-mb": 760,
          "--height-mb": 512,
        },
      },
    ],
  },
];

const Header = () => {
  const location = useLocation();
  const { wishlist } = useContext(AuthContext);

  const [isShowSearch, setIsShowSearch] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isHoverMenu, setIsHoverMenu] = useState(false);
  const [isShowSubMenu, setIsShowSubMenu] = useState(menuData.map(() => false));
  const [isShowChildMenu, setIsShowChildMenu] = useState(menuData.map(() => false));
  const [countWishlist, setCountWishlist] = useState(0);

  const toggleSearch = () => {
    if (window.innerWidth < 991) {
      setIsShowMenu(!isShowMenu);
    } else {
      setIsShowSearch(!isShowSearch);
    }
  };

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const toggleSubMenu = (index) => {
    setIsShowSubMenu((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  const toggleChildMenu = (subIndex) => {
    setIsShowChildMenu((prev) => prev.map((item, i) => (i === subIndex ? !item : item)));
  };

  useEffect(() => {
    setCountWishlist(wishlist?.products?.length || 0);
  }, [wishlist]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) {
        setIsShowSearch(false);
      } else {
        setIsShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsShowSearch(false);
    setIsShowMenu(false);
    setIsHoverMenu(false);
  }, [location.pathname]);

  return (
    <>
      <section className="topbar">
        <div className="container-fluid">
          <div className="topbar-wrapper">
            <div className="inner-left">
              <span>FALL WINTER COLLECTION 2024</span>
              <div className="divider"></div>
              <Link to="/collections/huyen-thoai-phuong-dong">SHOW NOW</Link>
            </div>
            <div className="inner-right">
              <div className="list-actions">
                <Link to="/pages/he-thong-cua-hang">
                  <IconStore />
                  <span>Tìm cửa hàng</span>
                </Link>
                <div className="divider"></div>
                <Link to="#">
                  <span>SUPPORT</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <header className="header">
        <div className="header-top">
          <div className="container-fluid">
            <div className="header-top-wrapper">
              <div className="header-top-space"></div>
              <div className="header-top-logo">
                <Link to="/">
                  <Logo />
                </Link>
                <h1 style={{ display: "none" }}>
                  <Link to="/">ARISTINO</Link>
                </h1>
              </div>
              <div className="header-top-actions">
                <div className="header-actions-list">
                  <ul>
                    <li className="action-search">
                      <Link to="#" className="btn-search" onClick={toggleSearch}>
                        {isShowSearch ? <IconClose /> : <IconSearch />}
                      </Link>
                    </li>
                    <li className="action-account">
                      <Link to="/account">
                        <IconAccount />
                      </Link>
                    </li>
                    <li className="action-wishlist">
                      <Link to="/pages/wishlist" className="hasitem">
                        <IconWishlist />
                        <span>{countWishlist}</span>
                      </Link>
                    </li>
                    <li className="action-cart">
                      <Link to="/cart" className="hasitem">
                        <IconCart />
                        <span>0</span>
                      </Link>
                    </li>
                    <li className="action-menu">
                      <Link to="#" onClick={toggleMenu}>
                        <IconMenu />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`header-bottom${isShowMenu ? " open" : ""}`}>
          <div className="container-fluid">
            <div className="header-bottom-wrapper">
              <div className="header-bottom-mobile">
                <div className="header-menu-head">
                  <div className="header-menu-logo">
                    <Link to="/">
                      <Logo />
                    </Link>
                  </div>
                  <div className="header-menu-btn">
                    <div className="close-button">
                      <button className="button" name="Close Menu" onClick={toggleMenu}>
                        <IconClose />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-bottom-left">
                <div className="header-menu">
                  <div className="header-menu-subnav">
                    <Link to="/collections/hang-moi" className="header-menu-subnav-item">
                      TRANG PHỤC
                    </Link>
                    <Link to="/collections/phu-kien" className="header-menu-subnav-item">
                      PHỤ KIỆN
                    </Link>
                    <Link to="/collections/do-da" className="header-menu-subnav-item">
                      ĐỒ DA
                    </Link>
                  </div>
                  <div className="header-menu-nav">
                    <ul className="header-menu-list">
                      {menuData.map((item, index) => (
                        <li
                          key={index}
                          className={`header-menu-list-item ${item.subMenu ? "has-child" : ""}`}
                          onMouseEnter={() => setIsHoverMenu(true)}
                          onMouseLeave={() => setIsHoverMenu(false)}
                        >
                          <button
                            className={`open_child${isShowSubMenu[index] ? " active" : ""}`}
                            onClick={() => toggleSubMenu(index)}
                          >
                            <IconDropDown />
                          </button>
                          <Link
                            to={item.link}
                            className={`${item.highlight ? "highlight" : ""}${
                              isShowSubMenu[index] ? " active" : ""
                            }`}
                          >
                            <span>{item.title}</span>
                          </Link>
                          {item.subMenu && (
                            <div
                              className="header-menu-mega"
                              style={
                                isShowSubMenu[index]
                                  ? {
                                      display: "block",
                                    }
                                  : {}
                              }
                            >
                              <div className="header-menu-mega-wrapper">
                                <ul className="header-menu-mega-list">
                                  {item.subMenu.map((subItem, subIndex) => (
                                    <li key={subIndex} className="header-menu-mega-item">
                                      {subItem.subMenu ? (
                                        <>
                                          <button
                                            className={`open_child${
                                              isShowChildMenu[subIndex] ? " active" : ""
                                            }`}
                                            onClick={() => toggleChildMenu(subIndex)}
                                          >
                                            <IconDropDown />
                                          </button>
                                          <Link
                                            to={subItem.link}
                                            className={`${
                                              isShowChildMenu[subIndex] ? "active" : ""
                                            }`}
                                          >
                                            {subItem.title}
                                          </Link>
                                          <ul
                                            className={`header-menu-mega-sub`}
                                            style={
                                              isShowChildMenu[subIndex]
                                                ? {
                                                    display: "block",
                                                  }
                                                : {}
                                            }
                                          >
                                            {subItem.subMenu.map((childItem, childIndex) => (
                                              <li key={childIndex}>
                                                <Link to={childItem.link}>{childItem.title}</Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </>
                                      ) : (
                                        <Link to={subItem.link}>{subItem.title}</Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                                {item.banner && (
                                  <div className="header-menu-mega-banner">
                                    {item.banner.map((bannerItem, bannerIndex) => (
                                      <div
                                        key={bannerIndex}
                                        className={`header-menu-mega-banner-item i${
                                          bannerIndex + 1
                                        }`}
                                      >
                                        <Link
                                          to={bannerItem.link}
                                          className="aspect-ratio"
                                          style={bannerItem.style}
                                        >
                                          <picture>
                                            <source
                                              srcSet={bannerItem.image_min_768}
                                              media="(min-width: 768px)"
                                            />
                                            <source
                                              srcSet={bannerItem.image_max_768}
                                              media="(max-width: 767px)"
                                            />
                                            <img
                                              className="img-default ls-is-cached lazyloaded"
                                              src={bannerItem.image_min_768}
                                              alt={bannerItem.title}
                                            />
                                          </picture>
                                        </Link>
                                        <div className="detail">
                                          <h3>{bannerItem.title}</h3>
                                          <Link to={bannerItem.link} className="btn-link">
                                            <span>Shop now</span>
                                          </Link>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="header-menu-extra">
                    <div className="list-info">
                      <Link to="/pages/wishlist" className="hasitem mb_wishlist">
                        <IconWishlist />
                        <span>0</span>
                      </Link>
                      <div className="divider"></div>
                      <Link to="/pages/he-thong-cua-hang">
                        <IconStore />
                        <span>TÌM CỬA HÀNG</span>
                      </Link>
                      <div className="divider"></div>
                      <Link to="tel:18006226">SUPPORT</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-bottom-right">
                <div className={`header-search${isShowSearch ? " open" : ""}`}>
                  <form action="/search" className="searchform ultimate-search">
                    <div className="search-form-inner">
                      <input
                        required=""
                        className="form-control searchform-input"
                        name="q"
                        maxLength="40"
                        autoComplete="off"
                        type="text"
                        size="20"
                        placeholder="Bạn cần tìm gì?"
                      />
                    </div>
                    <button className="btn btn-search">
                      <IconSearch />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          to="#"
          className="menuOverlay"
          style={{
            height: isHoverMenu ? "100%" : "0%",
            opacity: isHoverMenu ? "1" : "0",
            visibility: isHoverMenu ? "visible" : "hidden",
          }}
        ></Link>
      </header>
    </>
  );
};

export default Header;
