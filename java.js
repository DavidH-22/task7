
// mengambil video/global variable
	var video = document.getElementById("Video");

// mengambil button/global variable
	var btn = document.getElementById("Btn");

// play/pause dan tulisannya/local variable
    function playpause() {
   	 	if (video.paused) {video.play();
		btn.innerHTML = "Pause";
		} else {
		video.pause();
		btn.innerHTML = "Play";
		}
	}	

//menampilkan jam/local variable
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


