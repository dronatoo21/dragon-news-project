import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { authContext } from "../../Providers/AuthProvider";

const Login = () => {

    const { logIn } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('location login', location);


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        logIn(email, password)
        .then(res => {
            console.log(res.user);

            navigate(location?.state ? location.state : '/');
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <NavBar/>
            <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
              <p className="px-5 pb-3">New here! please <Link className="text-purple-600" to="/register">Register</Link></p>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Login;