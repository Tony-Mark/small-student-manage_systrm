$(function (){
    $("#reset").bind("click",function (){
        $("#courseCode").val("");
        $("#courseName").val("");
        $("#credit").val("");
        $("#time").val("");
        $("#note").val("");
    })
    $("#submit").bind("click",function (){
        let url0 = $("#courseForm").attr("action");
        /*序列化提交表单*/
        let data0 = $("#courseForm").serialize();
        $.ajax({
            type : "post",
            url : url0,
            data : data0,
            dataType : "Text",
            success:function (re){
                alert(re);
            },
            error:function (){
                alert("出现错误，请重试");
            }
        })
    })
})