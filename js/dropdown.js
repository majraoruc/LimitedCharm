document.getElementById("menu-button").onclick =  function() {Izlazi()};

function Izlazi(){
    function Izlazi() {
        var x = document.getElementById("menu");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.backgroundColor = "#377d3c";
  }
}