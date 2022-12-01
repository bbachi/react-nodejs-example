FROM node:14-alpine

WORKDIR /app

# add '/app/node_modules/.bin' to $PATH
# ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package*.json ./
RUN npm install 

# RUN npm install react-scripts -g

# copy app files
COPY . .

EXPOSE 3000
CMD npm start 

# FROM node:14-alpine AS  build
# WORKDIR /my-app
# COPY . /my-app/
# RUN npm i
# RUN npm run build 

# FROM nginx:stable-alpine AS runner
# WORKDIR /usr/share/nginx/html/
# COPY --from=build /my-app/build /usr/share/nginx/html
# EXPOSE 80
