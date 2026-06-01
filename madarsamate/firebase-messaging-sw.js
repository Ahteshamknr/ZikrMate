/* Firebase is not configured yet. This no-op worker keeps local builds stable. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
