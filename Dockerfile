FROM node:20-alpine
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
# COPY package.json package-lock.json ./
RUN yarn install

CMD ["serve", "-s", "build"]
