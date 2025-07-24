# ─── Base image ────────────────────────────────────────────────
FROM node:20-alpine

# ─── Add dependencies required for native module builds ────────
RUN apk add --no-cache python3 make g++

# ─── Set working directory ─────────────────────────────────────
WORKDIR /app

# ─── Install dependencies (cached layer) ───────────────────────
COPY package*.json ./
RUN npm install

# ─── Copy remaining project files ──────────────────────────────
COPY . .

# ─── Copy environment variables ────────────────────────────────
COPY .env .env

# ─── Generate Prisma client ────────────────────────────────────
RUN npx prisma generate

# ─── Make startup script executable ────────────────────────────
RUN chmod +x start.sh

# ─── Build Next.js for production ──────────────────────────────
RUN npm run build

# ─── Expose port ───────────────────────────────────────────────
EXPOSE 3000

# ─── Start the app ─────────────────────────────────────────────
CMD ["./start.sh"]
