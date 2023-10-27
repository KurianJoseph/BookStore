import React from "react";
import BackButton from "../BackButton.jsx";
const Layout = ({ children }) => {
  return (
    <>
      <div className="  mx-4 ">
        <div className="flex justify-between ">
          <h4 className="text-white">Explore New Trending NFTs</h4>
          <BackButton />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
