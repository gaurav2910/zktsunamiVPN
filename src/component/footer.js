import React from "react";
import { isAndroid, isIOS } from "react-device-detect";

const Footer = () => {
  const getExtensionClick = () => {
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.instagram.android";
    } else if (isIOS) {
      window.location.href =
        "https://apps.apple.com/in/app/instagram/id389801252";
    } else {
      window.location.href = "https://www.instagram.com/accounts/login/";
    }
  };
  return (
    <div
      className="pixelOperatorMonoBold">
      <div className="bg-dark text-center text-lg-start footerCss p-3 py-md-0">
        <div className="container row m-auto ">
          <div className="col-12 col-md-6 d-flex align-items-center align-content-center">
            <div className="d-flex flex-column align-items-start">
              <div className="headingCss">Enjoy Complete Security</div>
              <div className="headingCss">with VPN for Chrome</div>
              <div className="mt-5">
                <button type="button" onClick={getExtensionClick} class="btn btn-lg btnCss">Get the Extension</button>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end d-none d-md-block">

            <img
              className="imgCss"
              src={process.env.PUBLIC_URL + "/images/bl.png"}
            />
          </div>
        </div>
      </div>
      <div className="container row m-auto d-flex align-items-center align-content-center py-3 headingCss" style={{ color: "black" }}>
        <div>
        ZKTsunami VPN
        </div>
      </div>
    </div>
  );
};

export default Footer;
