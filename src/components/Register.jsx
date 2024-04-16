import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const {createUser} = useContext(AuthContext)


    const handleRegister= e =>{
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        console.log(name, email, password)

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            return;
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            toast.success("Registration successful!");
        })
        .catch(error => {
            console.log(error);
            toast.error("Registration failed. Please try again.");
        });
};



    return (
      <div className="py-10">
          <div className="mx-auto w-full  max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegister}  className="card-body">
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
      <ToastContainer/>
      </div>
    );
};

export default Register;