# ================================
# 1️⃣ Build Stage
# ================================
FROM node:20-bullseye AS builder

WORKDIR /app

# Install curl & OpenSSL for Prisma
RUN apt-get update && apt-get install -y curl openssl ca-certificates && rm -rf /var/lib/apt/lists/*

# Copy dependencies first (for caching)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# ================================
# ARGs for environment variables
# ================================
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ARG CLERK_SECRET_KEY
ARG DATABASE_URL
ARG GOOGLE_API_KEY

ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ENV CLERK_SECRET_KEY=$CLERK_SECRET_KEY
ENV DATABASE_URL=$DATABASE_URL
ENV GOOGLE_API_KEY=$GOOGLE_API_KEY

# Generate Prisma client
RUN npx prisma generate --schema=./prisma/schema.prisma

# Build Next.js app
RUN npm run build

# ================================
# 2️⃣ Production Stage
# ================================
FROM node:20-bullseye AS runner

WORKDIR /app

# Install runtime libraries for Prisma
RUN apt-get update && apt-get install -y libssl1.1 ca-certificates && rm -rf /var/lib/apt/lists/*

# Copy built app and dependencies from builder
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/lib/generated/prisma ./lib/generated/prisma

# Reuse the same ARGs for runtime
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ARG CLERK_SECRET_KEY
ARG DATABASE_URL
ARG GOOGLE_API_KEY

ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ENV CLERK_SECRET_KEY=$CLERK_SECRET_KEY
ENV DATABASE_URL=$DATABASE_URL
ENV GOOGLE_API_KEY=$GOOGLE_API_KEY
ENV NODE_ENV=production

EXPOSE 3000

CMD ["sh", "-c", "next start -p $PORT"]
