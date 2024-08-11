```
FROM node:18.2.0

WORKDIR /app

COPY package*json ./

RUN npm install
RUN npm install react-google-recaptcha
RUN npm install emailjs-com
RUN npm install swiper
RUN npm install framer-motion
RUN npm install react-router-dom

COPY ..

EXPOSE 3000

CMD ["npm","start"]
```