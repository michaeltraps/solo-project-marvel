const db = require('./comicsModels');

const comicsController = {};

comicsController.getComicTitle = (req, res, next) => {
	const titleQuery = 'SELECT title FROM Comics';
	db.query(titleQuery)
	  .then(data => {
		  console.log(data)
		res.locals.titles = data.rows
		return next();
		})
	//   .then(() => next())
	  .catch((err) => {
		  return next({
			  log: `comicsController.getComicTitle: ERROR`,
			  message: { err: `Error occurred in comicsController.getComicTitle. Check server logs for more details.`},
		  });
	  });
};

comicsController.getComicImage = (req, res, next) => {
	const imageQuery = 'SELECT image FROM Comics';
	db.query(imageQuery)
	  .then(data => {
		  console.log(data)
		res.locals.image = data.rows
		return next();
		})
	//   .then(() => next())
	  .catch((err) => {
		  return next({
			  log: `comicsController.getComicImage: ERROR`,
			  message: { err: `Error occurred in comicsController.getComicImage. Check server logs for more details.`},
		  });
	  });
};

module.exports = comicsController;