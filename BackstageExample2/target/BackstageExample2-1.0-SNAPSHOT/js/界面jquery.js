$(function(){
    $("#but_submit").bind("click",function(){
        // 提交前校验
        validateCode();
        var url0 = $("#form1").attr("action");
        // var data0 = $("#form1").serialize(); //不带文件的表单
        var data0 = new FormData($("#form1")[0]); //带文件的表单数据
        $.ajax({
            type:"post",
            url:url0,
            cache:false,
            processData:false, //需设置为false。因为data值是FormData对象，不需要对数据做处理
            contentType:false, //需设置为false。因为是FormData对象，且已经声明了属性enctype="multipart/form-data"
            data:data0,
            dataType:"Text",
            success:function(re){
                console.log(re);
                alert(re);
            },
            error:function(re){
                alert("不成功");
            }
        })
    })
    $("#more").bind("click",function(){
        moreFile();
    })
})

function moreFile(){
    var div0 = document.getElementById("file_div");
    var file0 = document.createElement("input");
    file0.setAttribute("type","file");
    file0.setAttribute("name","file");
    file0.setAttribute("class","file0");
    div0.appendChild(file0);
}