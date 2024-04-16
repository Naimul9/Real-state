import { Link } from "react-router-dom";


const Login = () => {
    return (
       <div className="py-[100px]">
         <div className="mx-auto w-full  max-w-sm shadow-2xl bg-base-100 ">
        <form  className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" required placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" required placeholder="password" className="input input-bordered"  />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>New Here? Please <Link to={"/register"}> <button className="btn btn-link">Register</button>  </Link> </p>
        <p> <button  className="btn btn-ghost">Google</button> </p>
      </div>
       </div>
    );
};

export default Login;