//游戏进行时
window._gameRuntime = {

	//游戏进行的进度
	step: 1,

	//聊天室的进度
	chatProgress: {},

	chatTimer: null,

	//音乐控制对象
	music:{
		bg:null,
		chatRoom:null
	}
};

var GameUI = new Vue({
	el: '#app',
	data: {
		// 全局控制参数
		currentPage: '',

		// 界面显示管理
		contentShow: {
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


		// 邮件列表
		mailList: [],
		mailDetail: {},
	},
	mounted: function() {
		var self = this;
		//页面初始化，展示桌面
		this.showPage('desktop');

		// setTimeout(function(){
		// 	helper.playMusicInit();
		// 	helper.playMusic('bg');//启动背景音频
		// },1000);
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
				case 'toHome':
					self.showPage('desktop');
					break;
				case 'openMsg':
					self.chatRoomList = helper.getChatRoomListData();

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
						main.startChat(self.currentChatMsgId);
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
				case 'unlock':
					self.showPage('psw');
					break;
				case 'checkPsw':
					var psw = $('#pswText').val();

					if(psw == window._config.password){
						self.onAction('toHome')
					}else{
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
					self.mailList = helper.getMailListData();

					self.showPage('mail');
					break;
				case 'openMailDetail':
					var mailId = arguments[1];
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
				$(window).scrollTop(9999999);
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

		if (data.chatType == 1) {
			var _chat = helper.chatDataFormate(data);
			console.log(id, _chat);

			//加入渲染
			GameUI.pushMsg(_chat);

			_chat.delay = _chat.delay || 0; //处理dely

			//跟踪当前进行到的对话
			GameUI.$data.currentChatMsgId = _chat.next;
			window._gameRuntime.chatTimer = setTimeout(function() {
				main.nextChat(_chat.next || 0);
			}, _chat.delay);

		} else if (data.chatType == 2) {
			var _answer = helper.chatAnswerFormate(data);
			console.log(id, _answer);

			//跟踪当前进行到的对话
			GameUI.$data.currentChatMsgId = id;
			GameUI.answerMsg(_answer.msgOption);
		} else {
			console.log(id, '无效chatType类型')
		}
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

		return _Map;
	},

	playMusicInit:function(){
		//背景音乐对象
		window._gameRuntime.music.bg = new Audio(window._config.music.bg);
		window._gameRuntime.music.chatRoom = new Audio(window._config.music.chatRoom);
		window._gameRuntime.music.bg.addEventListener("ended",function() {
			window._gameRuntime.music.bg.play();//启动音频
		});
		window._gameRuntime.music.chatRoom.addEventListener("ended",function() {
			window._gameRuntime.music.chatRoom.play();//启动音频
		});
	},
	playMusic:function(scene) {
		var musicObj = window._gameRuntime.music;
		for( var key in musicObj){
			musicObj[key].pause();
		}

		musicObj[scene].currentTime = 0;
		musicObj[scene].play();
	}
};