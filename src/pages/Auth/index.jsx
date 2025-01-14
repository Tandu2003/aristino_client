import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Auth.scss";

import { ReactComponent as IconEye } from "../../assets/svg/eye.svg";
import { ReactComponent as IconNotEye } from "../../assets/svg/noteye.svg";
import { ReactComponent as IconGoogle } from "../../assets/svg/logingg.svg";
import { ReactComponent as IconFacebook } from "../../assets/svg/loginfb.svg";

const Auth = ({ login, register }) => {
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [recoverEmail, setRecoverEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isCheckAgree1, setIsCheckAgree1] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowForgotPassword, setIsShowForgotPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorRecoverEmail, setErrorRecoverEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");

  const handleChangeText = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "recover_email") setRecoverEmail(value);
    if (name === "password") setPassword(value);
    if (name === "last_name") setLastName(value);
    if (name === "first_name") setFirstName(value);
  };

  const handleShowPassword = () => {
    if (password !== "") setIsShowPassword(!isShowPassword);
  };

  const handleCheckAgree1 = () => {
    setIsCheckAgree1(!isCheckAgree1);
  };

  const handleLogin = () => {
    if (email === "") {
      setErrorEmail("Email không được để trống");
      return;
    } else if (!email.includes("@") || !email.includes(".")) {
      setErrorEmail("Email không hợp lệ");
      return;
    } else {
      setErrorEmail("");
    }

    if (password === "") {
      setErrorPassword("Mật khẩu không được để trống");
      return;
    } else {
      setErrorPassword("");
    }

    const account = { email, password };
    console.log(account);

    // Call API login
  };

  const handleForgotPassword = () => {
    if (recoverEmail === "") {
      setErrorRecoverEmail("Email không được để trống");
      return;
    } else if (!recoverEmail.includes("@") || !recoverEmail.includes(".")) {
      setErrorRecoverEmail("Email không hợp lệ");
      return;
    } else {
      setErrorRecoverEmail("");
    }

    console.log(recoverEmail);

    // Call API forgot password
  };

  const handleRegister = () => {
    if (email === "") {
      setErrorEmail("Email không được để trống");
      return;
    } else if (!email.includes("@") || !email.includes(".")) {
      setErrorEmail("Email không hợp lệ");
      return;
    } else {
      setErrorEmail("");
    }

    if (password === "") {
      setErrorPassword("Mật khẩu không được để trống");
      return;
    } else if (password.length < 10 || password.length > 16) {
      setErrorPassword("Mật khẩu phải dài 10-16 ký tự");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorPassword("Mật khẩu phải chứa ít nhất một chữ hoa");
      return;
    } else if (!/[a-z]/.test(password)) {
      setErrorPassword("Mật khẩu phải chứa ít nhất một chữ thường");
      return;
    } else if (!/[0-9]/.test(password)) {
      setErrorPassword("Mật khẩu phải chứa ít nhất một chữ số");
      return;
    } else if (/[^a-zA-Z0-9]/.test(password)) {
      setErrorPassword("Mật khẩu phải chứa ít nhất một Ký hiệu Đặc biệt");
      return;
    } else {
      setErrorPassword("");
    }

    if (lastName === "") {
      setErrorLastName("Họ không được để trống");
      return;
    } else if (!lastName.match(/^[a-zA-Z]+$/)) {
      setErrorLastName("Họ chỉ được chứa chữ cái");
      return;
    } else {
      setErrorLastName("");
    }

    if (firstName === "") {
      setErrorFirstName("Tên không được để trống");
      return;
    } else if (!firstName.match(/^[a-zA-Z]+$/)) {
      setErrorFirstName("Tên chỉ được chứa chữ cái");
      return;
    } else {
      setErrorFirstName("");
    }

    const newAccount = { email, password, lastName, firstName };
    console.log(newAccount);

    // Call API register
  };

  useEffect(() => {
    setEmail("");
    setRecoverEmail("");
    setPassword("");
    setLastName("");
    setFirstName("");
    setErrorEmail("");
    setErrorRecoverEmail("");
    setErrorPassword("");
    setErrorLastName("");
    setErrorFirstName("");
    setIsCheckAgree1(false);
    setIsShowPassword(false);
    setIsShowForgotPassword(false);
  }, [location]);

  useEffect(() => {
    document.title = register ? "Tạo tài khoản - ARISTINO" : "Tài khoản - ARISTINO";
    window.scrollTo(0, 0);
  }, [register]);

  return (
    <>
      <section className="customer-actions">
        <div className="container">
          <div className="customer-actions-wrapper">
            <div
              className="customer-actions-forms"
              style={login ? { height: "521.8px" } : { height: "812.8px" }}
            >
              <div className={`login-n-sigup${isShowForgotPassword ? " forgot-password" : ""}`}>
                <div className="login-n-sigup-forms-header tab-header">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <Link
                        className={`nav-link${login ? " active" : ""}`}
                        to={login ? "#" : "/account/login"}
                      >
                        Đăng Nhập
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        className={`nav-link${register ? " active" : ""}`}
                        to={register ? "#" : "/account/register"}
                      >
                        Đăng Ký
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="login-n-sigup-forms-content tab-content">
                  {login && (
                    <>
                      <div className="tab-pane" id="login" role="tabpanel">
                        <form
                          acceptCharset="UTF-8"
                          action="/account/login"
                          id="customer_login"
                          method="post"
                        >
                          <input name="form_type" type="hidden" defaultValue="customer_login" />
                          <input name="utf8" type="hidden" defaultValue="✓" />

                          <div className={`item-input-form${errorEmail !== "" ? " error" : ""}`}>
                            <label className="form-label" htmlFor="login-email">
                              Email*
                            </label>
                            <input
                              placeholder=""
                              type="email"
                              required
                              name="email"
                              className="form-control"
                              id="login-email"
                              autoComplete="username"
                              onChange={handleChangeText}
                            />
                            <span className="text-error">{errorEmail}</span>
                          </div>

                          <div className={`item-input-form${errorPassword !== "" ? " error" : ""}`}>
                            <label className="form-label" htmlFor="password">
                              Mật Khẩu*
                            </label>
                            <input
                              placeholder=""
                              type={isShowPassword ? "text" : "password"}
                              required
                              name="password"
                              className={`input-password form-control${
                                password !== "" ? " has-value" : ""
                              }`}
                              id="password"
                              autoComplete="current-password"
                              onChange={handleChangeText}
                            />
                            <span className="eyes-password">
                              {isShowPassword ? (
                                <IconEye onClick={handleShowPassword} />
                              ) : (
                                <IconNotEye onClick={handleShowPassword} />
                              )}
                            </span>
                            <span className="text-error">{errorPassword}</span>
                          </div>
                          <div className="error-status hidden"></div>
                          <div className="item-input-form">
                            <button
                              className="btn btn-login-form-page"
                              type="button"
                              value="ĐĂNG NHẬP"
                              onClick={handleLogin}
                            >
                              Đăng nhập
                            </button>
                            <div className="redirect-form">
                              <Link
                                className="redirect-btn"
                                to="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsShowForgotPassword(true);
                                }}
                              >
                                Quên mật khẩu
                              </Link>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="forgotten-password">
                        <div>
                          <h3 className="form-title">Quên Mật Khẩu</h3>
                          <div className="form-desc">
                            Xác thực tài khoản của bạn để làm mới mật khẩu
                          </div>
                          <form acceptCharset="UTF-8" action="/account/recover" method="post">
                            <input
                              name="form_type"
                              type="hidden"
                              defaultValue="recover_customer_password"
                            />
                            <input name="utf8" type="hidden" defaultValue="✓" />
                            <div
                              className={`item-input-form${
                                errorRecoverEmail !== "" ? " error" : ""
                              }`}
                            >
                              <label className="form-label" htmlFor="recover-email">
                                Email
                              </label>
                              <input
                                placeholder=""
                                required=""
                                type="email"
                                name="recover_email"
                                id="recover-email"
                                className="form-control"
                                onChange={handleChangeText}
                              />
                              <span className="text-error">{errorRecoverEmail}</span>
                            </div>
                            <div className="error-status hidden"></div>
                            <div className="item-input-form">
                              <button
                                className="no-image btn-recaptcha btn btn--fill-black btn-send-forgot-form-page"
                                type="button"
                                value="XÁC THỰC EMAIL"
                                onClick={handleForgotPassword}
                              >
                                XÁC THỰC EMAIL
                              </button>
                              <div className="redirect-form">
                                <Link
                                  className="redirect-btn"
                                  to="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setIsShowForgotPassword(false);
                                  }}
                                >
                                  Đăng nhập
                                </Link>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="register-now">
                          Bạn chưa có tài khoản?
                          <Link
                            to="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsShowForgotPassword(false);
                            }}
                          >
                            Tạo ngay
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                  {register && (
                    <>
                      <div className="tab-pane" id="sigup" role="tabpanel">
                        <form
                          acceptCharset="UTF-8"
                          action="/account/register"
                          id="create_customer"
                          method="post"
                        >
                          <input name="form_type" type="hidden" defaultValue="create_customer" />
                          <input name="utf8" type="hidden" defaultValue="✓" />

                          <div className={`item-input-form${errorEmail !== "" ? " error" : ""}`}>
                            <label htmlFor="signup-email" className="form-label">
                              Email*
                            </label>
                            <input
                              id="signup-email"
                              name="email"
                              type="email"
                              placeholder="Nhập Email"
                              autoComplete="username"
                              required
                              className="form-control"
                              onChange={handleChangeText}
                            />
                            <span className="text-error">{errorEmail}</span>
                          </div>

                          <div className={`item-input-form${errorPassword !== "" ? " error" : ""}`}>
                            <label htmlFor="signup-password" className="form-label">
                              Mật khẩu*
                            </label>
                            <input
                              id="signup-password"
                              name="password"
                              type={isShowPassword ? "text" : "password"}
                              placeholder="Nhập Mật Khẩu"
                              autoComplete="new-password"
                              required
                              className={`input-password form-control${
                                password !== "" ? " has-value" : ""
                              }`}
                              onChange={handleChangeText}
                            />
                            <span className="eyes-password">
                              {isShowPassword ? (
                                <IconEye onClick={handleShowPassword} />
                              ) : (
                                <IconNotEye onClick={handleShowPassword} />
                              )}
                            </span>
                            <span className="text-error">{errorPassword}</span>
                          </div>

                          <div className={`item-input-form${errorLastName !== "" ? " error" : ""}`}>
                            <label htmlFor="signup-last-name" className="form-label">
                              Họ*
                            </label>
                            <input
                              id="signup-last-name"
                              name="last_name"
                              type="text"
                              placeholder="Nhập họ của bạn"
                              required
                              className="form-control"
                              onChange={handleChangeText}
                            />
                            <span className="text-error">{errorLastName}</span>
                          </div>

                          <div
                            className={`item-input-form${errorFirstName !== "" ? " error" : ""}`}
                          >
                            <label htmlFor="signup-first-name" className="form-label">
                              Tên*
                            </label>
                            <input
                              id="signup-first-name"
                              name="first_name"
                              type="text"
                              placeholder="Nhập tên của bạn"
                              required
                              className="form-control"
                              onChange={handleChangeText}
                            />
                            <span className="text-error">{errorFirstName}</span>
                          </div>

                          <div className="item-input-form form-checkbox">
                            <div className="line-checkbox" id="agree-1">
                              <input
                                id="input-agree1"
                                type="checkbox"
                                checked={isCheckAgree1}
                                onChange={handleCheckAgree1}
                              />
                              <label htmlFor="input-agree1">
                                Tôi đồng ý với điều khoản và điều kiện
                              </label>
                            </div>
                          </div>

                          <div className="item-input-form">
                            <button
                              id="submit-btn"
                              {...(!isCheckAgree1 ? { disabled: true } : {})}
                              className={`btn btn-register-form-page${
                                isCheckAgree1 ? "" : " disabled"
                              }`}
                              type="button"
                              onClick={handleRegister}
                            >
                              REGISTER
                            </button>
                          </div>

                          <div className="error-status hidden"></div>
                          <div className="success-status hidden"></div>

                          <div className="item-input-form form-desc">
                            Bằng việc đăng kí, bạn đã đồng ý với KG về
                            <div>
                              <Link className="form-desc-link" to="/pages/dieu-khoan-dich-vu">
                                Điều khoản dịch vụ
                              </Link>
                              <span> & </span>
                              <Link className="form-desc-link" to="/pages/chinh-sach-bao-mat">
                                Chính sách bảo mật
                              </Link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </>
                  )}
                  <div className="login-n-sigup-socials">
                    <div className="seperate">
                      <span>Hoặc</span>
                    </div>
                    <div className="list">
                      <Link
                        aria-label="Đăng nhập Google"
                        title="Đăng nhập Google"
                        to="#"
                        className="google-login btn"
                      >
                        <IconGoogle />
                        <span>Đăng nhập Google</span>
                      </Link>
                      <Link
                        aria-label="Đăng nhập Facebook"
                        title="Đăng nhập Facebook"
                        to="#"
                        className="facebook-login btn"
                      >
                        <IconFacebook />
                        <span>Đăng nhập Facebook</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
