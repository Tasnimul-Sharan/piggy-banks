import React from "react";
import banner from "../../images/Skype_Picture_2022_03_20T11_23_06_607Z.png";
// import "./Banner.css";

const Banner = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 letter font-bold text-3xl text-primary">
            <span>An exclusive collection of 1,000</span> <br />
            <span>unique non-fungible ERC-721</span> <br />
            <span>tokens (NFTs)</span>
          </h1>
          {/* <h1 class="mb-5 text-5xl text-primary font-bold">
            An exclusive collection of 1,000 <br /> unique non-fungible ERC-721
            tokens (NFTs)
          </h1> */}
          <p class="mb-5">
            Passive Piggy Banks (PPB) is an exclusive collection of 1,000 unique
            non-fungible ERC-721 tokens (NFTs) on the Ethereum blockchain that
            provide holders with passive income through real estate investments,
            royalties, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
