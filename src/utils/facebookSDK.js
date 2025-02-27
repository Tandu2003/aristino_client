import { Environment } from "../environments";

export const loadFacebookSDK = () => {
  const { FB_APP_ID } = Environment;

  return new Promise((resolve) => {
    if (window.FB) {
      resolve(window.FB);
      return;
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: FB_APP_ID, // Dùng biến môi trường
        cookie: true,
        xfbml: true,
        version: "v22.0",
      });

      resolve(window.FB);
    };

    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.FB) resolve(window.FB);
    };
    document.body.appendChild(script);
  });
};
