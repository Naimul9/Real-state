import { Link } from "react-router-dom";


const Register = () => {
    return (
      <div className="py-10">
          <div className="mx-auto w-full  max-w-sm shadow-2xl bg-base-100">
        <form  className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="Your Name" className="input input-bordered"  />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" required placeholder="email" className="input input-bordered"  />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input type="text" name="image" required placeholder="Url" className="input input-bordered"  />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" required placeholder="password" className="input input-bordered"/>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>Already have Account? Please <Link to={"/login"}> <button className="btn btn-link">Login</button>  </Link> </p>
      </div>
      </div>
    );
};

export default Register;