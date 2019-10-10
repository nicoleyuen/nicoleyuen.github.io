var angle = 0.0;
var speed = 0.003;  // how fast the transforms should be

function setup() {
  createCanvas(windowWidth, windowHeight);
  // this is to fit what people's phones will fit
  noFill();

  //blue, purple, pink, green, yellow
//   these are the colors of each click also the color of the array from each touch
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool   where i can pick a nice color
}

function draw() {
    background(255);

     //Saw a defination in w3schools and I want to try it on my website so people can randomly draw on my website lol
    
  
  var a = map(mouseX, 0, width , 30, 500);
     // this remaps a number from one place to another and right now it is reading where mouse x is and re mapping it
  var b = map(mouseY, 0, height, 30,500);
     // this one is for the mouse Y
  
  // My nested loop 
  translate(width/2, height/2);
     // it will restore where the width and height is/ the center 
  rotate(angle);
     // coordinates are the things being moved in this
  for (var m=0; m<9; m++) {
    // for each initialization m is equal to 1 . then we test if m is less than 9 to see if the loop should continue. then we will update m by changing the value and variable to run the test again by 1 increment per loop.
    push();
    // pushing is adding the item at the end of the loop so this keeps pushing out the shapes of the circle
    rotate(m*TWO_PI/4.5);
    // rotation variable m times 2pi divided by 4.5 
    //TWO_PI is twice the circumference of the circle so i think think of it as a 360 so it circles that times what the variable is. then I divided it by 4.5 cos 9/2 is 4.5?? (learn better math LOL) 
    // when divided by half it was too much spacing so when the number is like a quarter of it, it spaced out better
    translate(0, a);
    // if called then it will reset to where it orginally was... the push adn the pop is the one that controls this 
    rect(10,10,10,10);
    
    // each touch from the x and y coordinate will draw out this circle
    //[] is my array for the color
 
    

  rotate(angle);
  for (var j=0; j<9; j++) {
    push();
    rotate(j*TWO_PI/4.5);
    translate(0, b);
    rect(10,10,10,10);

  
    //this is the second loop of hte nested loop of the circles and this one is remapping to what I wrote l1 should be so it is the Y
    
    
     // translate(width/2, height/2);
  rotate(angle);
  for (var k=0; k<9; k++) {
    push();
    rotate(k*TWO_PI/4.5);
    translate(0, 50);
    rect(10,10,10,10);

 
    
    pop();
    //restores the drawing settings and the transform will push the changes. so the circle roation will keep starting at where it started in order for the loop to flow flawlessly
  }
    
    pop();
  }
  
  pop();
  
  }
    angle += speed;
     //each angle will add an increment of what the speed is
   }
  
  




