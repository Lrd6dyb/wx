
(function(window){
	var u = {};
	//========== 配置服务器 ===================
	u.serverId = 0;
	u.serverURL = [
	    "http://localhost:3000/"  //开发服务器
	      //测试服务器
	       //正式服务器
	];
	u.getServerURL = function() {
		return u.serverURL[u.serverId];
	}

	//=== end ===
	window.Surl= u.getServerURL();
})(window);