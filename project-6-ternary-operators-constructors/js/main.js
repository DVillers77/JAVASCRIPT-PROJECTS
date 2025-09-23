function rideFunction() {
  var Height, Can_ride;
  Height = document.getElementById("height").value;
  Can_ride = Height < 52 ? "You are too short" : "You are tall enough";
  document.getElementById("ride").innerHTML = Can_ride + " to ride.";
}
