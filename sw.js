const NameCache = 'random-winner-v1'
const FilesCache = [
	'./',
	'./index.html',
	'./bundle.js'
]

self.addEventListener('install', e => {
	console.log('Evento: SW Instalado')
	e.waitUntil(
		caches.open(NameCache)
		.then(cache => {
			console.log('Archivos en cache')
			return cache.addAll(FilesCache)
						.then( () => self.skipWaiting() )
						//skipWaiting forza al SW a activarse
		})
		.catch(err => console.log('Falló registro de cache', err) )
	  )
})

self.addEventListener('activate', function(e) {
	console.log('[ServiceWorker] Activate');
	e.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if (key !== cacheName) {
					console.log('[ServiceWorker] Removing old cache', key);
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});
