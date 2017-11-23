//挂载window数据对象
window._config = {
	//主角id
	mainActorId: 1,
	//人物定义map
	actorMap: {
		1: {
			name: 'harry',
			head: '' //头像
		},
		2: {
			name: 'very',
			head: ''
		},
		3: {
			name: '枫',
			head: ''
		},
		4: {
			name: '猪',
			head: ''
		}
	},
	//聊天室数据
	chatRoomMap:{
		1:{
			roomName:'未知用户',
			roomImg:'',//群聊头像图片链接

			//聊天详细数据map
			chatMsgMap: {
				1: {
					chatType: 1, //1-消息对话，2-回复选项
					actorId:2,
					msg: 'hello,有人在么',
					isFriend: true,
					next: 2,    //下一条消息
					delay: 1000    //下一步流程的延迟
				},
				2: {
					chatType: 1,
					actorId:1,
					msg: '宝宝你是猪么，我在的',
					isFriend: false,
					next: 3,
					delay: 1000
				},
				3: {
					chatType: 1,
					actorId:3,
					msg: '啊啊啊啊啊啊啊啊啊啊啊 啊啊啊啊 啊啊啊啊 啊啊啊啊',
					isFriend: true,
					next: 9001
				},
				4: {
					chatType: 1,
					actorId:4,
					msg: '....................',
					isFriend: true,
					next: 5
				},
				5: {
					chatType: 1,
					actorId:2,
					msg: '5555555',
					isFriend: true,
					next: 9001
				},
				6: {
					chatType: 1,
					actorId:2,
					msg: '666666666',
					isFriend: true
				},

				9001: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
						{
							msg: '....................',
							next: 6,
							delay: 500
						},
						{
							msg: '哈哈哈',
							next: 5,
							delay: 500
						},
						{
							msg: '你是猪你是猪',
							next: 4,
							delay: 500
						}
					]
				}
			}
		},
		2:{
			roomName:'群聊2',
			roomImg:'',//群聊头像图片链接

			//聊天详细数据map
			chatMsgMap: {
				1: {
					chatType: 1, //1-消息对话，2-回复选项
					actorId: 2,
					msg: '222222在么',
					isFriend: true,
					next: 2,    //下一条消息
					delay: 1000    //下一步流程的延迟
				},
				2: {
					chatType: 1,
					actorId: 1,
					msg: '宝宝2222222',
					isFriend: false,
					next: 3,
					delay: 1000
				}
			}
		},
		3:{
			roomName:'群聊3',
			roomImg:'',//群聊头像图片链接

			//聊天详细数据map
			chatMsgMap: {
				1: {
					chatType: 1, //1-消息对话，2-回复选项
					actorId: 2,
					msg: '33333么',
					isFriend: true,
					next: 2,    //下一条消息
					delay: 1000    //下一步流程的延迟
				},
				2: {
					chatType: 1,
					actorId: 1,
					msg: '333332222222',
					isFriend: false,
					next: 3,
					delay: 1000
				}
			}
		}
	}
};

//游戏进行时
window._gameRuntime = {

	//游戏进行的进度
	step:1,

	//聊天室的进度
	chatProgress:{},

	chatTimer:null,

	isChat:false
};