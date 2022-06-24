//  declear dom element
var countMonths = document.getElementById("mnum");
var countDays = document.getElementById("dnum");
var countHours = document.getElementById("hnum");
var countMinutes = document.getElementById("minnum");
var countSeconds = document.getElementById("snum");

const newYears = "5 Jun 2023";

// Update the count down every 1 second
var x = setInterval(function () {
const newYearDate = new Date(newYears);
const currentDate = new Date();
const leftTime = newYearDate - currentDate;
	function ms(t) {
		let year, month, day, hour, minute, second;

		second = Math.floor(t / 1000);
		minute = Math.floor(second / 60);
		second = second % 60;
		hour = Math.floor(minute / 60);
		minute = minute % 60;
		day = Math.floor(hour / 24);
		hour = hour % 24;
		month = Math.floor(day / 30);
		day = day % 30;
		year = Math.floor(month / 12);
		month = month % 12;

		return { year, month, day, hour, minute, second };
	}

	countMonths.innerHTML = ms(leftTime).month;
	countDays.innerHTML = ms(leftTime).day;
	countHours.innerHTML = ms(leftTime).hour;
	countMinutes.innerHTML = ms(leftTime).minute;
	countSeconds.innerHTML = ms(leftTime).second;

    // If the count down is over, write some text 
  if (leftTime < 0) {
    clearInterval(x);
    document.getElementById("countTimer").style.display = "none";
    document.getElementById("showExpired").style.display = "block";

    
  }
}, 1000);
