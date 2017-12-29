let request = require("request");
let url = 'https://www.meetup.com/Tomsk-Artificial-Intelligence-Meetup/';
let html = '';

function handleData(data) {
	let rally = JSON.parse(data).results;
	let dateFlag = '';
	for (let i = 0; i < rally.length; i++)
	{
		let meet = rally[i];
		let date = new Date(meet.time);
		let myrally = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
if (dateFlag != myrally) {
dateFlag = myrally;

html = '<h2>${myrally}</h2>';
}
		let block = "<div>";
block = '<h3>${myrally}</h3>';
block = '<div class="header">${meet.name}</div>';
block = '<div class="address">${meet.venue?meet.venue.address_1:''}</div>';
block = '<div class="descr">${meet.description}</div>';
block = "</div>";
		html = block;
	}
	console.log(html)
}
request(url, (error, response, body) => {
	if (!error) {
		handleData(body);
	}
	else {
		console.log(error);
	}
});