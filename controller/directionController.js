module.exports = {
    getDirection: function (current, next, bearing) {
        result = {}
        var nextBearing = getNextBearing(current, next);
        var resultant = bearing - nextBearing;
        resultant = Math.abs(resultant)
        var direction = determineDirection(resultant)

        result = {
            ...result,
            direction: direction,
            bearingDestination: resultant
        }

        return result
    }
}

function determineDirection(bearing) {
    var result = "";
    var data;

    if (bearing >= 316 && bearing <= 44) {
        result = "forward"
    } else if (bearing >= 45 && bearing <= 135) {
        result = "right"
    } else if (bearing >= 136 && bearing <= 224) {
        result = "backward"
    } else if (bearing >= 225 && bearing <= 315) {
        result = "left"
    } else {
        result = "error"
    }

    return result;
}

function getNextBearing(current, next) {
    var result;
    if (current == "A") {
        switch (next) {
            case "B":
                result = 310;
                break;
            case "D":
                result = 50;
                break;
            default:
                result = "error at getNextBearing";
                break;
        }
    } else if (current == "B") {

        switch (next) {
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
                result = "error at getNextBearing";
                break;
        }
    } else if (current == "C") {
        switch (next) {
            case "B":
                result = 270;
                break;
            case "E":
                result = 135;
                break;
            case "D":
                result = 80;
                break;
            default:
                result = "error at getNextBearing";
                break;
        }
    } else if (current == "D") {
        switch (next) {
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
                result = "error at getNextBearing";
                break;
        }
    } else if (current == "E") {
        switch (next) {
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
                result = "error at getNextBearing";
                break;
        }
    } else if (current == "F") {
        switch (next) {
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
                result = "error at getNextBearing";
                break;
        }
    } else if (current == "G") {
        switch (next) {
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
                result = "error at getNextBearing";
                break;
        }
    } else if (current == "H") {
        switch (next) {
            case "G":
                result = 0;
                break;
            case "B":
                result = 180;
                break;
            default:
                result = "error at getNextBearing";
                break;
        }
    }

    return result;


}