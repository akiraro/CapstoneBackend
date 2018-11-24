const Graph = require("node-dijkstra");
const route = new Graph();
const map = new require('../directory/map-nordstorm')


// List of function for module exports //
module.exports = {
  getPath: function(from, to) {
    return route.path(from, to, {cost : true});
  },
  getNodeName: function(data) {
    try{
      return nodeMap.find(value => value.key === data).value
    }catch(err){
      return false
    }
  }
};
