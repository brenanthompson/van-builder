var express = require("express");
var vanRoute = express.Router();
var Van = require("../model/van-schema")

vanRoute.route("/")
    .get(function (req, res) {
        Van.find(req.query, function(err, vans) {
            res.send(vans)
        })
    })

    .post(function (req, res) {
        var newVan = new Van(req.body);
        console.log(newVan);
        newVan.save(function (err, savedVan){
            if(err){
                console.log(err);
            }
            res.send(savedVan)
        })

    })

vanRoute.route("/:id")
    .delete(function (req, res) {
        Van.findByIdAndRemove(req.params.id, function (err, deletedVan) {
            res.send(deletedVan);
        })
    })

    .put(function (req, res) {
        Van.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, function (err, vanToBeEdited) {
            res.send(vanToBeEdited);
        })
    })

vanRoute.route("/")


module.exports = vanRoute;