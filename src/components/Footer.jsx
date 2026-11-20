import {
  FiArrowUp,
  FiInstagram,
  FiFacebook,
  FiYoutube,
} from "react-icons/fi";

import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* Main Footer */}
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">

          <a href="#" className="footer-logo">
            AUREL
          </a>

          <p className="footer-tagline">
            Designed to Last.
          </p>

          <p className="footer-description">
            Timeless essentials designed for everyday living.
            Thoughtfully made, effortlessly worn.
          </p>

          <div className="footer-socials">

            <a href="#" aria-label="Instagram">
              <FiInstagram />
            </a>

            <a href="#" aria-label="Facebook">
              <FiFacebook />
            </a>

            <a href="#" aria-label="YouTube">
              <FiYoutube />
            </a>

          </div>

        </div>

        {/* Shopping Links */}
        <div className="footer-column">

          <h4>SHOP</h4>

          <a href="#products">New Arrivals</a>
          <a href="#categories">Shirts</a>
          <a href="#categories">T-Shirts</a>
          <a href="#categories">Trousers</a>
          <a href="#categories">Outerwear</a>

        </div>

        {/* Customer Care */}
        <div className="footer-column">

          <h4>HELP</h4>

          <a href="#">Contact Us</a>
          <a href="#">Shipping Information</a>
          <a href="#">Returns & Exchanges</a>
          <a href="#">FAQs</a>
          <a href="#">Size Guide</a>

        </div>

        {/* Brand */}
        <div className="footer-column">

          <h4>ABOUT</h4>

          <a href="#about">Our Story</a>
          <a href="#about">Our Philosophy</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>

        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 AUREL. All rights reserved.
        </p>

        <p className="footer-made">
          Designed with intention.
        </p>

        <button
          className="back-to-top"
          onClick={scrollToTop}
        >
          BACK TO TOP
          <FiArrowUp />
        </button>

      </div>

    </footer>
  );
}

export default Footer;