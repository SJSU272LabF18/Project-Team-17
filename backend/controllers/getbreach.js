var User = require("../models/user");
exports.getrequests = function(req, res) {
  var results = {};
  var pipeline = [
    {
      $match: {
        "user.username": {
          //  $eq: req.body.username
          $eq: "sojan"
        }
      }
    }
  ];
  var promise = User.aggregate(pipeline).exec();
  promise
    .then(function(data) {
      console.log("get breach  data-");
      console.log(data);
      results.value = data;
      if (data) {
        results.code = 200;
      }
      res.status(200).send(results);
    })
    .catch(function(err) {
      // just need one of these
      console.log("error:", err.message);
      results.code = "400";
      res.status(400).send(results);
    });
};
