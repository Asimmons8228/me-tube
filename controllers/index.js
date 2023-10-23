const Video = require("../model/data");

function index(req, res, next) {
  const context = {
    title: "MeTube",
    videos: Video.getAll(),
  };
  res.render("index", context);
}

function create(req, res) {
  //add video
  Video.addOne(req.body);
  res.redirect("/");
}

module.exports = {
  index,
  create,
};
