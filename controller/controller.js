const Graph = require('node-dijkstra');
let dijkstra = require('./djikstra');
const mapNordstorm = require('../directory/map-nordstorm');
const directionController = require('../controller/directionController');

exports.getPath = (req, res, next) => {
    var from = mapNordstorm.decodeName(req.body.from)
    var to = mapNordstorm.getNodeName(req.body.to)
    var bearing = req.body.bearing
    var result = mapNordstorm.getPath(from, to)


    if (result != null) {
        res.status(200).json({
            Path: result.path,
            TotalCost: result.cost
        })
    } else {
        res.status(200).json({
            message: "You have arrived !"
        })
    }
}

exports.getDirection = (req, res, next) => {
    var current = mapNordstorm.decodeName(req.body.current)
    var next = req.body.next
    var bearing = req.body.bearing
    var direction = directionController.getDirection(current, next, bearing)

    if (result != null) {
        res.status(200).json({
            Navigation: direction
        })
    } else {
        res.status(200).json({
            message: "You have arrived !"
        })
    }
}