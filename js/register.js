Bmob.initialize("4750c76647d59c2cfe99dc4a8a49cfda", "c1b71ebe933cd66cd87e6142a30372cc");
BmobSocketIo.initialize("4750c76647d59c2cfe99dc4a8a49cfda");

function checkRegisterinfo(){
	var email = $("#email").val();
	var userName = $("#userName").val();
	var pwd = $("#pwd").val();
	var repwd = $("#repwd").val();
	if(pwd == repwd){
		var user = new Bmob.User();
		user.set("username", userName);
		user.set("password", pwd);
		user.set("email", email);
		user.signUp(null, {
			success: function(user) {
				alert("注册成功！");
				window.location.href ="login.html"
			},
			error: function(user, error) {
				alert("注册失败！");
			alert("Error: " + error.code + " " + error.message)
			}
		});
	}else{
		alert("两次输入的密码不匹配！");
	}	
}

