const path = require('path');
const express = require('express');
const crypto = require('crypto');
const http = require('http');

const app = express();
const PORT = 3000;

// MARVEL_PUBLIC_KEY = '5f33106c4d2367937150b6a657891b91';
// MARVEL_PRIVATE_KEY = '4729d28d152fe7b9afed40368c607c8c3543e6de';

// let url = '';

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomCover() {
	
// 	const year = getRandomInt(1960, 2013);
// 	const month = getRandomInt(1, 12);


// 	const monthStr = month < 10 ? "0" + month : month;
// 	//lame logic for end of month
// 	const eom = month == 2 ? 28 : 30;
// 	const beginDateStr = year + "-" + monthStr + "-01";
// 	const endDateStr = year + "-" + monthStr + "-" + eom;
// 	url = "http://gateway.marvel.com/v1/public/comics?limit=1&format=comic&formatType=comic&dateRange=" + beginDateStr + "%2C" + endDateStr + "&apikey=" + MARVEL_PUBLIC_KEY;
// 	const ts = new Date().getTime();
// 	const hash = crypto.createHash('md5').update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex');
// 	url += "&ts=" + ts + "&hash=" + hash;

//     url = 'http://gateway.marvel.com/v1/public/comics?limit=1&format=comic&formatType=comic&dateRange=1975-08-01%2C1975-08-30&apikey=5f33106c4d2367937150b6a657891b91&ts=1645036980157&hash=3b11198179d257b9aee1a76a27a6b2f6';
    
//     return url;
// }

// console.log(getRandomCover());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// app.post(url, (req, res, next) => {
//     console.log('device:' + req.params.id + 'Request received');
//     let parsedContent = JSON.parse(req.query);
//     let payload = req.body.payload;
//     res.status(201).send('success');
// })

app.get('/', (req, res, next) => {
    res.status(200).send(url);
});

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknonw middleware error',
        status: 500,
        message: { err: 'An error occurred'},
    };
    const errorObj = Object.assign({}, defaultErr, err);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;