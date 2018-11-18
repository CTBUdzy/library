$(function(){
	//获取当前时间
	if(window.localStorage.getItem("number") == null){
		window.localStorage.setItem("number",0)
		}
	$("#submit").click(function(){
		var time1 = new Date;
		var hour1 = time1.getHours();
		var minutes1 = time1.getMinutes();
		var year1 = time1.getFullYear();
		var month1 = time1.getMonth();
		var day1 = time1.getDate();
		var number = window.localStorage.getItem("number");
		number++;
		var info = new Object;
		info.problem_type = $("#problem_type").val();
		info.find_time = $("#find_time").val();
		info.problem_text = $("#problem_text").val();
		info.user_name = $("#user_name").val();
		info.tell_1 = $("#tell_1").val();
		info.other_tell = $("#other_tell").val();
		info.tell_2 = $("#tell_2").val();
		info.send_time = year1 + "-" + (month1+1) + "-" + day1 + "  " + hour1 + ":" + minutes1;
		/*alert(info.problem_type);
		alert(info.find_time);
		alert(info.problem_text);
		alert(info.user_name);
		alert(info.tell_1);
		alert(info.other_tell);
		alert(info.tell_2);*/
		var str = JSON.stringify(info);
		var info_number = "info" + number;
		//alert(number);
		//alert(info_number);
		//alert(str);
		window.localStorage.setItem(info_number,str);
		window.localStorage.setItem("number",number);
		alert("提交成功");
		//alert(info.send_time);
		//window.localStorage.clear();
		});
	//显示反馈信息函数
	var display_allinfo = function(){
		for(var n = 100;n > 0;n--){
			var info_number = "info" + n;
			//alert(window.localStorage.getItem(info_number));
			if(window.localStorage.getItem(info_number) != null){
				var str = window.localStorage.getItem(info_number);
				var info = JSON.parse(str);
				var result = '<span style="color:#000;font-size:18px;">' + "问题类型：" + '</span>' + '<span class="problem_type">' + info.problem_type + '</span>' + '<br>';
				result += '<span style="color:#000;font-size:18px;">' + "发现时间：" + '</span>'+ '<span class="find_time">' + info.find_time + '</span>' + '<br>';
				result += '<span style="color:#000;font-size:18px;">' + "反馈问题：" + '</span>'+ '<span class="problem_text">' + info.problem_text + '</span>' + '<br>';
				result += '<span style="color:#000;font-size:18px;">' + "反馈人：" + '</span>'+ '<span class="user_name">' + info.user_name + '</span>' + '<br>';
				result += '<span style="color:#000;font-size:18px;">' + "联系电话：" + '</span>'+ '<span class="tell_1">' + info.tell_1 + '</span>' + '<br>';
				result += '<span style="color:#000;font-size:18px;" class="other_tell">' + "其他联系方式：" + '</span>'+ info.other_tell + "  " + info.tell_2 + '<br>';
				var send_time = info.send_time;
				var span = document.createElement("span");
				var p = document.createElement("p");
				var div = document.createElement("div");
				p.innerHTML = result;
				span.innerHTML = '<p style="text-align:right;">' + "发布时间:  " +  send_time + '</p>';
				div.appendChild(p);
				div.appendChild(span);
				$("#xianshi_info").append(div);
				}
			}
		}
	display_allinfo();
	$("#all_info").click(function(){
		$("#xianshi_info").text("");
		display_allinfo();
		$("#info_many").text("(共" + $("#xianshi_info div").length + "条)");
		});
	//筛选反馈信息
	$("#type_choose").change(function(){
		var number = 0;//计算筛选条数
		var type = $("#type_choose").val();
		$("#xianshi_info div").show();
		for(var n = 0;n < $("#xianshi_info div").length;n++){
			if(type == "全部"){
				$("#xianshi_info div").show();
				number = $("#xianshi_info div").length;
			}
			else if($($(".problem_type")[n]).text() != type){
					$($("#xianshi_info div")[n]).hide();
					}else{
						number++;
						}
		}
		$("#info_many").text("(共" + number + "条)");
		});
	$("#info_many").text("(共" + $("#xianshi_info div").length + "条)");
	//管理员数据库清除数据库信息
	var switch_clear = 0;
	$("#clear_sql").click(function(){
		$("#warning_message p").text("此操作将会清除数据库所有数据信息（包括用户信息，个人设置，统计信息等），且不可恢复，您确定继续吗？");
		$("#warning_message").show();
		$(".clear_btn").attr("disabled","disabled");
		switch_clear = 1;
		});
	$("#clear_web_count").click(function(){
		$("#warning_message p").text("此操作将会重置网站访问次数统计想你想，且不可恢复，您确定要继续吗？");
		$("#warning_message").show();
		$(".clear_btn").attr("disabled","disabled");
		switch_clear = 2;
		});
	$("#clear_feed_mail").click(function(){
		$("#warning_message p").text("此操作将会清空所有用户的反馈信息，且不可恢复，您确定要继续吗？");
		$("#warning_message").show();
		$(".clear_btn").attr("disabled","disabled");
		switch_clear = 3;
		});
	$("#yes").click(function(){
		if(switch_clear == 1){
			window.localStorage.clear();
			alert("已清除数据库全部数据信息");	
		}
		if(switch_clear == 2){
			localStorage.pagecount = 0;
			alert("已重置网站访客量");	
		}
		if(switch_clear == 3){
			remove_allinfo();
			alert("已清空所有反馈信息");	
		}
		$(".clear_btn").removeAttr("disabled");
		$("#warning_message").hide();
		switch_clear = 0;
		});
	$("#no").click(function(){
		$(".clear_btn").removeAttr("disabled");
		$("#warning_message").hide();
		switch_clear = 0;
		});
	//清空反馈信息函数
	var remove_allinfo = function(){
		for(var n = 100;n > 0;n--){
			var info_number = "info" + n;
			window.localStorage.removeItem(info_number);
		}
	}
	//网站访问次数
	if(localStorage.pagecount) {
			localStorage.pagecount = Number(localStorage.pagecount);
		} else {
			localStorage.pagecount = 1;
		}
		$("#user_sessions").text(localStorage.pagecount + " 次");
	//反馈信息数统计
		$("#info_sessions").text($("#xianshi_info div").length + " 条");
	//注册人数统计
		if(window.localStorage.getItem("user_number") == null){
		window.localStorage.setItem("user_number",0);//统计用户数量，初始值为0
		}
		$("#user_number").text(window.localStorage.getItem("user_number") + " 人");
	//统计信息刷新
	$("#renovate_data").click(function(){
		$("#user_sessions").text(localStorage.pagecount + " 次");
		$("#info_sessions").text($("#xianshi_info div").length + " 条");
		$("#user_number").text(window.localStorage.getItem("user_number") + " 人");
		});
	//选择时间的设定
	var time = new Date;
	var year = time.getFullYear();
	var month = time.getMonth();
	var day = time.getDate();
		if((month+1)<10){
			monthend = "0" + (month+1);
			monthstar = "0" + (month);
			}
		if((day+1)<10){
			day = "0" + day;
			}
		var datetimestar = year + "-" + monthstar + "-" + day;
		var datetimeend = year + "-" + monthend + "-" + day;
		
		//alert(datetime);
		$("#datetimestar").val(datetimestar);
		$("#datetimeend").val(datetimeend);
		$("#datetimeend").change(function(){
			var date = $("#datetimeend").val().split("-");
			//alert(date);
			if(date[0] > year){
				alert("所选日期不能超过当天日期");
				$("#datetimeend").val(datetimeend);
				}
			if(date[0] == year){
				if(date[1] > month){
					alert("所选日期不能超过当天日期");
					$("#datetimeend").val(datetimeend);
					}else if(date[1] == month){
					if(date[2] > day){
						alert("所选日期不能超过当天日期");
						$("#datetimeend").val(datetimeend);
					}
					}
					
				}
			});
	})