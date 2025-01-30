import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="logo" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, natus iste eos eius debitis porro itaque nesciunt, pariatur sint neque quae consequatur ipsa obcaecati laudantium tempore totam, sit eaque necessitatibus.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="facebook icon" /><img src={assets.twitter_icon} alt="twitter icon" /><img src={assets.linkedin_icon} alt="linkedin icon" />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li></ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1 (204)-111-2222</li>
                <li>contact@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 || Copyright 2024</p>
    </div>
  );
};

export default Footer;
