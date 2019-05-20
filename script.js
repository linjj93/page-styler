// let smallBtn = document.querySelector(".smaller");
// let normalBtn = document.querySelector(".normal");
// let biggerBtn = document.querySelector(".bigger");
// let redBtn = document.querySelector(".red");
// let greenBtn = document.querySelector(".green");
// let blueBtn = document.querySelector(".blue");

//After understanding event bubbling 
//we now know we can just place the click listener on the parent element 
let ul = document.querySelector("ul");

ul.addEventListener("click", function(event) {
  document.body.className = event.target.className;
});

// smallBtn.addEventListener("click", function(event) {
//   document.body.className = "smaller";
// });

// normalBtn.addEventListener("click", function(event) {
//   document.body.className = "normal";
// });

// biggerBtn.addEventListener("click", function(event) {
//   document.body.className = "bigger";
// });

// redBtn.addEventListener("click", function(event) {
//   document.body.className = "red";
// });

// greenBtn.addEventListener("click", function(event) {
//   document.body.className = "green";
// });

// blueBtn.addEventListener("click", function(event) {
//   document.body.className = "blue";
// });
