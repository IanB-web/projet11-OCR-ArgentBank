import React from "react";
import "./home.scss";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import HomeFeature from "../../components/partials/homeFeature";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>

        <section className="features">
          <h2 className="sr-only">Features</h2>

          <HomeFeature
            featureImgSrc="src/assets/img/icon-chat.png"
            featureImgAlt="Chat Icon"
            featureTitle="You are our #1 priority"
            featureText="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <HomeFeature
            featureImgSrc="src/assets/img/icon-money.png"
            featureImgAlt="Money Icon"
            featureTitle="More savings means higher rates"
            featureText="The more you save with us, the higher your interest rate will be !"
          />
          <HomeFeature
            featureImgSrc="src/assets/img/icon-security.png"
            featureImgAlt="Security Icon"
            featureTitle="Security you can trust"
            featureText="We use top of the line encryption to make sure your data and money is always safe."
          />

        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
