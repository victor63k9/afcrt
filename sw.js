var dataCacheName='AFCRTDC1';
var cacheName='AFCRTCN';
var files2Cache=[
'/afcrt/index.html',
'/afcrt/lib/cusite.min.css',
'/afcrt/lib/jquery.js',
'/afcrt/lib/jquery.mobile-1.4.5.min.css',
'/afcrt/lib/jquery-1.11.2.min.js',
'/afcrt/lib/jquery.mobile-1.4.5.min.js',
'/afcrt/lib/images/ajax-loader.gif',
'/afcrt/myapp.js',
'/afcrt/1.mp3',
'/afcrt/1.wav',
'/afcrt/1rb.mp3',
'/afcrt/1rb.wav',
'/afcrt/2.mp3',
'/afcrt/2.wav',
'/afcrt/3.mp3',
'/afcrt/3.wav',
'/afcrt/3rb.mp3',
'/afcrt/3rb.wav',
'/afcrt/4.mp3',
'/afcrt/4.wav',
'/afcrt/5.mp3',
'/afcrt/5.wav',
'/afcrt/6.mp3',
'/afcrt/6.wav',
'/afcrt/7.mp3',
'/afcrt/7.wav',
'/afcrt/8.mp3',
'/afcrt/8.wav',
'/afcrt/9.mp3',
'/afcrt/9.wav',
'/afcrt/10.mp3',
'/afcrt/10.wav',
'/afcrt/11.mp3',
'/afcrt/11.wav',
'/afcrt/12.mp3',
'/afcrt/12.wav',
'/afcrt/13.mp3',
'/afcrt/13.wav',
'/afcrt/13A.mp3',
'/afcrt/13A.wav',
'/afcrt/14.mp3',
'/afcrt/14.wav',
'/afcrt/15.mp3',
'/afcrt/15.wav',
'/afcrt/16.mp3',
'/afcrt/16.wav',
'/afcrt/17.mp3',
'/afcrt/17.wav',
'/afcrt/18.mp3',
'/afcrt/18.wav',
'/afcrt/19.mp3',
'/afcrt/19.wav',
'/afcrt/99.mp3',
'/afcrt/99.wav',
'/afcrt/350.mp3',
'/afcrt/350.wav',
'/afcrt/700.mp3',
'/afcrt/700.wav',
'/afcrt/705.mp3',
'/afcrt/705.wav',
'/afcrt/710.mp3',
'/afcrt/710.wav',
'/afcrt/715.mp3',
'/afcrt/715.wav',
'/afcrt/999.mp3',
'/afcrt/999.wav'];


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
	
