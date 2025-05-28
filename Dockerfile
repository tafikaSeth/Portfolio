FROM node:18

LABEL maintainer="Ny Fahafahana Lanja <rnlanja06@gmail.com>, Tafika Seth <tafikaseth@gmail.com>"
LABEL version="0.1.0"
LABEL description="Dockerfile CI pour un projet React avec npm"

WORKDIR /app

RUN apt-get update && apt-get install -y \
    git \
    libvips-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
