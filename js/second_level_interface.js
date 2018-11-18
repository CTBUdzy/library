$(function(){
		//字页面左侧选择模块
		$div = $(".con_detailed");
		$($(".main_ul_li span")[0]).css("color","#fff");
		$($(".main_ul_li")[0]).css("background","rgb(240,134,26)");
		if($(".h2_title h2").text() == "座位预约"){
			$(".main").css("height","1980px");
			$(".con_detailed").css("height","1880px");
			$($div[0]).css("display","block");
			$($(".main_left_ul")[0]).show();
			}
		if($(".h2_title h2").text() == "我的图书馆"){
			$($div[1]).css("display","block");
			$($(".main_left_ul")[1]).show();
			$(".main_ul_li").css("background","none");
			$(".main_ul_li span").css("color","rgb(15,93,122)");
			$($(".main_ul_li")[1]).css("background","rgb(240,134,26)");
			$($(".main_ul_li span")[1]).css("color","#fff");
			}
		$(".main_ul_li").each(function(n){
				$(this).click(function(){
					//alert($($(".main_ul_li")[n]).text());
					//alert($("#person_name").text());
					if(($($(".main_ul_li")[n]).text() == "预约记录" || $($(".main_ul_li")[n]).text() == "信用积分" || $($(".main_ul_li")[n]).text() == "个人信息") && $("#person_name").text() == "登录"){
						return false;
						}
					$(".main_ul_li").css("background","none");
					$(".main_ul_li span").css("color","rgb(15,93,122)");
					//$(".library_ul_li").css("border-radius","0px");
					$(this).css("background","rgb(240,134,26)");
					$($(".main_ul_li span")[n]).css("color","#fff");
					//$(this).css("border-bottom-right-radius","50% 80%");
					//$(this).css("border-top-left-radius","50% 80%");
					$div.css("display","none");
					$($div[n]).css("display","block");
					if($($(".main_ul_li")[n]).text() == "开放时间"){
						if($($(".school_ch ul li")[0]).css("background-color") == "rgba(85, 195, 241, 0.6)"){
						$(".main").css("height","1150px");
						}else{
						$(".main").css("height","750px");
						}
					}
					else if($($(".main_ul_li")[n]).text() == "使用帮助"){
						$(".main").css("height","1980px");
						$(".con_detailed").css("height","1880px");
						}else if($($(".main_ul_li")[n]).text() == "空间介绍"){
							$(".main").css("height","1250px");
							$(".con_detailed").css("height","1200px");
							}else{
						$(".main").css("height","750px");
						$(".con_detailed").css("height","85%");
						}
					$(".h3_title h3").text($(this).text());
					$("#position3").text($(this).text());
					})
			})
		//子页面中左侧滑动显示下一子模块
		$(".main_left p").each(function(n) {
            $(this).click(function(){
				$($(".main_left_ul")[n]).slideToggle(500);
				})
        });
		//鼠标滑过效果
		$(".main_ul_li span").hover(function(){
				$(this).css("font-size","20px");
			},function(){
				$(this).css("font-size","18px");
			});
		//开放时间模块中校区的切换
		//alert($(".school_ch ul li").length)
		$($(".school_ch ul li")[0]).css("background","rgba(85,195,241,0.6)");
		$($(".sm_time")[0]).css("display","block");
		$(".school_ch ul li").each(function(n){
			$(this).click(function(){
				$(".school_ch ul li").css("background","");
				$(this).css("background","rgba(85,195,241,0.6)");
				$(".sm_time").css("display","none");
				$($(".sm_time")[n]).slideDown(300);
				//alert($($(".school_ch ul li")[n]).text());
				if($($(".school_ch ul li")[n]).text() == "南岸校区"){
					$(".main").css("height","1150px");
					}else{
						$(".main").css("height","750px");
						}
				
				})
			})
		//我的书架中图书的阅读状态选择显示
		for(var i = 2;i <=$(".mybook_table tr").length;i++){
			var s = '.mybook_table tr:nth-child(' + i + ') td:nth-child(4)';
			var over_per = '.mybook_table tr:nth-child(' + i + ') td:nth-child(7)';
			if($(s).text() == "正在阅读"){
				$(s).css("color","#6633ff");
			}
			if($(s).text() == "已完成"){
				$(s).css("color","green");
				$(over_per).css("color","green");
			}
			if($(s).text() == "未开始"){
				$(s).css("color","#ff9900");
				$(over_per).css("color","#ff9900");
			}
		}
		$(".state").change(function(){
			//alert($(".state").val());
			for(var i = 2;i <=$(".mybook_table tr").length;i++){
				var s = '.mybook_table tr:nth-child(' + i + ') td:nth-child(4)';
				var hang = '.mybook_table tr:nth-child(' + i + ')';
				if($(s).text() != $(".state").val()){
					$(hang).hide();
					}
					else{
						$(hang).show();
					}
				if($(".state").val() == "全部图书"){
					$(".mybook_table tr").show();
					}
				}
				//改变分类后，所有选择都取消
				for(var i = 0;i < $("#all_mybooks input").length;i++){
					$("#all_mybooks input[type='checkbox']").get(i).checked=null;
				}
				$("#all_checked").get(0).checked = null;
				
			//alert($(".mybook_table tr:nth-child(4) td:nth-child(4)").text());
			})
		//如果某些图书状态为未开始，则开始时间显示为空
		for(var i = 2;i <=$(".mybook_table tr").length;i++){
			var s = '.mybook_table tr:nth-child(' + i + ') td:nth-child(4)';
			var star_time = '.mybook_table tr:nth-child(' + i + ') td:nth-child(5)';
			var end_time = '.mybook_table tr:nth-child(' + i + ') td:nth-child(6)';
			var over_per = '.mybook_table tr:nth-child(' + i + ') td:nth-child(7)';
			if($(s).text() == "未开始"){
				$(star_time).text("还未开始");
				$(end_time).text("");
				$(over_per).text("0%");
			}
			if($(s).text() == "已完成"){
				$(over_per).text("100%");
			}
			if($(s).text() == "正在阅读"){
				$(end_time).text("还未完成");
			}
		}
		for(var i = 2;i <=$("#collection_table tr").length;i++){
			var s = '#collection_table tr:nth-child(' + i + ') td:nth-child(4)';
			var star_time = '#collection_table tr:nth-child(' + i + ') td:nth-child(5)';
			var end_time = '#collection_table tr:nth-child(' + i + ') td:nth-child(6)';
			var over_per = '#collection_table tr:nth-child(' + i + ') td:nth-child(7)';
			if($(s).text() == "未开始"){
				$(star_time).text("还未开始");
				$(end_time).text("");
				$(over_per).text("0%");
			}
			if($(s).text() == "已完成"){
				$(over_per).text("100%");
			}
			if($(s).text() == "正在阅读"){
				$(end_time).text("还未完成");
			}
		}
		//全选操作
		$("#all_checked").click(function(){
			if($("#all_checked").is(':checked')){
				for(var i = 2;i <=$(".mybook_table tr").length;i++){
				var s = '.mybook_table tr:nth-child(' + i + ') td:nth-child(4)';
				var hang = '.mybook_table tr:nth-child(' + i + ')';
				if($(s).text() != $(".state").val()){
					$(hang).hide();
					}
					else{
						$(hang).show();
					}
				if($(".state").val() == "全部图书"){
					$(".mybook_table tr").show();
					}
				}
				
				if($(".state").val() == "全部图书"){
					for(var i = 0;i < $("#all_mybooks input").length;i++){
						$("#all_mybooks input[type='checkbox']").get(i).checked="checked";
					}	
				}else{
						for(var i = 0;i < $("#all_mybooks input").length;i++){
							var s = '.mybook_table tr:nth-child(' + (i+2) + ') td:nth-child(4)';
							var hang = '.mybook_table tr:nth-child(' + (i+2) + ')';
							if($(s).text() == $(".state").val()){
							$("#all_mybooks input[type='checkbox']").get(i).checked="checked";
							}
						}
					}
			}
			else{
				for(var i = 0;i < $("#all_mybooks input").length;i++){
					$("#all_mybooks input[type='checkbox']").get(i).checked=null;
				}
				}
			});
			
		//我的书架移出书架操作
		$("#remove_book").click(function(){
			for(var i = 0;i < $("#all_mybooks input").length;i++){
				if($("#all_mybooks input[type='checkbox']").get(i).checked){
					$($("#all_mybooks tr")[i + 1]).remove();
					//alert(i);
					i--;//每当前面有一个被移出后，后面的元素就会往前面推一个，因此下一次检测的位置还是为当前所删除的位置开始
					}
				}
				$("#all_checked").get(0).checked = null;
			});
		//我的书加入收藏操作
		var ys = false;
		$("#add_collection").click(function(){
			for(var i = 0;i < $("#all_mybooks input").length;i++){
				if($("#all_mybooks input[type='checkbox']").get(i).checked){
					$("#all_mybooks input[type='checkbox']").get(i).checked = false;
					var list = $($("#all_mybooks tr")[i+1]).clone(true);	
					//alert(list.text());
					$("#collection_table").append(list);
					//$($("#all_mybooks tr")[i+1]).remove();
					ys = true;
					}
				}
				if(ys){
					alert("已添加到我的收藏中");
					ys = false;
				}else{
					alert("请选择要收藏的图书");
					}
					$("#all_checked").get(0).checked = null;
			});
		//我的书架移出收藏夹
		$("#remove_coll").click(function(){
			for(var i = 0;i < $("#collection_table input").length;i++){
				if($("#collection_table input[type='checkbox']").get(i).checked){
					$($("#collection_table tr")[i+1]).remove();
					i--;
					}
				}
			});
		//删除阅读记录
		$("#delete_read_log").click(function(){
			$(".reading_log tr").hide();
			$($(".reading_log tr")[0]).show();
			});
		//座位预约记录状态颜色设置
		for(var i = 2;i <=$(".seat_history tr").length;i++){
			var s = '.seat_history tr:nth-child(' + i + ') td:nth-child(7)';
			if($(s).text() == "已结束"){
				$(s).css("color","#666");
			}
			if($(s).text() == "正在使用"){
				$(s).css("color","green");
			}
			if($(s).text() == "待使用"){
				$(s).css("color","#9900cc");
			}
			if($(s).text() == "已违约"){
				$(s).css("color","#ff9900");
			}
		}
		//个人信用状态颜色设置
		for(var i = 2;i <=$(".seat_points tr").length;i++){
			var s = '.seat_points tr:nth-child(' + i + ') td:nth-child(6)';
			if($(s).text() == "有效"){
				$(s).css("color","#ff9900");
			}
			if($(s).text() == "管理员取消"){
				$(s).css("color","green");
			}
		}
		//座位预约的预约记录
		$(".room_state,.room_type").change(function(){
			//alert($(".state").val());
			for(var i = 2;i <=$(".seat_history tr").length;i++){
				var s = '.seat_history tr:nth-child(' + i + ') td:nth-child(7)';
				var type = '.seat_history tr:nth-child(' + i + ') td:nth-child(2)';
				var hang = '.seat_history tr:nth-child(' + i + ')';
				if($(".room_state").val() == "全部" && $(".room_type").val() == "全部"){
					$(".seat_history tr").show();
					}
				if($(".room_state").val() == "全部" && $(".room_type").val() != "全部"){
						if($(type).text() != $(".room_type").val()){
							$(hang).hide();
						}
						else{
							$(hang).show();
						}
					}
				if($(".room_state").val() != "全部" &&  $(".room_type").val() == "全部"){
						if($(s).text() != $(".room_state").val()){
							$(hang).hide();
						}
						else{
							$(hang).show();
						}
					}
				if($(".room_state").val() != "全部" && $(".room_type").val() != "全部"){
						if($(s).text() != $(".room_state").val() || $(type).text() != $(".room_type").val()){
							$(hang).hide();
							}
							else{
								$(hang).show();
							}
					}
				}
			})
		//座位预约个人信息修改
		if(window.localStorage.getItem("person_tell") == null){
			window.localStorage.setItem("person_tell","请完善您的联系电话")
		}
		if(window.localStorage.getItem("person_email") == null){
			window.localStorage.setItem("person_email","请完善您的邮箱")
		}
		$("#person_tell").val(window.localStorage.getItem("person_tell"));
		$("#person_email").val(window.localStorage.getItem("person_email"))
		$("#chenge_person").click(function(){
			$(".person_info_text ul li p input").removeAttr("disabled");
			});
		$("#save_person").click(function(){
			$(".person_info_text ul li p input").attr("disabled","disabled");
			window.localStorage.setItem("person_tell",$("#person_tell").val());
			window.localStorage.setItem("person_email",$("#person_email").val());
			$(".saveper_success").show().delay(1000).fadeOut(400);
			});
		//图书馆研修间5,6楼的切换
		$($(".floor")[1]).hide();
		$($("#floor_choose div")[0]).css("background","rgba(240,134,26,1)");
		$("#floor_choose div").each(function(n){
			$(this).click(function(){
				$(".floor").hide();
				$($(".floor")[n]).show();
				$("#floor_choose div").css("background","rgb(160,160,160)");
				$(this).css("background","rgba(240,134,26,1)");
				})
			})
		//新书推荐模块
		$($("#ti_choose tr:nth-child(1) ul li")[0]).css("background","rgba(32,122,167,1)");
		$($("#ti_choose tr:nth-child(1) ul li")[0]).css("color","#fff");
		$($("#ti_choose tr:nth-child(2) ul li")[0]).css("background","rgba(32,122,167,1)");
		$($("#ti_choose tr:nth-child(2) ul li")[0]).css("color","#fff");
		$("#ti_choose tr:nth-child(1) li").each(function(n) {
            $(this).click(function(){
				$("#ti_choose tr:nth-child(1) ul li").css("background","none");
				$("#ti_choose tr:nth-child(1) ul li").css("color","#333");
				$(this).css("background","rgba(32,122,167,1)");
				$(this).css("color","#fff");
				})
        });
		$("#ti_choose tr:nth-child(2) li").each(function(n) {
            $(this).click(function(){
				$("#ti_choose tr:nth-child(2) ul li").css("background","none");
				$("#ti_choose tr:nth-child(2) ul li").css("color","#333");
				$(this).css("background","rgba(32,122,167,1)");
				$(this).css("color","#fff");
				})
        });
		//图书所有分类中鼠标选择特效
		$("#book_type_new span,.type_detailed span").hover(function(){
			$(this).css("color","red");
			},function(){
			$(this).css("color","#000");	
			});
		$("#book_type_new span,.type_detailed span").click(function(){
			$("#book_type_new span").css("background","none");
			$("#book_type_new span").css("color","#333");
			$(".type_detailed span").css("background","none");
			$(".type_detailed span").css("color","#333");
			$(this).css("background","rgb(91,192,222)");
			$(this).css("color","#fff");
			//馆藏目录中更多的处理操作
			$(".type_detailed").hide();
			for(var i = 0;i<$("#book_type_all p").length;i++){
				//alert($($("#book_type_all p")[i]).css("background-color"));
				if($($("#book_type_all p")[i]).css("background-color") == "rgba(255, 255, 255, 0.9)"){
					$("#now_choose").text($($("#book_type_all p")[i]).text() + " >" + $(this).text() + " (92本)");
					}
				}
			
			})
		//馆藏目录中图书分类查看详情
		$("#book_type_all p").each(function(n) {
            $(this).mouseenter(function(){
				$("#book_type_all p").css("background","");
				$(this).css("background","rgba(255,255,255,0.9)");
				$(".type_detailed").hide();
				$($(".type_detailed")[n]).show();
				});
			$(this).mouseout(function(){
				$(".type_detailed").hide();
				//$("#book_type_all p").css("background","");
				//var s = n;
				$(".type_detailed").mouseenter(function(){
					//n为鼠标滑过分类现象的记录，需要获取最后一个数字才为最后离开时的地方
					
					//var end = s.exec(n);
					//$($("#book_type_all p")[n]).css("background","rgba(255,255,255,0.9)");
					//alert(s);
					$(this).show();
					})
				$(".type_detailed").mouseleave(function(){
					$(".type_detailed").hide();
					//$("#book_type_all p").css("background","");
					//$("#book_type_all p").mouseout(function(){
					//	$("#book_type_all p").css("background","");
						//});
					})
				})
			
			//$(this).mouseout(function(){
				//$("#book_type_all p").css("background","");
				//$(".type_detailed").hide();
				//});
        });
		//$(".type_detailed").each(function(n) {
          //  $(this).mouseout(function(){
			//	$("#book_type_all p").mouseout(function(){
			//		$(".type_detailed").hide();
				//	});
				//$("#book_type_all p").mouseout(function(){
				//	$(".type_detailed").hide();
					//});
			//	});
        //});
		//馆藏目录中取消所选择的小分类
			$("#cancel_choose").click(function(){
				$("#now_choose").text("全管图书" + "(300W本)");
				});
		//馆藏目录中书籍显示方式切换
		$(".page_ch_mo").hide();
		$($(".page_ch_mo")[0]).show();//显示图文显示方式对应的上下页选择模块
		$($(".newbook_main")[0]).show();//显示图文显示方式
		$(".list_page").hide();
		$($(".list_page")[0]).show();//显示列表的第一页
		$(".pic_page").hide();
		$($(".pic_page")[0]).show();//显示图文显示的的第一页
		$($(".switch_dis")[0]).css("background","rgb(51,122,183)");
		$($(".switch_dis")[0]).css("color","#fff");
		$(".switch_dis").each(function(n) {
            $(this).click(function(){
				//$(".switch_dis").css("border","2px solid #999");
				$(".switch_dis").css("background","#eee");
				$(".switch_dis").css("color","#888");
				//$(this).css("border","2px solid blue");
				$(this).css("background","rgb(51,122,183)");
				$(this).css("color","#fff");
				$(".newbook_main").hide();
				$($(".newbook_main")[n]).show();
				$(".page_ch_mo").hide();
				$($(".page_ch_mo")[n]).show();//显示所对应的上下页选择模块
				if($(this).text() == "列表显示"){
					$(".main").css("height","800px");
					$(".newb_main_bg").css("height","635px");		
					}
					else{
						$(".main").css("height","2200px");
						$(".newb_main_bg").css("height","98%");
						}
				});
        });
		//列表显示方式下的上一页下一页按钮绑定
		var dis_block = function(){
			$("#alert_text").show();
				setTimeout(function(){
					$("#alert_text").fadeOut(400);
					},800);
			}
		var list_page = 0;
		$("#list_all_pages").text($(".list_page").length);//获取总页数
		$("#list_pre_page").click(function(){
			if(list_page == 0){
				//alert("已是第1页，不能再往前了");
				$("#alert_text p").text("已是第1页，不能再往前了");
				dis_block();
				//$("#alert_text").fadeOut(3500);
			}else{
				list_page--;
				$(".list_page").hide();
				$($(".list_page")[list_page]).show();
				$("#list_now_page").text(list_page + 1);
			}
			});
		$("#list_next_page").click(function(){
			if(list_page == $(".list_page").length-1){
				//alert("已是最后一页");
				$("#alert_text p").text("已是最后一页，不能再往后了");
				dis_block();
			}else{
				list_page++;
				$(".list_page").hide();
				$($(".list_page")[list_page]).show();
				$("#list_now_page").text(list_page + 1);
			}
			});
		//列表显示方式下的上一页下一页按钮绑定
		var pic_page = 0;
		$("#pic_all_pages").text($(".pic_page").length);//获取总页数
		$(".pic_page").hide();
		$($(".pic_page")[0]).show();
		$("#pic_pre_page").click(function(){
			if(pic_page == 0){
				$("#alert_text p").text("已是第1页，不能再往前了");
				dis_block();
			}else{
				pic_page--;
				$(".pic_page").hide();
				$($(".pic_page")[pic_page]).show();
				$("#pic_now_page").text(pic_page + 1);
			}
			});
		$("#pic_next_page").click(function(){
			if(pic_page == $(".pic_page").length-1){
				$("#alert_text p").text("已是最后一页，不能再往后了");
				dis_block();
			}else{
				pic_page++;
				$(".pic_page").hide();
				$($(".pic_page")[pic_page]).show();
				$("#pic_now_page").text(pic_page + 1);
			}
			});
		//列表显示预约按钮
		$(".list_order").each(function(n) {
            $(this).click(function(){
				if($("#person_name").text() != "登录"){
				if($(this).text() == "预约"){
				 $(this).text("取消预约");
				 $(this).css("background","rgb(92,192,222)");
				 $(this).css("color","rgb(250,250,250)");
				}else{
					$(this).text("预约");
					$(this).css("background","rgb(255,255,255)");
					$(this).css("color","rgb(0,0,0)");
					}
				}
				});
        });
		//列表显示加入书架
		$(".list_add").each(function(n) {
            $(this).click(function(){
				if($("#person_name").text() != "登录"){
				if($(this).text() == "加入书架"){
				 $(this).text("已在书架");
				// $(this).css("background","#ffff33");
				  $(this).css("background","rgb(92,184,92)");
				  $(this).css("color","#fff");
				}else{
					$(this).text("加入书架");
					$(this).css("background","rgb(255,255,255)");
					$(this).css("color","#000");
					}
				}
				});
        });
		//图文显示预约按钮
		$(".add_collect").each(function(n) {
            $(this).click(function(){
				if($("#person_name").text() != "登录"){
				if($(this).text() == "预约"){
				 $(this).text("取消预约");
				 $(this).css("font-size","12px");
				 $(this).css("background","rgb(92,184,92)");
				}else{
					$(this).text("预约");
					$(this).css("font-size","16px");
					$(this).css("background","rgb(226,56,59)");
					}
				}
				});
        });
		//图文显示加入书架
		$(".add_my_li").each(function(n) {
            $(this).click(function(){
				if($("#person_name").text() != "登录"){
				if($(this).text() == "加入书架"){
				 $(this).text("已在书架");
				 $(this).css("background","rgb(92,184,92)");

				}else{
					$(this).text("加入书架");
					$(this).css("background","rgb(226,56,59)");
					}
				}
				});
        });
		//备忘录事件
		$(".memorandum_img").click(function(){
				$(".memorandumpage").slideToggle(800);
			});
		if(window.localStorage.getItem("memo_number") == null){
			window.localStorage.setItem("memo_number",0);
		}
		if(window.localStorage.getItem("memorandum") == null){
			window.localStorage.setItem("memorandum","暂无笔记")
		}
		$(".memorandumpage").change(function(){
			if($("#person_name").text() != "登录"){
			var memo_number = window.localStorage.getItem("memo_number");
			memo_number++;
			var time = new Date();
			var year = time.getFullYear();
			var month = time.getMonth();
			var day = time.getDate();
			var hour = time.getHours();
			var minutes = time.getMinutes();
			var read = new Object;
			read.content = $("#memo_content").val();
			read.time = year + "/" + (month+1) + "/" + day + "  " + hour + ":" + minutes;
			read.book_name = $("#book_name").text();
			var str = JSON.stringify(read);
			var memorandum_number = "memorandum" + memo_number;
			window.localStorage.setItem(memorandum_number,str);
			window.localStorage.setItem("memo_number",memo_number);
			}
			});
		//$(".book_record").text(window.localStorage.getItem("memorandum"));
		//$(".record_time").text("时间： " + window.localStorage.getItem("record_time"));
		for(var n = 100;n > 0;n--){
			var memorandum_number = "memorandum" + n;
			//alert(window.localStorage.getItem(info_number));
			if(window.localStorage.getItem(memorandum_number) != null){
				var str = window.localStorage.getItem(memorandum_number);
				var read = JSON.parse(str);
				var content = read.content;
				var send_time = read.time;
				var book_name = read.book_name;
				var span = document.createElement("span");
				var p = document.createElement("p");
				var div = document.createElement("div");
				var from_div = document.createElement("div");
				from_div.innerHTML = '<input type="checkbox"/>' + "摘自："+ '<span>' + "《" + book_name + "》" + '</span>';
				p.innerHTML = content;
				span.innerHTML = '<p style="text-align:right;">' + "时间:  " +  read.time + '</p>';
				div.appendChild(from_div);
				div.appendChild(p);
				div.appendChild(span);
				$(".record_div").append(div);
				//alert(content,send_time);
				}
			}
		//for(var i = 0;i<100;i++){
			//var number = window.localStorage.getItem("memorandum"+i);
			//if(number != null){
				//alert(number);
				//}
			//}
		//每个大分类的详细分类的显示位置
		var type_detailed1 = 60;
		for(var i = 0;i<$(".type_detailed").length;i++){
			var s = type_detailed1 + "px";
			$($(".type_detailed")[i]).css("top",s);
			//alert($($(".type_detailed")[i]).css("top"));
			type_detailed1 +=32;
			}
			
		//座位预约模块中的通知公告模块
		$($(".seat_notice")[0]).show();
		$($(".seat_notice_choose ul li")[0]).css("border-top","4px solid blue");
		$($(".seat_notice_choose ul li")[0]).css("background","rgba(243,250,254,1)");
		$(".seat_notice_choose ul li").each(function(n) {
            $(this).click(function(){
				$(".seat_notice_choose ul li").css("border-top","4px solid rgba(102,102,102,1)");
				$(".seat_notice_choose ul li").css("background","none");
				$(this).css("border-top","4px solid blue");
				$(this).css("background","rgba(243,250,254,1)");
				$(".seat_notice").hide();
				$($(".seat_notice")[n]).show();
				});
        });
		$(".seat_notice ul li").hover(function(){
			$(this).css("border-left","3px solid rgb(36,168,213)");
			$(this).css("color","rgb(89,196,241)");
			},function(){
				$(this).css("border-left","3px solid rgba(243,250,254,1)");
				$(this).css("color","rgb(0,0,0)");
				});
				
		//问题反馈
		$("#problem_text").focus(function(){
			$(this).attr('placeholder','')
		});
		$("#problem_text").blur(function(){
			$(this).attr('placeholder','您可以将您的问题详细的在这里说明，若需要上传图片或文件，可点击下方按钮上传。我们会尽快解决问题，如有给您带来的不便，敬请谅解。')
		});
	})
