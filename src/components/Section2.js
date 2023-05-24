import React from "react";
import "./Section2.css";

export default function section2() {
  return (
    <>
      <div className="res">
        <section id="features" className="reason">
          <div className="benefit">
            <h1> Why choose Easybank?</h1>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>

          <div className="why_list">
            <div className="online-banking">
              <img src="./online.svg" alt="" />
              <h1>Online Banking</h1>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>

            <div className="simple-budgeting">
              <img src="./budgeting.svg" alt="" />
              <h1> Simple Budgeting</h1>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
            <div className="fast-onboarding">
              <img src="./onboarding.svg" alt="" />
              <h1>Fast Onboarding</h1>
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div className="open-api">
              <img src="./api.svg" alt="" />
              <h1> Open API</h1>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </section>

        {/* 2nd */}
        <section id="blog" className="latest-articles">
          <h1>Latest Articles</h1>
          <div className="articles">
            <div className="article_card">
              <div className="card_head">
                <img
                  src="./currency.jpg"
                  className="article-thumbnail"
                  alt=""
                />
              </div>
              <div className="card_body">
                <span className="postedBy">By Claire Robinson</span>
                <h4 className="article_title">
                  Receive money in any currency with no fees
                </h4>
                <div className="short_clip_article">
                  <span>
                    The world is getting smaller and we’re becoming more mobile.
                    So why should you be forced to only receive money in a
                    single …
                  </span>
                </div>
              </div>
            </div>

            <div className="article_card">
              <div className="card_head">
                <img
                  src="./restaurant.jpg"
                  className="article-thumbnail"
                  alt=""
                />
              </div>
              <div className="card_body">
                <span className="postedBy"> By Wilson Hutton</span>
                <h4 className="article_title">
                  Treat yourself without worrying about money
                </h4>
                <div className="short_clip_article">
                  <span>
                    Our simple budgeting feature allows you to separate out your
                    spending and set realistic limits each month. That means you
                    …
                  </span>
                </div>
              </div>
            </div>

            <div className="article_card">
              <div className="card_head">
                <img src="./plane.jpg" className="article-thumbnail" alt="" />
              </div>
              <div className="card_body">
                <span className="postedBy">By Alex Hutton</span>
                <h4 className="article_title">
                  Take your Easybank card wherever you go
                </h4>
                <div className="short_clip_article">
                  <span>
                    We want you to enjoy your travels. This is why we don’t
                    charge any fees on purchases while you’re abroad. We’ll even
                    show you …
                  </span>
                </div>
              </div>
            </div>

            <div className="article_card">
              <div className="card_head">
                <img
                  src="./confetti.jpg"
                  className="article-thumbnail"
                  alt=""
                />
              </div>
              <div className="card_body">
                <span className="postedBy">By Mike Robinson</span>
                <h4 className="article_title">
                  Our invite-only Beta accounts are now live!
                </h4>
                <div className="short_clip_article">
                  <span>
                    After a lot of hard work by the whole team, we’re excited to
                    launch our closed beta. It’s easy to request an invite
                    through the site ...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
