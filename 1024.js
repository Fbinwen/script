// 2024-02-01 15:15

const url = $request.url;
const isResp = typeof $response !== "undefined";
let body = $response.body;

switch (isResp) {
  // 草榴社区-评论区广告
  case /^https:\/\/2023\.redircdn\.com\/web\/mob_post\.js\?/.test(url):
    try {
      body = body.replace(/spinit\(\)/g, "spinit0()");
    } catch (err) {
      console.log(`草榴社区-评论区广告, 出现异常: ` + err);
    }
    break;
  default:
    $done({});
}

$done({ body });