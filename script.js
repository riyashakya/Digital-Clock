function clock(){
	var now = new Date();
	var dname = now.getDay(),
		mth = now.getMonth(),
		dnum = now.getDate(),
		yr = now.getFullYear(),
		hr = now.getHours(),
		min = now.getMinutes(),
		sec = now.getSeconds(),
		per = "AM";

		if (hr <= 12){
			per = "PM"
		}
		
		hr = hr < 10 ? "0" + hr : hr; 
		min = min < 10 ? "0" + min : min; 
		sec = sec < 10 ? "0" + sec : sec; 
		
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

		var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		var ids = ["dayname", "month", "daynumber", "year", "hours",  "minutes", "seconds", "period"];

		var values = [week[dname], months[mth], dnum, yr, hr, min, sec, per];

		for(var i = 0; i < ids.length; i++)
		document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

setInterval(function digitalClock(){ 
	clock();
}, 1000);

