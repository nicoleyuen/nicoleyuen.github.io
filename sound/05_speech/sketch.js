'use strict'

// speech library documentation: http://ability.nyu.edu/p5.js-speech/
// example source code: https://github.com/IDMNYU/p5.js-speech/blob/master/examples/01simple.html

let talkButton;
let voice = new p5.Speech(); //new p5.speech object
let wordInput;

function setup() {

 talkButton = select('#talk');
 wordInput = select('speechInput');

 talkButton.mousePressed(speak);


voice.setVoice('Melina');
voice.setPitch('.1');
voice.setRate('1.9');

}

function draw() {

}


function speak() {
  // voice.speak('Ligma');
  voice.speak(wordInput.value());

}
