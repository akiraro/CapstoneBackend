const Graph = require("node-dijkstra");
const route = new Graph();

//Initialize all nodes//
route.addNode("A", { B: 8, D: 6, E: 5 });
route.addNode("B", { A: 8, C: 8, E: 4 });
route.addNode("C", { B: 8, E: 5, D: 12 });
route.addNode("D", { C: 12, A: 6, E: 6 });
route.addNode("E", { A: 5, B: 4, C: 5, D: 6 });

//Initialize all sub-nodes//
let nodeMap = []
let A = ["Apple Store", "BestBuy", "Pivik", "Tims Horton"];
let B = ["McDonalds","Subway","The Body Shop", "Shawarma Palace"]
let C = ["Thai Express", "Pizza Pizza", "Nandos", "Popeyes"]
let D = ["Shoe Locker", "EB Games", "Fido", "Freedom"]

for(var i=0; i < A.length; i++){
  nodeMap.push({
    key:A[i],
    value:"A"
  })
}
for(var i=0; i < B.length; i++){
  nodeMap.push({
    key:B[i],
    value:"B"
  })
}
for(var i=0; i < C.length; i++){
  nodeMap.push({
    key:C[i],
    value:"C"
  })
}
for(var i=0; i < D.length; i++){
  nodeMap.push({
    key:D[i],
    value:"D"
  })
}

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
