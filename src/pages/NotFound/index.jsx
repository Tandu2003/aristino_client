import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./NotFound.scss";

const NotFound = () => {
  useEffect(() => {
    document.title = "Không tìm thấy trang - ARISTINO";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="not-found">
      <h1>404</h1>
      <h2>Không tìm thấy trang</h2>
      <p className="description">Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
      <div className="btn-group">
        <Link to="/">Go to Home</Link>
      </div>
    </main>
  );
};

export default NotFound;
