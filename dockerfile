FROM oven/bun:latest as install

COPY . .

RUN bun install

EXPOSE 8000
ENTRYPOINT [ "bun", "start" ]