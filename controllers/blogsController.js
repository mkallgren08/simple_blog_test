// Defining methods for the blogsController
const axios = require("axios")
let Blog_API=`https://us-central1-mbtcandidate.cloudfunctions.net/posts/mkallgren`
require('dotenv').config()

module.exports = {
  findAll: function(req, res) {
      axios
        .get(Blog_API)
        .then((response)=>{
          console.log(response.data)
          res.json(response.data)
        })
        .catch((err)=>{
          res.status(400).json(err)
        })
  },
  findById: function(req, res) {

  },
  create: function(req, res) {
    db.Example
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Example
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Example
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};