# Voicebot – Quick Start (Docker)

## Prerequisites

* **Git**
* **Docker** (Desktop on macOS/Windows; Engine + Compose on Linux)

---

## 1) Clone the repo

```bash
git clone <GIT_REPO_URL> voicebot
cd voicebot
```

Project layout (for reference):

```
voicebot/
├─ backend/           # FastAPI (port 8000)
│  ├─ Dockerfile
│  └─ requirements.txt
├─ frontend/          # Next.js (port 3000)
│  └─ Dockerfile
└─ docker-compose.yml
```

---

## 2) Create environment files

### A) Root `.env`  (used by Docker **at build time** for the frontend)

Create `voicebot/.env`:

```bash
# Visible to the browser (must start with NEXT_PUBLIC_)
NEXT_PUBLIC_ELEVENLABS_AGENT_ID=agent_id
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

### B) Backend `.env`  (used by the backend **at runtime**)

Create `voicebot/backend/.env`:

```bash
ELEVENLABS_API_KEY=replace_with_your_api_key
FRONTEND_ORIGIN=http://localhost:3000
```


---

## 3) Build containers

From the project root:

```bash
docker compose build
```

---

## 4) Run the stack

```bash
docker compose up
# (or run in background)
# docker compose up -d
```

### URLs

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend health: [http://localhost:8000/health](http://localhost:8000/health)  → should return `{"ok": true}`

---