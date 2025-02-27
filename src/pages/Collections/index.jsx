import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Brand from "../../components/Brand";
import Breadcrumb from "../../components/Breadcrumb";
import ProductItem from "../../components/ProductItem";
import NotFound from "../NotFound";

import "./Collections.scss";

import { ReactComponent as IconArrowLeft } from "../../assets/svg/arrowleft.svg";
import { ReactComponent as IconPattern } from "../../assets/svg/circlepattern.svg";
import { ReactComponent as IconClose } from "../../assets/svg/close.svg";
import { ReactComponent as IconDropDown } from "../../assets/svg/dropdown.svg";
import { ReactComponent as IconFilter } from "../../assets/svg/filter.svg";
import { ReactComponent as IconShowMore } from "../../assets/svg/showmore.svg";

import { collections } from "../../assets/data/collections";
import { filterOptions } from "../../assets/data/filterOptions";
import { sortOptions } from "../../assets/data/sortOptions";
// import { products } from "../../assets/data/products";

const Collections = () => {
  const { slug } = useParams();
  const collection = collections[slug];

  const [hideFilter, setHideFilter] = useState(false);
  const [toggleShowMore, setToggleShowMore] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filter, setFilter] = useState({});
  const [countShowProduct, setCountShowProduct] = useState(36);
  const [toggleShowSort, setToggleShowSort] = useState(false);

  const handleToggleShowMore = (key) => {
    setToggleShowMore((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleRemoveFilter = (key) => {
    setFilter((prev) => {
      const newFilter = { ...prev };
      delete newFilter[key];
      return newFilter;
    });
  };

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => {
      const newValues = prev[name] ? [...prev[name]] : [];
      return newValues.includes(value)
        ? { ...prev, [name]: newValues.filter((item) => item !== value) }
        : { ...prev, [name]: [...newValues, value] };
    });
  };

  const handleShowSort = () => setToggleShowSort((prev) => !prev);

  useEffect(() => {
    if (collection) {
      document.title = collection.title;
      window.scrollTo(0, 0);
    }
  }, [collection]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 1024) {
      setHideFilter(true);
    } else {
      setHideFilter(false);
    }
  }, [windowWidth]);

  if (!collection) {
    return <NotFound />;
  }

  const { featuredImage, breadcrumbs, desc, listProduct } = collection;

  const handleShowMoreProduct = () => {
    setCountShowProduct((prev) => Math.min(prev + 36, listProduct.length));
  };

  return (
    <>
      <div className="collection-layout normal-layout" id="collection-page">
        <div className="collection-wrapper">
          <div className="collection-head">
            {featuredImage && (
              <>
                <div className="hero-banner" id="hero-banner">
                  <div
                    className="aspect-ratio back-origin"
                    style={{
                      "--width-desk": 2880,
                      "--height-desk": 767,
                      "--width-mb": 2,
                      "--height-mb": 3,
                    }}
                  >
                    <div className="swiper-slide">
                      <Link to="#">
                        <picture>
                          <source
                            srcSet={featuredImage.desktopImage}
                            data-srcset={featuredImage.desktopImage}
                            media="(min-width: 992px)"
                          />
                          <source
                            srcSet={featuredImage.mobileImage}
                            data-srcset={featuredImage.mobileImage}
                            media="(max-width: 991px)"
                          />
                          <img
                            className="img-default ls-is-cached lazyloaded"
                            src={featuredImage.desktopImage}
                            data-src={featuredImage.desktopImage}
                            alt={`${breadcrumbs[0].name}`}
                          />
                        </picture>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className="grid-head">
              <div className="container-fluid p8">
                <Breadcrumb items={breadcrumbs} />
                <div className="heading-wrapper">
                  <div className="heading-inner-left">
                    <h1>
                      <IconPattern />
                      {breadcrumbs[0].name}
                    </h1>
                    {desc && <div>{desc}</div>}
                  </div>
                  <div className="heading-inner-right">
                    <div className="actions">
                      <div className="filter-wrapper">
                        <div className="list-btn">
                          <span className="count">
                            <span>{`${listProduct.length} sản phẩm`}</span>
                          </span>
                          <div
                            className={`sortByFilter${toggleShowSort ? " show" : ""}`}
                            onClick={handleShowSort}
                          >
                            <button className="btn-sortby">
                              <span>Sắp Xếp</span>
                              <IconDropDown />
                            </button>
                            <div className={`sort-options${toggleShowSort ? "" : " hidden"}`}>
                              <ul className="sort-options-list">
                                {sortOptions.map((item, index) => (
                                  <li key={index}>
                                    <input
                                      type="radio"
                                      value={item.value}
                                      id={`cfb-sort-input-${index}`}
                                    />
                                    <label htmlFor={`cfb-sort-input-${index}`}>{item.name}</label>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <button
                            className="btn-filter"
                            onClick={() => setHideFilter((prev) => !prev)}
                          >
                            <span>Bộ lọc</span>
                            <IconFilter />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`collection-body ${hideFilter ? " hide-filter" : ""}`}>
            <div className="container-fluid p8">
              <div className="push-section">
                <div
                  className={`refinement-section sticky-filter${
                    !hideFilter && windowWidth < 1024 ? " has-filter" : ""
                  }`}
                >
                  <div
                    className={`collection-filter filter-wrapper-col${
                      !hideFilter && windowWidth < 1024 ? " filter-visible" : ""
                    }`}
                  >
                    <div className="filter-box box-block">
                      <div className="box-title">
                        <h3>
                          <span>Bộ lọc</span>
                        </h3>
                        <button
                          className="btn-close-filter-mobile"
                          onClick={() => setHideFilter(true)}
                        >
                          <IconClose />
                        </button>
                        <button className="btn-hide-filter" onClick={() => setHideFilter(true)}>
                          <IconArrowLeft />
                        </button>
                      </div>
                      <div className="box-scroll">
                        <div className="layered-filter-group ">
                          {Object.keys(filterOptions).map((key) => {
                            const { id, name, values } = filterOptions[key];

                            return (
                              <div className="sidebar-box filter-group" key={id}>
                                <div className="sidebar-box-block">
                                  <div
                                    className="sidebar-box-subtitle"
                                    data-toggle="collapse"
                                    href={`#${id}`}
                                    role="button"
                                    aria-expanded={!toggleShowMore[id]}
                                    aria-controls={id}
                                    onClick={() => handleToggleShowMore(id)}
                                  >
                                    <span>{name}</span>
                                    <span className="icon-control"></span>
                                  </div>
                                  <div
                                    id={id}
                                    className={`sidebar-box-content ${id} collapse${
                                      !toggleShowMore[id] ? " show" : ""
                                    }`}
                                  >
                                    <ul className="checkbox-list">
                                      {values.map((value, idx) => {
                                        const valueStr =
                                          typeof value === "object" ? value.value : value;

                                        return (
                                          <li key={idx}>
                                            <input
                                              type="checkbox"
                                              id={`${id}-p${idx + 1}`}
                                              value={valueStr}
                                              name={id}
                                              checked={(filter[id] || []).includes(valueStr)}
                                              onChange={handleFilter}
                                            />
                                            <label
                                              htmlFor={`${id}-p${idx + 1}`}
                                              style={typeof value === "object" ? value.style : {}}
                                            >
                                              {valueStr}
                                            </label>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="box-action">
                        <div className="filter-controls">
                          <button className="btn btn-outline btn-clear-filter-js">
                            <span>HUỶ</span>
                          </button>
                          <button className="btn btn-apply-filter-js">
                            <span>LƯU</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="results-section" style={{ minHeight: "627px" }}>
                  <div className="filter-wrapper-row">
                    <div className="layered-filter-tags-wrapper">
                      <div className="layered-filter-tags">
                        {Object.entries(filter).map(
                          ([key, values]) =>
                            values.length > 0 && (
                              <div key={key} className="filter-tags opened">
                                {values.map((value, index) => (
                                  <b key={index}>
                                    {value}
                                    {index < values.length - 1 && ", "}
                                  </b>
                                ))}
                                <div
                                  className="filter-tags-remove"
                                  onClick={() => handleRemoveFilter(key)}
                                >
                                  <IconClose />
                                </div>
                              </div>
                            )
                        )}

                        {Object.values(filter).some((value) => value.length > 0) && (
                          <div className="filter-tags remove-all" onClick={() => setFilter({})}>
                            <span>XÓA BỘ LỌC</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="filter-wrapper-grid">
                    {listProduct.length > 0 ? (
                      <div className="grid-products">
                        {listProduct.slice(0, countShowProduct).map((product, index) => (
                          <ProductItem key={index} product={product} index={index + 1} />
                        ))}
                      </div>
                    ) : (
                      <>
                        <div className="grid-empty alert-info">
                          Chưa có sản phẩm nào trong danh mục này
                        </div>
                      </>
                    )}
                  </div>
                  {countShowProduct <= listProduct.length && (
                    <div className="actions-wrapper-row">
                      <div className="show-text">
                        Đang hiển thị
                        <span className="js-ResultCountCurrent"> {countShowProduct} </span>
                        trong số
                        <span className="js-ResultCount"> {listProduct.length} sản phẩm</span>
                      </div>
                      <div className="show-more">
                        <button
                          className="btn-kg btn-dark btn-more"
                          onClick={handleShowMoreProduct}
                        >
                          <span>Xem tất cả</span>
                          <IconShowMore />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="collection-foot">
            <div className="section-brand">
              <div className="container-fluid p8">
                <div className="s-heading">
                  <div className="s-title">
                    <h2>
                      <IconPattern />
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
      </div>
    </>
  );
};

export default Collections;
