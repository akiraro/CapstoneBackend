const Graph = require('node-dijkstra')
let dijkstra = require('./djikstra')

exports.getPath = (req,res,next)=>{

    var from = dijkstra.getNodeName(req.body.from)
    var to = dijkstra.getNodeName(req.body.to)

    var result = dijkstra.getPath(from, to)
    if (result != null){
        res.status(200).json({
            Path : dijkstra.getPath(from, to).path,
            TotalCost : dijkstra.getPath(from, to).cost
        })
    }else{
        res.status(200).json({
            message : "You have arrived !"
        })
    }

    // res.end()

}

