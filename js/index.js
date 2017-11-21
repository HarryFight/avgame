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
			'mail': false,
			'mailDetail': false
		},

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
					self.showPage('msg');
					break;
				case 'openContacts':
					//todo: 还可以做消红点之类的操作
					self.showPage('msgDetail');

					if (!window._gameRuntime.isStartChat) {
						window._gameRuntime.isStartChat = true;
						main.startChat();
					}
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
			console.log('无效id，流程中止 id:', id)
			return;
		}

		var data = helper.getChatData(id);

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
	getChatData: function (msgId) {
		return window._config.chatMsgMap[msgId];
	},
	chatDataFormate: function (data) {
		var _actorInfo = helper.getActor(data.actorId);
		data = Object.assign({}, data, _actorInfo);
		return data;
	},
	chatAnswerFormate: function (data) {
		return data;
	},

	getActor: function (actorId) {
		return window._config.actorMap[actorId];
	}
};

