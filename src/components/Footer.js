import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="ft_one">
        <div className="social_link">
          <img className="logo-img" src="./logo.svg" alt="" />

          <ul className="social_link_list">
            <li>
              <a href="#facebook">
                <img src="./facebook.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#youtube">
                <img src="./youtube.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#twitter">
                <img src="./twitter.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#pinterest">
                <img src="./pinterest.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#instagram">
                <img src="./instagram.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>

        <ul className="ft-nav-1">
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
        </ul>

        <ul className="ft-nav-2">
          <li>
            <a href="#Careers">Careers</a>
          </li>
          <li>
            <a href="#Support">Support</a>
          </li>
          <li>
            <a href="#Privacy_Policy">Privacy Policy</a>
          </li>
        </ul>
        <button className="resBtn ">Request Invite</button>
      </div>

      <div className="ft-two">
        <button className="request_inite_btn ">Request Invite</button>
        <h4> © Easybank. All Rights Reserved</h4>
      </div>
    </footer>
  );
}
