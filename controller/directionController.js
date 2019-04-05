module.exports = {
    getDirection: function ( current, next, bearing ) {
        result = {}
        var nextBearing = getNextBearing( current, next )
        if ( nextBearing > 0 && nextBearing < 180 ) {
            var resultant1 = bearing - nextBearing
            var resultant2 = ( 360 - bearing ) + nextBearing

            if ( resultant1 < resultant2 ) {
                resultant = resultant1
            } else {
                resultant = resultant2
            }
            resultant = Math.abs( resultant )
        } else {

            var resultant = parseInt( bearing, 10 ) + 360 - nextBearing
            var res = ( resultant % 360 )
            console.log( res )
            resultant1 = Math.abs( res )
            resultant2 = Math.abs( res )
            console.log( "res is ", res )
            resultant = res
        }


        var resultant2 = parseInt( bearing, 10 ) + nextBearing
        var direction = determineDirection( resultant2 )

        console.log( "direction: " + direction )
        console.log( "resultant: " + resultant )
        console.log( "resultant2: " + resultant2 )
        console.log( "nextBearing: " + nextBearing )
        console.log( "bearing: " + bearing )


        result = {
            ...result,
            direction: direction,
            bearingDestination: resultant
        }
        return result
    }
}

function determineDirection( bearing ) {
    var result = "";
    var data;

    if ( ( bearing >= 350 && bearing <= 360 ) || ( bearing >= 0 && bearing <= 10 ) ) {
        result = "forward"
    } else if ( bearing >= 11 && bearing <= 170 ) {
        result = "right"
    } else if ( bearing >= 170 && bearing <= 190 ) {
        result = "backward"
    } else if ( bearing >= 190 && bearing <= 350 ) {
        result = "left"
    } else {
        result = "error"
    }

    return result;
}

function getNextBearing( current, next ) {
    var result;
    if ( current == "A" ) {
        switch ( next ) {
            case "B":
                result = 310;
                break;
            case "D":
                result = 50;
                break;
            default:
                result = -1
                break;
        }
    } else if ( current == "B" ) {

        switch ( next ) {
            case "H":
                result = 0;
                break;
            case "E":
                result = 45;
                break;
            case "C":
                result = 90;
                break;
            default:
                result = -1
                break;
        }
    } else if ( current == "C" ) {
        switch ( next ) {
            case "B":
                result = 270;
                break;
            case "E":
                result = 315;
                break;
            case "D":
                result = 80;
                break;
            default:
                result = -1
                break;
        }
    } else if ( current == "D" ) {
        switch ( next ) {
            case "A":
                result = 230;
                break;
            case "C":
                result = 250;
                break;
            case "F":
                result = 310;
                break;
            default:
                result = -1
                break;
        }
    } else if ( current == "E" ) {
        switch ( next ) {
            case "C":
                result = 135;
                break;
            case "F":
                result = 45;
                break;
            case "G":
                result = 315;
                break;
            case "B":
                result = 225;
                break;
            default:
                result = -1
                break;
        }
    } else if ( current == "F" ) {
        switch ( next ) {
            case "D":
                result = 110;
                break;
            case "E":
                result = 225;
                break;
            case "G":
                result = 270;
                break;
            default:
                result = -1
                break;
        }
    } else if ( current == "G" ) {
        switch ( next ) {
            case "F":
                result = 90;
                break;
            case "E":
                result = 135;
                break;
            case "H":
                result = 180;
                break;
            default:
                result = -1
                break;
        }
    } else if ( current == "H" ) {
        switch ( next ) {
            case "G":
                result = 0;
                break;
            case "B":
                result = 180;
                break;
            case "H2":
                result = 90;
                break;
            default:
                result = -1
                break;
        }
    } else if ( current == "H2" ) {
        switch ( next ) {
            case "H":
                result = 270;
                break;
            case "I":
                result = 40;
                break;
            case "K":
                result = 110;
                break;
            default:
                result = -1
                break;
        }
    } else if ( current == "I" ) {
        switch ( next ) {
            case "H2":
                result = 220;
                break;
            case "J":
                result = 90;
                break;
            default:
                result = -1
                break;
        }
    } else if ( current == "J" ) {
        switch ( next ) {
            case "I":
                result = 270;
                break;
            case "K":
                result = 200;
                break;
            default:
                result = -1
                break;
        }
    } else if ( current == "K" ) {
        switch ( next ) {
            case "J":
                result = 20;
                break;
            case "H2":
                result = 290;
                break;
            default:
                result = -1
                break;
        }
    }

    return result;


}