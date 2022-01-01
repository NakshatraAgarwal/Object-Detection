img = "";
status = "";
object = [];
function preload(){
    img = loadImage('bed.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    ObjectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById('status').innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){
        for( i=0; i < object.length; i++){

            document.getElementById('status').innerHTML = "Status: Object Detected";
             fill('red');
             percent = floor(object[i].confidence * 100);
             text(object[i].label + " " + percent + " % " , object[i].x + 15, object[i].y -135);
            noFill();
            stroke('red');
            rect(object[i].x , object[i].y - 150, object[i].width, object[i].height);
            


        }
    }

}

function modelloaded(){
    console.log('Model Loaded');
    status = true;
    ObjectDetector.detect(img, gotresults);
}

function gotresults(error, result10){
    if(error){
        console.error(error);
    }
    console.log(result10);
    object = result10;
}

function back4(){
    window.location = "index.html";
}