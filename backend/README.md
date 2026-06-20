# GAHSO API — Contact Form Backend

Node.js/Express API that handles contact form submissions and stores them in a Railway PostgreSQL database.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| POST | `/api/contact` | Submit a contact form |

### POST `/api/contact`

**Request body** (JSON):

```json
{
  "first_name": "Jane",
  "last_name":  "Doe",
  "email":      "jane@example.com",
  "phone":      "+254 700 000000",
  "subject":    "Partnership enquiry",
  "message":    "Hello, I'd like to learn more about...",
  "source":     "contact_page"
}
```

**Responses**:

- `200` — submission saved successfully
- `400` — validation error (body contains `details` array)
- `429` — rate limited (max 1 submission per IP per 5 minutes); body contains `retryAfter` in seconds
- `500` — server / database error

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | ✅ | PostgreSQL connection string (set automatically by Railway) |
| `PORT` | — | Port to listen on (default `3000`; set automatically by Railway) |
| `ALLOWED_ORIGIN` | — | CORS allowed origin (default `*`; set to your frontend URL in production) |
| `NODE_ENV` | — | Set to `production` in Railway |

## Deploying on Railway

1. Create a new **Railway service** pointing at the `backend/` directory of this repo.
2. Attach a **Railway PostgreSQL** database to the service — Railway will inject `DATABASE_URL` automatically.
3. Set `ALLOWED_ORIGIN` to your frontend Railway URL (e.g. `https://gahso.up.railway.app`).
4. Set `NODE_ENV=production`.
5. The service uses the included `Dockerfile` — Railway will detect and use it automatically.

The API creates the `contact_submissions` table on startup if it does not already exist, so no manual migration step is needed.

## Local development

```bash
cd backend
cp .env.example .env          # fill in DATABASE_URL
npm install
npm run dev                   # starts ts-node-dev with hot reload
```
