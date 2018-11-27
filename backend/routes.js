const express = require("express");

const router = express.Router();
const Image = require("./controllers/images");
const userlogin = require("./controllers/login");
const requests = require("./controllers/getrequests");
const confirmContract = require("./controllers/confirmContract");
const consent = require("./controllers/giveconsent");
const notifications = require("./controllers/getnotifications");
const signup = require("./controllers/signup");

router.get("/", Image.test);
router.get("/accounts", Image.accounts);
router.get("/web3-status", Image.webStatus);

router.get("/files/:name", Image.getData);

router.get("/images", Image.all);
router.get("/images/:label", Image.findByLabel);
// find image by id
router.get("/images-id/:id", Image.findById);

/*  upload POST endpoint */
console.log("Hello World initial");

router.post(
  "/upload",
  Image.upload.single("file"),
  Image.uploadFile,
  Image.postData,
  Image.create
);

router.get("/getfile/:hash", Image.getFile);

router.post("/login", function(req, res) {
  console.log("Inside login route", req.body);
  userlogin.login(req, res);
});

router.get("/requests", function(req, res) {
  console.log("Inside requests route");
  requests.getrequests(req, res);
});

router.post(
  "/confirmContract",
  confirmContract.upload.single("file"),
  confirmContract.uploadFile,
  confirmContract.postData,
  confirmContract.create
);

router.post("/giveconsent", function(req, res) {
  console.log("Inside consent route");
  consent.giveconsent(req, res);
});

router.get("/getnotifications", function(req, res) {
  console.log("Inside notifications route");
  notifications.getnotifications(req, res);
});

router.post("/signup", function(req, res) {
  console.log("Inside signup route");
  signup.usersignup(req, res);
});

module.exports = router;
