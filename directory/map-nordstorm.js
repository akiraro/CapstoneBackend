const Graph = require("node-dijkstra");
const route = new Graph();

//Initialize all nodes//
route.addNode("A", { B: 13, D: 20, });
route.addNode("B", { A: 13, C: 8, E: 5, H: 3});
route.addNode("C", { B: 8, E: 4, D: 9 });
route.addNode("D", { C: 9, A: 20, F: 12 });
route.addNode("E", { B: 5, C: 4, F: 5, G: 6 });
route.addNode("F", { G: 12, E: 5, D:12 });
route.addNode("G", { F: 12, E: 6, H: 3 });
route.addNode("H", { G: 3, F: 12, E: 6 });

//Initialize all sub-nodes//
let nodeMap = []
let A = ["Old Navy", "Starbucks", "Nike", "Adidas"]
let B = ["Samsung", "Bakery", "Tim Hortons", "Pivik", "Bestbuy", "Apple Store"]
let C = ["Thai Express", "Pizza Pizza", "McDonalds", "Subway"]
let D = ["Second Cups", "Sport Chek", "H&M", "Roots", "Food Courts"]
let E = []
let F = ["Bodyshop", "Shawarma Palace", "Nandos", "Popeyes"]
let G = ["Shoelocker", "EB Games", "Fido", "Freedom"]
let H = []

A.map(value =>{
    nodeMap.push({
        key:value,
        value:"A"
      })
  })
  
  B.map(value =>{
    nodeMap.push({
        key:value,
        value:"B"
      })
  })
  
  C.map(value =>{
    nodeMap.push({
        key:value,
        value:"C"
      })
  })
  
  D.map(value =>{
    nodeMap.push({
        key:value,
        value:"D"
      })
  })

  E.map(value =>{
    nodeMap.push({
        key:value,
        value:"E"
      })
  })

  F.map(value =>{
    nodeMap.push({
        key:value,
        value:"F"
      })
  })

  G.map(value =>{
    nodeMap.push({
        key:value,
        value:"G"
      })
  })

  H.map(value =>{
    nodeMap.push({
        key:value,
        value:"H"
      })
  })

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
  