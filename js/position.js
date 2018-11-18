$(function(){
	//alert($("#person_name").text());
	$("#index_page").click(function(){
		if($("#person_name").text() == "登录"){
			window.location.href="index.html?";
			}else{
			var s = "user=" + $("#person_name").text() + "&pass=" + $("#pass").value; 
			window.location.href="index.html?" + s;
			}
			
		})
	$(".h2_title img").click(function(){
		window.history.back();
		})
	})