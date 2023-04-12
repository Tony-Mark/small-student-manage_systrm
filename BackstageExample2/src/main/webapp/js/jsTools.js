function getQueryString(name) {//如果不会正则法，也可以自己下定义本函数，以在串中查找多个“=”来取出各参数和值
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
function JsonsTOTable(divn,json)// 是jsonArray
 { //把json数组数据展示在一个“表格”中
   $("#"+divn).empty();//所原有内容清空
  var s1=$("<table border='1px' width='90%'>");
     
		$("#"+divn).append(s1);
		  alert(json);
	  alert("11");
		//先输出表头，任何json都能通用
		var keys0=Object.keys(json[0]);//随便取任意一行，得到键名称列表
		  alert("12");
		var trHead=$("<tr>");s1.append(trHead);
		
		for(var i=0;i<keys0.length;i++)
		{
		 var tdHead=$("<td>"+keys0[i]+"</td>");trHead.append(tdHead);
		}
		var trEndHead=$("</tr>");s1.append(trEndHead);
	 
		for(var i=0;i<json.length;i++)//处理每行
		{ 
		 var tr0=$("<tr>"); s1.append(tr0);
		 var keys=Object.keys(json[i]);//得到每个json的键名
		 for(var j=0;j<keys.length;j++)
		 {if(json[i][keys[j]]==null)
		  var td0=$("<td>&nbsp</td>");
		  else
			 var td0=$("<td>"+json[i][keys[j]]+"</td>"); //输出每i行的第j个键值
		 
		 tr0.append(td0);
		 }   
		 var trend0=$("</tr>"); s1.append(trend0);
		}
		var send=$("</table>");    $("#"+divn).append(send);
		
 }