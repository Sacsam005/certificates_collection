var index = 0;

show_slide = (i) => {
  //increment/decrement slide index
  index += i;

  //grab all the images
  var images = document.getElementsByClassName("image");

  // hide all the images
  for (i = 0; i < images.length; i++)
    images[i].style.display = "none";

  // if index is greater than the amount of images (set it to zero)
  if (index > images.length - 1)
    index = 0;

  // if index is less than zero (set it to the length of images)
  if (index < 0)
    index = images.length - 1;

  // only display the image that's next or previous
  images[index].style.display = "block";

}

window.addEventListener("onload", show_slide(index));
