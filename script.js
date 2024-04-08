const input = document.querySelector('.input-box-input');
const searchBtn = document.querySelector('.input-box-search');
const ip = document.querySelector('.ip');
const city = document.querySelector('.city');
const region = document.querySelector('.region');
const postalCode = document.querySelector('.postalcode');
const timezone = document.querySelector('.timezone');
const isp = document.querySelector('.isp');
let URL;
let Address;
let domain;
let map;

// ip koszalina 83.145.129.234

// "http://www.magenta.at"

const fetchAPI = () => {
	Address = input.value
	URL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_b6OCHlZ5ajZ8LRQ3B3ppQudlwa6An&ipAddress=${Address}`;
	let coordsX;
	let coordsY;

	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			coordsX = data.location.lat;
			coordsY = data.location.lng;
			console.log(data.as.domain);
			ip.textContent = data.ip;
			isp.textContent = data.isp;
			timezone.textContent = data.location.timezone;
			city.textContent = data.location.city;
			region.textContent = data.location.region;
			postalCode.textContent = data.location.postalCode;

			if (map) {
				map = map.off();
				map = map.remove();
			}

			map = L.map('map', {
				center: [coordsX, coordsY],
				zoom: 13,
			});

			L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 19,
				attribution:
					'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
			}).addTo(map);
		})
		.catch((err) => console.error(err));
	input.value = '';
};
// fetchAPI();

const checkLocation = () => {
	fetchAPI();
};

searchBtn.addEventListener('click', checkLocation);
document.addEventListener('keyup', (e) => {
	if (e.key == 'Enter') {
		fetchAPI();
	}
});
