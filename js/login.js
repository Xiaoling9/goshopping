Bmob.initialize("4750c76647d59c2cfe99dc4a8a49cfda", "c1b71ebe933cd66cd87e6142a30372cc");
BmobSocketIo.initialize("4750c76647d59c2cfe99dc4a8a49cfda");

function checkUser(){
	// alert("xixi");
	var userName = $("#userName").val();
	var pwd = $("#pwd").val();
	Bmob.User.logIn(userName, pwd, {
	  success: function(user) {
	  	alert("登录成功");
	  	var currentUser = Bmob.User.current();
			if (currentUser) {
			   window.location.href="firstpage.html";
			}
			//  else {
			//     // show the signup or login page
			// }
	 
	  },
	  error: function(user, error) {
	  	alert("登录失败");
	  	alert("Error" + error.code + "" + error.message);
	  }
	});

}