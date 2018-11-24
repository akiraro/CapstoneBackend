const Graph = require('node-dijkstra')
let dijkstra = require('./djikstra');
const mapNordstorm = require('../directory/map-nordstorm')

exports.getPath = (req,res,next)=>{

    var to = mapNordstorm.getNodeName(req.body.to)
    var result = mapNordstorm.getPath(req.body.from, to)

    if (result != null){
        res.status(200).json({
            Path : result.path,
            TotalCost : result.cost
        })
    }else{
        res.status(200).json({
            message : "You have arrived !"
        })
    }
}

