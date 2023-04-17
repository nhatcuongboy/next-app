FROM node:lts-alpine AS builder
ARG version_info
ENV REACT_APP_VERSION_INFO=${version_info}
WORKDIR /app
COPY ["package.json", "./"]
RUN npm install
COPY . .
RUN npm run build
LABEL name="nextjs" version="1.0"
EXPOSE 3000
CMD ["npm", "start"]