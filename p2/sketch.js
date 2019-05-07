//https://www.youtube.com/watch?v=S1TQCi9axzg

var streams = [];
var fadeInterval = 1.6;
var symbolSize = 15;
// this is a global variable to make the character/ text size bigger

function setup() {
  createCanvas(
   window.innerWidth,
    window.innerHeight
  );
  background(0);
  // black background
  

  var x = 0;
  //coordinate 
  // we don't want a y so it doesn't all start at 0
  
  for (var i = 0; i <= width / symbolSize; i++) {
    //start the loop of 0 and divide it by the width of the screen to get the total number of the screen
    var stream = new Stream();
    stream.generateSymbols(x, random(-2000, 0));
    // this will generate the su=ymbols 
    // to make the symbols and the random will make it come out at random spots
    streams.push(stream);
    x += symbolSize
    // we want the stream to upload next to eacg other
  }
  


  textSize(symbolSize);
  pika = [color(81, 194, 255), color(183, 142, 250), color(233, 11, 159), color(11, 233, 181), color(255, 252, 81)];
}


function draw() {
  background(0);
  // so this will cover the long drag of the letter falling and wiht a second one, it'll make that glowing effect
  streams.forEach(function(stream) {
    stream.render();
    // have the stream render out
  });
  /////////////////the touch part///////////////
    fill(180, 255, 180);
  for (var i = 0; i < touches.length; i++) {
    rect(touches[i].x, touches[i].y,
            1, );
  }
      noFill();
    stroke(pika[i]);
}

function Symbol(x, y, speed, first) {
  this.x = x;
  this.y = y;
  this.value;
  // variable to hold the symbol
  this.speed = speed;
  this.first = first;

  this.switchInterval = round(random(2, 25));

  this.setToRandomSymbol = function() {
    var charType = round(random(0, 5));
    if (frameCount % this.switchInterval == 0) {
      // framcount how many frames passed
      //% does division of the remainder
      if (charType > 1) {
        // set it to Katakana
        this.value = String.fromCharCode(
          0x30A0 + round(random(0, 96))
          //the blocks start from this so it will be added to 0-96. 96 because there are 96 letters in the katakana character
        );
      } else {
        // set it to numeric
        this.value = round(random(0,9));
      }
    }
  }

  this.rain = function() {
    if (this.y >= height){
      this.y = 0;
    } else { 
      this.y += this.speed;
           // if it is greater than the canvas so when it reaches bottom it will reset to 0 or
           
           
    // this.y = (this.y >= height) ? 0 : this.y += this.speed;
           //this is fancier code but i honestly don't get it so i kept with the if statments
  
    // incrimenting the y to move down the page.
}
  }
  
}


function Stream() {
  this.symbols = []; //array
  this.totalSymbols = round(random(5, 60)); //know range it can pick from so each one is different
  this.speed = random(5, 5);

  this.generateSymbols = function(x, y) {
    // function(x, y) so we don't hard code the x and y into it
   
    var first = round(random(0, 4)) == 1;
    for (var i =0; i <= this.totalSymbols; i++) {
      //loop through how many symbols there are and increiment it by 1 
      symbol = new Symbol(
        x,
        y,
        this.speed,
        first,
    
      );
      symbol.setToRandomSymbol();
      //set it to a number
      this.symbols.push(symbol);
      // let it because an array so it can live there
     
      y -= symbolSize;
      // this will set the symbol on top of the other symbol so it becomes a trail of a line!
      first = false;
    }
  }

  this.render = function() {
     this.symbols.forEach(function(symbol) {
        if (symbol.first) {
    fill(183, 142, 250);
        } else{
            fill(83, 122, 250);
        }
    text(symbol.value, symbol.x,symbol.y);
       //text will display our symbols 
    symbol.rain();
    symbol.setToRandomSymbol();
     });
  }
}

function touchMoved() {
  return false;
}

