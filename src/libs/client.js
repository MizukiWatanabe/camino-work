import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'camino-works',
  apiKey: process.env.API_KEY,
});
