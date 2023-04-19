const TopNotch = () => {
  return (
    <div className="mb-5 topNotchConatiner">
      <div className="container mt-5 d-flex flex-column pixelOperatorMonoBold mb-5 ">
        <div className="headingCss">
          Top-Notch Security With a VPN for Chrome
        </div>
      </div>
      <img
      className="swordCssLeft"
        src={process.env.PUBLIC_URL + "/images/sword.png"}
      />
       <img
      className="swordCssRight"
        src={process.env.PUBLIC_URL + "/images/sword.png"}
      />
      <div className="container d-flex flex-column pixelOperatorMonoBold continerColor">
        <div
          className="m-3  headingCss"
          style={{ backgroundColor: "#4B9CD3", color: "white" }}
        >
          &lt; &lt; ZKTsunami &gt; &gt;
        </div>
        <div className="m-3 row">
          <div
            className="col-12 col-md-4 col-xl-3  topNotchCard mb-5"
            style={{ backgroundColor: "#FFFF99" }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/netshow_notransm-1.png"}
            />
            <span className="p-1">Enjoy limitless content</span>
          </div>
          <div
            className="col-12 col-md-4 col-xl-3 topNotchCardMargin   topNotchCard mb-5"
            style={{ backgroundColor: "#FFFF99" }}
          >
            <img src={process.env.PUBLIC_URL + "/images/gps-1.png"} />
            <span className="p-1">Prevent tracking</span>
          </div>
          <div
            className="col-12 col-md-4 col-xl-3  topNotchCard mb-5"
            style={{ backgroundColor: "#FFFF99" }}
          >
            <img
              src={
                process.env.PUBLIC_URL + "/images/internet_connection_wiz-3.png"
              }
            />
            <span className="p-1">Browse freely</span>
          </div>
          <div
            className="col-12 col-md-4 col-xl-3  topNotchCard mb-5 mb-md-0"
            style={{ backgroundColor: "#FFFF99" }}
          >
            <img src={process.env.PUBLIC_URL + "/images/notepad-2.png"} />
            <span className="p-1">Don't worry about logs</span>
          </div>
          <div
            className="col-12 col-md-4 col-xl-3  topNotchCardMargin topNotchCard mb-5 mb-md-0"
            style={{ backgroundColor: "#FFFF99" }}
          >
            <img src={process.env.PUBLIC_URL + "/images/msagent-4.png"} />
            <span className="p-1">Stream securely</span>
          </div>
          <div
            className="col-12 col-md-4 col-xl-3  topNotchCard mb-5 mb-md-0"
            style={{ backgroundColor: "#FFFF99" }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/netmeeting_share-2.png"}
            />
            <span className="p-1">Get seamless connection</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopNotch;
