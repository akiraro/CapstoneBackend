const Graph = require("node-dijkstra");

const route = new Graph();

//Initialize all nodes//
route.addNode("A", { B: 8, D: 6, E: 5 });
route.addNode("B", { A: 8, C: 8, E: 4 });
route.addNode("C", { B: 8, E: 5, D: 12 });
route.addNode("D", { C: 12, A: 6, E: 6 });
route.addNode("E", { A: 5, B: 4, C: 5, D: 6 });

//Initialize all sub-nodes//
let A = ["Apple Store", "BestBuy", "Pivik", "Tims Horton"];
let B = ["McDonalds","Subway","The Body Shop", "Shawarma Palace"]
let C = ["Thai Express", "Pizza Pizza", "Nandos", "Popeyes"]
let D = ["Shoe Locker", "EB Games", "Fido", "Freedom"]

// Iterator to find string in element //
Array.prototype.contains = function(element) {
  return this.indexOf(element) > -1;
};

// List of function for module exports //
module.exports = {
  getPath: function(from, to) {
    return route.path(from, to);
  },
  bar: function(value) {
    console.log(A.contains(value));
  }
};
