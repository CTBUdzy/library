window.onload = function(){		// 页面初始化处理函数
	//输入框获取焦点样式
	$("#user,#pass,#inputCode,.register p input").focus(function(){
		$(this).css("border-bottom","1px solid rgb(5,186,251)");
		$(this).attr('placeholder','')
		});
	$("#user,#pass,#inputCode,.register p input").blur(function(){
		$(this).css("border-bottom","1px solid #aaa");
		});
	$("#user").blur(function(){
		$(this).attr('placeholder','请输入用户名')
		});
	$("#pass").blur(function(){
		$(this).attr('placeholder','请输入密码')
		});
	$("#inputCode").blur(function(){
		$(this).attr('placeholder','验证码')
		});
	$("#register_user").blur(function(){
		$(this).attr('placeholder','请输入您的学号（10位）')
		});
	$("#register_pass").blur(function(){
		$(this).attr('placeholder','请设置密码（至少6位）')
		});
	$("#register_pass2").blur(function(){
		$(this).attr('placeholder','请确认密码')
		});
	//注册链接
	//$("#register_a").click(function(){
		//$("#dlgTest").hide();
	//	});
	createCode();
    var b = document.getElementById("submit");	// 获取【提交】按钮
    b.onclick = function(){					// 向服务器发送请求的异步请求函数
	//alert($("#position2").text());
    var inputCode = document.getElementById("inputCode").value; //获取验证码
	var user = document.getElementById("user");	// 获取输入的用户名
    var pass = document.getElementById("pass");	// 获取输入密码
	if(user.value.length <= 0 || pass.value.length <= 0 || inputCode.length <= 0){
		alert("请完成所有项的输入！");
		return;
	}
    else if (inputCode.toUpperCase() != code.toUpperCase()){
        alert("您输入的验证码有误，请重新输入！");
		var inputCode = parent.frames[0].document.getElementById("inputCode");
		inputCode.value = "";
        createCode();
		return;
    }
	//var name = window.localStorage.getItem(user);
	if(user.value != 555){
	if(window.localStorage.getItem(user.value) == null){
		alert("用户不存在，请重新输入");
		}else{
			var data = JSON.parse(window.localStorage.getItem(user.value));
			if(pass.value != data.pass){
				//alert(data.pass);
				alert("密码错误，请重新输入");	
				}
				else{
					var s = "user=" + user.value + "&pass=" + pass.value; 
					if($("#position2").text() == "馆藏目录"){
						window.location.href="book_catalog.html?" + s;
						}
						else if($("#position2").text() == "我的图书馆"){
						window.location.href="my_lib.html?" + s;
						}
						else if($("#position2").text() == "新书推荐"){
						window.location.href="new_books.html?" + s;
						}
						else if($("#position2").text() == "预约座位"){
						window.location.href="Seat_reservation.html?" + s;
						}
						else if($("#position2").text() == "关于本管"){
						window.location.href="introduce.html?" + s;
						}
						else if($("#position2").text() == "服务项目"){
						window.location.href="service_item.html?" + s;
						}
						else if($("#position2").text() == "文献数据库"){
						window.location.href="Bibliography.html?" + s;
						}
						else if($("#position2").text() == "联系我们"){
						window.location.href="contact_us.html?" + s;
						}
						else if($("#position2").text() == "在线阅读"){
						window.location.href="reading_book.html?" + s;
						}else{
							window.location.href="index.html?" + s; 
							}
							
					}
			}
	}else{
	var name = ["2015137123","555"];
	var password = ["2015137123","555"];
	for(var i = 0;i < name.length;i++){
    	(user.value == name[i]) ? (n = true) : (n = false );
		if(n)
			break;
		}
    (pass.value == password[i]) ? (b = true ) : (b = false ) ; 
    	if(b&&n){ 								// 如果参数b为真，说明输入信息正确
			var s = "user=" + user.value + "&pass=" + pass.value; 
			if($("#position2").text() == "馆藏目录"){
				window.location.href="book_catalog.html?" + s;
				}
				else if($("#position2").text() == "我的图书馆"){
				window.location.href="my_lib.html?" + s;
				}
				else if($("#position2").text() == "新书推荐"){
				window.location.href="new_books.html?" + s;
				}
				else if($("#position2").text() == "预约座位"){
				window.location.href="Seat_reservation.html?" + s;
				}
				else if($("#position2").text() == "关于本管"){
				window.location.href="introduce.html?" + s;
				}
				else if($("#position2").text() == "服务项目"){
				window.location.href="service_item.html?" + s;
				}
				else if($("#position2").text() == "文献数据库"){
				window.location.href="Bibliography.html?" + s;
				}
				else if($("#position2").text() == "联系我们"){
				window.location.href="contact_us.html?" + s;
				}
				else if($("#position2").text() == "在线阅读"){
				window.location.href="reading_book.html?" + s;
				}
				else{
					window.location.href="index.html?" + s; 
					}
    	}
    	else{							// 如果参数b为假，说明输入信息不正确
        	alert("你输入的用户名或密码有误，请重新输入");	// 提示重新输入信息
        }
	}
	}
	
	//注册事件
	if(window.localStorage.getItem("user_number") == null){
		window.localStorage.setItem("user_number",0);//统计用户数量，初始值为0
		}
	$("#register_submit").click(function(){
		var data = new Object;
		data.user = $("#register_user").val();
		data.pass = $("#register_pass").val();
		data.pass2 = $("#register_pass2").val();
		if(data.user.length == 0){
			alert("请输入注册学号");
		}
		else if(data.user < 2014000000 || data.user > 2018000000){
			alert("您输入的学号不符合规范，请重新输入");
			}
		else if(window.localStorage.getItem(data.user) != null){
			alert("该用户名已注册");
			}else{
				if(data.pass.length == 0){
					alert("请设置密码");
					}
				else if(data.pass2 == 0){
					alert("请再次输入确认密码")
					}
				else if(data.pass.length < 6){
					alert("为保障您的账号安全，请设置至少6位的密码");
					}
				else if(data.pass != data.pass2){
					alert("您输入的两次密码不相同，请重新输入！");
					}else{
						var str = JSON.stringify(data);
						window.localStorage.setItem(data.user,str);
						alert("注册成功");
						var uesr_number = window.localStorage.getItem("user_number");
						window.localStorage.setItem("user_number",++uesr_number);
						}
				}
		});
	
	
}
        var code;
        function createCode() {
            code = "";
            var codeLength = 4; //验证码的长度
            var checkCode = document.getElementById("checkCode");
            var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
            for (var i = 0; i < codeLength; i++) 
            {
                var charNum = Math.floor(Math.random() * 52);
                code += codeChars[charNum];
            }
            if (checkCode) 
            {
                checkCode.className = "code";
                checkCode.innerHTML = code;
            }
        }   