var pointsArray = document.getElementsByClassName('point');
//move the function revealPoint out to global, and an array as the argument.
var revealPoint = function (arrPoints){
  arrPoints.style.opacity = 1;
  arrPoints.style.transform = "scaleX(1) translateY(0)";
  arrPoints.style.msTransform = "scaleX(1) translateY(0)";
  arrPoints.style.WebkitTransform = "scaleX(1) translateY(0)";
};

var animatePoints = function(points) {
  /*add forEachFunction function which takes an array and a callback function
  revealPoint as arguments, and get rid of the previous "for" loop*/
  forEachFunction(points, revealPoint);
};

window.onload = function() {
   if (window.innerHeight > 950) {
         animatePoints(pointsArray);
   }
   var sellingPoints = document.getElementsByClassName('selling-points')[0];
   var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
   window.addEventListener('scroll', function(event) {
     if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
           animatePoints(pointsArray);
     }
   });
}
