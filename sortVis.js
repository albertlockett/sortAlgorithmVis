/**
 * Script for sort algorithm visualization
 */

// Implementation of a linked list that will call a function when it is modified

function List() {
  this.arr = [];
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
  this.modifiedCallback();
}

List.prototype.set = function(index, obj) {
  this.arr[index] = obj;
  this.modifiedCallback();
}


// non-modifying functions
List.prototype.size = function() {
  return this.arr.length
}

List.prototype.get = function(index) {
  return this.arr[index];
}
