
	$(function(){ //页面加载完后执行
		var query = location.search.substring(1); 
	// 获取HTTP请求的URL中所包含的查询字符串
    var a = query.split("&");					// 劈开查询字符串为数组
    var o ={};	// 临时对象直接量
    for(var i = 0; i < a.length; i ++ ){ 		// 遍历查询字符串数组
        var pos = a[i].indexOf("=");			// 找到等号的下标位置
        if(pos == - 1) continue; 				// 如果没有等号，则忽略
        var name = a[i].substring(0, pos); 		// 获取等号前面的字符串
        var value = a[i].substring(pos + 1); 	// 获取等号后面的字符串
        o[name] = unescape(value); 				// 把名/值对传递给对象
    }
	if(o["user"] != undefined){
		$("#person_name").text(o["user"]); 
	}
	else{
		$("#person_name").text("登录"); 
		}
		
	Datetime();//获取并显示当前日期
	//设置网页背景色选项
	$("#Set_up").click(function(){
		$("#Set_up_div").slideToggle(500);
		});
	if(window.localStorage.getItem("BackGroundColor") == null){
		$("body").css("backgroundColor","rgb(168,211,238)");
		alert("您可以在网页顶部的皮肤设置中，设置自己喜欢的背景颜色");
		window.localStorage.setItem("BackGroundColor","rgb(168,211,238)");
		}else{
			$("body").css("backgroundColor",window.localStorage.getItem("BackGroundColor"));
			//window.localStorage.clear("BackGroundColor");
			}
	//$("#Set_up_div input").attr(val,window.localStorage.getItem("BackGroundColor"));
	//$("#Set_up_div *").each(function(){
		//$(this),css("background",this.name);
		//});
	$("#Set_up_div button").each(function(){
		//alert(this.name);
		//alert($(this).css("background-color"));
		$(this).css("background-color",this.name);//把按钮颜色换成该按钮name的颜色
		});
	$("#Set_up_div button").click(function(){	//选择Set_up_div元素下的所有元素
		var value = $(this).attr("name");
		$("body").css("background",value);
		window.localStorage.setItem("BackGroundColor", value);
	})
	
	$("#Set_up_div input").change(function(){
		var value = $("#Set_up_div input").val();
		$("body").css("background",value);
		window.localStorage.setItem("BackGroundColor", value);
		});
	//重写alert()
	/*
	window.alert =  function(info){
	var box = document.getElementById("alert_box");
	var html = '<p>' + info + '</p>';
	if( box ){
		box.innerHTML = html;
		box.style.display = "block";
	}
	else {
		var div = document.createElement("div");
		div.id = "alert_box";
		div.style.display = "block";
		document.body.appendChild(div);
		div.innerHTML = html;
	}
	}
	*/
})
	
	function Datetime(){	
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth();
		var date = now.getDate();
		var week;
		switch (now.getDay()){    
   			case 1: week="星期一"; break;  
    		case 2: week="星期二"; break;  
    		case 3: week="星期三"; break;  
    		case 4: week="星期四"; break;  
    		case 5: week="星期五"; break;  
    		case 6: week="星期六"; break;  
    		default: week="星期天";  
  		}  
		$("#datetime").text("今天是      " + year + "/" + (month+1) + "/" + date +"           "+ week);
		//alert(year + "/" + (month+1) + "/" + date + week);
		}