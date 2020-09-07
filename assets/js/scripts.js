var slides = document.querySelectorAll('.slideshow .slide');
var dots = document.querySelectorAll('.slide-dot');

document.querySelector('.slide-dots').classList.remove('hidden');

var handleDotChange = function(event) {
  if (!event.target.classList.contains('active')) {
    var thisEl = event.target;
    var id = thisEl.id; 
    var activeElements = document.querySelectorAll('.active');
    var elementsToActivate = document.querySelectorAll('.'+id);

    activeElements.forEach(function(element) {
      element.classList.remove('active');
    });

    elementsToActivate.forEach(function(element) {
      element.classList.add('active');
    });
  }
}

dots.forEach(function (dot) {
  dot.addEventListener('click', function(event) {
    handleDotChange(event);
  });

  dot.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      handleDotChange(event);
    }
  });
});
