import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Account.scss";

import { ReactComponent as IconUser } from "../../assets/svg/user.svg";
import { ReactComponent as IconOrder } from "../../assets/svg/order.svg";
import { ReactComponent as IconAddress } from "../../assets/svg/address.svg";

const user = {
  email: "tandu542003@gmail.com",
  firstName: "Tấn Dự",
  lastName: "Nguyễn",
  // birthday: {
  //   day: 5,
  //   month: 4,
  //   year: 2003,
  // },
  birthday: null,
};

const Account = () => {
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
                    <div className="name">Xin Chào, {user.firstName + " " + user.lastName}!</div>
                  </div>
                  <div className="line">
                    <Link to="/account/logout" className="logout">
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
                  <form acceptCharset="UTF-8" action="/account" id="update_customer" method="post">
                    <input name="form_type" type="hidden" defaultValue="update_customer" />
                    <input name="utf8" type="hidden" defaultValue="✓" />

                    <div className="form-row">
                      <div className="form-col-half">
                        <div className="item-input-form">
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          <input
                            disabled
                            type="email"
                            defaultValue={user.email}
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
                            defaultValue={user.lastName + " " + user.firstName}
                            name="full_name"
                            className="form-control"
                            id="full_name"
                          />
                          <input type="hidden" name="first_name" value={user.firstName} />
                          <input type="hidden" name="last_name" value={user.lastName} />
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
                            value={user.birthday ?? ""}
                            name="birthday"
                            className="form-control"
                            id="birthday"
                          />
                        </div>
                        <input type="hidden" name="birthday" />
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
