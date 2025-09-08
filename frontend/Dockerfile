# ---------- Deps ----------
    FROM node:20-bullseye-slim AS deps
    WORKDIR /app
    RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*
    COPY package.json package-lock.json* ./
    # robust install with retries
    RUN npm config set fetch-retries 5 \
     && npm config set fetch-retry-factor 2 \
     && npm config set fetch-retry-mintimeout 20000 \
     && npm config set fetch-timeout 600000 \
     && if [ -f package-lock.json ]; then npm ci --no-fund --no-audit; else npm install --no-fund --no-audit; fi
    
    # ---------- Builder ----------
    FROM node:20-bullseye-slim AS builder
    WORKDIR /app
    ENV NEXT_TELEMETRY_DISABLED=1
    COPY --from=deps /app/node_modules ./node_modules
    COPY . .
    
    # Receive NEXT_PUBLIC_* from Compose as build args and expose them to the build
    ARG NEXT_PUBLIC_ELEVENLABS_AGENT_ID
    ARG NEXT_PUBLIC_BACKEND_URL
    ENV NEXT_PUBLIC_ELEVENLABS_AGENT_ID=$NEXT_PUBLIC_ELEVENLABS_AGENT_ID
    ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL
    
    RUN npm run build
    
    # ---------- Runner ----------
    FROM node:20-bullseye-slim AS runner
    WORKDIR /app
    ENV NODE_ENV=production PORT=3000 NEXT_TELEMETRY_DISABLED=1
    
    # run as non-root
    RUN adduser --disabled-password --gecos "" nextjs && chown -R nextjs:nextjs /app
    USER nextjs
    
    # copy standalone output
    COPY --from=builder /app/.next/standalone ./
    COPY --from=builder /app/.next/static ./.next/static
    COPY --from=builder /app/public ./public
    
    EXPOSE 3000
    CMD ["node", "server.js"]
    