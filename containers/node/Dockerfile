FROM node:7.7.2-alpine

WORKDIR /Users/admin/Workspace/DeziDataServer
RUN pwd

COPY ../../package.json .
RUN npm install --quiet

COPY . .