const photos = [
  "images/clouds1.jpg",
  "images/clouds2.jpg",
  "images/clouds3.jpg",
  "images/clouds4.jpg",
];
var imageCounter = 0;

function handleNextClick() {
  $("#next").on("click", function (event) {
    if (imageCounter < photos.length) {
      $("#clouds").attr("src", photos[imageCounter]);
      imageCounter = imageCounter + 1;
    } else {
      imageCounter = 0;
    }
  });
}

//add a previous button
//decrease the imageCounter

function handlePreviousClick() {
  $("#previous").on("click", function (event) {
    if (imageCounter < photos.length) {
      $("#clouds").attr("src", photos[imageCounter]);
      imageCounter = imageCounter -= 1;
    } else {
      imageCounter = 0;
    }
  });
}

$(handleNextClick);
