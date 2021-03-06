var User = require("../models/user");
exports.filebreach = function(req, res) {
  console.log(req.body);
  var results = {};
  var receivedobj = {
    name: req.body.user,
    message: req.body.message
    // level: 2, //req.body.level
    // status: 1 //1. req.body.status
  };
  var sentObject = {
    name: req.body.sendername,
    message: req.body.message
    // level: 2, //req.body.level
    // status: 1 //req.body.status
  };

  var query = User.findOneAndUpdate(
    { "user.username": req.body.sendername },
    { $push: { receivedBreach: receivedobj } }
  );

  query
    .then(
      User.findOneAndUpdate(
        { "user.username": req.body.user },
        { $push: { filedbreach: sentObject } },
        function(err, doc) {
          if (err) {
            results.code = "400";
            results.value = "Could not file breach";
            console.log(results.value);
            res.status(400).send({ message: "Could not file breach" });
          } else {
            results.code = "200";
            results.value = doc;
            console.log(doc);
            res.status(200).send({ message: "successfully filed breach" });
          }
        }
      )
    )
    .catch(function(err) {
      // just need one of these
      console.log("error:", err.message);
      res.code = "400";
    });
};
//   User.findOneAndUpdate(
//     { "user.username": req.body.receivername },
//     { $push: { receivedBreach: receivedobj } },
//     function(err, doc) {
//       if (err) {
//         res.code = "400";
//         res.value = "Cannot file breach at moment";
//         console.log(res.value);
//         res.status(400).send({ message: "Could not file breach" });
//       } else {
//         User.findOneAndUpdate(
//           { "user.username": req.body.sendername },
//           { $push: { filedbreach: sentObject } },
//           function(err, doc) {
//             if (err) {
//               results.code = "400";
//               results.value = "Could not file breach";
//               console.log(results.value);
//               res.status(400).send({ message: "Could not file breach" });
//             } else {
//               results.code = "200";
//               results.value = doc;
//               console.log(doc);
//               res.status(200).send({ message: "successfully filed breach" });
//             }
//           }
//         );
//       }
//     }
//   ).catch(function(err) {
//     // just need one of these
//     console.log("error:", err.message);
//     res.code = "400";
//   });
// };
