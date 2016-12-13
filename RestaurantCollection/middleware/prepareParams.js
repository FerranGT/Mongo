function prepareParams(req, res, next) {

	const show = req.query.show;
	const hide = req.query.hide;
	const limit = +req.query.limit || 20;
	const page = +req.query.page || 1;
	const skip = (limit*(page-1))+1;

	req.limit = limit;
	req.skip = skip;

	if (show || hide) {

		let projection = {}

		if (show) {

			show.split(',').forEach( (el) => {
				projection[el] = 1;
			})
		}

		if (hide) {

			hide.split(',').forEach( (el) => {
				projection[el] = 0;
			})
		}

		req.projection = projection;
		console.log(`hola ${JSON.stringify(projection)}`);

	}

	next()
}

module.exports = prepareParams