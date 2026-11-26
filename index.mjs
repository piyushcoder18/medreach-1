// Netlify Server entry: starts the existing Express app from server/index.js.
// Static pages, /shared and /vendor/leaflet are served by the CDN from dist/
// (see netlify.toml), so this server only receives the API routes.
import { createApp, productionStore } from '../../server/index.js';

export const config = { path: '/api/*' };

const store = productionStore();
if (process.env.SEHAT_SIMULATE === '1') store.startStatusSimulation();

createApp(store).listen(Number(process.env.PORT) || 3000);
