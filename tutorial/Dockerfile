# 下载镜像
FROM node:0.12.10

# 维护人信息
MAINTAINER XQ Kuang <xuqing.kxq@alibaba-inc.com>

# 安装 Babel，这里其实可以执行多次 RUN，以行分隔
RUN npm install -g babel-cli

# 增加一个默认的 .babelrc 配置文件
ADD .babelrc /root/

# 暴露端口
EXPOSE 8000
