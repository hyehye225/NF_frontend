let backendHost;

const hostname = window && window.location && window.location.hostname;
//localhost 에서 172.30.196.67로 변경함
console.log("hostname", hostname);
// if (hostname === "localhost") {
//   backendHost = "http://172.30.196.67:8080";
// }

//안드로이드 스튜디오 오류나서 추가한 부분
backendHost = "http://172.30.196.67:8080";

console.log("backendHost", backendHost);
export const APL_BASE_URL = `${backendHost}`;
