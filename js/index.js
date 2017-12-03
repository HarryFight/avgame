const DEBUG = false;

//游戏步骤定义
var step = {
	phone_login_suc: 200,

	mail_1_pushed: 210,
	see_mail_1: 300,
	app_login_suc: 400,

	chat_room1_c1_push: 490, //群聊1  1-167
	chat_room1_c1_end: 600, //等价 mail_2_pushed
	mail_2_pushed: 600,

	see_mail_2: 700,

	chat_room1_c2_push: 790, //看完邮件后群聊1继续   200-202
	chat_room1_c2_end: 900,

	chat_room2_push: 1000, //room2聊天开始
	chat_room2_end: 1100,

	chat_room1_c3_push: 1200, //群聊1继续   203-209
	chat_room1_c3_end: 1300,

	chat_room3_push: 1400, //room3聊天开始
	chat_room3_end: 1500,

	chat_room1_c4_push: 1600, //群聊1继续  8001-250
	chat_room1_c4_end: 1700,

	chat_room4_push: 1800,
	chat_room4_end: 1900,

	chat_room5_push: 2000,
	chat_room5_end: 2100,

	chat_room6_push: 2200,
	chat_room6_end: 2300,
};
//游戏进行时
window._gameRuntime = {

	//游戏进行的进度
	step: 1,

	//聊天室的进度
	chatProgress: {},

	chatTimer: null,

	//音乐控制对象
	music: {
		bg: null,
		chatRoom: null
	}
};

var GameUI = new Vue({
	el: '#app',
	data: {
		// 全局控制参数
		currentPage: '',

		// 界面显示管理
		contentShow: {
			'login': false,
			'desktop': false,
			'msg': false,
			'msgDetail': false,
			'psw': false,
			'call': false,
			'image': false,
			'imageList': false,
			'imageListDetail': false,
			'mail': false,
			'mailDetail': false
		},

		// 聊天室列表
		chatRoomList: [],
		// 聊天列表
		chatList: [],
		// 聊天回复
		chatAnswerShow: false,
		chatAnswer: [],
		// 当前聊天室
		currentChatRoom: {
			roomId: 1,
			roomName: ''
		},
		// 当前进行到的对话
		currentChatMsgId: 1,
		// 聊天室对话停止控制
		chatStopCtrl:{
			1:false,
			2:false,
			3:false,
			4:false,
			5:false,
			6:false
		},


		// 邮件列表
		mailList: [],
		mailDetail: {},

		UI: {
			isLogin:false,
			isLoginApp:false,
			app_icon_show: false,
			mail_icon_reddot: false,
			app_icon_reddot: false
		}
	},
	mounted: function() {
		var self = this;
		//页面初始化，展示桌面
		this.showPage('login');

		setTimeout(function() {
			helper.playMusicInit();
			helper.playMusic('bg');//启动背景音频
		}, 500);


		/**
		 * 剧情事件们
		 */

		//可能有时延
		bus.once('mail_1_pushed',function() {
			var firstMail = helper.getMailDetailData(1); //展示id为1的第一封邮件
			firstMail.reddot = true; //有红点
			self.mailList.push(firstMail);

			self.UI.mail_icon_reddot = true;
			window._gameRuntime.step = step.mail_1_pushed;
		});
		bus.once('see_mail_1',function() {
			self.mailList[0].reddot = false;
			self.UI.mail_icon_reddot = false;
			window._gameRuntime.step = step.see_mail_1;

			setTimeout(function(){
				bus.emit('chat_room1_c1_push');
			},1000)
		});

		//可能有时延
		bus.once('chat_room1_c1_push',function(){
			var firstChat = helper.getChatRoomData(1);
			firstChat.reddot = true; //有红点
			self.chatRoomList.push(firstChat);

			self.UI.app_icon_show = true;
			self.UI.app_icon_reddot = true;
			window._gameRuntime.step = step.chat_room1_c1_push;
		});

		bus.once('chat_room1_c1_end',function(){
			window._gameRuntime.step = step.chat_room1_c1_end;
			self.chatRoomList[0].reddot = false;
			self.UI.app_icon_reddot = false;

			self.chatStopCtrl['1'] = true;

			setTimeout(function(){
				bus.emit('mail_2_pushed');
			},1000);
		});

		//可能有时延
		bus.once('mail_2_pushed',function() {
			var Mail = helper.getMailDetailData(2); //展示id为2的邮件
			Mail.reddot = true; //有红点
			self.mailList.push(Mail);

			self.UI.mail_icon_reddot = true;
			window._gameRuntime.step = step.mail_2_pushed;
		});
		bus.once('see_mail_2',function() {
			self.mailList[1].reddot = false;
			self.UI.mail_icon_reddot = false;
			window._gameRuntime.step = step.see_mail_2;

			setTimeout(function(){
				bus.emit('chat_room1_c2_push')
			},1000)
		});

		//可能有时延
		bus.once('chat_room1_c2_push',function(){
			self.chatRoomList[0].reddot = true; //有红点
			self.UI.app_icon_reddot = true;

			self.chatStopCtrl['1'] = false;

			window._gameRuntime.step = step.chat_room1_c2_push;
		});

		bus.once('chat_room1_c2_end',function(){
			window._gameRuntime.step = step.chat_room1_c2_end;

			self.chatRoomList[0].reddot = false;
			self.UI.app_icon_reddot = false;

			self.chatStopCtrl['1'] = true;

			setTimeout(function(){
				bus.emit('chat_room2_push');
			},1000)
		});

		//可能有时延
		bus.once('chat_room2_push',function(){
			var Chat = helper.getChatRoomData(2);
			Chat.reddot = true; //有红点
			self.chatRoomList.push(Chat);
			self.UI.app_icon_reddot = true;

			window._gameRuntime.step = step.chat_room2_push;
		});
		bus.once('chat_room2_end',function(){
			window._gameRuntime.step = step.chat_room2_end;

			self.chatRoomList[1].reddot = false;
			self.UI.app_icon_reddot = false;

			self.chatStopCtrl['2'] = true;

			setTimeout(function(){
				bus.emit('chat_room1_c3_push');
			},1000)
		});

		//可能有时延
		bus.once('chat_room1_c3_push',function(){
			self.chatRoomList[0].reddot = true; //有红点
			self.UI.app_icon_reddot = true;

			self.chatStopCtrl['1'] = false;

			window._gameRuntime.step = step.chat_room1_c3_push;
		});
		bus.once('chat_room1_c3_end',function(){
			window._gameRuntime.step = step.chat_room1_c3_end;

			self.chatRoomList[0].reddot = false;
			self.UI.app_icon_reddot = false;

			self.chatStopCtrl['1'] = true;

			setTimeout(function(){
				bus.emit('chat_room3_push');
			},1000)
		});

		//可能有时延
		bus.once('chat_room3_push',function(){
			var Chat = helper.getChatRoomData(3);
			Chat.reddot = true; //有红点
			self.chatRoomList.push(Chat);
			self.UI.app_icon_reddot = true;

			window._gameRuntime.step = step.chat_room3_push;
		});
		bus.once('chat_room3_end',function(){
			window._gameRuntime.step = step.chat_room3_end;

			self.chatRoomList[2].reddot = false;
			self.UI.app_icon_reddot = false;

			self.chatStopCtrl['3'] = true;

			setTimeout(function(){
				bus.emit('chat_room4_push');
			},1000)
		});

		//可能有时延
		bus.once('chat_room1_c4_push',function(){
			self.chatRoomList[0].reddot = true; //有红点
			self.UI.app_icon_reddot = true;

			self.chatStopCtrl['1'] = false;

			window._gameRuntime.step = step.chat_room1_c4_push;
		});
		bus.once('chat_room1_c4_end',function(){
			window._gameRuntime.step = step.chat_room1_c4_end;

			self.chatRoomList[0].reddot = false;
			self.UI.app_icon_reddot = false;

			self.chatStopCtrl['1'] = true;

			setTimeout(function(){
				bus.emit('chat_room4_push');
			},1000)
		});

		//可能有时延
		bus.once('chat_room4_push',function(){
			var Chat = helper.getChatRoomData(4);
			Chat.reddot = true; //有红点
			self.chatRoomList.push(Chat);
			self.UI.app_icon_reddot = true;

			window._gameRuntime.step = step.chat_room4_push;
		});
		bus.once('chat_room4_end',function(){
			window._gameRuntime.step = step.chat_room4_end;

			self.chatRoomList[3].reddot = false;
			self.UI.app_icon_reddot = false;

			self.chatStopCtrl['4'] = true;

			setTimeout(function(){
				bus.emit('chat_room5_push');
			},1000)
		});

		//可能有时延
		bus.once('chat_room5_push',function(){
			var Chat = helper.getChatRoomData(5);
			Chat.reddot = true; //有红点
			self.chatRoomList.push(Chat);
			self.UI.app_icon_reddot = true;

			window._gameRuntime.step = step.chat_room5_push;
		});
		bus.once('chat_room5_end',function(){
			window._gameRuntime.step = step.chat_room5_end;

			self.chatRoomList[4].reddot = false;
			self.UI.app_icon_reddot = false;

			self.chatStopCtrl['5'] = true;

			setTimeout(function(){
				bus.emit('chat_room6_push');
			},1000)
		});

		//可能有时延
		bus.once('chat_room6_push',function(){
			var Chat = helper.getChatRoomData(6);
			Chat.reddot = true; //有红点
			self.chatRoomList.push(Chat);
			self.UI.app_icon_reddot = true;

			window._gameRuntime.step = step.chat_room6_push;


		});

		bus.once('chat_room6_end',function(){
			window._gameRuntime.step = step.chat_room6_end;

			self.chatRoomList[5].reddot = false;
			self.UI.app_icon_reddot = false;

			self.chatStopCtrl['6'] = true;

			console.log('剧情结束')
		});




		/**
		 *  end
		 * */
	},
	methods: {
		/**
		 * 展示对应页面
		 * @param page
		 */
		showPage: function(page) {
			var self = this;
			self.currentPage = page;

			for (var pageKey in self.contentShow) {
				self.contentShow[pageKey] = false
			}

			self.contentShow[page] = true;
		},

		/**
		 * 动作处理
		 * @param action
		 */
		onAction: function(action) {
			var self = this;

			switch (action) {
				case 'checkLogin':
					var psw = $('#loginPsw').val();

					if (DEBUG || psw == window._config.loginPsw) {
						self.onAction('toHome');

						window._gameRuntime.step = step.phone_login_suc;
						self.UI.isLogin = true;

						setTimeout(function(){
							bus.emit('mail_1_pushed');
						},1000)

					} else {
						alert('登录密码错误，请重试')
					}

					//清空输入框
					$('#pswText').val('');
					break;
				case 'toHome':
					if (self.UI.isLogin) {
						self.showPage('desktop');
					} else {
						self.showPage('login');
					}
					break;
				case 'openMsg':
					self.showPage('msg');
					break;
				case 'openContacts':
					var roomId = arguments[1];
					self.currentChatRoom = helper.getChatRoomData(roomId);

					if (window._gameRuntime.chatProgress[roomId]) {

						//当此聊天室有快照，渲染并load
						var _chatProgress = window._gameRuntime.chatProgress[roomId];
						self.chatList = _chatProgress.chatList;
						self.currentChatMsgId = _chatProgress.chatMsgId;
						$(window).scrollTop(9999999);

						//当前聊天是否中止
						if(!self.chatStopCtrl[roomId]){
							main.startChat(self.currentChatMsgId);
						}
					} else {

						main.startChat(1);
					}

					//启动聊天的背景音乐
					helper.playMusic('chatRoom');
					self.showPage('msgDetail');
					break;
				case 'closeContacts':
					var nextAction = arguments[1];

					var chatProgress = {
						//dom渲染数据
						chatList: [].concat(self.chatList),
						//当前进行到的消息
						chatMsgId: self.currentChatMsgId,
						roomId: self.currentChatRoom.roomId
					};

					//保存当前对话的快照
					window._gameRuntime.chatProgress[chatProgress.roomId] = chatProgress;

					//清空一下聊天dom
					self.chatList = [];
					self.chatAnswer = [];
					self.chatAnswerShow = false;
					clearTimeout(window._gameRuntime.chatTimer);

					//继续执行后续动作
					helper.playMusic('bg');
					self.onAction(nextAction);
					break;
				case 'openApp':
					if (self.UI.isLoginApp) {
						self.showPage('msg');
					} else {
						self.showPage('psw');
					}

					break;
				case 'checkAppPsw': //这个是app的解锁
					var psw = $('#pswText').val();

					if (DEBUG || psw == window._config.password) {
						window._gameRuntime.step = step.app_login_suc;
						self.UI.isLoginApp = true;
						self.onAction('openMsg');
					} else {
						alert('密码错误，请重试')
					}

					//清空输入框
					$('#pswText').val('');
					break;
				case 'openCall':
					self.showPage('call');
					break;
				case 'openImage':
					self.showPage('image');
					break;
				case 'openImageList':
					self.showPage('imageList');
					break;
				case 'openImageListDetail':
					self.showPage('imageListDetail');
					break;
				case 'openMail':
					self.showPage('mail');
					break;
				case 'openMailDetail':
					var mailId = arguments[1];
					if(mailId == 1){
						bus.emit('see_mail_1',mailId)
					}else if(mailId == 2){
						bus.emit('see_mail_2',mailId)
					}

					self.mailDetail = helper.getMailDetailData(mailId);

					self.showPage('mailDetail');
					break;
			}
		},

		/**
		 * 选择回复
		 * @param answer
		 */
		onSelectAnswer: function(answer) {
			var actorInfo = helper.getActor(window._config.mainActorId);
			var newMsg = Object.assign({
				isFriend: false
			}, actorInfo, answer);

			this.chatList.push(newMsg);
			this.chatAnswerShow = false;

			//继续流程
			main.answerChat(newMsg);
		},

		/**
		 * 聊天框加载消息
		 * @param msg
		 */
		pushMsg: function(msg) {
			this.chatList.push(msg);

			this.$nextTick(function() {
				$('.phone-msg-detail').scrollTop(999999);
			})
		},

		/**
		 * 聊天框选项加载
		 */
		answerMsg: function(chatAnswer) {
			this.chatAnswer = chatAnswer;
			this.chatAnswerShow = true;
		}
	}
});

/**
 * 主流程控制
 */
var main = {
	startChat: function(chatMsgId) {
		console.log('聊天开始进行');
		main.nextChat(chatMsgId);
	},
	nextChat: function(id) {

		if (!id) {
			console.log('无效id，流程中止 id:', id);
			return;
		}

		var data = helper.getChatData(GameUI.$data.currentChatRoom.roomId, id);
		if (!data) {
			console.log(id + '聊天数据为空');
			return;
		}

		if (data.chatType == 1) { //对话消息
			var _chat = helper.chatDataFormate(data);
			console.log(id, _chat);

			//加入渲染
			GameUI.pushMsg(_chat);

			_chat.delay = _chat.delay || 0; //处理dely

			//当前对话指针移动到next
			GameUI.$data.currentChatMsgId = _chat.next;

			//所有对话经此函数判断，是否对话停止
			var _isStop = main.stopChatHandler(GameUI.$data.currentChatRoom.roomId, id);
			if(!_isStop){
				window._gameRuntime.chatTimer = setTimeout(function() {
					main.nextChat(_chat.next || 0);
				}, _chat.delay);
			}


		} else if (data.chatType == 2) { //回答消息
			var _answer = helper.chatAnswerFormate(data);
			console.log(id, _answer);

			//当前对话指针移动到next
			GameUI.$data.currentChatMsgId = id;
			GameUI.answerMsg(_answer.msgOption);
		} else {
			console.log(id, '无效chatType类型')
		}
	},
	stopChatHandler: function(roomId,chatId){
		var _isStep = false;
		if(roomId == 1 && chatId == 167){
			_isStep = true;
			bus.emit('chat_room1_c1_end');
		}

		if(roomId == 1 && chatId == 202){
			_isStep = true;
			bus.emit('chat_room1_c2_end');
		}

		if(roomId == 1 && chatId == 209){
			_isStep = true;
			bus.emit('chat_room1_c3_end');
		}

		if(roomId == 1 && chatId == 250){
			_isStep = true;
			bus.emit('chat_room1_c4_end');
		}

		if(roomId ==2 && chatId == 20){
			_isStep = true;
			bus.emit('chat_room2_end');
		}

		if(roomId ==3 && chatId == 14){
			_isStep = true;
			bus.emit('chat_room3_end');
		}

		if(roomId ==4 && chatId == 17){
			_isStep = true;
			bus.emit('chat_room4_end');
		}

		if(roomId ==5 && chatId == 15){
			_isStep = true;
			bus.emit('chat_room5_end');
		}

		if(roomId ==6 && chatId == 23){
			_isStep = true;
			bus.emit('chat_room6_end');
		}

		return _isStep;
	},
	resumeChatHandler: function(roomId,chatId,callback){

	},
	answerChat: function(answer) {
		answer.delay = answer.delay || 0; //处理dely
		window._gameRuntime.chatTimer = setTimeout(function() {
			main.nextChat(answer.next || 0);
		}, answer.delay);
	}
};

/**
 * 辅助函数
 */
var helper = {
	//获取单条聊天数据
	getChatData: function(roomId, msgId) {
		return window._config.chatRoomMap[roomId].chatMsgMap[msgId];
	},
	//聊天数据填充格式化
	chatDataFormate: function(data) {
		var _actorInfo = helper.getActor(data.actorId);
		data = Object.assign({}, data, _actorInfo);
		return data;
	},
	//回答数据填充格式化
	chatAnswerFormate: function(data) {
		return data;
	},
	//获取角色具体信息
	getActor: function(actorId) {
		return window._config.actorMap[actorId];
	},
	//获取聊天室列表信息
	getChatRoomListData: function() {
		var roomList = [];
		var _Map = window._config.chatRoomMap;
		for (var roomId in _Map) {
			roomList.push({
				roomId: roomId,
				roomName: _Map[roomId].roomName,
				roomImg: _Map[roomId].roomImg
			})
		}

		return roomList;
	},
	//获取某个聊天室信息
	getChatRoomData: function(roomId) {
		var _Map = window._config.chatRoomMap[roomId];

		return {
			roomId: roomId,
			roomName: _Map.roomName,
			roomImg: _Map.roomImg
		}
	},

	//获取邮件列表信息
	getMailListData: function() {
		var mailList = [];
		var _Map = window._config.mailMap;
		for (var mailId in _Map) {

			mailList.push(Object.assign({
				mailId: mailId
			}, _Map[mailId]));
		}

		return mailList;
	},
	//获取某个邮件信息
	getMailDetailData: function(mailId) {
		var _Map = window._config.mailMap[mailId];
		_Map.mailId = mailId;

		return _Map;
	},

	playMusicInit: function() {
		//背景音乐对象
		window._gameRuntime.music.bg = new Audio(window._config.music.bg);
		window._gameRuntime.music.chatRoom = new Audio(window._config.music.chatRoom);
		window._gameRuntime.music.bg.addEventListener("ended", function() {
			window._gameRuntime.music.bg.play();//启动音频
		});
		window._gameRuntime.music.chatRoom.addEventListener("ended", function() {
			window._gameRuntime.music.chatRoom.play();//启动音频
		});
	},
	playMusic: function(scene) {
		if(DEBUG){
			return;
		}

		var musicObj = window._gameRuntime.music;
		for (var key in musicObj) {
			musicObj[key].pause();
		}

		musicObj[scene].currentTime = 0;
		musicObj[scene].play();
	}
};


//监听step变化并输出
(function(){
	Object.defineProperty(_gameRuntime, 'step', {
		set: function(value) {
			var _step = value;

			for(var key in step) {
				if (step[key] == _step) {
					console.log('当前step已经进行到',key);
				}
			}
		}
	});
})();