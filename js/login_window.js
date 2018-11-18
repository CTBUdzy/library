$(function(){
	//我的图书馆登录验证模块
	$("#other3_module,.my_lib").click(function(){
		if($("#person_name").text() == "登录"){
			openDialog();
		}else{
			var s = "user=" + $("#person_name").text() + "&pass=" + $("#pass").value; 
			window.location.href="my_lib.html?" + s;
			}
	});
	//关于本管传递个人信息
	$("#other2_module").click(function(){
		if($("#person_name").text() == "登录"){
			window.location.href="introduce.html";
		}else{
			var s = "user=" + $("#person_name").text() + "&pass=" + $("#pass").value; 
			window.location.href="introduce.html?" + s;
		}
	});
	//新书推荐传递个人信息
	$("#new_books").click(function(){
		if($("#person_name").text() == "登录"){
			window.location.href="new_books.html";
		}else{
			var s = "user=" + $("#person_name").text() + "&pass=" + $("#pass").value; 
			window.location.href="new_books.html?" + s;
		}
	});
	//阅读图书传递个人信息
	$(".reading_book").click(function(){
		if($("#person_name").text() == "登录"){
			window.location.href="reading_book.html";
		}else{
			var s = "user=" + $("#person_name").text() + "&pass=" + $("#pass").value; 
			window.location.href="reading_book.html?" + s;
		}
	});
	//阅读图书传递个人信息
	$(".reading_book2").click(function(){
		if($("#person_name").text() == "登录"){
			window.location.href="reading_book2.html";
		}else{
			var s = "user=" + $("#person_name").text() + "&pass=" + $("#pass").value; 
			window.location.href="reading_book2.html?" + s;
		}
	});
	//馆藏目录传递个人信息
	$(".book_catalog").click(function(){
		if($("#person_name").text() == "登录"){
			window.location.href="book_catalog.html";
		}else{
			var s = "user=" + $("#person_name").text() + "&pass=" + $("#pass").value; 
			window.location.href="book_catalog.html?" + s;
		}
	});
	//预约座位传递个人信息模块
	$(".Seat_reservation").click(function(){
		if($("#person_name").text() == "登录"){
			window.location.href="seat_reservation.html";
		}else{
			var s = "user=" + $("#person_name").text() + "&pass=" + $("#pass").value; 
			window.location.href="seat_reservation.html?" + s;
		}
	});
	//服务项目传递个人信息
	$(".service_item").click(function(){
		if($("#person_name").text() == "登录"){
			window.location.href="service_item.html";
		}else{
			var s = "user=" + $("#person_name").text() + "&pass=" + $("#pass").value; 
			window.location.href="service_item.html?" + s;
		}
	});
	//文献数据库传递个人信息
	$(".Bibliography").click(function(){
		if($("#person_name").text() == "登录"){
			window.location.href="Bibliography.html";
		}else{
			var s = "user=" + $("#person_name").text() + "&pass=" + $("#pass").value; 
			window.location.href="Bibliography.html?" + s;
		}
	});
	//联系我们传递个人信息
	$(".contact_us").click(function(){
		if($("#person_name").text() == "登录"){
			window.location.href="contact_us.html";
		}else{
			var s = "user=" + $("#person_name").text() + "&pass=" + $("#pass").value; 
			window.location.href="contact_us.html?" + s;
		}
	});
	//点击登录按钮登录，若已登录，则点击会弹出退出样式
	$("#person_name").click(function(){
		if($("#person_name").text() == "登录"){
			openDialog();
		}
		else{
			$("#quit").slideToggle();
		}
	});
	//点击退出按钮，退出登录
	$("#quit").click(function(){
		$("#person_name").text("登录");
		$("#quit").hide();
		})
	//座位预约中的个人中心验证是否登录
	$(".seat_login").click(function(){
		if($("#person_name").text() == "登录"){
			openDialog();
		}
	});
	//预约图书验证登录
	$(".list_add").click(function(){
		if($("#person_name").text() == "登录"){
			openDialog();
		}
	});
	$(".list_order").click(function(){
		if($("#person_name").text() == "登录"){
			openDialog();
		}
	});
	$(".add_my_li").click(function(){
		if($("#person_name").text() == "登录"){
			openDialog();
		}
	});
	$(".add_collect").click(function(){
		if($("#person_name").text() == "登录"){
			openDialog();
		}
	});
	//进入注册界面
	$("#register_a").click(function(){
		$("#register").css("display","block");
		});
	//注册界面退出
	$("#register .close,#return_login").click(function(){
		$("#register").css("display","none");
		});
	//返回首页
	$("#return_index").click(function(){
		$("#register").css("display","none");
		$("#pageCover").css("display","none");
		$("#dlgTest").css("display","none");
		});
	
})
function EventTarget(){
    this.handlers={};
}
EventTarget.prototype={
	constructor:EventTarget,
	addHandler:function(type,handler){
		if(typeof this.handlers[type]=='undefined'){
			this.handlers[type]=new Array();
		}
		this.handlers[type].push(handler);
	},
	removeHandler:function(type,handler){
		if(this.handlers[type] instanceof Array){
			var handlers=this.handlers[type];
			for(var i=0,len=handlers.length;i<len;i++){
				if(handler[i]==handler){
					handlers.splice(i,1);
					break;
				}
			}
		}
	},
	trigger:function(event){
		if(!event.target){
			event.target=this;
		}
		if(this.handlers[event.type] instanceof Array){
			var handlers=this.handlers[event.type];
			for(var i=0,len=handlers.length;i<len;i++){
				handlers[i](event);
			}
		}
	}
}

function extend(subType,superType){
	var prototype=Object(superType.prototype);
	prototype.constructor=subType;
	subType.prototype=prototype;
}

function Dialog(id){
	EventTarget.call(this)
	this.id=id;
	var that=this;
	document.getElementById(id).children[0].onclick=function(){
		that.close();
	}
}
extend(Dialog,EventTarget);

Dialog.prototype.show=function(){
	var dlg=document.getElementById(this.id);
	dlg.style.display='block';
	dlg=null;
	this.trigger({type:'open'});
}
Dialog.prototype.close=function(){
	var dlg=document.getElementById(this.id);
	dlg.style.display='none';
	dlg=null;
	this.trigger({type:'close'});
}
function openDialog(){
    var dlg=new Dialog('dlgTest');
    dlg.addHandler('close',function(){
        document.getElementById('pageCover').style.display='none';
    });
    dlg.addHandler('open',function(){
        document.getElementById('pageCover').style.display='block';
    });	
    dlg.show();
}
