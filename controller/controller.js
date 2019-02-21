const Graph = require('node-dijkstra');
let dijkstra = require('./djikstra');
const mapNordstorm = require('../directory/map-nordstorm');
const directionController = require('../controller/directionController');

exports.getHash = (req, res, next) => {
    console.log("hello")
    res.status(200).json({
        data: mapNordstorm.test()
    })
    res.end()
}

exports.getPath = (req, res, next) => {
    var from = mapNordstorm.decodeName(req.body.from)
    var to = mapNordstorm.getNodeName(req.body.to)
    var bearing = req.body.bearing
    var result = mapNordstorm.getPath(from, to)
    var direction = directionController.getDirection(from, to, bearing)

    console.log(from + " : " + to)
    if (result != null) {
        res.status(200).json({
            Path: result.path,
            TotalCost: result.cost,
            Bearing: req.body.bearing,
            Navigation: direction
        })
    } else {
        res.status(200).json({
            message: "You have arrived !"
        })
    }
}