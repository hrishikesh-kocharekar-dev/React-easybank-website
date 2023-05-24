import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero-row" id="home">
        <section className="details">
          <div className="brief_details">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>

            <button className="ReqBtn">Request Invite</button>
          </div>
        </section>

        <div className="mockup ">
          <img  id="heroImg" src="./mockup.png" alt="" />
          <img id="phoneImg" src="./phoneImg2.png" alt="" />
        </div>
      </div>
    </>
  );
}
