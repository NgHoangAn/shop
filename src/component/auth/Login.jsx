import { useEffect, useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../slide/authSlice";
const Login = () => {
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };
  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-title">
          <p className="icon-title">
            <BsLightningChargeFill />
          </p>
          <h3 className="main-title">Login</h3>
          <p className="sub-title">
            See your growth and get consulting support!
          </p>
        </div>
        <div className="login-other">
          <button>Sign in with Google</button>
        </div>
        <div className="main-login">
          <p className="content">
            <span>or Sign in with Email</span>
          </p>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="mail@gmail.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Min. 8 character"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <div className="option-login">
              <label htmlFor="">
                <input type="checkbox" name="Remember me" id="" />
                Remember me
              </label>

              <a href="/">Forget password?</a>
            </div>
            <button type="submit" className="btnSubmit">
              {auth.loginStatus === "pending" ? "Đang đăng nhập" : "Đăng nhập"}
            </button>
            {auth.loginStatus === "rejected" ? (
              <p className="login-error-status">{auth.loginError}</p>
            ) : null}
          </form>

          <div className="register-link">
            Not registered yet? <a href="/">Create an Account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
