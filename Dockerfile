# ─── Base image ────────────────────────────────────────────────
FROM node:18-alpine

# ─── Working dir ───────────────────────────────────────────────
WORKDIR /app

# ─── Install deps first (cache layer) ──────────────────────────
COPY package*.json ./
RUN npm install

# ─── Copy entire project (incl. prisma/) ───────────────────────
COPY . .

# ─── Generate Prisma client ────────────────────────────────────
RUN npx prisma generate

# ─── Copy the startup script & make it executable ──────────────
COPY start.sh .
RUN chmod +x start.sh

# ─── Build Next.js for production ──────────────────────────────
RUN npm run build

EXPOSE 3000

# ─── Container entrypoint ──────────────────────────────────────
CMD ["./start.sh"]
