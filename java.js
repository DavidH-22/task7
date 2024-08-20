
// Get the video
var video = document.getElementById("Video");

// Get the button
var btn = document.getElementById("Btn");

     // Pause and play the video, and change the button text
    function myFunction() {
   	 if (video.paused) {
		video.play();
		btn.innerHTML = "Pause";
		} else {
		video.pause();
		btn.innerHTML = "Play";
		}
	}	

	function showTime() {
		var a_p = "";
		var today = new Date();
		var curr_hour = today.getHours();
		var curr_minute = today.getMinutes();
		var curr_second = today.getSeconds();
		curr_hour = checkTime(curr_hour);
		curr_minute = checkTime(curr_minute);
		curr_second = checkTime(curr_second);
	 document.getElementById('clock').innerHTML=curr_hour + ":" + curr_minute + ":" + curr_second + " " + a_p;
		}

	function checkTime(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
	setInterval(showTime, 500);


