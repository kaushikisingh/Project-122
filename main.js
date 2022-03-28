x = 0;
y = 0;
screen_width=0;
screen_heigth=0;
speak_data="";
to_number=0;
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
   apple= loadImage("apple.png");
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 
 to_number=Number(content);
    if(Number.isInteger(to_number));

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 canvas=createCanvas(800,500);
 canvas.center();
 screen_width=window.innerWidth;
 screen_heigth=window.innerHeight;
}

function draw() {
  if(draw_apple == "set")
  {
    for( var i=1; i<=to_number;i++)
    {
      x=Math.floor(Math.random()*800);
      y=Math.floor(Math.random()*500);
      document.getElementById("status").innerHTML = to_number + " Apples drawn";
      image(apple,x,y,50,50);
      draw_apple = "";
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "apple drawn"+to_number;
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    
}
