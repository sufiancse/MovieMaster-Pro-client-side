import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-linear-to-r from-gray-900 via-gray-800 to-black text-gray-100 p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Privacy Policy</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="#"
            className="text-gray-100 hover:text-purple-400 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-100 hover:text-blue-400 transition">
            <FaXTwitter size={24} />
          </a>
          <a href="#" className="text-gray-100 hover:text-blue-600 transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-100 hover:text-gray-400 transition">
            <FaYoutube size={24} />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by <Link className="font-bold text-red-500" to={'/'}>MovieMaster Pro</Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
