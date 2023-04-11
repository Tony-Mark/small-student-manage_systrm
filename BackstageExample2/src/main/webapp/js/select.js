$(function (){
    $("#select").bind("click",function (){
        $("#select_context").html("");
        let condition = $("input:radio:checked").val();
        let message = $("#studentMessage").val().trim();
        $.ajax({
            url : "select",
            data : {
                "condition" : condition,
                "message" : message
            },
            type : "post",
            dataType : "Json",
            success:function (re){
                console.log(re);
                if(re.length == 0){
                    alert("查无此人");
                }else{
                    $("#select_context").html("<h2>学生信息</h2>");
                    JsonsTOTable("select_context",re);
                }
            },
            error:function (){
                alert("查询失败，请重试");
            }
        })
    })
})