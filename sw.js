var dataCacheName='AFCRTDC1';
var cacheName='AFCRTCN';
var files2Cache=[
'/index.html',
'/lib/cusite.min.css',
'/lib/jquery.js',
'/lib/jquery.mobile-1.4.5.min.css',
'/lib/jquery-1.11.2.min.js',
'/lib/jquery.mobile-1.4.5.min.js',
'/lib/images/ajax-loader.gif',
'/myapp.js',
'/1.mp3',
'/1.wav',
'/1rb.mp3',
'/1rb.wav',
'/2.mp3',
'/2.wav',
'/3.mp3',
'/3.wav',
'/3rb.mp3',
'/3rb.wav',
'/4.mp3',
'/4.wav',
'/5.mp3',
'/5.wav',
'/6.mp3',
'/6.wav',
'/7.mp3',
'/7.wav',
'/8.mp3',
'/8.wav',
'/9.mp3',
'/9.wav',
'/10.mp3',
'/10.wav',
'/11.mp3',
'/11.wav',
'/12.mp3',
'/12.wav',
'/13.mp3',
'/13.wav',
'/13A.mp3',
'/13A.wav',
'/14.mp3',
'/14.wav',
'/15.mp3',
'/15.wav',
'/16.mp3',
'/16.wav',
'/17.mp3',
'/17.wav',
'/18.mp3',
'/18.wav',
'/19.mp3',
'/19.wav',
'/99.mp3',
'/99.wav',
'/350.mp3',
'/350.wav',
'/700.mp3',
'/700.wav',
'/705.mp3',
'/705.wav',
'/710.mp3',
'/710.wav',
'/715.mp3',
'/715.wav',
'/999.mp3',
'/999.wav'];


self.addEventListener('install',function(e){
	console.log('sw install');
	e.waitUntil(
	caches.open(cacheName).then(function(cache){
    console.log(cacheName);
    
		console.log('sw caching app shell');
		return cache.addAll(files2Cache);
	})
	);
});




self.addEventListener('activate',function(e){
	console.log('sw activate');
	e.waitUntil(
	caches.keys().then(function(keyList){
		return Promise.all(keyList.map(function(key){
			if (key !== cacheName && key !==dataCacheName) {
				console.log('sw removing old cache',key);
				return caches.delete(key);
			}
		}));
	})
);
return self.clients.claim();
});



self.addEventListener('fetch',function(e){
console.log('sw fetch',e.request.url);
e.respondWith(
caches.match(e.request).then(function(response){
return response || fetch(e.request);
})
);
});
	
