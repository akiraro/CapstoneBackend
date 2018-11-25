const Graph = require('node-dijkstra')
let dijkstra = require('./djikstra');
const mapNordstorm = require('../directory/map-nordstorm')

exports.getPath = (req,res,next)=>{

    var to = mapNordstorm.getNodeName(req.body.to)
    var result = mapNordstorm.getPath(req.body.from, to)

    coord = {}
    result.path.map(data =>{
        switch(data)
        {
            case 'A':
              coord ={
                  ...coord,
                  A : {
                      x : '0',
                      y : '0'
                  }
                }
              break;
            case 'B':
            coord ={
                ...coord,
                B : {
                    x : '-3',
                    y : '5'
                }
              }
              break;
            case 'C':
            coord ={
                ...coord,
                C : {
                    x : '3',
                    y : '5'
                }
              }
              break;
            case 'D':
            coord ={
                ...coord,
                D : {
                    x : '9',
                    y : '8'
                }
              }
              break;
            case 'E':
            coord ={
                ...coord,
                E : {
                    x : '0',
                    y : '8'
                }
              }
              break;
            case 'F':
            coord ={
                ...coord,
                F : {
                    x : '3',
                    y : '11'
                }
              }
              break;
            case 'G':
            coord ={
                ...coord,
                G : {
                    x : '-3',
                    y : '11'
                }
              }
              break;
            case 'H':
            coord ={
                ...coord,
                H : {
                    x : '-3',
                    y : '8'
                }
              }
              break;
            default :
                break;     
        }
    })
    console.log(result)
    if (result != null){
        res.status(200).json({
            Path : result.path,
            Coordinates : coord,
            TotalCost : result.cost
        })
    }else{
        res.status(200).json({
            message : "You have arrived !"
        })
    }
}

