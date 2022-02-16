const crypto = require('crypto');

const marvelController = {};

MARVEL_PUBLIC_KEY = '5f33106c4d2367937150b6a657891b91';
MARVEL_PRIVATE_KEY = '4729d28d152fe7b9afed40368c607c8c3543e6de';

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCover() {
	
	const year = getRandomInt(1960, 2013);
	const month = getRandomInt(1, 12);


	const monthStr = month < 10 ? "0" + month : month;
	//lame logic for end of month
	const eom = month == 2 ? 28 : 30;
	const beginDateStr = year + "-" + monthStr + "-01";
	const endDateStr = year + "-" + monthStr + "-" + eom;
	let url = "http://gateway.marvel.com/v1/public/comics?limit=1&format=comic&formatType=comic&dateRange=" + beginDateStr + "%2C" + endDateStr + "&apikey=" + MARVEL_PUBLIC_KEY;
	const ts = new Date().getTime();
	const hash = crypto.createHash('md5').update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex');
	url += "&ts=" + ts + "&hash=" + hash;

	console.log(new Date() + ' ' + url);
}

marvelController.getComic = (req, res, next) => {
	res.locals.comic = getRandomCover();

}

getRandomCover();