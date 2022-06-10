import React from "react";
import "../footer.css"

const Footer = () => {
  return (
    <div class="footer-clean">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-sm-4 col-md-3 item">
                  <h3>LinkedIn</h3>
                  <ul>
                      <li><a href="#">LinkedIn</a></li>
                      <li><a href="#">LinkedIn</a></li>
                      <li><a href="#">LinkedIn</a></li>
                  </ul>
              </div>

              <div class="col-sm-4 col-md-3 item">
                  <h3>GitHub</h3>
                  <ul>
                      <li><a href="#">Github Link</a></li>
                      <li><a href="#">Github Link</a></li>
                      <li><a href="#">Github Link</a></li>
                  </ul>
              </div>

              <div class="col-sm-4 col-md-3 item">
                  <h3>About</h3>
                  <ul>
                      <li><a href="#">Company</a></li>
                      <li><a href="#">Team</a></li>
                  </ul>
              </div>
              <div class="col-lg-3 item social">
                  <p class="copyright">Company Name © 2022</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
