/*  加载模块以创建 HTTP 服务和 MySQL 连接 */
const http = require('http');
const mysql = require('mysql');

/* 定义服务器将监听的地址，以及 MySQL 连接的参数 */
const host = '0.0.0.0';        // 因为需要将 Docker 服务对外，因此需要开放端口。
const port = 8000;
const mysqlOptions = {
  host     : 'mysql',         // 这里和 docker-compose.yaml 中定义的 mysql 名称一致
  user     : 'nodejsapp',
  password : 'ILoveDocker'
}

/* 创建 MySQL 连接 */
const mysqlConnection = mysql.createConnection(mysqlOptions);
mysqlConnection.connect();

/* 配置 HTTP 模块来响应请求 */
const server = http.createServer((req, res, next) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // 查询数据库，取当前时间，并且返回给浏览器
  mysqlConnection.query('SELECT NOW() AS now;', (err, rows, fields) => {
    res.write(`Now is ${rows[0].now}\n`);
    res.end('Hello Docker\n');
  });
});

/* 监听主机和端口 */
server.listen(port, host);

/* 在终端上输出启动信息 */
console.log(`Server running at http://${host}:${port}/`);

/* 处理 Ctrl + C 键，当按下时退出 */
process.on('SIGINT', () => {
  console.log('Closing MySQL Connection');
  mysqlConnection.close();
  console.log('Exiting...');
  process.exit();
});
