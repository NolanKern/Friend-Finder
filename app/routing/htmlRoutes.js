var path = require("path");

// when htmlRotes is called via changing the page send the user a html file based on what they chose
// to go to
module.exports = function(app){
    // when the user wishes to go to the survey it sends them there
    // get is used to match the request with a specific file
    app.get("/survey", function(req, res){
        res.sendFile(path.join(_dirname, "../public/survey.html"));

    })
    // in the general use case of not wanting a blank form like the survey\
    // the use function is implemented to direct the user to the home page
    app.use(function(req,res){
        res.sendFile(path.join(_dirname + "/../public/home.html"));
    })
}