const Graph = require('node-dijkstra')
let dijkstra = require('./djikstra')

exports.getPath = (req,res,next)=>{

    res.status(200).json({
        message : dijkstra.getPath(req.body.from, req.body.to)
    })
    // dijkstra.bar("BestBuy")
    // res.end()

}

