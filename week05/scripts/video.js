window.onload = function(){
    let video = document.getElementById("myvideo");

    let playbtn = document.getElementById("playbtn");
    playbtn.addEventListener("click", function(){
        video.play();
    });

    letpausebtn = document.getElementById("pausebtn");
    pausebtn.addEventListener("click", function(){
        video.pause();
    });
};