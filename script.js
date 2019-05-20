let smallBtn = document.querySelector(".smaller");
let normalBtn = document.querySelector(".normal");
let biggerBtn = document.querySelector(".bigger");
let redBtn = document.querySelector(".red");
let greenBtn = document.querySelector(".green");
let blueBtn = document.querySelector(".blue");

smallBtn.addEventListener("click", function(event) {
  document.body.className = "smaller";
});

normalBtn.addEventListener("click", function(event) {
  document.body.className = "normal";
});

biggerBtn.addEventListener("click", function(event) {
  document.body.className = "bigger";
});

redBtn.addEventListener("click", function(event) {
  document.body.className = "red";
});

greenBtn.addEventListener("click", function(event) {
  document.body.className = "green";
});

blueBtn.addEventListener("click", function(event) {
  document.body.className = "blue";
});
