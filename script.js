"use strict";

var colorArr = [ '#FF6346', '#FFAF00', '#A197DB', '#7CB5E3', '#333333', '#E8E8E8'];

var grid = document.querySelector("#myGrid");
var colors = document.querySelector("#colorContainer");
var spans = document.querySelectorAll('span');
var brushColor = 'blue';

function applyColors(colArr){
    for (var i = 0; i < spans.length; i++) {
      spans[i].setAttribute("style", "background-color: " + colArr[i]);
  }
}

var getColor = function() {
  if (event.target !== event.currentTarget) {
    brushColor = event.target.getAttribute("style");
    console.log(brushColor);
}};

var changeColor = function() {
    if (event.target !== event.currentTarget) {
       event.target.setAttribute("style", brushColor);
}};

applyColors(colorArr);
grid.addEventListener("mousedown", changeColor, false);
colors.addEventListener("mousedown", getColor, false);
