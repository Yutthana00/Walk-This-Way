import React from "react";
import "../footer.css"

const Footer = () => {
  return (
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-xs-12">
                    <div class="first">
                        <h4>GitHub</h4>
                        <p> Emily</p>
                        <p> Yasmin</p>
                        <p> Yutthana00</p>
                        
                    </div>
                </div>

                <div class="col-md-4 col-xs-12">
                    <div class="second">
                        <h4> LinkedIn</h4>
                        <ul>
                            <li><a href="#">Emily</a></li>
                            <li><a href="#">Yasmin</a></li>
                            <li><a href="#">Yutthana00</a></li>
                            
                        </ul>
                    </div>
                </div>

                <div class="col-md-4 col-xs-12">
                    <div class="third">
                        <h4> Contact</h4>
                        <ul>
                            <li><i class="far fa-envelope"></i> Emily@gmail.com </li>
                            <li><i class="far fa-envelope"></i> Yasmin@gmail.com </li>
                            <li><i class="far fa-envelope"></i> Yutthana@gmail.com </li>
                          <li><i class="fas fa-map-marker-alt"></i> United Kingdom </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="line"></div>
                    <div class="second2">
                        <a href="#" target="_blank"> <i class="fab fa-codepen fa-2x margin"></i></a>
                        <a href="#" target="_blank"> <i class="fab fa-github fa-2x margin"></i></a>
                        <a href="#" target="_blank"> <i class="fab fa-linkedin fa-2x margin"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-youtube fa-2x margin" ></i></a>

                    </div>

                </div>
            </div>
            </div>
    </div>
  );
};

export default Footer;
