$(function(){
	/*首页*/
	$("#firstPage").bind("click",function (){
		$("#container").html("");
	})
	/*添加课程界面*/
	$("#add-course").bind("click",function (){
		$.get("course.html",function (data){
			$("#container").html(data);
		})
	})
	/*添加成绩界面*/
	$("#add-grade").bind("click",function (){
		$.get("grade.html",function (data){
			$("#container").html(data)
		})
	})
	/*学生查询界面*/
	$("#select-student").bind("click",function (){
		$.get("select.html",function (data){
			$("#container").html(data);
		})
	})
	$("#close").bind("click",function(){
		window.close();
	})
})