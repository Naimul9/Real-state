import { MdMapsHomeWork } from "react-icons/md";
const Footer = () => {
    return (
<footer className="mt-10 footer p-10  bg-slate-200 text-black  w-full  lg:max-w-screen-2xl mx-auto">
<aside>
<p className="text-4xl">< MdMapsHomeWork /></p>
    <p className="text-xl font-bold mt-3">Doaa Builders Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover text-base">Branding</a>
    <a className="link link-hover text-base">Design</a>
    <a className="link link-hover text-base">Marketing</a>
    <a className="link link-hover text-base">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover text-base">About us</a>
    <a className="link link-hover text-base">Contact</a>
    <a className="link link-hover text-base">Jobs</a>
   
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover text-base">Terms of use</a>
    <a className="link link-hover text-base">Privacy policy</a>
    <a className="link link-hover text-base">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;