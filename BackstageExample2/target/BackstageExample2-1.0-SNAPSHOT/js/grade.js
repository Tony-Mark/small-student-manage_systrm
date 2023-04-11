$(function (){
    $("#reset").bind("click",function (){
        $("#studentId").val("");
        $("#courseCode").val("");
        $("#score").val("");
    })
    $("#submit").bind("click",function (){
        let url0 = $("#scoreForm").attr("action");
        /*序列化提交表单*/
        let data0 = $("#scoreForm").serialize();
        console.log(data0);
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