module.exports = function(app) {

	var models = require("./models/models.server")();

	require("./services/user.service.server.js")(app, models);
	require("./services/website.service.server.js")(app, models);

	app.get("/users", function(req, res) {
		res.send(users);
	});
//    require("services/page.service.server.js")(app);
//    require("services/widget.service.server.js")(app);
};
