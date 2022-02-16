// import React from 'react';
// import { ReactDOM, render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';



// render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//     document.getElementById('root'),
// );
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const MARVEL_PUBLIC_KEY = '5f33106c4d2367937150b6a657891b91';
const MARVEL_PRIVATE_KEY = '4729d28d152fe7b9afed40368c607c8c3543e6de';

let url = '';

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCover() {
	
	const year = getRandomInt(1960, 2013);
	const month = getRandomInt(1, 12);s


	const monthStr = month < 10 ? "0" + month : month;
	//lame logic for end of month
	const eom = month == 2 ? 28 : 30;
	const beginDateStr = year + "-" + monthStr + "-01";
	const endDateStr = year + "-" + monthStr + "-" + eom;
	url = "http://gateway.marvel.com/v1/public/comics?limit=1&format=comic&formatType=comic&dateRange=" + beginDateStr + "%2C" + endDateStr + "&apikey=" + MARVEL_PUBLIC_KEY;
	const ts = new Date().getTime();
	const hash = crypto.createHash('md5').update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).digest('hex');
	url += "&ts=" + ts + "&hash=" + hash;

    // url = 'http://gateway.marvel.com/v1/public/comics?limit=1&format=comic&formatType=comic&dateRange=1975-08-01%2C1975-08-30&apikey=5f33106c4d2367937150b6a657891b91&ts=1645036980157&hash=3b11198179d257b9aee1a76a27a6b2f6';
    
    return url;
}

console.log(url);


//App consists of one feed
// replaced full URL with url variable from line 6
class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1>{url}</h1>
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