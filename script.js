


var myArray = ["\images\Ez.jpg", "\images\banner_atar"];

var count = 0;
setInterval(function() {
  //use this below line if you want random images
  //var rand = myArray[Math.floor(Math.random() * myArray.length)];

  if (count >= myArray.length) count = 0; // if it is last image then show the first image.
  // use this below line if you want images in order.
  var rand = myArray[count];
  document.getElementById("img1").src = rand;
  document.getElementById("img1").alt = rand; // use 'alt' to display the image name if image is not found
  count++;
}, 5000); // 1000 = 1 second
