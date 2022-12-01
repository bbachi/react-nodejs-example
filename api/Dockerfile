FROM node:14-alpine

WORKDIR /back

# add '/app/node_modules/.bin' to $PATH
# ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package*.json ./
RUN npm install
# RUN npm install react-scripts -g

# copy app files
COPY . .

EXPOSE 4000
CMD ["npm", "start"]