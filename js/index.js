var GameUI = new Vue({
	el: '#app',
	data: {
		// 全局控制参数
		currentPage: '',
		// 当前聊天室
		currentChatRoom:{
			roomId:1,
			roomName:''
		},

		// 界面显示管理
		contentShow: {
			'desktop': false,
			'msg': false,
			'msgDetail': false,
			'psw': false,
			'call': false,
			'image': false,
			'imageList': false,
			'imageListDetail':false,
			'mail': false,
			'mailDetail': false
		},

		// 聊天室列表
		chatRoomList: [],
		// 聊天列表
		chatList: [],

		// 聊天回复
		chatAnswerShow: false,
		chatAnswer: []
	},
	mounted: function () {
		var self = this;
		//页面初始化，展示桌面
		this.showPage('desktop');

		// setTimeout(function() {
		// 	self.showPage('msgDetail');
		// 	if (!window._gameRuntime.isStartChat) {
		// 		window._gameRuntime.isStartChat = true;
		// 		main.startChat();
		// 	}
		// }, 500);

	},
	methods: {
		/**
		 * 展示对应页面
		 * @param page
		 */
		showPage: function (page) {
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
		onAction: function (action) {
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

					// if (!window._gameRuntime.isStartChat) {
					// 	window._gameRuntime.isStartChat = true;
					// 	main.startChat();
					// }

					//清空一下聊天dom
					self.chatList = [];

					main.startChat();

					self.showPage('msgDetail');
					break;
				case 'unlock':
					self.showPage('psw');
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
					self.showPage('mailDetail');
			}
		},

		/**
		 * 选择回复
		 * @param answer
		 */
		onSelectAnswer: function (answer) {
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
		pushMsg: function (msg) {
			this.chatList.push(msg);

			this.$nextTick(function () {
				$(window).scrollTop(9999);
			})
		},

		/**
		 * 聊天框选项加载
		 */
		answerMsg: function (chatAnswer) {
			this.chatAnswer = chatAnswer;
			this.chatAnswerShow = true;
		}
	}
});

/**
 * 主流程控制
 */
var main = {
	startChat: function () {
		console.log('聊天开始进行');

		//默认先读取id为1的数据
		main.nextChat(1);

	},
	nextChat: function (id) {
		if (!id) {
			console.log('无效id，流程中止 id:', id);
			return;
		}

		var data = helper.getChatData(GameUI.$data.currentChatRoom.roomId,id);
		if(!data){
			console.log(id+'聊天数据为空');
			return;
		}

		if (data.chatType == 1) {
			var _chat = helper.chatDataFormate(data);
			console.log(id, _chat);

			//加入渲染
			GameUI.pushMsg(_chat);

			_chat.delay = _chat.delay || 0; //处理dely
			setTimeout(function () {
				main.nextChat(_chat.next || 0);
			}, _chat.delay);

		} else if (data.chatType == 2) {
			var _answer = helper.chatAnswerFormate(data);
			console.log(id, _answer);

			GameUI.answerMsg(_answer.msgOption);
		} else {
			console.log(id, '无效chatType类型')
		}
	},
	answerChat: function (answer) {
		answer.delay = answer.delay || 0; //处理dely
		setTimeout(function () {
			main.nextChat(answer.next || 0);
		}, answer.delay);
	}
};

/**
 * 辅助函数
 */
var helper = {
	//获取单条聊天数据
	getChatData: function (roomId,msgId) {
		return window._config.chatRoomMap[roomId].chatMsgMap[msgId];
	},
	//聊天数据填充格式化
	chatDataFormate: function (data) {
		var _actorInfo = helper.getActor(data.actorId);
		data = Object.assign({}, data, _actorInfo);
		return data;
	},
	//回答数据填充格式化
	chatAnswerFormate: function (data) {
		return data;
	},
	//获取角色具体信息
	getActor: function (actorId) {
		return window._config.actorMap[actorId];
	},
	//获取聊天室列表信息
	getChatRoomListData: function(){
		var roomList = [];
		var _Map = window._config.chatRoomMap;
		for(var roomId in _Map){
			roomList.push({
				roomId:roomId,
				roomName:_Map[roomId].roomName,
				roomImg:_Map[roomId].roomImg
			})
		}

		return roomList;
	},
	//获取某个聊天室信息
	getChatRoomData: function(roomId){
		var _Map = window._config.chatRoomMap[roomId];

		return {
			roomId:roomId,
			roomName:_Map.roomName,
			roomImg:_Map.roomImg
		}
	}
};

