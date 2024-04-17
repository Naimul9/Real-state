import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {signInUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    
    const handleLogin= e =>{
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
    
        signInUser(email, password)
        .then(result =>{
            console.log(result.user)
            e.target.reset()
            toast.success("Registration successful!");
            navigate('/')
        })
        .catch(error=>console.error(error))
        toast.error("Invalid email or password. Please try again.");
    }
    
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error=> {
            console.error(error)
        })
    }


    return (
       <div className="py-[100px]">
         <div className="mx-auto w-full  max-w-sm shadow-2xl bg-base-100 ">
        <form onSubmit={handleLogin}  className="card-body">
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
          <div className="form-control mt-2">
            <button className="btn btn-primary text-base">Login</button>
          </div>
          <p >New Here? Please <Link to={"/register"}> <button className="btn btn-link text-base">Register</button>  </Link> </p>
          <p > <button onClick={handleGoogleSignIn}  className="btn btn-ghost bg-slate-200 mb-5">Google</button> </p>
        </form>
        
       
      </div>
      <ToastContainer></ToastContainer>
       </div>
     
    );
};

export default Login;