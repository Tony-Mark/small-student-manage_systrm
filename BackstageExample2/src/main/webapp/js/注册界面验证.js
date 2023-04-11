// 验证各项数据的有效性和完整性，
// 如用户名不能少于3个字符，密码不能少于6个字符，电话为11位手机等。
// 数据不合理时，动态使用DIV弹出提示。

// 验证码
function changeCode() {
    var arrays = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z');
    code = ''; //重新初始化验证码
    var checkCode = document.getElementById("checkCode");
    //alert(arrays.length);
    //随机从数组中获取四个元素组成验证码
    for (var i = 0; i < 4; i++) {
        //随机获取一个数组的下标
        var r = parseInt(Math.random() * arrays.length);
        code += arrays[r];
    }
    if (checkCode) {
        //为验证码区域添加样式名
        checkCode.className = "code";
        //将生成验证码赋值到显示区
        checkCode.innerHTML = code;
    }
}
// 验证码校验
//检查验证码是否正确
function validateCode() {
    // 先清除提示信息
    remove_text_code();
    //获取显示区生成的验证码
    var checkCode = document.getElementById("checkCode").innerHTML;
    //获取输入的验证码
    var inputCode = document.getElementById("code").value;
    console.log(checkCode);
    console.log(inputCode);
    // 创建用于提示信息的span
    var text = document.createElement("span");
    text.className = "span_code";
    text.setAttribute('id', 'text_code');
    // 获取提示区域id
    var inputCode_area = document.getElementById("inputCode_div")
    if (inputCode.length <= 0) {
        text.innerText = "请输入验证码";
    }
    else if (inputCode.toUpperCase() !== checkCode.toUpperCase()) {
        text.innerText = "验证码输入错误，请重新输入";
        changeCode();
    } else {
        // 验证码通过后最后检查页面，并提交
        if (text_name_out() && text_password_out() && text_repetition_password() && text_phone_out('phone')) {
            var form1 = document.getElementById("form1");
            // form1 = form1.removeChild(document.getElementById("user_re_password"));
            // form1.submit();
        } else {
            alert("请正确输入注册信息");
            close_text_div('popDiv');
        }
    }
    inputCode_area.appendChild(text);
}

// 获取注册信息
function form_getAll() {
    var text_div = document.getElementById("text_div");

    var username = document.getElementById("user_name");
    var password = document.getElementById("user_password");
    var tel = document.getElementById("phone");
    var sex = document.getElementsByName("sex");

    var province = document.getElementById("select_province");
    var city = document.getElementById("select_city");
    var town = document.getElementById("Text1");

    var year = document.getElementById("select_year");
    var month = document.getElementById("select_month");
    var day = document.getElementById("select_day");

    var note = document.getElementById("note");
    // 输入进div
    console.log(text_div);
    text_div.innerHTML += "<p>用户名：" + username.value.toString() + "</p>";
    console.log(username.value);
    text_div.innerHTML += "<p>密码：" + password.value.toString() + "</p>";
    console.log(password.value);
    text_div.innerHTML += "<p>电话号码：" + tel.value.toString() + "</p>";
    console.log(tel.value);
    for (i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            text_div.innerHTML += "<p>性别：" + sex[i].value.toString() + "</p>";
            console.log(sex[i].value);
        }
    }
    text_div.innerHTML += "<p>籍贯：" + province.value.toString()  + city.value.toString()  + town.value.toString() + "</p>";
    console.log(province.value + city.value + town.value);
    text_div.innerHTML += "<p>出生日期：" + year.value.toString() + "年" + month.value.toString() + "月" + day.value.toString() + "日";
    console.log(year.value + "年" + month.value + "月" + day.value + "日");
    text_div.innerHTML += "<p>备注：" + note.value.toString() + "</p>";
    popDiv("popDiv")

}
// 提示用户信息
function text_name_out() {
    var flag = true;
    var username = document.getElementById("user_name");
    username.removeAttribute('style', 'border:red');
    if (username.value.toString().length < 2) {
        // 获取弹出div的id
        var pop_div = document.getElementById("verify_text_div");
        var p = document.createElement("p");
        p.setAttribute('id', 'text');
        p.innerText = "用户名输入不正确，请输入不少于2位字符的用户名";
        pop_div.appendChild(p);
        username.value = "";
        popDiv("verifyDiv");
        username.setAttribute('style', 'border-color:red');
        console.log("用户名验证！");
        flag = false;
    }
    return flag;
}
// 密码验证
function text_password_out() {
    var flag = true;
    var pwd = document.getElementById("user_password");
    pwd.removeAttribute('style', 'border:red');
    var rg = new RegExp("\^(?![a-zA-Z]+$)(?![0-9]+$)[A-Za-z0-9]{8,18}$");
    var bo = rg.test(pwd.value.toString());
    if (!bo) {
        var pop_div = document.getElementById("verify_text_div");
        var p = document.createElement("p");
        p.setAttribute('id', 'text');
        p.innerText = "密码必须由字母、数字组成，区分大小写;\n密码长度为8-18位";
        pop_div.appendChild(p);
        pwd.value = "";
        popDiv("verifyDiv");
        pwd.setAttribute('style', 'border-color:red');
        console.log("密码验证！");
        flag = false;
    }
    return flag;
}
// 重复密码
function text_repetition_password() {
    var flag = true;
    var re_pwd = document.getElementById("user_re_password");
    var pwd = document.getElementById("user_password");
    re_pwd.removeAttribute('style', 'border-color:red');
    if (re_pwd.value.toString() !== pwd.value.toString()) {
        var pop_div = document.getElementById("verify_text_div");
        var p = document.createElement("p");
        p.setAttribute('id', 'text');
        p.innerText = "密码输入不正确，请再次输入";
        pop_div.appendChild(p);
        re_pwd.value = "";
        popDiv("verifyDiv");
        re_pwd.setAttribute('style', 'border-color:red');
        console.log("重复密码验证！");
        flag = false;
    }
    return flag;
}
// 提示电话信息
function text_phone_out(T) {
    var flag = true;
    var phone_number = document.getElementById(T);
    var div_phone = document.getElementById("div_phone");
    var ss = /^0*(13|15|18|19)\d{9}$/;
    var rg = new RegExp(ss);
    var bo = rg.test(phone_number.value.toString());
    if (!bo) {
        var text = document.createElement("span");
        text.className = "span_phone";
        text.setAttribute('id', 'phone_format')
        text.innerText = "请正确输入电话号码格式,如:13118129605";
        div_phone.appendChild(text);
        phone_number.value = "";
        phone_number.setAttribute('style', 'border-color: red')
        console.log("电话验证！");
        flag = false;
    }
    return flag;
}
function text_phone_in() {
    var phone_number = document.getElementById("phone");
    var span = document.getElementById("phone_format")
    console.log(span);
    // 判断元素是否存在
    if (span) {
        span.parentElement.removeChild(span);
        phone_number.removeAttribute('style');
    }
}