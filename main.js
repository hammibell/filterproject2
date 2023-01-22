function preload(){

}
function setup(){
    canvas=createCanvas;
    canvas.center;
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}


function draw(){
image(video, 0, 0, 300, 300);

image(clown_nose, noseX-15, noseY-10, 30, 30);


}
function takeSnapshot(){
save("filterpic.png");

}
function modelLoaded() {
    console.log('Posenet is initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    

    }
}


