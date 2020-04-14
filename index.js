/*

A B = X
0 1 = 1
0 0 = 0
1 0 = 1
1 1 = 1
*/
// Create an OR gate function

function ORGate(a, b) {
  if (typeof a === "boolean" && typeof b === "boolean") {
    return a || b ? true : false;
  }
}

console.log(ORGate(true, true));


// Create an AND gate function

function ANDGate(a, b) {
  if (typeof a === "boolean" && typeof b === "boolean") {
    return a && b ? true : false;
  }
}

console.log(ANDGate(true, true));

// Create an NOT gate function

function NOTGate(a) {
  if (typeof a === "boolean") {
    return !a;
  }
}

console.log(NOTGate(true));

// Create an AND OR gate function

function ANDORGate(a,b,c) {
    if (typeof a === "boolean" && typeof b === "boolean" && typeof c === "boolean") {
        return ((a && b) || c) ? true : false
    }
}

console.log(ANDORGate(true, true, false));