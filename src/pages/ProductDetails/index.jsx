import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { products } from "../../assets/data/products";
import { collections } from "../../assets/data/collections";

import NotFound from "../NotFound";
import Breadcrumb from "../../components/Breadcrumb";
import ProductItem from "../../components/ProductItem";
import Brand from "../../components/Brand";

import "./ProductDetails.scss";

import { ReactComponent as IconStar1 } from "../../assets/svg/star1.svg";
import { ReactComponent as IconStar2 } from "../../assets/svg/star2.svg";
import { ReactComponent as IconStarFull } from "../../assets/svg/starfull.svg";
import { ReactComponent as IconStarBorder } from "../../assets/svg/starborder.svg";
import { ReactComponent as IconChooseSize } from "../../assets/svg/choosesize.svg";
import { ReactComponent as IconCart } from "../../assets/svg/cart.svg";
import { ReactComponent as IconWishList } from "../../assets/svg/wishlist.svg";
import { ReactComponent as IconArrowRight } from "../../assets/svg/arrowright.svg";
import { ReactComponent as IconCirclePattern } from "../../assets/svg/circlepattern.svg";

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find((product) => product.slug === slug);

  const breadcrumbs = [
    {
      link: "/collections/thuong-hieu",
      name: "THƯƠNG HIỆU",
    },
    {
      link: "/" + slug,
      name: product.name,
    },
  ];

  const sizeFull = {
    string: ["S", "M", "L", "XL", "XXL"],
    number: [38, 39, 40, 41, 42, 43],
  };

  const sizes = sizeFull[product.typeSize];

  const [activeColorName, setActiveColorName] = useState(product.variants[0].color);
  const [hoverColorName, setHoverColorName] = useState(activeColorName);
  const [activeSize, setActiveSize] = useState(product.variants[0].sizes[0].size);
  const [tabActive, setTabActive] = useState("tab-1");

  const handleTabActive = (tab) => {
    setTabActive(tab);
  };

  useEffect(() => {
    if (product) {
      document.title = product.name + " - ARISTINO";
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <div className="productdetail-layout normal-layout" id="productdetail-page">
        <div className="productdetail-wrapper">
          <div className="productdetail-inner">
            <div className="container-fluid p8">
              <div className="productdetail-row">
                <div className="productdetail-left productdetail-gallery"></div>
                <div className="productdetail-right productdetail-info">
                  <Breadcrumb items={breadcrumbs} />
                  <div className="detail-wrapper">
                    <div className="pr-infos-heading sticky_show">
                      <span className="pr-infos-vendor">{product.brand}</span>
                      <h1 className="pr-title">{product.name}</h1>
                    </div>
                    <div className="pr-infos-prices sticky_show">
                      <div className="pr-price">
                        <span className="price">
                          {product.price * (1 - product.discount / 100).toLocaleString()}đ
                        </span>
                        {product.discount > 0 && (
                          <>
                            <del className="price-compare">{product.price.toLocaleString()}đ</del>
                            <span className="price-percent">{product.discount}% OFF</span>
                          </>
                        )}
                      </div>
                      <div className="pr-vat">
                        <div>(Giá đã bao gồm VAT)</div>
                      </div>
                    </div>
                    <div className="pr-infos-reviews">
                      <div className="pr-reviews">
                        <div className="pr-left">
                          <IconStar1 />
                          <div className="pr-reviews-number">
                            <span className="number-rate">
                              {(
                                product.comments.reduce(
                                  (total, product) => total + product.rating,
                                  0
                                ) / product.comments.length || 0
                              ).toFixed(1)}
                            </span>
                            <span className="number-comment">
                              (
                              {products.reduce(
                                (total, product) => total + product.comments.length,
                                0
                              )}
                              )
                            </span>
                          </div>
                        </div>
                        <div className="pr-right">
                          <div className="pr-reviews-btn">
                            <Link to="#customers-rating">Viết đánh giá</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pr-infos-variants sticky_show">
                      <div className="select-swatch">
                        <div className="swatch swatch-color">
                          <div className="swatch-header color">
                            <span className="title">
                              <span>Màu sắc</span>
                              <span>{hoverColorName || activeColorName}</span>
                            </span>
                          </div>
                          <div className="select-swap select-swap-color">
                            {product.variants.map((variant, index) => (
                              <div
                                key={index}
                                className="swatch-element"
                                onMouseEnter={() => setHoverColorName(variant.color)}
                                onMouseLeave={() => setHoverColorName("")}
                                onClick={() => setActiveColorName(variant.color)}
                              >
                                <label
                                  className={`aspect-ratio${
                                    variant.color === activeColorName ? " sd" : ""
                                  }`}
                                  style={{
                                    background: `url(${variant.images[0]})`,
                                    backgroundSize: "contain",
                                  }}
                                ></label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="swatch swatch-size">
                          <div className="swatch-header size">
                            <span className="title">
                              <div className="btn-sizeguide">Bảng size</div>
                            </span>
                            <Link to="#" className="btn-sizeguide">
                              Hướng dẫn chọn size <IconChooseSize />
                            </Link>
                          </div>
                          <div className="select-swap select-swap-size">
                            {sizes.map((size, index) => (
                              <div
                                key={index}
                                className="swatch-element"
                                onClick={() =>
                                  product.variants.some((variant) =>
                                    variant.sizes.some((s) => s.size === size && s.quantity > 0)
                                  ) && setActiveSize(size)
                                }
                              >
                                <label
                                  className={`aspect-ratio${
                                    product.variants.some((variant) =>
                                      variant.sizes.some((s) => s.size === size && s.quantity > 0)
                                    )
                                      ? size === activeSize
                                        ? " sd" // Nếu là size đang active
                                        : ""
                                      : " soldout"
                                  }`}
                                >
                                  {size}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pr-infos-actions sticky_show">
                      <div className="pr-controls">
                        <button type="button" className="btn add-cart" id="btn-addtocart">
                          <IconCart />
                          <span>Thêm vào giỏ hàng</span>
                        </button>
                        <button type="button" className="pr-button-wishlist js-wishlist">
                          <IconWishList />
                        </button>
                      </div>
                    </div>
                    <div className="pr-infos-extrainfo">
                      <div className="pr-extrainfo">
                        <div className="pr-estdelivery">
                          <div className="title">Thời gian giao hàng dự kiến</div>
                          <div className="datetime">Từ 3 đến 5 ngày kể từ ngày đặt hàng</div>
                        </div>
                        <Link to="#" className="btn-link btn-store">
                          <span>Mua tại showroom</span>
                        </Link>
                      </div>
                    </div>
                    <div className="pr-infos-disclaimer">
                      <div className="pr-disclaimer">
                        Miễn phí đổi trả hàng trong 30 ngày. Thuế và phí vận chuyển sẽ được bồi
                        thường khi trả hàng.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="productdetail-inner">
            <div className="container-fluid p8">
              <div className="pr-infos-tabs">
                <ul className="tabs-nav">
                  <li className={`tab ${tabActive === "tab-1" ? "tab-active" : ""}`}>
                    <Link onClick={() => handleTabActive("tab-1")}>
                      <span>Chi tiết sản phẩm</span>
                    </Link>
                  </li>
                  <li className={`tab ${tabActive === "tab-2" ? "tab-active" : ""}`}>
                    <Link onClick={() => handleTabActive("tab-2")}>
                      <span>Chính sách đổi & hoàn trả</span>
                    </Link>
                  </li>
                  <li className={`tab ${tabActive === "tab-3" ? "tab-active" : ""}`}>
                    <Link onClick={() => handleTabActive("tab-3")}>
                      <span>Đánh giá & Nhận xét</span>
                    </Link>
                  </li>
                </ul>
                <div className="tabs-stage">
                  <div
                    id="tab-1"
                    className={`tab-content ${tabActive === "tab-1" ? "active" : ""}`}
                  >
                    <div className="description-content">
                      <div className="description-productdetail detail-content detail-expandable">
                        <div className="expandable-inner">
                          <ul>
                            <li>
                              <strong>Tên sản phẩm: </strong>
                              {product.name}
                              {"."}
                            </li>
                            {product.detail && (
                              <>
                                {Object.entries(product.detail).map(([key, value]) => (
                                  <li key={key}>
                                    <strong>{value.name}: </strong>
                                    {Array.isArray(value.description) ? (
                                      <ul>
                                        {value.description.map((desc, index) =>
                                          typeof desc === "string" ? (
                                            <li key={index}>{desc}</li>
                                          ) : (
                                            <li key={index}>
                                              <strong>{desc.name}: </strong> {desc.description}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    ) : (
                                      <span>{value.description}</span>
                                    )}
                                  </li>
                                ))}
                              </>
                            )}
                            <li>
                              <strong>Màu sắc: </strong>
                              {product.variants.map((variant, index) => (
                                <span key={index}>
                                  {variant.color}
                                  {index < product.variants.length - 1 ? ", " : "."}
                                </span>
                              ))}
                            </li>
                            <li>
                              <strong>Size: </strong>
                              {[
                                ...new Set(
                                  product.variants.flatMap((variant) =>
                                    variant.sizes.map((s) => s.size)
                                  )
                                ),
                              ].map((size, index, array) => (
                                <span key={index}>
                                  {size}
                                  {index < array.length - 1 ? ", " : "."}
                                </span>
                              ))}
                            </li>
                            <li>
                              <strong>Sản xuất: </strong>
                              {product.manufacturer}
                              {"."}
                            </li>
                          </ul>
                          {product.preserves && (
                            <>
                              <p>
                                <strong>Hướng dẫn bảo quản và giặt ủi: </strong>
                              </p>
                              <ul>
                                {product.preserves.map((preserve, index) => (
                                  <li key={index}>{preserve}</li>
                                ))}
                              </ul>
                            </>
                          )}
                          {product.notes && (
                            <>
                              <p>
                                <strong>Lưu ý: </strong>
                              </p>
                              <ul>
                                {product.notes.map((note, index) => (
                                  <li key={index}>{note}</li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="tab-2"
                    className={`tab-content ${tabActive === "tab-2" ? "active" : ""}`}
                  >
                    <div className="description-content">
                      <p>
                        <strong>1. Quy định chính sách Bảo hành</strong>
                      </p>
                      <p>
                        - Bảo hành là khắc phục những lỗi hỏng hóc, sự cố kỹ thuật xảy ra do lỗi của
                        nhà sản xuất trong thời hạn bảo hành và hỗ trợ khắc phục hư hại phát sinh
                        trong quá trình sử dụng của khách hàng.
                      </p>
                      <p>
                        - Bảo hành không được chuyển nhượng của sản phẩm này sang sản phẩm khác, từ
                        khách hàng này sang khách hàng khác.
                      </p>
                      <p>
                        - Thời hạn bảo hành được xác định từ ngày mua trên chứng từ mua hàng/ đổi
                        hàng.
                      </p>
                      <p>
                        - Điều kiện Bảo hành miễn phí: Sản phẩm bị lỗi sản xuất; bị lỗi không do tác
                        động ngoại quan, không sửa chữa trước đó ở một đơn vị khác.
                      </p>
                      <p>
                        <strong>- Các trường hợp không được bảo hành</strong>
                      </p>
                      <p>
                        + Không bảo hành phụ kiện: phụ kiện bị hỏng va đập hoặc làm mất, bị hao mòn
                        hoặc cháy trong quá trình sử dụng, hoặc do môi trường gây ra
                      </p>
                      <p>
                        + Không nhận các sản phẩm đã quá cũ (da/vải và đế bị lão hóa, không còn độ
                        bám dính của keo, chỉ, hoặc không có phụ kiện để thay thế).
                      </p>
                      <p>
                        + Những thiệt hại trong quá trình sử dụng: sản phẩm bị rách, trầy xước do
                        người sử dụng (va quệt, rạch, co kéo, đựng quá nặng, ẩm mốc, ố vàng, bạc màu
                        do tiếp xúc với mồ hôi, nước mưa…)
                      </p>
                      <p>
                        + Sản phẩm bị biến dạng, giảm giá, hoặc không có chứng từ mua hàng. + Sản
                        phẩm đã được sửa chữa ở một nơi khác.
                      </p>
                      <p>
                        <strong>2. Nội dung chính sách Bảo hành:</strong>
                      </p>
                      <div className="table-responsive">
                        <table cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <th>Nhóm hàng</th>
                              <th>Chi tiết</th>
                            </tr>
                            <tr>
                              <td>
                                <p>+ Áo Vest, jacket, lông vũ, dạ (dòng cao cấp)</p>
                                <p>
                                  + Áo Polo, T-shirt, Tanktop, Quần Shorts, Bộ đồ, Áo sơ mi, Áo Len,
                                  Quần âu, Quần Khaki
                                </p>
                                <p>+ Phụ kiện đồ vải (cà vạt)/ Lót Giày</p>
                              </td>
                              <td>
                                <p>Bảo hành trong 30 ngày</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>Linh phụ kiện thay thế</p>
                              </td>
                              <td>
                                <p>Bảo hành trong 3 tháng</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>+ Dây lưng</p>
                                <p>+ Cặp/ Túi/ Clutch/ Ví</p>
                                <p>+ Vali</p>
                              </td>
                              <td>
                                <p>Bảo hành trong 6 tháng</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p>+ Giày</p>
                                <p>+ Áo Da thật</p>
                              </td>
                              <td>
                                <p>Bảo hành trong 12 tháng</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p>
                        <strong>3. Quy định về tính phí vận chuyển đối với hàng Bảo hành:</strong>
                      </p>
                      <p>
                        - Trường hợp khách hàng chuyển sản phẩm muốn bảo hành tới Showroom hoặc
                        phòng CSKH, vui lòng gọi trước tới tổng đài hệ thống 1800 6226 hoặc Hotline
                        tại Showroom để được tư vấn và hỗ trợ.
                      </p>
                      <p>
                        - Trường hợp bảo hành trong chính sách: Aristino chịu phí vận chuyển (nếu có
                        phát sinh).
                      </p>
                      <p>
                        - Trường hợp bảo hành ngoài chính sách: Quý khách vui lòng thanh toán phí
                        vận chuyển 2 chiều (nếu có).
                      </p>
                    </div>
                  </div>
                  <div
                    id="tab-3"
                    className={`tab-content ${tabActive === "tab-3" ? "active" : ""}`}
                  >
                    <div className="container">
                      <div className="hrv-crv-container">
                        <div className="hrv-crv hrv-crv-container">
                          <div className="hrv-crv-rating-info">
                            <div className="hrv-crv-rating-group-left done">
                              <div className="hrv-crv-rating-left">
                                <div className="hrv-crv-rating-star">
                                  <IconStar2 />
                                  <div className="hrv-crv-rating-avg-star">
                                    {product.comments.reduce(
                                      (total, comment) => total + comment.rating,
                                      0
                                    ) / product.comments.length || 0}
                                  </div>
                                </div>
                                <div className="hrv-crv-rating-total-star">
                                  {product.comments.length} đánh giá
                                </div>
                              </div>
                              <div className="hrv-crv-rating-avg-list">
                                {Array(5)
                                  .fill()
                                  .map((_, index) => (
                                    <div className="hrv-crv-rating-avg-item" key={index}>
                                      <div className="hrv-crv-rating-star-groups">
                                        {Array(5)
                                          .fill()
                                          .map((_, starIndex) =>
                                            starIndex < 5 - index ? (
                                              <IconStarFull key={starIndex} />
                                            ) : (
                                              <IconStarBorder key={starIndex} />
                                            )
                                          )}
                                      </div>
                                      <progress
                                        className="hrv-crv-progress"
                                        value={
                                          (product.comments.filter(
                                            (comment) => comment.rating === 5 - index
                                          ).length /
                                            product.comments.length) *
                                            100 || 0
                                        }
                                        max="100"
                                      >
                                        {(
                                          (product.comments.filter(
                                            (comment) => comment.rating === 5 - index
                                          ).length /
                                            product.comments.length) *
                                          100
                                        ).toFixed(2)}
                                      </progress>
                                      <div className="hrv-crv-rating-star-total">
                                        {
                                          product.comments.filter(
                                            (comment) => comment.rating === 5 - index
                                          ).length
                                        }
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </div>
                            <div className="hrv-crv-rating-group-right done">
                              <button id="start_rating">
                                Viết đánh giá
                                <IconArrowRight />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="productdetail-inner">
            <section className="section section-collection-s2 swiper-style">
              <div className="s-wrapper">
                <div className="container-fluid p8">
                  <div className="s-heading">
                    <div className="s-title">
                      <h2>
                        <IconCirclePattern />
                        <span>HÀNG MỚI</span>
                      </h2>
                    </div>
                  </div>
                  <div className="s-content">
                    <Swiper
                      modules={[Navigation, Pagination, Scrollbar]}
                      breakpoints={{
                        1024: {
                          slidesPerView: 4,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        0: {
                          slidesPerView: 1.3,
                        },
                      }}
                      spaceBetween={16}
                      scrollbar={{ draggable: true }}
                    >
                      {collections["hang-moi"].listProduct.slice(0, 12).map((product, index) => (
                        <SwiperSlide key={index}>
                          <ProductItem product={product} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="section-brand">
            <div className="container-fluid p8">
              <div className="s-heading">
                <div className="s-title">
                  <h2>
                    <IconCirclePattern />
                    <span> Các thương hiệu thuộc ARISTINO</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="s-content">
              <Brand />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
