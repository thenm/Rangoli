//select the circle to be displayed
var circles = document.getElementsByClassName("color-circle");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var numCircles = 6;

var palette = randomPalette(numCircles);
//for displaying the color to found by user.
var findColorDisplay = document.querySelector("#findthiscolor");
//Choose the color from palette to be found by the user
var selectedColor = selectColor();
//Set the color which is to be found by user in HTML
findColorDisplay.textContent = selectedColor;

var message = document.querySelector(".message");
console.log(message);

easyButton.addEventListener('click', function(){
  numCircles = 4;
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  palette = randomPalette(numCircles);
  selectedColor = selectColor();
  findColorDisplay.textContent = selectedColor;
  circles[0].style.display =  circles[5].style.display = 'none';

  for (var i = 1; i < circles.length-1; i++){
    circles[i].style.background = palette[i-1];
  }
});

hardButton.addEventListener('click', function(){
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  numCircles = 6
  palette = randomPalette(numCircles);
  selectedColor = selectColor();
  findColorDisplay.textContent = selectedColor;
  circles[0].style.display =  circles[5].style.display = 'block';
  for (var i = 0; i < circles.length; i++){
    circles[i].style.background = palette[i];
  }
});

// Assigning the color to each circle
for(var i = 0; i<circles.length; i++){
  circles[i].style.background = palette[i];
  //Added event listener of click on each circle
  circles[i].addEventListener("click", function(){
    var clickedColor = this.style.background;
    //Check whether the selecedColor is same as the the user clicked on the color
    console.log('clicked color', clickedColor);
    console.log('selected Color', selectedColor);
    if(clickedColor === selectedColor){
      changeColor(clickedColor);
      message.textContent = "Correct";
    }
    else{
      this.style.visibility = "hidden";
      message.textContent = "Try Again!";
    }
  })
}

//Function to change the color of circles to correct circle color
function changeColor(color){
  for(var i = 0; i < circles.length; i++){
    circles[i].style.visibility = "visible";
    circles[i].style.background = color;
  }
}

function randomPalette(num) {
  console.log('I am called')
  var arr = [];
  for(var i = 0; i < num; i++) {
    var r = Math.floor(Math.random() *256);
    var g = Math.floor(Math.random() *256);
    var b = Math.floor(Math.random() *256);
    arr[i] = "rgb(" + r + ", " + g + ", " + b+ ")";
    console.log(arr[i]);
  }
  return arr;
}

function selectColor(){
  console.log('--pallete recieved to selectColor--', palette);
  var random  = Math.floor(Math.random()* palette.length);
  console.log('--Inside selected Color--', palette[random]);
  return palette[random];
}
