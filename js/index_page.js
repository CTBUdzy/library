
	$(function(){ //页面加载完后执行
		pic_botton();
		news();
		searchbook();
		bookrun();
		//我的图书馆和入馆指南鼠标划入效果
		$("#other2_shadow").mouseenter(function(){
			$("#other2_module").show();
			})
		$("#other2_module").mouseleave(function(){
			$("#other2_module").hide();
			})
		$("#other3_shadow").mouseenter(function(){
			$("#other3_module").show();
			})
		$("#other3_module").mouseleave(function(){
			$("#other3_module").hide();
			})
	//管理员界面模块
	$("#Administrator").click(function(){
		if($("#person_name").text() == 555){
			$(this).attr("target","_block");
			$(this).attr("href","Administrator.html");
			//window.location.href="Administrator.html";
			}else{
				alert("此模块只有管理员才可进入");
				}	
		});
	//网站访问次数
	if(localStorage.pagecount) {
			localStorage.pagecount = Number(localStorage.pagecount) + 1;
		} else {
			localStorage.pagecount = 1;
		}
	})
	//新书推荐模块
	function bookrun(){
		//while(1){
			var out =setInterval(run,2000);
			var run_time = 2500;
			function run(){
			for(var i = 0;i<$(".runbooks").length;i++ ){
				var pos = $($(".runbooks")[i]).css("left");
				//if($($(".runbooks")[i]).css("left") == "-110px"){
				//	$($(".runbooks")[i]).css("left","880px");
					//break;
					//}
				switch(pos){
					case "10px":
						$($(".runbooks")[i]).animate({
							left:"-110px"
							},run_time,function(){
								$(this).css("left","850px");
								});
							break;
					case "130px":
						$($(".runbooks")[i]).animate({
							left:"10px"
							},run_time);
							break;
					case "250px":
						$($(".runbooks")[i]).animate({
							left:"130px"
							},run_time);
							break;
					case "370px":
						$($(".runbooks")[i]).animate({
							left:"250px"
							},run_time);
							break;
					case "490px":
						$($(".runbooks")[i]).animate({
							left:"370px"
							},run_time);
							break;
					case "610px":
						$($(".runbooks")[i]).animate({
							left:"490px"
							},run_time);
							break;
					case "730px":
						$($(".runbooks")[i]).animate({
							left:"610px"
							},run_time);
							break;
					case "850px":
						$($(".runbooks")[i]).animate({
							left:"730px"
							},run_time);
							break;
					case "970px":
						$($(".runbooks")[i]).animate({
							left:"850px"
							},run_time);
							break;
				}
			}
			}
			//}
		}
	function pic_botton(){   //动态显示窗口
		var time = 1;
		$($(".pic_button")[0]).css("background","rgb(84,195,241)");
		$(".pic_button").each(function(n){
			$(this).click(function(){
				$(".pic_button").css("background","#fff");
				$(this).css("background","rgb(84,195,241)");
				for(var i = 0;i<$(".slide").length;i++)	{
					if(i == n){
						$($(".slide")[i]).fadeIn(1000);
					}
				else{
					$($(".slide")[i]).fadeOut(1000);
					}
				}
				time = n;
				})
			})
		var out =setInterval(f,4000);   //设置定时器，每5秒更换
		function f(){
			//$(button).css("backgroundColor","");
			//button[time%button.length].style.backgroundColor = "#ffffff";
			//$(".slide").css("display","none");
			//$(".slide").fadeOut(1000);	
			for(var i = 0;i<$(".slide").length;i++)	{
				if(i == time%$(".slide").length){
					$($(".slide")[i]).fadeIn(1000);
				}
				else{
					$($(".slide")[i]).fadeOut(1000);
					}
				$(".pic_button").css("background","#fff");
				$($(".pic_button")[time%$(".slide").length]).css("background","rgb(84,195,241)");
			}//$($(".slide")[time%$(".slide").length]).css("display","block"); //动态切换显示
			time++;
		}
	}
	
	//新闻模块
	function news(){
		$($("#news_category ul li")[0]).css("background","rgba(212,219,223,1)");
		$($(".more")[0]).show();
		$("#news_category ul li").each(function(n){
			$(this).click(function(){
				$($("#news_category ul li")).css("background","");
				$(this).css("background","rgba(212,219,223,1)");
				$(".news_content").css("display","none");
				$($(".news_content")[n]).css("display","block");
				$(".more").hide();
				$($(".more")[n]).show();
				})
			})
		//alert($("#news_category ul li").length);
		}
	//搜索模块
	function searchbook(){
		$("#search_module").mouseenter(function(){
			$(".search_choose").css("display","none");
			$(".search_choose").delay(100).slideDown(180);
			$("#search_text").animate({top:15},120);
			for(var i = 0;i < $(".search_choose ul li").length;i++){
				if($($(".search_choose ul li")[i]).hasClass("sc_off")){
					$(".explain").hide();
					$("#use_explain").hide();
					$($(".explain")[i]).slideDown(400);
					$("#search_con").attr('placeholder',"在   ”" + $(".search_choose ul li")[i].innerText + "“   中搜索");
					}
				}
			})
		$("#search_module").mouseleave(function(){
			$(".search_choose").css("display","block");
			$(".search_choose").slideUp(250);
			$("#search_text").delay(240).animate({top:60},200);
			$(".explain").hide();
			$("#use_explain").slideDown(400);
			$("#search_con").attr('placeholder',"输入搜索");
			})
		$($(".search_choose ul li")[0]).addClass("sc_off");
		$(".search_choose ul li").each(function(n){
			$(this).click(function(){
				$(".search_choose ul li").removeClass("sc_off");
				$(this).addClass("sc_off");
				$("#search_con").attr('placeholder',"在   ”" + this.innerText + "“   中搜索");
				$(".explain").hide();
				$("#use_explain").hide();
				$($(".explain")[n]).show();
				})
			})
		}