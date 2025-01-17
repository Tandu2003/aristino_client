import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Account.scss";

import { Auth } from "../../api/auth";
import AuthContext from "../../context/AuthProvider";

import { ReactComponent as IconUser } from "../../assets/svg/user.svg";
import { ReactComponent as IconOrder } from "../../assets/svg/order.svg";
import { ReactComponent as IconAddress } from "../../assets/svg/address.svg";

const Account = () => {
  const { user, setUser, setLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const { email } = user;

  const { firstName, lastName, birthday } = user.profile;

  const [birthdayValue, setBirthdayValue] = useState(birthday);

  const formatDate = (date) => {
    if (!date) return "";
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();
    return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`;
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    alert("Chức năng đang được phát triển");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await Auth.logout();
    if (response.data.success) {
      setUser({});
      setLoggedIn(false);
      navigate("/");
    }
  };

  useEffect(() => {
    document.title = "Tài khoản - ARISTINO";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="account-body">
        <div className="container-fluid p8">
          <div className="account-body-wrapper">
            <div className="account-body-left">
              <div className="account-sidebar">
                <div className="account-avartar">
                  <div className="line">
                    <div className="name">
                      Xin Chào, {user.profile.firstName + " " + user.profile.lastName}!
                    </div>
                  </div>
                  <div className="line">
                    <Link to="/account/logout" className="logout" onClick={handleLogout}>
                      <span>ĐĂNG XUẤT</span>
                    </Link>
                  </div>
                </div>
                <div className="sidebar">
                  <ul className="sidebar-list">
                    <li className="sidebar-item active">
                      <Link to="/account" className="sidebar-link">
                        <IconUser />
                        <span>Thông tin cá nhân</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/account?view=orders" className="sidebar-link">
                        <IconOrder />
                        <span>Lịch sử đặt hàng</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/account/addresses" className="sidebar-link">
                        <IconAddress />
                        <span>Thông tin giao hàng</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="account-body-right">
              <div className="account-info">
                <div className="account-page-title">
                  <h1>THÔNG TIN CÁ NHÂN</h1>
                </div>
                <div className="account-form">
                  <form onSubmit={handleUpdateProfile}>
                    <div className="form-row">
                      <div className="form-col-half">
                        <div className="item-input-form">
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          <input
                            disabled
                            type="email"
                            defaultValue={email}
                            name="email"
                            className="form-control"
                            id="email"
                          />
                        </div>
                      </div>
                      <div className="form-col-full">
                        <div className="item-input-form">
                          <label className="form-label" htmlFor="full_name">
                            Họ & Tên
                          </label>
                          <input
                            readOnly
                            type="text"
                            placeholder="Nhập tên"
                            required=""
                            defaultValue={firstName + " " + lastName}
                            name="full_name"
                            className="form-control"
                            id="full_name"
                          />
                        </div>
                      </div>
                      <div className="form-col-full">
                        <div className="item-input-form">
                          <label className="form-label" htmlFor="birthday">
                            Sinh nhật
                          </label>
                          <input
                            type="text"
                            placeholder="Nhập ngày tháng năm"
                            required=""
                            name="birthday"
                            className="form-control"
                            id="birthday"
                            value={formatDate(birthdayValue)}
                          />
                        </div>
                      </div>
                      <div className="form-col-half">
                        <div className="action-btn">
                          <button
                            type="submit"
                            className="update-profile update-profile-trigger btn btn--fill-black"
                          >
                            LƯU THAY ĐỔI
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;
