FROM node:20

WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
COPY tsconfig.json .

RUN corepack enable
RUN pnpm install
COPY . .
RUN pnpm run build
RUN pnpm install --prod=true

EXPOSE 4000

CMD ["pnpm", "start"]
