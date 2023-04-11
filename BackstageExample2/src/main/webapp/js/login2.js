$(function() {
	// 开始加载页面
	// $(window).load(initialize("div1"));
	initialize("div1");
	$("#cancle").bind("click",function (){
		clear();
	})
	// 登录验证
	$("#log_in").bind("click", function() {
		if(check()){
			let studentId = $("#studentId").val().trim();
			let password = $("#password").val().trim();
			$.ajax({
				data: {
					"studentId": studentId,
					"password": password
				},
				type: "post",
				url: "login2",
				dataType: "Json",
				success:function(re){
					/*返回1则正常登录，返回0需要重新输入密码，返回-1需要重新输入学号和密码*/
					console.log(re);
					if(re == 1){
						window.location.href = "./Manage.html";
					}else if (re == 0){
						$("#password").focus().val("");
						alert("密码错误请重新输入");
					}else{
						$("#studentId").focus().val("");
						$("#password").focus().val("");
						alert("学号错误请重新输入");
					}
				},
				error:function(re){
					alert("请求失败，请重试");
				}
			})
		}
	})
})



// 页面初始化
function initialize(div) {
	var div = document.getElementById(div);
	// 生成头像部分
	var p = document.createElement("div");
	p.id = "divhead";
	div.appendChild(p);
	div.innerHTML += "<br>";
	div.innerHTML += "<br>";
	// 生成学号
	var numberLable = document.createElement("label");
	numberLable.innerText = "学号";
	numberLable.id = "numberLable";
	div.appendChild(numberLable);
	// 学号输入框
	var number = document.createElement("input");
	number.type = "text";
	number.id = "studentId";
	number.name = "studentId";
	number.setAttribute("placeholder", "请输入学号");
	div.appendChild(number);
	var message1 = document.createElement("span");
	message1.className = "message";
	message1.id = "me1";
	message1.innerText = "*";
	div.appendChild(message1);
	div.innerHTML += "<br>"
	// 生成密码
	var pwdl2 = document.createElement("label");
	pwdl2.innerText = "密码";
	div.appendChild(pwdl2);
	// 密码输入框
	var pwd = document.createElement("input");
	pwd.type = "password";
	pwd.id = "password";
	pwd.name = "password";
	pwd.setAttribute("placeholder", "请输入密码");
	div.appendChild(pwd);
	var message2 = document.createElement("span");
	message2.className = "message";
	message2.id = "me2";
	message2.innerText = "*";
	div.appendChild(message2);
	div.innerHTML = div.innerHTML + "<br>";
	// 生成两个按钮
	var btn1 = document.createElement("input");
	btn1.type = "button";
	btn1.id = "log_in";
	btn1.value = "登录";
	div.appendChild(btn1);
	var btn2 = document.createElement("input");
	btn2.type = "button";
	btn2.id = "cancle";
	btn2.value = "取消";
	div.appendChild(btn2);
	/*生成注册链接*/
	var registerLink = document.createElement("a");
	registerLink.href = "./register.html";
	registerLink.innerText = "去注册";
	div.appendChild(registerLink);
}
// 判空
function check() {
	var flage = true;
	if ($("#studentId").val().trim() == null){
		$("#studentId").focus();
		alert("请输入学号");
		flage =false;
	}
	if ($("#password").val().trim() == null){
		$("#password").focus();
		alert("请输入密码");
		flage =false;
	}
	return flage;
}

function clear() {
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
	document.getElementById("me1").style.color = "red";
	document.getElementById("me2").style.color = "red";
}
