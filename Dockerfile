# use the lightest version of node
FROM node:alpine    

# directory on the host machine
WORKDIR /usr/app

#copy 'package.json' and 'package-lock.json' to /usr/app
COPY package*.json  ./

#install the all the node dependencies
RUN npm install

#Copy all files, except the .dockerignore files
COPY . .

#open application on port 3000
EXPOSE 3000

CMD [ "npm", "start" ]

#deploy: 
#docker build -t desafio_certi_g_lionco .
#run:
#docker run -p 3000:3000 -d desafio_certi_g_lionco
#see the applications:
#docker ps