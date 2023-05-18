
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content">
      <div>
        <img src={logo} alt="" />
        <p>
          Car Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link to={'login'} className="link link-hover">LogIn</Link>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to={'/about'} className="link link-hover">About us</Link>
        <Link to={'/contact'} className="link link-hover">Contact</Link>
        <Link to={'/blog'} className="link link-hover">Blogs</Link>
        <Link to={'/'} className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
