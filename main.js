rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
function preload()
{
    song = loadSound('music1.mp3')
    song = loadSound('music2.mp3')
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video,0,0,600,500);

    fill("#FF0000");
    stroke("#FF0000");

    Song_name = music1.mp3();
    console.log(song_name);
   
    if(scoreRightWrist > 0.2)
 {

    circle(rightWristX, rightWristY,20);
    music1.stop();
    if(song_name==false)
    {
       music1.play();
    }
    else 
    {
        console.log("Song Name: MUSIC");
        document.getElementById("Song_name").innerHTML = "Sont Name: music"
    }
   
 }
 function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotposes(results) {
    if(results.length > 0); {
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x +leftWrist_y = "+leftWrist_y");

        rigtWrist_x = results[0].pose.rigtWrist.x;
        rigtWrist_y = results[0].pose.rigtWrist.y;
        console.log("rigtWrist_x = "+rigtWrist_x +rigtWrist_y = "+rigtWrist_y");
    }
}