# Specifies where to get the base image (Node v12 in our case) and creates a new container for it
FROM node:14

# Set working directory. Paths will be relative this WORKDIR.
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
RUN npm install git-rev-sync --save

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]