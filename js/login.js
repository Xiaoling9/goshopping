Bmob.initialize("4750c76647d59c2cfe99dc4a8a49cfda", "c1b71ebe933cd66cd87e6142a30372cc");
BmobSocketIo.initialize("4750c76647d59c2cfe99dc4a8a49cfda");

function checkUser(){
	alert("xixi");
	// var userName = $("#userName").val();
	// var pwd = $("#pwd").val();
	// alert(userName);
	var user = new Bmob.User();
	user.set("username", "66666");
	user.set("password", "my pass");
	user.set("email", "66666@example.com");
	user.set("phone", "415-392-0202");
	user.signUp(null, {
			success: function(user) {
				alert("chenggong");
			},
			 error: function(user, error) {
			alert("Error: " + error.code + " " + error.message);
			}
	});
	// var user = new Bmob.User();
	// alert(userName);
	// Bmob.User.logIn("userName", "pwd", {
	//   success: function(user) {
	//   	alert("登录成功")；
	//     // Do stuff after successful login.
	//   },
	//   error: function(user, error) {
	//   	alert("登录失败")；
	//   	alert("Error" + error.code + "" + error.message);
	//     // The login failed. Check error to see why.
	//   }
	// });
}