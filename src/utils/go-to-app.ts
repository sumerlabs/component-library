import { OPEN_APP_STORE_IOS, OPEN_APP_STORE_ANDROID, OPEN_APP_INSTALLED } from "../constants";

export const goToApp = (sendToStore?: boolean) => {
  let url = sendToStore ? OPEN_APP_STORE_ANDROID : OPEN_APP_INSTALLED;
  var userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  if (/iPad|iPhone|iPod|Mac/.test(userAgent) && !(window as any).MSStream) {
    url = sendToStore ? OPEN_APP_STORE_IOS : OPEN_APP_INSTALLED;
  }
  const link = document.createElement("a");
  link.href = url;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
