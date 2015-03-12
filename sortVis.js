/**
 * Script for sort algorithm visualization
 */

// Implementation of a linked list that will call a function when it is modified

function List() {
  this.arr = [];
  this.attributes = {}; // This is a holder for things we'll need to use
                        // when plotting
}

// some printing functions
List.prototype.printContents = function() {
  console.log(this.arr);
}

// default to call when modified
List.prototype.modifiedCallback = function() {
  this.printContents();
}


// modifying functions
List.prototype.add = function(obj, index) {

  if(typeof(index) === "number") {
    this.arr.splice(index, 0, obj);
  } else {
    this.arr.push(obj);
  }
  this.modifiedCallback(this.attributes);
}

List.prototype.set = function(index, obj) {
  this.arr[index] = obj;
  this.modifiedCallback(this.attributes);
}


// non-modifying functions
List.prototype.size = function() {
  return this.arr.length
}

List.prototype.max = function() {
  var max = this.arr[0];
  for(var i = 0; i < this.arr.length; i++) {
    if(this.arr[i] > max) {
      max = this.arr[i];
    }
  }
  return max;
}

List.prototype.get = function(index) {
  return this.arr[index];
}


// Attribute modifying functions
List.prototype.setAttributes = function(atr) {
  this.attributes = atr;
}

List.prototype.addAttributes = function(atrName, atr) {
  if(!typeof(this.attributes) === "object") {
    this.attributes = {};
  }
  this.attributes[atrName] = atr;
}
