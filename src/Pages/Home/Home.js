import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Banner from "./Banner";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <div className="background">
        <Header />
        <Banner />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
