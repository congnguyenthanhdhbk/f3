# Set the base image to Node
FROM node

# File Author / Maintainer
MAINTAINER Cong Nguyen Thanh

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "run", "start"]
EXPOSE 8081