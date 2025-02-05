import { Link } from "react-router-dom";

import "./Breadcrumb.scss";

const Breadcrumb = ({ items }) => {
  return (
    <>
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb-list">
          <ol className="breadcrumb breadcrumb-arrows">
            <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
              <Link to="/" target="_self" itemProp="item">
                <span itemProp="name">Trang chủ</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            {items.map((item, index) => (
              <li
                key={index}
                itemProp="itemListElement"
                itemScope
                itemType="http://schema.org/ListItem"
              >
                {index === items.length - 1 ? (
                  <span itemProp="item" content={item.link}>
                    <strong itemProp="name">{item.name}</strong>
                  </span>
                ) : (
                  <Link to={item.link} target="_self" itemProp="item">
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
                <meta itemProp="position" content={index + 2} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
