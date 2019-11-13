# base image
FROM node:12-alpine 

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install @vue/cli@4.0.5 -g

# start app
CMD ["npm", "run", "serve"] # dev
#CMD ["npm", "run", "build"] # build

# docker build -t meetingroom-frontend:dev .
# docker run -v ${PWD}:/app -v /app/node_modules -p 8081:8080 --rm my-app:dev

#ref. https://mherman.org/blog/dockerizing-a-vue-app/