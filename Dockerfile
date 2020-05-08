FROM node:10
ADD ./ /root/
WORKDIR /root/
RUN npm install
CMD ["node", "index.js"]
