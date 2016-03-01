/* 加载模块以创建 HTTP 服务 */
const http = require('http');

/* 定义服务器将监听的地址 */
const host = '0.0.0.0';        // 因为需要将 Docker 服务对外，因此需要开放端口。
const port = 8000;

/* 配置 HTTP 模块来响应请求 */
var server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello Docker\n");
});

/* 监听主机和端口 */
server.listen(port, host);

/* 在终端上输出启动信息 */
console.log(`Server running at http://${host}:${port}/`);

/* 处理 Ctrl + C 键，当按下时退出 */
process.on('SIGINT', () => {
  console.log("Exiting...");
  process.exit();
});
