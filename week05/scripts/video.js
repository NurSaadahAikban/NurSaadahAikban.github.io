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

    let freezebtn = document.getElementById("freezebtn");
    freezebtn.addEventListener("mousedown", function(){
        video.pause();
    });
    freezebtn.addEventListener("mouseup", function(){
        video.play();
    }); 

    let seekbar = document.getElementById("seekbar");
    seekbar.addEventListener("change", function(){
        let time = video.duration *(seekbar.value /100);
        video.currentTime = time;
    });
    seekbar.addEventListener("timeupdate", function(){
        let value = (100 / video.duration) * video.currentTime;
        seekbar.value=value;
    });
}