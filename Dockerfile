FROM node:alpine AS rimidalv-website-build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=rimidalv-website-build /app/dist/rimidalv-website /usr/share/nginx/html
EXPOSE 80