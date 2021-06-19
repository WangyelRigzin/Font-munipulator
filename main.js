function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
    background('#FF0000');
}

function modelLoaded(){
    console.log('poseNet is Instilized!');
}

function gotPoses(Results){
    if(Results.length > 0)
    {
        console.log(Results);
    }
}
