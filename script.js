const input = document.querySelector('.input-box-input');
const ip = document.querySelector('.ip');
const locations = document.querySelector('.locations');
const timezone = document.querySelector('.timezone');
const isp = document.querySelector('.isp');

let map = L.map('map', {
	center: [53.505, -0.09],
	zoom: 13,
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
