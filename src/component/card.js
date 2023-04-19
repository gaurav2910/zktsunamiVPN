import { isAndroid, isIOS } from "react-device-detect";

export const Card = () => {
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
    <div className="cardContainer py-5 my-5">
      <div className="container d-flex flex-column  pixelOperatorMonoBold ">
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="m-2"
            style={{ width: "60px" }}
            src={process.env.PUBLIC_URL + "/images/hacker.png"}
          />
          <div>
            <div className="headingCss" style={{ color: "white" }}>
              How To Set Up a VPN on Google Chrome
            </div>
            <div style={{ color: "white" }}>
              Take these simple steps to browser on Google Chrome Safely
            </div>
          </div>

          <img
            className="m-2"
            style={{ width: "60px" }}
            src={process.env.PUBLIC_URL + "/images/hacker.png"}
          />
        </div>
        <div className="d-flex flex-md-row flex-column my-3">
          <div class="cardCss card text-white mb-3 ">
            <div class="cardCss card-header headerCss">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/images/directory_check-0.png"}
                />
                <span className="p-1">Step 1</span>
              </div>
            </div>
            <div class="card-body cardBody">
              <h5 class="card-title">Download ZKTsunami VPN</h5>
              <p class="card-text">
                Get our VPN Chrome Extension via the link below Enable the
                Extension in your browser settings.
              </p>
            </div>
          </div>
          <div class="cardCss card text-white mb-3 secondCardMargin">
            <div class="cardCss card-header headerCss">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/images/address_book_user.png"}
                />
                <span className="p-1">Step 2</span>
              </div>
            </div>{" "}
            <div class="card-body cardBody">
              <h5 class="card-title">Sign Up</h5>
              <p class="card-text">
                Choose from a few subscription plans tailored to match your
                needs and sign up
              </p>
            </div>
          </div>
          <div class="cardCss card text-white mb-3 ">
            <div class="cardCss card-header headerCss">
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/network_internet_pcs_installer-0.png"
                  }
                />
                <span className="p-1">Step 3</span>
              </div>
            </div>{" "}
            <div class="card-body cardBody">
              <h5 class="card-title">Connect To VPN</h5>
              <p class="card-text">
                Pick a server from our 2500+ units in 89 locations Get ready to
                securely browse the web!
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <button
              type="button"
              onClick={getExtensionClick}
              className="btn btn-lg btnCss cardBtnCss"
            >
              Get the Extension
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
