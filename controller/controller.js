const Graph = require( 'node-dijkstra' );
let dijkstra = require( './djikstra' );
const mapNordstorm = require( '../directory/map-nordstorm' );
const directionController = require( '../controller/directionController' );

exports.getPath = ( req, res, next ) => {
    var from = mapNordstorm.decodeName( req.body.from )
    var to = mapNordstorm.getNodeName( req.body.to )
    var result = mapNordstorm.getPath( from, to )
    var stairs;

    if ( result != null ) {
        res.status( 200 ).json( {
            Path: result.path,
            Stair: stairs,
            TotalCost: result.cost
        } )
    } else {
        res.status( 200 ).json( {
            message: "You have arrived !"
        } )
    }
}

exports.getDirection = ( req, res, next ) => {
    var current = mapNordstorm.decodeName( req.body.current )
    var next = req.body.next
    var stairs;
    var bearing = req.body.bearing
    var direction = directionController.getDirection( current, next, bearing )
    var result = mapNordstorm.getPath( current, next )

    if ( ( current == "H" && next == "H2" ) || ( current == "H2" && next == "H" ) ) {
        stairs = {
            containStairs: true,
            steps: 25
        }

    } else {
        stairs = {
            containStairs: false,
            steps: 0
        }
    }

    direction = {
        ...direction,
        steps: stairs.steps,
        distance: result.cost
    }

    if ( result != null ) {
        res.status( 200 ).json( {
            Navigation: direction
        } )
    } else {
        res.status( 200 ).json( {
            message: "You have arrived !"
        } )
    }



}