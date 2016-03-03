#
# The Dockerfile is based official node image and extended with command line
# tools
#

# Download the image
FROM node:latest

# Maintainer
MAINTAINER XQ Kuang <xuqing.kxq@alibaba-inc.com>

# Install command line packages
RUN npm install -g babel-cli browserify coffee-script express-generator grunt-cli grunt-cli-babel gulp-cli jasmine mocha node-inspector node-static pm2 uglify webpack-cli webpack-dev-server

# Expose the ports
EXPOSE 8000
