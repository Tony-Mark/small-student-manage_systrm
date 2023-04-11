$(function() {
	setInterval(showTime, 1000);
})
var box = document.getElementsByClassName("box")[0];
var ssObj = document.getElementsByClassName("second")[0];
var mmObj = document.getElementsByClassName("minute")[0];
var hhObj = document.getElementsByClassName("hour")[0];
var lineObj = document.getElementsByClassName("line")[0];

var date = new Date();
// 判断是否在前面加0
function timeMate(s) {
	return s < 10 ? "0" + s : s;
}

function showTime() {
	document.getElementById("title").innerHTML = "<p>当前时间:" + date.getFullYear() + "年" + (date.getMonth() + 1) + "月" +
		date.getDate() + "日" +
		timeMate(new Date().getHours()) + ":" + timeMate(new Date().getMinutes()) + ":" +
		timeMate(new Date().getSeconds()) + "</p>";
}
var hh = date.getHours();
var mm = date.getMinutes();
var ss = date.getSeconds();
var Deg = 0;

function draw() {
	for (var i = 0; i < 60; i++) {
		var div1 = document.createElement("div");
		if (i % 5 == 0) {
			div1.className = "five";
		}
		div1.style.transform = "rotate(" + Deg + "deg)";
		box.appendChild(div1);
		Deg += 6;
	}
}

function drawSS() {
	ssDeg = 360 * ss / 60;
	mmDeg = 360 * mm / 60 + (6 * ss / 60);
	hhDeg = 360 * (hh % 12) / 12 + (30 * mm / 60);
	hhObj.style.transform = "rotate(" + hhDeg + "deg)";
	mmObj.style.transform = "rotate(" + mmDeg + "deg)";
	ssObj.style.transform = "rotate(" + ssDeg + "deg)";
	ss += 1;

	// 自己调用自己，1000代表1秒
	// setTimeout(function() {
	// 	drawSS();
	// }, 1000);
}
