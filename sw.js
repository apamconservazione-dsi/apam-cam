self.addEventListener('install', (event) => {
  console.log('Service Worker installato');
});

self.addEventListener('fetch', (event) => {
  // Questo serve a far funzionare la PWA anche se non facciamo caching
});