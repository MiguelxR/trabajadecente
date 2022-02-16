import React from "react";
import { Link } from "react-router-dom";

const FooterUser = () => {
  return (
    <footer
      className="footer footer-big footer-color-black footer-user"
      data-color="black"
    >
      <div className="container ">
        <div className="row justify-content-evenly">
          <div className="col-md-2 col-sm-3">
            <div className="info">
              <h5 className="title">Company</h5>
              <nav>
                <ul>
                  <li>
                    <Link to="/" id="footer-hover2">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="#" id="footer-hover2">
                      Find Offers
                    </Link>
                  </li>
                  <li>
                    <Link to="#" id="footer-hover2">
                      Discover Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="#" id="footer-hover2">
                      Our Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to="#" id="footer-hover2">
                      About Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-md-2 col-md-offset-1 col-sm-3">
            <div className="info">
              <h5 className="title"> Help and Support</h5>
              <nav>
                <ul>
                  <li>
                    <Link to="#" id="footer-hover2">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="#" id="footer-hover2">
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link to="#" id="footer-hover2">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="#" id="footer-hover2">
                      Company Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" id="footer-hover2">
                      Money Back
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="info">
              <h5 className="title">Latest News</h5>
              <nav>
                <ul>
                  <li>
                    <a href="#" id="footer-hover2">
                      <i className="fa fa-twitter "></i> <b>Get Shit Done</b>{" "}
                      The best kit in the market is here, just give it a try and
                      let us...
                    </a>
                  </li>
                  <hr className="hr-small" />
                  <li>
                    <a href="#" id="footer-hover2">
                      <i className="fa fa-twitter"></i> We've just been featured
                      on <b> Awwwards Website</b>! Thank you everybody for...
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-md-2 col-md-offset-1 col-sm-3">
            <div className="info">
              <h5 className="title">Follow us on</h5>
              <nav>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="btn btn-social btn-facebook btn-simple footer-hover"
                    >
                      <i className="fa fa-facebook-square"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="btn btn-social btn-dribbble btn-simple footer-hover"
                    >
                      <i className="fa fa-dribbble"></i> Dribbble
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="btn btn-social btn-twitter btn-simple footer-hover"
                    >
                      <i className="fa fa-twitter"></i> Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="btn btn-social btn-reddit btn-simple footer-hover"
                    >
                      <i className="fa fa-google-plus-square"></i> Google+
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright text-light">© Copyright DecentWork 2022 </div>
      </div>
    </footer>
  );
};

export default FooterUser;
