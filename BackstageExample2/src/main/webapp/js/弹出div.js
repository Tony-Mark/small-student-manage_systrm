// 弹出div
function popDiv(element) {
    // 获取div元素
    var popBox = document.getElementById(element);
    
    // 控制div的显示与隐藏
    popBox.style.display = "block";
}
// 关闭弹出提示信息的div
function closePop(element) {
    // 获取弹出窗口元素
    var popDiv = document.getElementById(element);
    popDiv.style.display = "none";
    // 删除div中的提示信息
    var text_div=document.getElementById("verify_text_div")
    text_div.innerHTML = "";
}
// 关闭取信息的div
function close_text_div(element) {
    // 获取弹出窗口元素
    var popDiv = document.getElementById(element);
    popDiv.style.display = "none";
    // 删除div中的提示信息
    var text_div = document.getElementById("text_div");
    text_div.innerHTML = "";
}
// 重新输入验证码时，提示信息清除
function remove_text_code() {
    // 获取该元素
    var text_code = document.getElementById("text_code");
    if (text_code) {
        text_code.remove();
    }
}