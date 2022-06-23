import React from "react";
import "../footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div className="second">
              <h4> GitHub</h4>
              <ul>
                <li>
                  <a href="https://github.com/empipio">Emily - Empipio</a>
                </li>
                <li>
                  <a href="https://github.com/yasmin-io">Yasmin - Yasmin-io</a>
                </li>
                <li>
                  <a href="https://github.com/Yutthana00">
                    Yutthana - Yutthana00
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-xs-12">
            <div className="second">
              <h4> LinkedIn</h4>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/emily-mckibben-a726ba220/">
                    Emily Mckibben
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/yasmin-a-5ba6b8226/">
                    Yasmin A.
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/yutthana-thapdit/">
                    Yutthana Thapdit
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-xs-12">
            <div className="second">
              <h4> Contact </h4>
              <ul>
                <li>
                  <a href="#">Emckibben@hotmail.co.uk</a>
                </li>
                <li>
                  <a href="#">Yasmin.bunnie@gmail.com</a>
                </li>
                <li>
                  <a href="#">Arf101293@gmail.com </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
