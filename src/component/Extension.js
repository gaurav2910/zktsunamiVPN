import { isAndroid, isIOS } from "react-device-detect";
import "../App.css";
const Extension = () => {
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
    <div className="d-flex flex-column pixelOperatorMonoBold ">
      <div className="container row m-auto ">
        <div className="col-12 col-md-6 d-flex align-items-center">
          <div className="d-flex flex-column align-items-start">
            <div className="headingCss">
              Get the Best VPN
            </div>
            <div className="headingCss ">
              Chrome Extension
            </div>
            <div className="mb-4 txt-css text-left secureTxtCSs">
              Secure your connection with a VPN proxy extension
            </div>
            <div>
              <button type="button" onClick={getExtensionClick} className="btn btn-lg btnCss">
                Get the Extension
              </button>
              {/* <button type="button"  onClick={getExtensionClick} className="btn btn-lg btnCss m-5">
                Get the Extension
              </button> */}
            </div>
          </div>
        </div>
        <div className="col-6 d-none d-md-block">
          <img
            className="imgCss"
            src={process.env.PUBLIC_URL + "/images/worldCom.png"}
          />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row pl-2 pl-md-0  m-auto mt-4 txt-css">
        <div className="d-flex align-items-center py-2 py-md-0 px-0 px-md-5">
          <img
            className="tickimgCss"
            src={process.env.PUBLIC_URL + "/images/check-0.png"}
          />
          <span className="p-1 p-md-2">limitless content</span>
        </div>
        <div className="d-flex align-items-center py-2 py-md-0 px-0 px-md-5">
          <img
            className="tickimgCss"
            src={process.env.PUBLIC_URL + "/images/check-0.png"}
          />
          <span className="p-1 p-md-2">All-in-one protection for your data</span>
        </div>
        <div className="d-flex align-items-center py-2 py-md-0 px-0 px-md-5">
          <img
            className="tickimgCss "
            src={process.env.PUBLIC_URL + "/images/check-0.png"}
          />
          <span className="p-1 p-md-2">Easy set-up</span>
        </div>
      </div>
    </div>
  );
};

export default Extension;
