import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../context/AuthProvider";

import "./ProductItem.scss";

import { Wishlist } from "../../api/wishlist";

import { ReactComponent as IconAdd } from "../../assets/svg/add.svg";
import { ReactComponent as IconMore } from "../../assets/svg/more.svg";
import { ReactComponent as IconWishList } from "../../assets/svg/wishlist.svg";

const ProductItem = ({ product, index }) => {
  const { wishlist, setWishlist, user, loggedIn } = useContext(AuthContext);

  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleToggleWishlist = async () => {
    if (!loggedIn) {
      return alert("Vui lòng đăng nhập để thêm sản phẩm vào danh sách yêu thích.");
    }

    try {
      const data = await Wishlist.toggleWishlist(user._id, product._id);
      setWishlist({ ...wishlist, products: data.products });
    } catch (error) {
      console.log(error.response?.data.message || "Server không phản hồi");
    }
  };

  useEffect(() => {
    if (wishlist?.products?.includes(product._id)) {
      setIsInWishlist(true);
    } else {
      setIsInWishlist(false);
    }
  }, [wishlist, product]);

  return (
    <>
      <div className={`pro-title pro-loop pro-t1 ${index}`}>
        <div className="pro-loop-wrap">
          <div className="pro-loop-head">
            <div className="pro-loop-img">
              <picture className="has-hover">
                <source media="(min-width: 768px)" srcSet={product.image.desktop} />
                <source media="(min-width: 768px)" srcSet={product.image.mobile} />
                <img
                  src={product.image.desktop}
                  alt={product.name}
                  className="img-default ls-is-cached lazyloaded"
                />
              </picture>
            </div>
            <Link to={`/products/${product.slug}`} className="pro-loop-link" />
            <div className="pro-loop-wishlist">
              <button
                type="button"
                className={`btn-wishlist${isInWishlist ? " active" : ""}`}
                onClick={handleToggleWishlist}
              >
                <IconWishList className="filled"/>
                <IconWishList />
              </button>
            </div>
            <div className="pro-loop-buttons">
              <button className="pro-action add-to-cart">
                <IconAdd />
              </button>
            </div>
            <div className="pro-loop-swatch">
              <ul className="swatch-list">
                {product.variants.map((variant, index) => (
                  <li key={index} className="swatch-item">
                    <span
                      className="bg type-1 default"
                      style={{
                        backgroundImage: `url(${variant.images[0]})`,
                      }}
                    ></span>
                  </li>
                ))}
              </ul>
              <Link to={`/products/${product.slug}`} className="more">
                <IconMore />
              </Link>
            </div>
          </div>
          <div className="pro-loop-body">
            <h3 className="pro-loop-title">
              <Link to={`/products/${product.slug}`} title={product.name}>
                {product.name}
              </Link>
            </h3>
            <div className="pro-loop-prices">
              <span className="price">
                <span className="normal">{product.price.toLocaleString()}đ</span>
                {product.discount > 0 && <del>{product.price.toLocaleString()}đ</del>}
              </span>
              <div className="percent hidden">
                <span>{product.discount}% off</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
