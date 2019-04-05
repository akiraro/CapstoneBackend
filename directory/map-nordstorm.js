const Graph = require( "node-dijkstra" );
const route = new Graph();

//Initialize all nodes//
route.addNode( "A", {
  B: 13,
  D: 20,
} );
route.addNode( "B", {
  A: 13,
  C: 8,
  E: 5,
  H: 3
} );
route.addNode( "C", {
  B: 8,
  E: 4,
  D: 9
} );
route.addNode( "D", {
  C: 9,
  A: 20,
  F: 12
} );
route.addNode( "E", {
  B: 5,
  C: 4,
  F: 5,
  G: 6
} );
route.addNode( "F", {
  G: 12,
  E: 5,
  D: 12
} );
route.addNode( "G", {
  F: 12,
  E: 6,
  H: 3
} );
route.addNode( "H", {
  G: 3,
  F: 12,
  E: 6,
  H2: 100,
} );
route.addNode( "H2", {
  I: 5,
  K: 8,
  H: 100
} );
route.addNode( "I", {
  J: 7,
  H2: 5
} );
route.addNode( "J", {
  K: 7,
  I: 7
} );
route.addNode( "K", {
  J: 7,
  H2: 8
} );

//Initialize all sub-nodes//
let nodeMap = []
let A = [ "Old Navy", "Starbucks", "Nike", "Adidas" ]
let B = [ "Samsung", "Bakery", "Tim Hortons", "Pivik", "Bestbuy", "Apple Store" ]
let C = [ "Thai Express", "Pizza Pizza", "McDonalds", "Subway" ]
let D = [ "Second Cups", "Sport Chek", "H&M", "Roots", "Food Courts" ]
let E = []
let F = [ "Bodyshop", "Shawarma Palace", "Nandos", "Popeyes" ]
let G = [ "Shoelocker", "EB Games", "Fido", "Freedom" ]
let H = []
let H2 = []
let I = [ "Photo Studio" ]
let J = [ "Library" ]
let K = [ "Paint Shop" ]

A.map( value => {
  nodeMap.push( {
    key: value,
    value: "A"
  } )
} )

B.map( value => {
  nodeMap.push( {
    key: value,
    value: "B"
  } )
} )

C.map( value => {
  nodeMap.push( {
    key: value,
    value: "C"
  } )
} )

D.map( value => {
  nodeMap.push( {
    key: value,
    value: "D"
  } )
} )

E.map( value => {
  nodeMap.push( {
    key: value,
    value: "E"
  } )
} )

F.map( value => {
  nodeMap.push( {
    key: value,
    value: "F"
  } )
} )

G.map( value => {
  nodeMap.push( {
    key: value,
    value: "G"
  } )
} )

H.map( value => {
  nodeMap.push( {
    key: value,
    value: "H"
  } )
} )

H2.map( value => {
  nodeMap.push( {
    key: value,
    value: "H2"
  } )
} )

I.map( value => {
  nodeMap.push( {
    key: value,
    value: "I"
  } )
} )

J.map( value => {
  nodeMap.push( {
    key: value,
    value: "J"
  } )
} )

K.map( value => {
  nodeMap.push( {
    key: value,
    value: "K"
  } )
} )

module.exports = {
  getPath: function ( from, to ) {
    return route.path( from, to, {
      cost: true
    } );
  },
  getNodeName: function ( data ) {
    try {
      return nodeMap.find( value => value.key === data ).value
    } catch ( err ) {
      return false
    }
  },
  test: function () {
    return null
  },
  decodeName: function ( data ) {
    var result = ""
    switch ( data ) {
      case "ADA392FE":
        result = "A"
        break;
      case "DDA8387E":
        result = "B"
        break;
      case "ED8EA9FE":
        result = "C"
        break;
      case "BD2091FE":
        result = "D"
        break;
      case "8D97357E":
        result = "E"
        break;
      case "BDA13A7E":
        result = "F"
        break;
      case "C1D1D909":
        result = "G"
        break;
      case "F3A0A775":
        result = "H"
        break;
      case "49D74C9A":
        result = "H2"
        break;
      case "43D1BD75": // Need to modify
        result = "I"
        break;
      case "B4B01FA3": // Need to modify
        result = "J"
        break;
      case "F0F875A4": // Need to modify
        result = "K"
        break;
    }
    return result
  }

};


// A =  ADA392FE
// B =  DDA8387E
// C =  ED8EA9FE
// D =  BD2091FE
// E =  8D97357E
// F =  BDA13A7E
// G =  C1D1D909
// H =  F3A0A775
// H2 = 49D74C9A
// I =  43D1BD75
// J =  B4B01FA3
// K =  F0F875A4