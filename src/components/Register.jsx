import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import { Helmet} from 'react-helmet-async';

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const[showPassword, SetShowPassword] =useState(false)


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
        <Helmet> <title> Register </title> </Helmet>
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
            <input type="text" name="photo" required placeholder="Photo Url" className="input input-bordered"  />
          </div>


          <div className="form-control ">
          
            <label className="label">
            <span className="label-text">Password</span>
            </label>
           <div className="relative ">
             <input
            type={showPassword ? "text" : "password"} 
            name="password"
             required placeholder="password"
              className="input input-bordered w-full"  />
              
               <span className="absolute mt-4 -ml-8" onClick={()=> SetShowPassword(!showPassword)}>
                {
                  showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
            </span>
           </div>
           
           
          </div>
          <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-base">Register</button>
          </div>
          <p>Already have Account? Please <Link to={"/login"}> <button className="btn btn-link text-base">Login</button>  </Link> </p>
        </form>
       
      </div>
      <ToastContainer/>
      </div>
    );
};

export default Register;