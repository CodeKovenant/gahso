/**
 * Vercel catch-all serverless function entry point.
 *
 * Vercel's file-based routing maps all /api/* requests to this file,
 * preserving the full original URL path. The Express app receives
 * req.url intact (e.g. /api/healthz, /api/submit-contact) and routes
 * normally via its app.use("/api", router) mount.
 *
 * @vercel/node compiles this file and wraps the exported Express app
 * as a serverless handler automatically.
 */
import app from "../artifacts/api-server/src/app";

export default app;
