import FacebookLogin from "@greatsumini/react-facebook-login";
import { useGoogleLogin } from "@react-oauth/google";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Auth } from "../../api/auth";
import AuthConext from "../../context/AuthProvider";

import "./LoginRegister.scss";

import { ReactComponent as IconEye } from "../../assets/svg/eye.svg";
import { ReactComponent as IconFacebook } from "../../assets/svg/loginfb.svg";
import { ReactComponent as IconGoogle } from "../../assets/svg/logingg.svg";
import { ReactComponent as IconNotEye } from "../../assets/svg/noteye.svg";
import { loadFacebookSDK } from "../../utils/facebookSDK";

const LoginRegister = ({ login, register }) => {
  const { setUser, setLoggedIn } = useContext(AuthConext);

  const location = useLocation();
  const navigate = useNavigate();

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [formForgotPassword, setFormForgotPassword] = useState({
    recoverEmail: "",
  });
  const [formRegister, setFormRegister] = useState({
    email: "",
    password: "",
    lastName: "",
    firstName: "",
  });
  const [formErrorLogin, setFormErrorLogin] = useState({
    errorEmail: "",
    errorPassword: "",
    errorStatus: "",
  });
  const [formErrorForgotPassword, setFormErrorForgotPassword] = useState({
    errorRecoverEmail: "",
    errorStatus: "",
  });
  const [formErrorRegister, setFormErrorRegister] = useState({
    errorEmail: "",
    errorPassword: "",
    errorLastName: "",
    errorFirstName: "",
    errorStatus: "",
    successStatus: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowForgotPassword, setIsShowForgotPassword] = useState(false);
  const [isCheckAgree, setIsCheckAgree] = useState(false);

  const handleOnChangeLogin = (e) => {
    const { name, value } = e.target;
    setFormLogin({ ...formLogin, [name]: value });
  };

  const handleOnChangeRegister = (e) => {
    const { name, value } = e.target;
    setFormRegister({ ...formRegister, [name]: value });
  };

  const handleOnChangeForgotPassword = (e) => {
    const { name, value } = e.target;
    setFormForgotPassword({ ...formForgotPassword, [name]: value });
  };

  const handleShowPassword = () => {
    if (formLogin.password !== "" || formRegister.password !== "") {
      setIsShowPassword(!isShowPassword);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formLogin;
    if (email === "") {
      setFormErrorLogin({ ...formErrorLogin, errorEmail: "Email không được trống!" });
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setFormErrorLogin({ ...formErrorLogin, errorEmail: "Email không hợp lệ!" });
      return;
    }
    if (password === "") {
      setFormErrorLogin({ ...formErrorLogin, errorPassword: "Mật khẩu không được trống!" });
      return;
    }
    if (password.length < 10 || password.length > 16) {
      setFormErrorLogin({ ...formErrorLogin, errorPassword: "Mật khẩu phải từ 10 đến 16 ký tự!" });
      return;
    }
    setFormErrorLogin({ ...formErrorLogin, errorEmail: "", errorPassword: "" });
    const account = { email, password };

    try {
      const response = await Auth.login(account);

      if (!response.data.success) {
        setFormErrorLogin({ ...formErrorLogin, errorStatus: response.data.message });
        return;
      }
      setFormErrorLogin({ ...formErrorLogin, errorStatus: "" });
      setUser(response.data.user);
      setLoggedIn(response.data.loggedIn);
      navigate("/", { replace: true });
    } catch (error) {
      setFormErrorLogin({
        ...formErrorLogin,
        errorStatus: error.response?.data.message || "Server không hoạt động",
      });
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const { recoverEmail } = formForgotPassword;
    if (recoverEmail === "") {
      setFormErrorForgotPassword({
        ...formErrorForgotPassword,
        errorRecoverEmail: "Email không được trống!",
      });
      return;
    }
    if (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(recoverEmail)) {
      setFormErrorForgotPassword({
        ...formErrorForgotPassword,
        errorRecoverEmail: "Email không hợp lệ!",
      });
      return;
    }
    setFormErrorForgotPassword({ ...formErrorForgotPassword, errorRecoverEmail: "" });
    // const data = await Auth.forgotPassword(recoverEmail);
    // if (data.error) {
    //   setFormErrorForgotPassword({ ...formErrorForgotPassword, errorStatus: data.message });
    //   return;
    // }
    alert("Chức năng đang phát triển");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { email, password, lastName, firstName } = formRegister;
    if (email === "") {
      setFormErrorRegister({ ...formErrorRegister, errorEmail: "Email không được trống!" });
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setFormErrorRegister({ ...formErrorRegister, errorEmail: "Email không hợp lệ!" });
      return;
    }
    if (password === "") {
      setFormErrorRegister({ ...formErrorRegister, errorPassword: "Mật khẩu không được trống!" });
      return;
    }
    if (password.length < 10 || password.length > 16) {
      setFormErrorRegister({
        ...formErrorRegister,
        errorPassword: "Mật khẩu phải từ 10 đến 16 ký tự!",
      });
      return;
    }
    if (lastName === "") {
      setFormErrorRegister({ ...formErrorRegister, errorLastName: "Họ không được trống!" });
      return;
    }
    if (/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(lastName)) {
      setFormErrorLogin({ ...formErrorLogin, errorLastName: "Họ không hợp lệ!" });
    }
    if (firstName === "") {
      setFormErrorRegister({ ...formErrorRegister, errorFirstName: "Tên không được trống!" });
      return;
    }
    if (/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(firstName)) {
      setFormErrorLogin({ ...formErrorLogin, errorFirstName: "Tên không hợp lệ!" });
    }
    setFormErrorRegister({
      errorEmail: "",
      errorPassword: "",
      errorLastName: "",
      errorFirstName: "",
      errorStatus: "",
    });

    try {
      const response = await Auth.register({ email, password, lastName, firstName });
      if (!response.data.success) {
        setFormErrorRegister({ ...formErrorRegister, errorStatus: response.data.message });
        return;
      }
      setFormErrorRegister({
        ...formErrorRegister,
        errorStatus: "",
        successStatus: response.data.message,
      });
    } catch (error) {
      setFormErrorRegister({
        ...formErrorRegister,
        errorStatus: error.response?.data.message || "Server không hoạt động",
      });
    }
  };

  const handleLoginGoogle = useGoogleLogin({
    onFail: (error) => {
      console.log("Login failed: ", error);
    },
    onSuccess: async (response) => {
      const { access_token, token_type } = response;

      try {
        const infoUser = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `${token_type} ${access_token}`,
          },
        });

        const user = await infoUser.json();

        // Gửi user info lên backend để xác thực
        const res = await Auth.loginGoogle(user);
        setUser(res.data.user);
        setLoggedIn(res.data.loggedIn);
        navigate("/", { replace: true });
      } catch (error) {
        const errorMessage = error.response?.data.message || "Server không hoạt động";

        if (location.pathname === "/account/login") {
          setFormErrorLogin({
            ...formErrorLogin,
            errorStatus: errorMessage,
          });
        }
        if (location.pathname === "/account/register") {
          setFormErrorRegister({
            ...formErrorRegister,
            errorStatus: errorMessage,
          });
        }
      }
    },
  });

  const handleLoginFacebook = async (response) => {
    const { accessToken, userID } = response;

    try {
      await loadFacebookSDK();

      const infoUser = await fetch(
        `https://graph.facebook.com/v22.0/${userID}?fields=id,first_name,last_name,email,picture&access_token=${accessToken}`
      );

      const user = await infoUser.json();

      // Gửi user info lên backend để xác thực
      const res = await Auth.loginFacebook(user);
      setUser(res.data.user);
      setLoggedIn(res.data.loggedIn);
      navigate("/", { replace: true });
    } catch (error) {
      const errorMessage = error.response?.data.message || "Server không hoạt động";

      if (location.pathname === "/account/login") {
        setFormErrorLogin({
          ...formErrorLogin,
          errorStatus: errorMessage,
        });
      }
      if (location.pathname === "/account/register") {
        setFormErrorRegister({
          ...formErrorRegister,
          errorStatus: errorMessage,
        });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === "/account/login") {
      setFormLogin({ email: "", password: "" });
      setFormErrorLogin({ errorEmail: "", errorPassword: "", errorStatus: "" });
      setFormErrorForgotPassword({ errorRecoverEmail: "", errorStatus: "" });
      setFormErrorRegister({
        errorEmail: "",
        errorPassword: "",
        errorLastName: "",
        errorFirstName: "",
        errorStatus: "",
        successStatus: "",
      });
      setIsShowForgotPassword(false);
    }
    if (location.pathname === "/account/register") {
      setFormRegister({ email: "", password: "", lastName: "", firstName: "" });
      setFormErrorLogin({ errorEmail: "", errorPassword: "", errorStatus: "" });
      setFormErrorForgotPassword({ errorRecoverEmail: "", errorStatus: "" });
      setFormErrorRegister({
        errorEmail: "",
        errorPassword: "",
        errorLastName: "",
        errorFirstName: "",
        errorStatus: "",
        successStatus: "",
      });
      setIsShowForgotPassword(false);
    }
  }, [location]);

  useEffect(() => {
    document.title = register
      ? "Tạo tài khoản - ARISTINO"
      : isShowForgotPassword
      ? "Quên mật khẩu - ARISTINO"
      : "Tài khoản - ARISTINO";
    window.scrollTo(0, 0);
  }, [register, isShowForgotPassword]);

  return (
    <>
      <section className="customer-actions">
        <div className="container">
          <div className="customer-actions-wrapper">
            <div
              className="customer-actions-forms"
              style={login ? { height: "521.8px" } : { height: "761.8px" }}
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
                          onSubmit={handleLogin}
                        >
                          <input name="form_type" type="hidden" defaultValue="customer_login" />
                          <input name="utf8" type="hidden" defaultValue="✓" />

                          <div
                            className={`item-input-form${
                              formErrorLogin.errorEmail !== "" ? " error" : ""
                            }`}
                          >
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
                              autoComplete="email"
                              onChange={handleOnChangeLogin}
                            />
                            <span className="text-error">{formErrorLogin.errorEmail}</span>
                          </div>

                          <div
                            className={`item-input-form${
                              formErrorLogin.errorPassword !== "" ? " error" : ""
                            }`}
                          >
                            <label className="form-label" htmlFor="password">
                              Mật Khẩu*
                            </label>
                            <input
                              placeholder=""
                              type={isShowPassword ? "text" : "password"}
                              required
                              name="password"
                              className={`input-password form-control${
                                formLogin.password !== "" ? " has-value" : ""
                              }`}
                              id="password"
                              autoComplete="current-password"
                              onChange={handleOnChangeLogin}
                            />
                            <span className="eyes-password">
                              {isShowPassword ? (
                                <IconEye onClick={handleShowPassword} />
                              ) : (
                                <IconNotEye onClick={handleShowPassword} />
                              )}
                            </span>
                            <span className="text-error">{formErrorLogin.errorPassword}</span>
                          </div>
                          <div
                            className={`error-status${
                              formErrorLogin.errorStatus === "" ? " hidden" : ""
                            }`}
                          >
                            {formErrorLogin.errorStatus}
                          </div>
                          <div className="item-input-form">
                            <button
                              className="btn btn-login-form-page"
                              type="submit"
                              value="ĐĂNG NHẬP"
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
                          <form
                            acceptCharset="UTF-8"
                            action="/account/recover"
                            method="post"
                            onSubmit={handleForgotPassword}
                          >
                            <input
                              name="form_type"
                              type="hidden"
                              defaultValue="recover_customer_password"
                              autoComplete="email"
                              onChange={handleOnChangeForgotPassword}
                            />
                            <input name="utf8" type="hidden" defaultValue="✓" />
                            <div
                              className={`item-input-form${
                                formErrorForgotPassword.errorRecoverEmail !== "" ? " error" : ""
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
                                onChange={(e) => {
                                  setFormForgotPassword({ recoverEmail: e.target.value });
                                }}
                              />
                              <span className="text-error">
                                {formErrorForgotPassword.errorRecoverEmail}
                              </span>
                            </div>
                            <div
                              className={`error-status${
                                formErrorForgotPassword.errorStatus === "" ? " hidden" : ""
                              }`}
                            >
                              {formErrorForgotPassword.errorStatus}
                            </div>
                            <div className="item-input-form">
                              <button
                                className="no-image btn-recaptcha btn btn--fill-black btn-send-forgot-form-page"
                                type="submit"
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
                              navigate("/account/register");
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

                          <div
                            className={`item-input-form${
                              formErrorRegister.errorEmail !== "" ? " error" : ""
                            }`}
                          >
                            <label htmlFor="signup-email" className="form-label">
                              Email*
                            </label>
                            <input
                              required
                              id="signup-email"
                              name="email"
                              type="email"
                              placeholder="Nhập Email"
                              autoComplete="email"
                              className="form-control"
                              onChange={handleOnChangeRegister}
                            />
                            <span className="text-error">{formErrorRegister.errorEmail}</span>
                          </div>

                          <div
                            className={`item-input-form${
                              formErrorRegister.errorPassword !== "" ? " error" : ""
                            }`}
                          >
                            <label htmlFor="signup-password" className="form-label">
                              Mật khẩu*
                            </label>
                            <input
                              required
                              id="signup-password"
                              name="password"
                              type={isShowPassword ? "text" : "password"}
                              placeholder="Nhập Mật Khẩu"
                              autoComplete="new-password"
                              className={`input-password form-control${
                                formRegister.password !== "" ? " has-value" : ""
                              }`}
                              onChange={handleOnChangeRegister}
                            />
                            <span className="eyes-password">
                              {isShowPassword ? (
                                <IconEye onClick={handleShowPassword} />
                              ) : (
                                <IconNotEye onClick={handleShowPassword} />
                              )}
                            </span>
                            <span className="text-error">{formErrorRegister.errorPassword}</span>
                          </div>

                          <div
                            className={`item-input-form${
                              formErrorRegister.errorLastName !== "" ? " error" : ""
                            }`}
                          >
                            <label htmlFor="signup-last-name" className="form-label">
                              Họ*
                            </label>
                            <input
                              required
                              id="signup-last-name"
                              name="lastName"
                              type="text"
                              placeholder="Nhập họ của bạn"
                              className="form-control"
                              onChange={handleOnChangeRegister}
                            />
                            <span className="text-error">{formErrorRegister.errorLastName}</span>
                          </div>

                          <div
                            className={`item-input-form${
                              formErrorRegister.errorFirstName !== "" ? " error" : ""
                            }`}
                          >
                            <label htmlFor="signup-first-name" className="form-label">
                              Tên*
                            </label>
                            <input
                              required
                              id="signup-first-name"
                              name="firstName"
                              type="text"
                              placeholder="Nhập tên của bạn"
                              className="form-control"
                              onChange={handleOnChangeRegister}
                            />
                            <span className="text-error">{formErrorRegister.errorFirstName}</span>
                          </div>

                          <div className="item-input-form form-checkbox">
                            <div className="line-checkbox" id="agree-1">
                              <input
                                id="input-agree"
                                type="checkbox"
                                checked={isCheckAgree}
                                onChange={() => setIsCheckAgree(!isCheckAgree)}
                              />
                              <label htmlFor="input-agree">
                                Tôi đồng ý với điều khoản và điều kiện
                              </label>
                            </div>
                          </div>

                          <div className="item-input-form">
                            <button
                              id="submit-btn"
                              {...(!isCheckAgree ? { disabled: true } : {})}
                              className={`btn btn-register-form-page${
                                isCheckAgree ? "" : " disabled"
                              }`}
                              type="submit"
                              onClick={handleRegister}
                            >
                              REGISTER
                            </button>
                          </div>

                          <div
                            className={`error-status${
                              formErrorRegister.errorStatus === "" ? " hidden" : ""
                            }`}
                          >
                            {formErrorRegister.errorStatus}
                          </div>
                          <div
                            className={`success-status${
                              formErrorRegister.successStatus === "" ? " hidden" : ""
                            }`}
                          >
                            {formErrorRegister.successStatus}
                          </div>

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
                      <button
                        aria-label="Đăng nhập Google"
                        title="Đăng nhập Google"
                        className="google-login btn"
                        onClick={handleLoginGoogle}
                      >
                        <IconGoogle />
                        <span>Đăng nhập Google</span>
                      </button>
                      <FacebookLogin
                        autoLoad={false}
                        onSuccess={handleLoginFacebook}
                        fields="first_name,last_name,email,picture,id"
                        render={({ onClick }) => (
                          <button
                            aria-label="Đăng nhập Facebook"
                            title="Đăng nhập Facebook"
                            className="facebook-login btn"
                            onClick={onClick}
                          >
                            <IconFacebook />
                            <span>Đăng nhập Facebook</span>
                          </button>
                        )}
                      />
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

export default LoginRegister;
