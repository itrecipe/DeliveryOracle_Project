const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/kakao", // 프론트엔드에서 요청하는 경로
    createProxyMiddleware({
      target: "https://dapi.kakao.com", // Kakao API의 기본 URL
      changeOrigin: true,
      pathRewrite: {
        "^/api/kakao": "", // 실제 요청에서 '/api/kakao'를 제거하고 전송합니다
      },
      headers: {
        Authorization: "KakaoAK 118758887a12efe3eacb986f7c685aff", // Kakao API 키
      },
    })
  );

  app.use(
    "/api/kakaoa", // 프론트엔드에서 요청하는 경로
    createProxyMiddleware({
      target: "https://dapi.kakao.com", // Kakao API의 기본 URL
      changeOrigin: true,
      pathRewrite: {
        "^/api/kakaoa": "", // 실제 요청에서 '/api/kakaoa'를 제거하고 전송합니다
      },
      headers: {
        Authorization: "KakaoAK 118758887a12efe3eacb986f7c685aff", // Kakao API 키
      },
    })
  );
};
