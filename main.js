var speechrecoginition = window.webKitSpeechRecongnition;
var recongnition = new speechrecoginition();
function start() {
document.getElementById("textbox").innerHTML = "";
recongnition.start();
}
recongnition.onresult = function(event)
{
console.log(event);
var content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = content;
if( content == "take my selfie"){
speak();
}
}
function speak() {
var synth = window.speechSynthesis;
speak_data = "taking your selfie in 5 seconds";
var utterthis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
Webcam.attach(camera);
setTimeout(function(){
take_snapshot();
save();
},
5000);
}
camera = document.getElementById("camera");
Webcam.set({
width : 350,
height : 250,
Image_format : 'jpeg',
jpeg_quality : 90
});