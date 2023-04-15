import { shop } from "../../constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            We have been in operation since 1974 and have a fascinating history.
            <button>
              <a href="/about">LEARN ALL ABOUT US </a>
            </button>
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <div>
            {shop.phone}
          </div>
          <span>
            Please note that our normal office hours are 9am to 5:30pm Monday to Friday
            and we are 8 hours ahead of Eastern Standard time and 2/3 hours ahead of GMT (depending on British summertime).
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">
            <img src="/logo.svg" alt="LOGO" width={30} />
            {shop.name}
          </span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
