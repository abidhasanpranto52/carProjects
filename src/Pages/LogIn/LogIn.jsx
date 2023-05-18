import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import SocialLogIn from "../../Shared/SocialLogIn/SocialLogIn";

const LogIn = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        
        console.log(user);
        navigate(from, { replace: true });
        console.log(user);

      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero animate__animated animate__zoomIn min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <img src={img1} alt="" />
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="LOGIN"
                />
              </div>
            </form>
            <p className="text-center mt-5">
              Don't have an Account Yet?{" "}
              <Link to={"/signup"} className="text-red-500 font-bold">
                Sign Up
              </Link>
            </p>
            <SocialLogIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
