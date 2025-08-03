// =====================
// APEX WARRIOR ACADEMY - SERVICE WORKER
// =====================

const CACHE_NAME = 'apex-warrior-academy-v1.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/securityplus.html',
  '/networkplus.html',
  '/blc.html',
  '/boardprep.html',
  '/about.html',
  '/resources/design/style.css',
  '/resources/script/script.js',
  '/resources/script/performance.js',
  '/resources/script/auth.js',
  '/resources/images/apex_warrior_academy_transparent.png'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 