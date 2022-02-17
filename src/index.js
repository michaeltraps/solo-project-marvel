import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Feed from './Feed';
// const comic = require('./server/server.js')

// const MARVEL_PUBLIC_KEY = '5f33106c4d2367937150b6a657891b91';
// const MARVEL_PRIVATE_KEY = '4729d28d152fe7b9afed40368c607c8c3543e6de';

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomCover() {
	
// 	const year = getRandomInt(1960, 2013);
// 	const month = getRandomInt(1, 12);
// 	let url = '';

// 	const monthStr = month < 10 ? "0" + month : month;
// 	//lame logic for end of month
// 	const eom = month == 2 ? 28 : 30;
// 	const beginDateStr = year + "-" + monthStr + "-01";
// 	const endDateStr = year + "-" + monthStr + "-" + eom;
// 	url = "http://gateway.marvel.com/v1/public/comics?limit=100&format=comic&formatType=comic&dateRange=" + beginDateStr + "%2C" + endDateStr + "&apikey=" + MARVEL_PUBLIC_KEY;
// 	const ts = new Date().getTime();
// 	const hash = crypto.createHash('md5').update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex');
// 	url += "&ts=" + ts + "&hash=" + hash;

//     // url = 'http://gateway.marvel.com/v1/public/comics?limit=1&format=comic&formatType=comic&dateRange=1975-08-01%2C1975-08-30&apikey=5f33106c4d2367937150b6a657891b91&ts=1645036980157&hash=3b11198179d257b9aee1a76a27a6b2f6';
// 	return url;
// }

const arrayOfComicCovers =[ 'http://i.annihil.us/u/prod/marvel/i/mg/c/a0/5d5d4c8c6e22f.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/2/c0/5d5aaf8cb98fa.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/70/5d5aaf2e85d4d.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/b/e0/5d5ab0497a3ac.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/60/5d5aae92be09e.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/b/c0/5d5aafa66310d.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/b0/5d5d4cc7e37bf.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/40/5d5aae0e18bf8.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/4/50/5d5d58646e097.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/5/70/5d5ab042902a3.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/b/a0/5d5aaf0354c1c.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/9/80/5d5aaef292159.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/c/00/5d5aaf7452a3c.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/e/e0/5d5aaf0bc0f39.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/20/5d5aadf4453dc.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/9/50/5d5aae828e440.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/5/30/5d5d4caeefc4a.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/9/b0/5d5aae4f79083.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/b/d0/5d5ab0604dbd7.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/1/f0/5d5aaf6bacf60.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/50/5d5aaec3e4f82.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/7/40/5d5d4c952875f.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/90/5d5d4ca7c38ed.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/9/80/5d5d4cb71428f.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/b/b0/5d5aaf14e2c41.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/50/5d5aaee23f7c5.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/40/5d5aae8a09b8b.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/c/90/5d5d4c3e97cd0.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/5/70/5d5aafbfe9a8a.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/e/d0/5d5aaf7c220dd.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/2/b0/5d5aaed2e9df7.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/d0/5d5d4ce2c8f6e.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/6/f0/5d5d4d043f968.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/2/f0/5d5d5853a1041.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/a/20/5d5d4c575d9b8.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/6/40/5d5aaf6405941.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/f0/5d5aaf469afe9.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/00/5d5aadfd052f4.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/1/d0/5d5aaea15ab8e.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/6/10/5d5aaf9542303.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/2/10/5d5aaf3e9bd0c.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/b/e0/5d5aae7113f4b.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5d5aae3547c9c.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/b/30/5d5ab023dea20.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/5d5aaf83a8467.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/2/10/5d5aaf59b2bcc.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/8/b0/5d5ab03a640b9.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/10/5d5d4c601febc.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/10/5d5aafc83a07d.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5d5aadeb98e6e.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/b/50/5d5aae7a4a002.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/60/5d5d4ceb33fa8.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/6/00/5d5ab0589a160.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/a0/5d5aaf4fa79a7.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/e/e0/5d5aaf1de8d01.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/9/50/5d5aafb661366.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/5d5d4cf34e817.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/5/c0/5d5d4cdadd9ff.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/5/b0/5ceedfcb6ed55.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/b/d0/5d5aaf2602e4c.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/c/10/5d5aae057d4d3.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/2/10/5d5aae691dadb.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/e/d0/5d5d4cd03daa6.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/6/e0/5d5d585b27f62.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/1/e0/5d5aafd0daf71.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/40/5d5aae603d6ef.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/c/20/5d700f4c2ec5e.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/9/20/5d5d4d1d5d315.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/e/a0/5d5aafaf0b640.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/1/c0/5d5aaecc13fc3.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/6/90/5d5d9b72192d2.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/c0/5d5d4c4f6ede4.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/5/04/5d5d4cbf869ff.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/8/e0/5d5d4d0c5091a.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/c/60/5d5aaf366ff22.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/b0/5d5aaefa79d64.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/2/20/5d5aaea94c2de.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/80/5d5d4c73cf1ee.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/4/90/5d5aaffa4ac0c.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/7/f0/5d5c0a32c0a12.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/20/5d5aaf9e01b7c.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/10/5d5aaedae3608.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/c/60/5d5aaeb21e778.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/90/5d5aae5792eaf.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/c/90/5d5d4c847a8ba.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/8/c0/5d531fca2705a.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/f/60/5d532010123e6.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5d5423eaa4291.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/0/03/5d53203160f57.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/b/90/5d5320c1adc3f.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/2/80/5d5320801ee10.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/6/10/5d54221d1cb96.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/9/03/5d542285438c3.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/6/30/5d53204e06e7d.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/6/30/5d5320762f3cd.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/c/10/5d5320d7e6abd.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/4/90/5d5468ff77563.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/9/40/5d54225db2e6e.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/8/90/5d53201c81ccb.jpg',
'http://i.annihil.us/u/prod/marvel/i/mg/9/b0/5d531ff15dc78.jpg' ];


class App extends Component {
	
  render() {
    return (
      <div style={styles.container}>
		  {/* <Feed feedUrl={url}/> */}
        <img src={arrayOfComicCovers[Math.floor(Math.random()*50)]} onError={(e) => e.target.style.display = 'none'}></img>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

// Render an <App> component to the #app div in the body
ReactDOM.render(<App />, document.getElementById('root'));