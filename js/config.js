//挂载window数据对象
window._config = {
	//主角id
	mainActorId: 1,
	//解锁密码
	loginPsw:'1145', //手机登录密码

	nickName:'软糖',
	password:'218435', //app密码
	//背景音乐
	music:{
		bg:'source/bg.mp3',
		chatRoom:'source/chatRoom.mp3'
	},
	//人物定义map
	actorMap: {
		1: {
			name: '我',//玩家自己
			head: 'img/head/me.png' //头像
		},
		2: {
			name: '向怡',//小正太，学生
			head: 'img/head/xiangyi.png' //头像
		},
		3: {
			name: '尹川',//孔雀男，爱show爱交际，爱大叔男
			head: 'img/head/yinchuan.png' //头像
		},
		4: {
			name: '修Huge',//沉默IT男，顶级黑客，不善言辞内心善良
			head: 'img/head/Huge.png' //头像
		},
		5: {
			name: '师愈',//上市大财团高管，沉稳冷静的大哥哥
			head: 'img/head/shiyu.png' //头像
		},
		6: {
			name: '长风',//米其林三星大厨，最擅长甜点，暖男
			head: 'img/head/changfeng.png' //头像
		},
		7: {
			name: '系统',//系统消息
			head: 'img/head/system.png' //系统无头像
		}
	},
	//邮件数据
	mailMap: {
		1: {
			title: "请帮帮我！",
			from: '未知用户',
			to: '我',
			time: '2022年10月22日 12:33',
			content: '嗨，你好啊，亲爱的小姐。我叫龙天光。</br>虽然是个不情之请，但是，我想要将自己的生命托付给你，拜托你拯救我！</br>Ancient Aliens：https://tones.tencent.com/cn/app/id1281428574</br>邀请码：218435</br>可以请你和“他们”成为朋友吗？'
		},
		2: {
			title: "请继续帮帮我！",
			from: '未知用户',
			to: '我',
			time: '2022年10月22日 14:33',
			content:	'嗨，亲爱的小姐！</br>你真的和他们成为朋友了，做得很好。</br>真的没想到，确实有人会相信我那封充满欺诈气氛的邮件，所以，真的非常感谢你！让我都对“人间充满爱”抱有自信了呢。</br>接下来，我希望你能继续帮助我。</br></br>问问他们都是怎么参加的这个社团，可以吗？</br></br>我想你一定会问我到底是谁，请原谅我暂时还不能告诉你，衷心地希望，我能活到给你完整解答的时候。</br>请你相信，我对你和对他们绝对没有恶意，也不会造成伤害，对我却是生命攸关！'
		}
	},
	//聊天室数据
	chatRoomMap:{
		1:{
			roomName:'Ancient Aliens',
			roomImg:'img/head/room1.png',//群聊头像图片链接

			//聊天详细数据map
			//一段话题内基本速度1000，话题与话题之间3000，发图片之前1500，很快跟进700
		chatMsgMap: {
		1: {
			chatType: 1, //1-消息对话，2-回复选项
			actorId:7,
			msg: '【在线：长风，尚怡，修Hugh】',
			isFriend: true,
			next: 88001,    //下一条消息
			//next: 167,    //DEBUG用
			delay: 1500    //下一步流程的延迟
		},
		88001: {
			chatType: 1, //1-消息对话，2-回复选项
			actorId:7,
			msg: '【“软糖”加入了聊天】',
			isFriend: true,
			next: 88002,    //下一条消息
			delay: 2000    //下一步流程的延迟
		},
		88002: {
			chatType: 1, //1-消息对话，2-回复选项
			actorId:6,
			msg: '我从他那里学了Sachertorte的做法，是奥地利最有名的蛋糕。两层甜巧克力中间夹了杏子酱，配巧克力片和淡奶油，酸甜适中又入口即化。下次大家也来尝尝看吧^^',
			isFriend: true,
			next: 2,    //下一条消息
			delay: 3000    //下一步流程的延迟
		},
		2: {
			chatType: 1,
			actorId:6,
			isImgMsg: true,
			msg: 'img/emoji/cake.png',
			isFriend: true,
			next: 3,
			delay: 2000
		},
		3: {
			chatType: 1,
			actorId:2,
			msg: '噢噢！ ^*^',
			isFriend: true,
			next: 4,
			delay: 1000
		},
		4: {
			chatType: 1,
			actorId:2,
			isImgMsg: true,
			msg: 'img/emoji/liukoushui.gif',
			isFriend: true,
			next: 5,
			delay: 2000
		},
		5: {
			chatType: 1,
			actorId:2,
			msg: '真是太太太棒了，我周末就要去吃ヾ(≧▽≦*)o',
			isFriend: true,
			next: 6,
			delay: 2000
		},
		6: {
			chatType: 1,
			actorId:6,
			msg: '没问题^^',
			isFriend: true,
			next: 7,
			delay: 4000
		},
		7: {
			chatType: 1,
			actorId:4,
			msg: '？',
			isFriend: true,
			next: 8,
			delay: 2000
		},
		8: {
			chatType: 1,
			actorId:2,
			msg: '咦咦！阿修说话啦！还只发了个问号！发生什么了？地震了？洪水了？',
			isFriend: true,
			next: 9,
			delay: 2000
		},
		9: {
			chatType: 1,
			actorId:6,
			msg: '啊。',
			isFriend: true,
			next: 10,
			delay: 2000
		},
		10: {
			chatType: 1,
			actorId:2,
			msg: '怎么了怎么了？',
			isFriend: true,
			next: 11,
			delay: 3000
		},
		11: {
			chatType: 1,
			actorId:6,
			isImgMsg: true,
			msg: 'img/emoji/pic1.png',
			isFriend: true,
			next: 12,
			delay: 1500
		},
		12: {
			chatType: 1,
			actorId:6,
			msg: '软糖？这是谁？',
			isFriend: true,
			next: 13,
			delay: 3000
		},
		13: {
			chatType: 1,
			actorId:2,
			msg: '哎哎，真的啊，是谁啊？不应该有人知道我们这个聊天群的吧？',
			isFriend: true,
			next: 9001,
			delay: 2000
		},
		14: {
			chatType: 1,
			actorId:2,
			msg: '你好你好！',//9001选项1的内容14-15
			isFriend: true,
			next: 15,
			delay: 2000
		},
		15: {
			chatType: 1,
			actorId:2,
			msg: '啊，不对！@韩师愈@尹川 你们快上线，不得了了！！',
			isFriend: true,
			next: 9002,
			delay: 2000
		},
		16: {
			chatType: 1,//9001选项2的内容16-17
			actorId:6,
			msg: '你好。你突然这么问，好像我们也不好回答你^^',
			isFriend: true,
			next: 17,
			delay: 2000
		},
		17: {
			chatType: 1,
			actorId:2,
			msg: '哇啊这是怎么回事？@韩师愈@尹川 你们快上线，不得了了！',
			isFriend: true,
			next: 9002,
			delay: 2000
		},
		18: {
			chatType: 1, //9002选项1的内容
			actorId:6,
			msg: '你别误会^^只是你加入的很突然。毕竟，虽然这是个公开下载的软件，但却只有我们在用。我记得，是要邀请码的吧？',
			isFriend: true,
			next: 88003,
			delay: 4000
		},
		19: {
			chatType: 1, //9002选项2的内容
			actorId:6,
			msg: '怎么说呢。只是你加入的很突然。虽然这是个公开下载的软件，但却只有我们在用。我记得，是要邀请码的吧？',
			isFriend: true,
			next: 88003,
			delay: 4000
		},
		88003: {
			chatType: 1, //1-消息对话，2-回复选项
			actorId:7,
			msg: '【“韩师愈”加入了聊天】',
			isFriend: true,
			next: 88004,    //下一条消息
			delay: 1500    //下一步流程的延迟
		},
		88004: {
			chatType: 1, //1-消息对话，2-回复选项
			actorId:7,
			msg: '【“尹川”加入了聊天】',
			isFriend: true,
			next: 20,    //下一条消息
			delay: 4000    //下一步流程的延迟
		},
		20: {
			chatType: 1, 
			actorId:5,
			msg: '什么事？',
			isFriend: true,
			next: 21,
			delay: 3000
		},
		21: {
			chatType: 1, 
			actorId:3,
			msg: 'Hello everyone~是什么事，让可爱的小怡从万丈光芒的stage上将我召唤到此处~？',
			isFriend: true,
			next: 22,
			delay: 3000
		},
		22: {
			chatType: 1, 
			actorId:3,
			isImgMsg: true,
			msg: 'img/emoji/zen01.jpg',//{po一张他穿着华丽衣服在某个会场的照片}
			isFriend: true,
			next: 23,
			delay: 1500
		},
		23: {
			chatType: 1, 
			actorId:3,
			isImgMsg: true,
			msg: 'img/emoji/fukua.gif',//{po浮夸的表情包}
			isFriend: true,
			next: 24,
			delay: 1500
		},
		24: {
			chatType: 1, 
			actorId:2,
			msg: '突然有个人加入了我们群聊！是你们认识的人吗？',
			isFriend: true,
			next: 25,
			delay: 2000
		},
		25: {
			chatType: 1, 
			actorId:5,
			msg: '我没给任何人邀请码。',
			isFriend: true,
			next: 26,
			delay: 2000
		},
		26: {
			chatType: 1, 
			actorId:3,
			msg: '那把神圣的邀请钥匙，还保管在我的心中(✿◡‿◡)',
			isFriend: true,
			next: 27,
			delay: 2000
		},
		27: {
			chatType: 1, 
			actorId:6,
			msg: '也不是我。修……想必更不可能吧。',
			isFriend: true,
			next: 28,
			delay: 2000
		},
		28: {
			chatType: 1, 
			actorId:2,
			msg: '好奇怪好奇怪！',
			isFriend: true,
			next: 29,
			delay: 4000
		},
		29: {
			chatType: 1, 
			actorId:6,
			msg: '@软糖 可以麻烦你自我介绍下吗？你是怎么知道我们这个聊天的？',
			isFriend: true,
			next: 9003,
			delay: 2000
		},
		30: {
			chatType: 1, //9003选项1的内容30-48
			actorId:1,
			msg: '今天我收到了一封邮件，上面有个叫龙天光的人向我求救，说是让我下载这个软件，输入一个邀请码，之后希望我和里面的人搞好关系。但我也不清楚情况，为什么这么做能救人？你们有人认识龙天光吗？',
			isFriend: false,
			next: 31,
			delay: 3000
		},
		31: {
			chatType: 1, 
			actorId:5,
			msg: '不认识。',
			isFriend: true,
			next: 32,
			delay: 2000
		},
		32: {
			chatType: 1, 
			actorId:2,
			msg: '我不认识任何姓龙的！大家呢？',
			isFriend: true,
			next: 33,
			delay: 1500
		},
		33: {
			chatType: 1, 
			actorId:6,
			msg: '这个名字我也没听过……',
			isFriend: true,
			next: 34,
			delay: 3000
		},
		34: {
			chatType: 1, 
			actorId:3,
			msg: 'Good name！天之光。像是某种启示！像是故事的主人公。真想和有这样名字的人认识啊……当然，比起我那简约却优美，让人过目难忘的名字，还是差那么一筹。',
			isFriend: true,
			next: 35,
			delay: 1500
		},
		35: {
			chatType: 1, 
			actorId:3,
			isImgMsg: true,
			msg: 'img/emoji/zen02.jpg',//{po一张自拍照}
			isFriend: true,
			next: 36,
			delay: 3000
		},
		36: {
			chatType: 1, 
			actorId:5,
			msg: '只怕的确是故事里的名字。这位小姐，你编造这个听起来就可笑的故事是什么意思？有人向你求救，说找我们聊天就可以救人，你也相信？',
			isFriend: true,
			next: 37,
			delay: 2000
		},
		37: {
			chatType: 1, 
			actorId:3,
			msg: '哎？阿愈怎么知道@软糖是位女生？我的千万粉丝怕是都不知道呢！',
			isFriend: true,
			next: 38,
			delay: 2000
		},
		38: {
			chatType: 1, 
			actorId:5,
			msg: '不要这么叫我。点开她填写的资料就知道了。这么简单的事情。',
			isFriend: true,
			next: 39,
			delay: 2000
		},
		39: {
			chatType: 1, 
			actorId:3,
			msg: '哈哈，阿愈真严格。也许是人妖哦(o≖◡≖)。',
			isFriend: true,
			next: 40,
			delay: 1500
		},
		40: {
			chatType: 1, 
			actorId:3,
			isImgMsg: true,
			msg: 'img/emoji/renyao.jpg',//{po一张人妖图片}
			isFriend: true,
			next: 41,
			delay: 2000
		},
		41: {
			chatType: 1, 
			actorId:5,
			msg: '这不重要！重要的是，她有什么企图。',
			isFriend: true,
			next: 42,
			delay: 4000
		},
		42: {
			chatType: 1, 
			actorId:5,
			msg: '@软糖，你是什么人？你有什么目的？编造出这些话……',
			isFriend: true,
			next: 43,
			delay: 2000
		},
		43: {
			chatType: 1, 
			actorId:2,
			msg: '这样严厉地对待女孩子不好吧？',
			isFriend: true,
			next: 44,
			delay: 3000
		},
		44: {
			chatType: 1, 
			actorId:4,
			msg: '她，没说谎。',
			isFriend: true,
			next: 45,
			delay: 1500
		},
		45: {
			chatType: 1, 
			actorId:4,
			isImgMsg: true,
			msg: 'img/emoji/youxiangjietu.png',//{放出一张图片，正是女主邮箱的截图｝
			isFriend: true,
			next: 46,
			delay: 1500
		},
		46: {
			chatType: 1, 
			actorId:4,
			msg: '我，黑客，她，邮箱。',
			isFriend: true,
			next: 47,
			delay: 2000
		},
		47: {
			chatType: 1, 
			actorId:2,
			msg: '来了！修式打脸！',
			isFriend: true,
			next: 48,
			delay: 4000
		},
		48: {
			chatType: 1, 
			actorId:2,
			msg: '看起来，是真的有人发这样的邮件呢。是咱们之中谁的恶作剧吗？',
			isFriend: true,
			next: 70,
			delay: 2000
		},
		50: {
			chatType: 1, //9003选项2的内容50-68
			actorId:1,
			msg: '我是偶然在网站上看到这个软件的。',
			isFriend: false,
			next: 51,
			delay: 3000
		},
		51: {
			chatType: 1, 
			actorId:5,
			msg: '这位小姐，你不必找这么拙劣的借口。这个软件虽然能下载，但邀请码可不是随便能拿到。只有我们几个人知道。',
			isFriend: true,
			next: 52,
			delay: 2000
		},
		52: {
			chatType: 1, 
			actorId:3,
			msg: '哎？阿愈怎么知道@软糖是位女生？我的百万粉丝怕是都不知道呢！',
			isFriend: true,
			next: 53,
			delay: 2000
		},
		53: {
			chatType: 1, 
			actorId:5,
			msg: '不要这么叫我。点开她填写的资料就知道了。这么简单的事情。',
			isFriend: true,
			next: 54,
			delay: 2000
		},
		54: {
			chatType: 1, 
			actorId:3,
			msg: '哈哈，阿愈真严格。也许是人妖哦(o≖◡≖)。',
			isFriend: true,
			next: 55,
			delay: 1500
		},
		55: {
			chatType: 1, 
			actorId:3,
			isImgMsg: true,
			msg: 'img/emoji/renyao.jpg',//{po一张人妖图片}
			isFriend: true,
			next: 56,
			delay: 2000
		},
		56: {
			chatType: 1, 
			actorId:5,
			msg: '这不重要！重要的是，她有什么企图。',
			isFriend: true,
			next: 57,
			delay: 4000
		},
		57: {
			chatType: 1, 
			actorId:5,
			msg: '@软糖，你是什么人？你有什么目的？编造出这些话……',
			isFriend: true,
			next: 58,
			delay: 2000
		},
		58: {
			chatType: 1, 
			actorId:2,
			msg: '这样严厉地对待女孩子不好吧？',
			isFriend: true,
			next: 59,
			delay: 3000
		},
		59: {
			chatType: 1, 
			actorId:4,
			msg: '她，说谎。',
			isFriend: true,
			next: 60,
			delay: 1500
		},
		60: {
			chatType: 1, 
			actorId:4,
			isImgMsg: true,
			msg: 'img/emoji/youxiangjietu.png',//{po女主邮箱截图}
			isFriend: true,
			next: 61,
			delay: 1500
		},
		61: {
			chatType: 1, 
			actorId:4,
			msg: '我，黑客，她，邮箱。',
			isFriend: true,
			next: 62,
			delay: 2000
		},
		62: {
			chatType: 1, 
			actorId:2,
			msg: '来了！修式打脸！',
			isFriend: true,
			next: 63,
			delay: 3000
		},
		63: {
			chatType: 1, 
			actorId:6,
			msg: '不过，看起来这位小姐也没有什么“企图”，只是收到了一封求救邮件。发信人是……龙天光？这个名字我没有听过，有人认识吗？',
			isFriend: true,
			next: 64,
			delay: 4000
		},
		64: {
			chatType: 1, 
			actorId:5,
			msg: '不认识。',
			isFriend: true,
			next: 65,
			delay: 2000
		},
		65: {
			chatType: 1, 
			actorId:2,
			msg: '我不认识任何姓龙的！',
			isFriend: true,
			next: 66,
			delay: 3000
		},
		66: {
			chatType: 1, 
			actorId:3,
			msg: 'Good name！天之光。像是某种启示！像是故事的主人公。真想和有这样名字的人认识啊……当然，比起我那简约却优美，让人过目难忘的名字，还是差那么一筹。',
			isFriend: true,
			next: 67,
			delay: 1500
		},
		67: {
			chatType: 1, 
			actorId:3,
			isImgMsg: true,
			msg: 'img/emoji/zen02.jpg',//{po一张自拍照}
			isFriend: true,
			next: 68,
			delay: 3000
		},
		68: {
			chatType: 1, 
			actorId:6,
			msg: '修应该也不认识。难道，是咱们之中谁的恶作剧吗？',
			isFriend: true,
			next: 70,
			delay: 2000
		},
		70: {
			chatType: 1, 
			actorId:5,
			msg: '哼，恐怕是了。尹川，是你么？',
			isFriend: true,
			next: 71,
			delay: 3000
		},
		71: {
			chatType: 1, 
			actorId:3,
			msg: '呵呵，被阿愈怀疑的感觉也不错。不过这回，我还没来得及谱写这样神秘美丽的邂逅story。',
			isFriend: true,
			next: 72,
			delay: 2000
		},
		72: {
			chatType: 1, 
			actorId:5,
			msg: '那就是向怡。',
			isFriend: true,
			next: 73,
			delay: 1500
		},
		73: {
			chatType: 1, 
			actorId:2,
			msg: '我才没有！干嘛怀疑我呀？',
			isFriend: true,
			next: 74,
			delay: 2000
		},
		74: {
			chatType: 1, 
			actorId:6,
			msg: '也许韩大是觉着，尚怡一直想要让我们扩员来着。',
			isFriend: true,
			next: 75,
			delay: 2000
		},
		75: {
			chatType: 1, 
			actorId:2,
			msg: '那我也是堂堂正正地邀请别人，怎么会发这么封邮件Σ(っ °Д °;)っ！',
			isFriend: true,
			next: 76,
			delay: 3000
		},
		76: {
			chatType: 1, 
			actorId:5,
			msg: '总归是有问题！',
			isFriend: true,
			next: 77,
			delay: 4000
		},
		77: {
			chatType: 1, 
			actorId:6,
			msg: '@软糖，看来我们这边也完全不清楚情况，真是抱歉。你还有什么想法吗？',
			isFriend: true,
			next: 9004,
			delay: 2000
		},
		80: {
			chatType: 1, //9004选项1，2的回答内容
			actorId:6,
			msg: '这个倒也没什么不能说的，我们其实是一个学生社团，现在我们聊天用的，就是社团研发的一个小软件。',
			isFriend: true,
			next: 81,
			delay: 2000
		},
		81: {
			chatType: 1, 
			actorId:5,
			msg: '应该说“曾经”是学生社团。',
			isFriend: true,
			next: 82,
			delay: 3000
		},
		82: {
			chatType: 1, 
			actorId:6,
			msg: '的确！我、韩大和尹川都已经工作了。现在尚怡还是高中生，阿修是大学生。',
			isFriend: true,
			next: 83,
			delay: 1500
		},
		83: {
			chatType: 1, 
			actorId:2,
			msg: '我来说我来说，现在我最熟ヾ(≧▽≦*)o',
			isFriend: true,
			next: 84,
			delay: 4000
		},
		84: {
			chatType: 1, 
			actorId:2,
			msg: '这是中学的社团！我们原本是在一个初高中连读的中学的同学。虽然我是初中一年生的时候，韩师愈学长已经高三了，但是我们就是那个时候认识的！并且组成了社团！现在社团本身还存在，但是只有我一个人是社员了，所以也算是被学校废社了吧！社团教室的根据地都没有了，只剩下这个app了！',
			isFriend: true,
			next: 85,
			delay: 2000
		},
		85: {
			chatType: 1, 
			actorId:2,
			msg: '当然，因为只剩下一个人了，所以现在我就是社长ㄟ(≧◇≦)ㄏ',
			isFriend: true,
			next: 86,
			delay: 2000
		},
		86: {
			chatType: 1, 
			actorId:3,
			msg: '哦哦，尚社长好!',
			isFriend: true,
			next: 87,
			delay: 1500
		},
		87: {
			chatType: 1, 
			actorId:2,
			msg: '尹同学好:p',
			isFriend: true,
			next: 88,
			delay: 2000
		},
		88: {
			chatType: 1, 
			actorId:3,
			msg: '我是社长手下头号大明星，还请社长安排我的出场时间表，随行人员，交通安排，演出分成……另外，签约费用一千万，请三月内付清~',
			isFriend: true,
			next: 89,
			delay: 1500
		},
		89: {
			chatType: 1, 
			actorId:3,
			msg: '发出一个转账邀请，金额一千万。',
			isFriend: true,
			next: 90,
			delay: 3000
		},
		90: {
			chatType: 1, 
			actorId:2,
			msg: '（*゜ー゜*）',
			isFriend: true,
			next: 91,
			delay: 2000
		},
		91: {
			chatType: 1, 
			actorId:3,
			msg: '唉，真可惜啊，尚社长上任不到一分钟，公司就倒闭了。不由得掬一把同情泪。',
			isFriend: true,
			next: 92,
			delay: 2000
		},
		92: {
			chatType: 1, 
			actorId:2,
			isImgMsg: true,
			msg: 'img/emoji/daku.gif',//{po大哭的表情包}
			isFriend: true,
			next: 93,
			delay: 2000
		},
		93: {
			chatType: 1, 
			actorId:5,
			msg: '得了。不是开玩笑的时候。',
			isFriend: true,
			next: 94,
			delay: 4000
		},
		94: {
			chatType: 1, 
			actorId:6,
			msg: '@软糖 应该是很奇怪我们究竟是做什么的，对吧？其实，我们是研究Ancient Aliens的。',
			isFriend: true,
			next: 95,
			delay: 2000
		},
		95: {
			chatType: 1, 
			actorId:3,
			msg: '啊，那么什么是Ancient Aliens呢？',
			isFriend: true,
			next: 96,
			delay: 1500
		},
		96: {
			chatType: 1, 
			actorId:5,
			msg: '尹川！',
			isFriend: true,
			next: 97,
			delay: 3000
		},
		97: {
			chatType: 1, 
			actorId:6,
			msg: '^^所谓Ancient Aliens，就是远古外星人的意思。',
			isFriend: true,
			next: 98,
			delay: 2000
		},
		98: {
			chatType: 1, 
			actorId:3,
			msg: '哦哦，远古外星人！哈？外星人还有远古的？',
			isFriend: true,
			next: 99,
			delay: 1500
		},
		99: {
			chatType: 1, 
			actorId:3,
			isImgMsg: true,
			msg: 'img/emoji/jingdaile.gif',//{po一张惊呆了的表情包}
			isFriend: true,
			next: 100,
			delay: 3000
		},
		100: {
			chatType: 1, 
			actorId:6,
			msg: '这算是一个半科学、半幻想的历史假设吧，当然，我们都认为这种假设是真实的。远古外星人理论认为，人类……或者地球，在古老的时代就和外星人有接触了。我们的历史在早期的某个时刻，深切地受到了外星人的影响。',
			isFriend: true,
			next: 101,
			delay: 2000
		},
		101: {
			chatType: 1, 
			actorId:3,
			msg: '有什么证据吗~？有没有有没有？',
			isFriend: true,
			next: 102,
			delay: 2000
		},
		102: {
			chatType: 1, 
			actorId:6,
			msg: '确凿的证据的确还没有发现，但是有许多事情都可以作为佐证。',
			isFriend: true,
			next: 103,
			delay: 2000
		},
		103: {
			chatType: 1, 
			actorId:3,
			msg: '这么轻飘飘地说的话，奴家不信啦……',
			isFriend: true,
			next: 104,
			delay: 2000
		},
		104: {
			chatType: 1, 
			actorId:5,
			msg: '比如玛雅的帕伦克石棺“火箭”浮雕。',
			isFriend: true,
			next: 105,
			delay: 1500
		},
		105: {
			chatType: 1, 
			actorId:5,
			isImgMsg: true,
			msg: 'img/emoji/huojian.jpg',//火箭图
			isFriend: true,
			next: 106,
			delay: 4000
		},
		106: {
			chatType: 1, 
			actorId:5,
			msg: '秘鲁的原始飞机轨道，远古壁画上的类似宇航员的生物。除此之外，各国的神话中，也多有人来自天外的暗示。巴比伦神话说，乘着交通工具、穿着古怪服装从天而降的Anunnaki创造了人类。希腊神话中的诸神也有着拥有类似现代高科技、来自天际、与人融合后传承后代的记载',
			isFriend: true,
			next: 107,
			delay: 4000
		},
		107: {
			chatType: 1, 
			actorId:5,
			msg: '在生物学中，也有“外源论”，认为人类的DNA有部分是从其他星球来的。人类与其他生物分别的基因频段，例如HAR1，仿佛是一夜之间就出现在人类身上，并没有充分的进化的时间，很可能是被植入或融合的。',
			isFriend: true,
			next: 108,
			delay: 2000
		},
		108: {
			chatType: 1, 
			actorId:3,
			msg: '阿愈果然厉害。虽然比起我还是差那么一点点！',
			isFriend: true,
			next: 109,
			delay: 2000
		},
		109: {
			chatType: 1, 
			actorId:3,
			msg: '不过不用难过。毕竟，我可是有百万粉丝支持的人(oﾟvﾟ)ノ',
			isFriend: true,
			next: 110,
			delay: 1500
		},
		110: {
			chatType: 1, 
			actorId:3,
			isImgMsg: true,
			msg: 'img/emoji/deyi.gif',//{po一张得意的表情包}
			isFriend: true,
			next: 111,
			delay: 2000
		},
		111: {
			chatType: 1, 
			actorId:5,
			msg: '差不多就是这样。',
			isFriend: true,
			next: 112,
			delay: 3000
		},
		112: {
			chatType: 1, 
			actorId:2,
			msg: '啊！等等！我有个好主意！',
			isFriend: true,
			next: 113,
			delay: 2000
		},
		113: {
			chatType: 1, 
			actorId:2,
			msg: '@软糖 小姐姐，你相信不相信有外星人存在呀？',
			isFriend: true,
			next: 9005,
			delay: 2000
		},
		115: {
			chatType: 1, //9005选项1的内容
			actorId:2,
			msg: '那就太好啦(>▽<)',
			isFriend: true,
			next: 117,
			delay: 2000
		},
		116: {
			chatType: 1, //9005选项2的内容
			actorId:2,
			msg: '那也没关系，我们的目标就是改变你这样的人(>▽<)',
			isFriend: true,
			next: 117,
			delay: 2000
		},
		117: {
			chatType: 1, 
			actorId:2,
			msg: '总之，既然小姐姐和我们这么有缘，我们社团又——正好缺人！招新也没人理！就让小姐姐加入我们社团吧！这样她就算在群聊里也okay啦！说不定还真能救到什么人呢！',
			isFriend: true,
			next: 118,
			delay: 3000
		},
		118: {
			chatType: 1, 
			actorId:5,
			msg: '我反对，那封邮件只不过是恶劣的玩笑，况且我们根本不知道她的真实身份。',
			isFriend: true,
			next: 119,
			delay: 2000
		},
		119: {
			chatType: 1, 
			actorId:5,
			msg: '我很理解你处于青春期，希望示好于女性的心态。但是这只会让人做出不理智的决定。',
			isFriend: true,
			next: 120,
			delay: 2000
		},
		120: {
			chatType: 1, 
			actorId:5,
			msg: '谁是我们设定的群主？把她移出群聊吧，我们也改个邀请码。对了，小姐，你自己最好也忘了这个无聊的玩笑。',
			isFriend: true,
			next: 121,
			delay: 3000
		},
		121: {
			chatType: 1, 
			actorId:3,
			msg: '嗯……我绝顶聪明的脑袋还记得！我们软件的设定是第一个建立这个群的人是群主！',
			isFriend: true,
			next: 122,
			delay: 2000
		},
		122: {
			chatType: 1, 
			actorId:2,
			msg: '是吧，但是太久以前的事情了，我都忘记了是谁建的了。',
			isFriend: true,
			next: 123,
			delay: 2000
		},
		123: {
			chatType: 1, 
			actorId:6,
			msg: '反正不会是我这个后来的。不过，韩大，这样真的好吗？',
			isFriend: true,
			next: 124,
			delay: 2000
		},
		124: {
			chatType: 1, 
			actorId:5,
			msg: '我不是群主。尹川，你是么？',
			isFriend: true,
			next: 125,
			delay: 4000
		},
		125: {
			chatType: 1, 
			actorId:3,
			msg: '唔，好像不是吧~我点了@软糖的头像，没有移除的选项。',
			isFriend: true,
			next: 126,
			delay: 3000
		},
		126: {
			chatType: 1, 
			actorId:5,
			msg: '尚怡，是你吧？',
			isFriend: true,
			next: 127,
			delay: 2000
		},
		127: {
			chatType: 1, 
			actorId:2,
			msg: '怎么可能是我！我当年最小，软件都不太会用，不是我建的！',
			isFriend: true,
			next: 128,
			delay: 2000
		},
		128: {
			chatType: 1, 
			actorId:6,
			msg: '会不会是阿修？我记得你们说，软件也是他研发的。 @修Hugh',
			isFriend: true,
			next: 129,
			delay: 5000
		},
		129: {
			chatType: 1, 
			actorId:4,
			msg: '没有，群主。无法，移除。',
			isFriend: true,
			next: 130,
			delay: 2000
		},
		130: {
			chatType: 1, 
			actorId:2,
			msg: '来了！修式打脸！',
			isFriend: true,
			next: 131,
			delay: 2000
		},
		131: {
			chatType: 1, 
			actorId:3,
			msg: '我绝顶聪明的脑袋怎么可能记错o(TヘTo)？哦，天，这一定是上天嫉妒我这闪闪明星的光辉……',
			isFriend: true,
			next: 132,
			delay: 3000
		},
		132: {
			chatType: 1, 
			actorId:6,
			msg: '不过，我觉得这样也不错呀。我们本质上，不是追寻神秘事件的团体吗？我觉得，说不定这位小姐的奇遇，也是一种神秘事件呢。我们应该接纳这样的神秘……^^',
			isFriend: true,
			next: 133,
			delay: 3000
		},
		133: {
			chatType: 1, 
			actorId:2,
			msg: '那就这么决定了！小姐姐是我们的新成员！我以现任Ancient Aliens社社长的名义宣布！',
			isFriend: true,
			next: 134,
			delay: 2000
		},
		134: {
			chatType: 1, 
			actorId:2,
			msg: '神秘之花开在黑夜~FABULOUS……(☆▽☆)',
			isFriend: true,
			next: 135,
			delay: 3000
		},
		135: {
			chatType: 1, 
			actorId:5,
			msg: '……既然你们都这么说。@软糖，别太开心了。虽然不知道你在图谋什么，但是我会密切监视你的。',
			isFriend: true,
			next: 9006,
			delay: 2000
		},
		136: {
			chatType: 1,  //9006选项1的内容 
			actorId:2,
			msg: '嘿嘿，不用谢(/≧▽≦)/以后社长我罩你的！',
			isFriend: true,
			next: 137,
			delay: 1500
		},
		137: {
			chatType: 1,   
			actorId:3,
			msg: '拍手拍手欢迎。',
			isFriend: true,
			next: 138,
			delay: 2000
		},
		138: {
			chatType: 1,   
			actorId:6,
			msg: '你好，请多关照。',
			isFriend: true,
			next: 142,
			delay: 5000
		},
		140: {
			chatType: 1,   //9006选项2的内容
			actorId:6,
			msg: '小姐真有一颗善良的心。',
			isFriend: true,
			next: 141,
			delay: 3000
		},
		141: {
			chatType: 1,   
			actorId:5,
			msg: '你到底在图谋什么……',
			isFriend: true,
			next: 142,
			delay: 5000
		},
		142: {
			chatType: 1,  
			actorId:6,
			msg: '那么，我们要不要自我介绍下？我先来吧，我是长风，现实中是位厨师，还在修行中。如果可以的话，希望@软糖 小姐能告诉我你的口味，下次聚会时给你准备合适的食物。',
			isFriend: true,
			next: 143,
			delay: 2000
		},
		143: {
			chatType: 1,  
			actorId:2,
			msg: '长风哥可是米其林饭店的五星厨师哦！做出的饭菜超级超级好！',
			isFriend: true,
			next: 144,
			delay: 2000
		},
		144: {
			chatType: 1,  
			actorId:6,
			msg: '过奖了，尚怡做的饭菜也是很好吃的。',
			isFriend: true,
			next: 145,
			delay: 2000
		},
		145: {
			chatType: 1,  
			actorId:2,
			msg: '嘿嘿。都是家常菜。那个，我现在是高中生！除了AA以外，还参加了篮球部！',
			isFriend: true,
			next: 146,
			delay: 1500
		},
		146: {
			chatType: 1,  
			actorId:3,
			msg: '{一连发了好几张自己的直播图、明星图}',
			isFriend: true,
			next: 147,
			delay: 2000
		},
		147: {
			chatType: 1,  
			actorId:2,
			msg: '是哦，尹川是大明星，ins上有7千多万的粉丝哦。',
			isFriend: true,
			next: 148,
			delay: 2000
		},
		148: {
			chatType: 1,  
			actorId:3,
			msg: '我正在准备最cool的自我介绍o(≧口≦)o！',
			isFriend: true,
			next: 149,
			delay: 2000
		},
		149: {
			chatType: 1,  
			actorId:2,
			msg: '哈哈，就是本少爷是宇宙第一明星，以后也会让外星人崇拜得五体投地的那种吗？',
			isFriend: true,
			next: 150,
			delay: 2000
		},
		150: {
			chatType: 1,  
			actorId:3,
			msg: '这次换一个：本时代的阿多尼斯，连爱神维纳斯都要惊艳倾心的容颜不老的美男子，就是本人！',
			isFriend: true,
			next: 151,
			delay: 3000
		},
		151: {
			chatType: 1,  
			actorId:5,
			msg: '无聊。换汤不换药。',
			isFriend: true,
			next: 152,
			delay: 2000
		},
		152: {
			chatType: 1,  
			actorId:3,
			msg: '那再换一个：以后终有一日也会迷倒阿愈的美男子。',
			isFriend: true,
			next: 153,
			delay: 1500
		},
		153: {
			chatType: 1,  
			actorId:2,
			msg: '啊哈哈哈！',
			isFriend: true,
			next: 154,
			delay: 3000
		},
		154: {
			chatType: 1,  
			actorId:6,
			msg: '对了，阿修不爱说话，我代他说了吧。阿修是个大学生，学的计算机，擅长各种程序、网路相关的事情。……还差韩大没说了。',
			isFriend: true,
			next: 155,
			delay: 2000
		},
		155: {
			chatType: 1,  
			actorId:5,
			msg: '我就是个闲人。没什么好自我介绍的。',
			isFriend: true,
			next: 156,
			delay: 3000
		},
		156: {
			chatType: 1,  
			actorId:3,
			msg: '哦~哦~如今世界最大的连锁集团Martort公司，亚洲部最年轻的EVP是闲人的话，那我们的存在感就稀薄到连能不能还算是人都成问题了~',
			isFriend: true,
			next: 157,
			delay: 3000
		},
		157: {
			chatType: 1,  
			actorId:5,
			msg: '哼。',
			isFriend: true,
			next: 158,
			delay: 1500
		},
		158: {
			chatType:1,  
			actorId:7,
			msg: '[韩师愈下线了]',
			isFriend: true,
			next: 159,
			delay: 2000
		},
		159: {
			chatType: 1,  
			actorId:2,
			msg: '啊呀，韩大大下线了。',
			isFriend: true,
			next: 160,
			delay: 4000
		},
		160: {
			chatType: 1,  
			actorId:3,
			msg: '呵呵，我也有粉丝在线上催着呢，也先走了。',
			isFriend: true,
			next: 161,
			delay: 1500
		},
		161: {
			chatType: 1,  
			actorId:7,
			msg: '[尹川下线了]',
			isFriend: true,
			next: 162,
			delay: 4000
		},
		162: {
			chatType: 1,  
			actorId:2,
			msg: '嗯~那好吧。@软糖 今天也算是认识了，还有什么问题的话，私信我哦。我们软件不仅可以群聊，也可以和注册过的人私聊的。',
			isFriend: true,
			next: 163,
			delay: 2000
		},
		163: {
			chatType: 1,  
			actorId:6,
			msg: '有使用说明，你可以看看。',
			isFriend: true,
			next: 164,
			delay: 4000
		},
		164: {
			chatType: 1,  
			actorId:6,
			msg: '对了，那封信确实蛮奇怪的，退出聊天后，我建议你回复看看。说不定真的在哪里有什么事发生……我们能帮忙的话，一定会帮忙的。',
			isFriend: true,
			next: 165,
			delay: 1500
		},
		165: {
			chatType: 1,  
			actorId:2,
			msg: '没错(>▽<)！',
			isFriend: true,
			next: 166,
			delay: 3000
		},
		166: {
			chatType: 1,  
			actorId:7,
			msg: '[长风下线了]',
			isFriend: true,
			next: 167,
			delay: 1000
		},
		167: {
			chatType: 1,  
			actorId:7,
			msg: '[尚怡下线了]',
			isFriend: true,
			next: 200,
			delay: 10000
		},
		//群聊第二个事件开始，先暂时设计前面对白10000延迟再出现
		200: {
			chatType: 1, 
			actorId:7,
			msg: '【在线：长风，尚怡，修】',
			isFriend: true,
			next: 201,    
			delay: 1500    
		},
		201: {
			chatType: 1, 
			actorId:2,
			msg: '大家早上好ヾ(≧▽≦*)o',
			isFriend: true,
			next: 202,    
			delay: 1500   
		},
		202: {
			chatType: 1, 
			actorId:2,
			msg: '又是美好的一天开始了！',
			isFriend: true,
			next: 203,    
			delay: 4000    
		},
		203: {
			chatType: 1, 
			actorId:6,
			msg: '早上好，尚怡^^，早餐有没有好好吃呀？',
			isFriend: true,
			next: 204,    
			delay: 2000    
		},
		204: {
			chatType: 1, 
			actorId:2,
			msg: '我都到学校啦！',
			isFriend: true,
			next: 205,    
			delay: 3000    
		},
		205: {
			chatType: 1, 
			actorId:6,
			msg: '又没吃？早餐可是一日之始，不能不重视，又要学习又要打工很消耗体力的！',
			isFriend: true,
			next: 206,    
			delay: 2000    
		},
		206: {
			chatType: 1, 
			actorId:2,
			msg: '哈哈，倒是给老妹做了点。我身体好着呢=ω=',
			isFriend: true,
			next: 207,    
			delay: 1500    
		},
		207: {
			chatType: 1, 
			actorId:2,
			msg: '{po一张自己做家务的图}',
			isFriend: true,
			next: 208,    
			delay: 2000    
		},
		208: {
			chatType: 1, 
			actorId:6,
			msg: '听说前两日尚云生病了，好些了没有？',
			isFriend: true,
			next: 209,    
			delay: 2000    
		},
		209: {
			chatType: 1, 
			actorId:2,
			msg: '她早就好了，我刚骑车送她到学校。多谢关心  (＾Ｕ＾)ノ',
			isFriend: true,
			next: 8001,    
			delay: 10000    
		},
			//群聊第三个时间开始，
		8001: {
			chatType: 1,  
			actorId:7,
			msg: '[尹川上线了]',
			isFriend: true,
			next: 8002,
			delay: 1000
		},
		8002: {
			chatType: 1,  
			actorId:7,
			msg: '[韩师愈上线了]',
			isFriend: true,
			next: 210,
			delay: 2000
		},
		210: {
			chatType: 1, 
			actorId:3,
			msg: '{发一张自己的帅图}',
			isFriend: true,
			next: 211,    
			delay: 1500    
		},
		211: {
			chatType: 1, 
			actorId:3,
			msg: 'Good morning, my world！',
			isFriend: true,
			next: 9010,    
			delay: 1500    
		},
		212: {
			chatType: 1, //9010选项1内容
			actorId:3,
			msg: 'Oh, my lady!不要这么严肃，世界即我，而我愿意将它奉献给这位漂亮的小姐……',
			isFriend: true,
			next: 9011,    
			delay: 1500    
		},
		213: {
			chatType: 1, //9011选项1内容213-221
			actorId:2,
			msg: '@尹川，你别欺负小姐姐~',
			isFriend: true,
			next: 214,    
			delay: 2000    
		},
		214: {
			chatType: 1, 
			actorId:3,
			msg: '我哪里有？话说你不在上课么？哦！我们之中有个逃课的放荡不羁的浪子……',
			isFriend: true,
			next: 215,    
			delay: 1500    
		},
		215: {
			chatType: 1, 
			actorId:2,
			msg: '现在是课间！！！',
			isFriend: true,
			next: 216,    
			delay: 4000    
		},
		216: {
			chatType: 1, 
			actorId:6,
			msg: '呵呵，尹川的说法倒让我想起了过去的他自己呢。',
			isFriend: true,
			next: 217,    
			delay: 2000    
		},
		217: {
			chatType: 1, 
			actorId:3,
			msg: '啊，难道说，我即将转生到尚怡的身上……',
			isFriend: true,
			next: 218,    
			delay: 1500    
		},
		218: {
			chatType: 1, 
			actorId:2,
			msg: '这怎么可能！',
			isFriend: true,
			next: 219,    
			delay: 1500    
		},
		219: {
			chatType: 1, 
			actorId:2,
			msg: '{掀桌表情}',
			isFriend: true,
			next: 220,    
			delay: 2000    
		},
		220: {
			chatType: 1, 
			actorId:3,
			msg: '{帅气的自拍图}',
			isFriend: true,
			next: 221,    
			delay: 3000    
		},
		221: {
			chatType: 1, 
			actorId:3,
			msg: '在壮烈又可悲地前往这新生命的旅途前，我有话和大家说……',
			isFriend: true,
			next: 230,    
			delay: 2000    
		},
		222: {
			chatType: 1,//9011选项2内容 
			actorId:3,
			msg: '……',
			isFriend: true,
			next: 223,    
			delay: 2000    
		},
		223: {
			chatType: 1, 
			actorId:2,
			msg: '啊哈哈哈！尹川居然没话说啦。',
			isFriend: true,
			next: 224,    
			delay: 3000    
		},
		224: {
			chatType: 1, 
			actorId:3,
			msg: '如果lady希望的话，包括我的命在内，随时为您准备着……❤',
			isFriend: true,
			next: 225,    
			delay: 2000    
		},
		225: {
			chatType: 1, 
			actorId:3,
			msg: '只是，在您夺去我的命运前，我还有一言要敬告各位……',
			isFriend: true,
			next: 230,    
			delay: 2000    
		},
		230: {
			chatType: 1, 
			actorId:3,
			msg: '我最近发现了不得了的secret。',
			isFriend: true,
			next: 231,    
			delay: 2000    
		},
		231: {
			chatType: 1, 
			actorId:3,
			msg: '我最近发现了不得了的secret。',
			isFriend: true,
			next: 232,    
			delay: 3000    
		},
		232: {
			chatType: 1, 
			actorId:3,
			msg: '我终于想通了，过去，我一直以为人类是自由的、自在的、自主的。',
			isFriend: true,
			next: 233,    
			delay: 1500    
		},
		233: {
			chatType: 1, 
			actorId:3,
			msg: '但是我发现我错了',
			isFriend: true,
			next: 234,    
			delay: 2000    
		},
		234: {
			chatType: 1, 
			actorId:3,
			msg: '既然，人类远古的时候和外星人有过接触，为什么科技高明的他们没有控制人类呢？',
			isFriend: true,
			next: 235,    
			delay: 3000    
		},
		235: {
			chatType: 1, 
			actorId:3,
			msg: '答案是，他们其实是在控制人类！我们现在肯定生活在外星人设计的虚拟现实中！少数人知道世界的真相，比如共济会、骷髅会，还有一切传说中的控制者们，其实他们都是外星人扶持的傀儡！',
			isFriend: true,
			next: 236,    
			delay: 3000    
		},
		236: {
			chatType: 1, 
			actorId:5,
			msg: '这不就是最常见的阴谋论吗。',
			isFriend: true,
			next: 237,    
			delay: 2000    
		},
		237: {
			chatType: 1, 
			actorId:3,
			msg: '人类不是自由的，我们只是外星人弹奏的命运之弦上渺小的尘埃……',
			isFriend: true,
			next: 238,    
			delay: 2000    
		},
		238: {
			chatType: 1, 
			actorId:3,
			msg: '我决定把这个的想法公之于众！所以，这周六我要开一场线上直播演唱会“如果人类不是地球的主人！”',
			isFriend: true,
			next: 239,    
			delay: 2000    
		},
		239: {
			chatType: 1, 
			actorId:3,
			msg: '当然，免费送票给各位哦❤让我们一起见证真相的诞生吧~',
			isFriend: true,
			next: 240,    
			delay: 1500    
		},
		240: {
			chatType: 1, 
			actorId:3,
			msg: '{演唱会的排练帅图}~',
			isFriend: true,
			next: 9012,    
			delay: 2000    
		},
		241: {
			chatType: 1, //9012选项1内容241-247
			actorId:3,
			msg: '呵呵，那当然，我可是有千万铁粉、无数路人粉的……',
			isFriend: true,
			next: 242,    
			delay: 2000    
		},
		242: {
			chatType: 1, 
			actorId:3,
			msg: '只有我的守护骑士才有免费的票，其他人都要购票呢。',
			isFriend: true,
			next: 243,    
			delay: 3000    
		},
		243: {
			chatType: 1, 
			actorId:3,
			msg: '啊，这被黄金堆积的歌谣，究竟是罪恶还是荣耀……',
			isFriend: true,
			next: 244,    
			delay: 1500    
		},
		244: {
			chatType: 1, 
			actorId:5,
			msg: '无聊',
			isFriend: true,
			next: 245,    
			delay: 3000    
		},
		245: {
			chatType: 1, 
			actorId:3,
			msg: '阿愈也要来哦，给你准备了特邀嘉宾的位置❤，你们集团可是独家冠名呢。',
			isFriend: true,
			next: 246,    
			delay: 2000    
		},
		246: {
			chatType: 1, 
			actorId:5,
			msg: '最好你不要在这个无聊的活动中提到我的名字。',
			isFriend: true,
			next: 247,    
			delay: 2000    
		},
		247: {
			chatType: 1, 
			actorId:3,
			msg: '嗯，我知道阿愈是在害羞~哈哈！那么，大家别忘了哦。',
			isFriend: true,
			next: 250,    
			delay: 1500    
		},
		248: {
			chatType: 1, //9012选项2内容
			actorId:3,
			msg: '啊，小姐，真相在你的心中，也在你抬头仰望的星空之中——',
			isFriend: true,
			next: 244,    
			delay: 2000    
		},
		249: {
			chatType: 1, //9012选项3内容
			actorId:5,
			msg: '...我怎么一大早在听这么愚蠢的聊天~',
			isFriend: true,
			next: 245,    
			delay: 2000    
		},
		250: {
			chatType: 1, 
			actorId:7,
			msg: '【尹川下线了】',
			isFriend: true,
			next: 251,    
			delay: 1500    
		},
		9001: {
			chatType: 2, //1-消息对话，2-回复选项
			msgOption: [
				{
					msg: '大家好',
					next: 14,
					delay: 500
				},
				{
					msg: '你们是谁？',
					next: 16,
					delay: 500
				}
			]
		},
		9002: {
			chatType: 2, //1-消息对话，2-回复选项
			msgOption: [
				{
					msg: '我没有恶意的',
					next: 18,
					delay: 500
				},
				{
					msg: '你们的聊天不允许别人加入?',
					next: 19,
					delay: 500
				}
			]
		},
		9003: {
			chatType: 2, //1-消息对话，2-回复选项
			msgOption: [
				{
					msg: '我是因为一封邮件',
					next: 30,
					delay: 500
				},
				{
					msg: '这个怎么说呢。。。',
					next: 50,
					delay: 500
				}
			]
		},
		9004: {
			chatType: 2, //1-消息对话，2-回复选项
			msgOption: [
				{
					msg: '你们到底是做什么的？',
					next: 80,
					delay: 500
				},
				{
					msg: '这个软件到底是做什么的？',
					next: 80,
					delay: 500
				}
			]
		},
		9005: {
			chatType: 2, //1-消息对话，2-回复选项
			msgOption: [
				{
					msg: '我相信',
					next: 115,
					delay: 500
				},
				{
					msg: '我不相信',
					next: 116,
					delay: 500
				}
			]
		},
		9006: {
			chatType: 2, //1-消息对话，2-回复选项
			msgOption: [
				{
					msg: '谢谢各位，我也很想参加社团',
					next: 136,
					delay: 500
				},
				{
					msg: '我是为了救人才留在这里的',
					next: 140,
					delay: 500
				}
			]
		},
		9010: {
			chatType: 2, //1-消息对话，2-回复选项
			msgOption: [
				{
					msg: 'My world……太夸张了吧',
					next: 212,
					delay: 1000
				},
				{
					msg: '......',
					next: 230,
					delay: 1000
				}
			]
		},
		9011: {
			chatType: 2, //1-消息对话，2-回复选项
			msgOption: [
				{
					msg: '……',
					next: 213,
					delay: 1000
				},
				{
					msg: '好啊，那什么时候给我？',
					next: 222,
					delay: 1000
				}
			]
		},
		9012: {
			chatType: 2, //1-消息对话，2-回复选项
			msgOption: [
				{
					msg: '线上直播还需要票吗',
					next: 241,
					delay: 1000
				},
				{
					msg: '我也相信会找到真相的',
					next: 248,
					delay: 1000
				},
				{
					msg: '人类就是地球的主人!',
					next: 349,
					delay: 1000
				}
			]
		}
	}
		},
		2:{
			roomName:'向怡',
			roomImg:'img/head/xiangyi.png',//群聊头像图片链接

			//聊天详细数据map
			chatMsgMap: {
				1: {
					chatType: 1, //1-消息对话，2-回复选项
					actorId: 2,
					msg: '早上好~',
					isFriend: true,
					next: 9001,    
					delay: 1500    
				},
				2: {
					chatType: 1,//私聊1-9001选项1回答
					actorId: 2,
					msg: '哇啊，小姐姐也起得这么早！是不是还在上学呀？',
					isFriend: true,
					next: 9002,
					delay: 1500
				},
				3: {
					chatType: 1,//私聊1-9002选项1的内容
					actorId: 2,
					msg: '嘿嘿，那我们一样啊！早睡早起身体好~',
					isFriend: true,
					next: 10,
					delay: 2000
				},
				4: {
					chatType: 1,//私聊1-9002选项2内容4-5
					actorId: 2,
					msg: '那小姐姐也很努力啊，这么早就起床了(o゜▽゜)o☆~',
					isFriend: true,
					next: 5,
					delay: 1500
				},
				5: {
					chatType: 1,
					actorId: 2,
					msg: '工作了更加辛苦了吧？小姐姐要保重自己哦。',
					isFriend: true,
					next: 10,
					delay: 3000
				},
				6: {
					chatType: 1,//私聊1-9001选项2内容
					actorId: 2,
					msg: '啊，对不起，是不是把小姐姐吵醒啦！',
					isFriend: true,
					next: 7,
					delay: 2000
				},
				7: {
					chatType: 1,
					actorId: 2,
					msg: '我还是学生，所以才起这么早，太兴奋了没注意不好意思o((⊙﹏⊙))o',
					isFriend: true,
					next: 9003,
					delay: 1500
				},
				8: {
					chatType: 1,//私聊1-9003选项1内容
					actorId: 2,
					msg: '哈哈，软糖你真温柔呀。多睡觉有利于美容，你肯定很漂亮(>▽<)',
					isFriend: true,
					next: 10,
					delay: 3000
				},
				9: {
					chatType: 1,//私聊1-9003选项2内容
					actorId: 2,
					msg: '(┬＿┬)我会注意哒！',
					isFriend: true,
					next: 10,
					delay: 3000
				},
				10: {
					chatType: 1,
					actorId: 2,
					msg: '啊，对了。我是想告诉软糖一声，这个软件可以私聊的~',
					isFriend: true,
					next: 11,
					delay: 2000
				},
				11: {
					chatType: 1,
					actorId: 2,
					msg: '你有什么问题，如果不想放在群聊里说，也可以和我们私聊呀。',
					isFriend: true,
					next: 12,
					delay: 1500
				},
				12: {
					chatType: 1,
					actorId: 2,
					msg: '所以，你有什么问题嘛（*＾-＾*）？',
					isFriend: true,
					next: 9004,
					delay: 1500
				},
				13: {
					chatType: 1,//私聊1-9004选项内容
					actorId: 2,
					msg: '哎？问我这个嘛……我想想看啊。很久以前的事情了。反正肯定不是小姐姐这样忽地一声冒出来',
					isFriend: true,
					next: 14,
					delay: 2000
				},
				14: {
					chatType: 1,
					actorId: 2,
					msg: '嗯……',
					isFriend: true,
					next: 15,
					delay: 3000
				},
				15: {
					chatType: 1,
					actorId: 2,
					msg: '我记不清啦',
					isFriend: true,
					next: 9005,
					delay: 1500
				},
				16: {
					chatType: 1,//私聊1-9005选项内容
					actorId: 2,
					msg: '毕竟是好几年前的事情啦，我记得是，听了一个宣讲会还是什么……也许是看到了招新海报吧。反正就是在哪里看到，之后就觉得啊啊这是我的菜，就参加啦！',
					isFriend: true,
					next: 17,
					delay: 2000
				},
				17: {
					chatType: 1,
					actorId: 2,
					msg: '啊啊，当时也想不到后来这个社团里认识了这么多重要的朋友啊。不然肯定要努力把回忆塞进脑袋里的！',
					isFriend: true,
					next: 9006,
					delay: 2000
				},
				18: {
					chatType: 1,//私聊1-9006选项内容
					actorId: 2,
					msg: '客气什么~有问题继续问我哦(>▽<)',
					isFriend: true,
					next: 19,
					delay: 1500
				},
				19: {
					chatType: 1,
					actorId: 2,
					msg: '{发一个开心的表情}',
					isFriend: true,
					next: 20,
					delay: 2000
				},
				20: {
					chatType: 1,
					actorId: 2,
					msg: '啊忘了今天有全年级能力测试考！第一名的奖金可是很丰厚呢不能错过。我先上课了，8888！',
					isFriend: true,
					next: 21,
					delay: 2000
				},
				9001: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '早上好',
						next: 2,
						delay: 1000
					},
					{
						msg: '好困。你起得这么早么……',
						next: 6,
						delay: 1000
					}
					]
				},
				9002: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '是的，我还是学生',
						next: 3,
						delay: 1000
					},
					{
						msg: '不是，我已经踏上社会啦',
						next: 4,
						delay: 1000
					}
					]
				},
				9003: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '没事啦',
						next: 8,
						delay: 1000
					},
					{
						msg: '不要这么早给我发信息了',
						next: 9,
						delay: 1000
					}
					]
				},
				9004: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '你是怎么参加这个社团的？',
						next: 13,
						delay: 2000
					}
					]
				},
				9005: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '记不清？',
						next: 16,
						delay: 3000
					}
					]
				},
				9006: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '哈哈，谢谢你',
						next: 18,
						delay: 2000
					}
					]
				}
			}
		},
		3:{
			roomName:'长风',
			roomImg:'img/head/changfeng.png',//群聊头像图片链接

			//聊天详细数据map
			chatMsgMap: {
				1: {
					chatType: 1, //1-消息对话，2-回复选项
					actorId: 6,
					msg: '软糖也起床了吗？看你刚才上线了。',
					isFriend: true,
					next: 2,    //下一条消息
					delay: 1500    //下一步流程的延迟
				},
				2: {
					chatType: 1,
					actorId: 6,
					msg: '有好好吃早饭吗？',
					isFriend: true,
					next: 9001,
					delay: 2000
				},
				3: {
					chatType: 1,//私聊2-9001选项1内容
					actorId: 6,
					msg: '那就好。你喜欢吃糕点面包么？下次来我们的餐厅，可以给你带一点当日新做的面包，我想你会喜欢的。',
					isFriend: true,
					next: 5,
					delay: 4000
				},
				4: {
					chatType: 1,//私聊2-9001选项2内容
					actorId: 6,
					msg: '这可不好啊。这样吧，下次来我们的餐厅，可以给你带一点当日新做的面包，保证你会喜欢的',
					isFriend: true,
					next: 5,
					delay: 4000
				},
				5: {
					chatType: 1,
					actorId: 6,
					msg: '对了，餐厅叫Cofa，是个法国餐厅。应该算是...有点名气吧。我的梦想是寻找中国味道与法国菜系的完美搭配，很幸运大家都还挺认可我的菜品味道。有个京酱肉丝和法式黄油组合的面包很受欢迎哦^^',
					isFriend: true,
					next: 9002,
					delay: 2000
				},
				6: {
					chatType: 1,//私聊2-9002选项1内容
					actorId: 6,
					msg: '厨艺总是在不同奇妙的组合中进步的哦。',
					isFriend: true,
					next: 9003,
					delay: 4000
				},
				7: {
					chatType: 1,//私聊2-9002选项2内容
					actorId: 6,
					msg: '你不会失望的。其实呢，这是我研发出的菜式。虽然名字有点奇怪，但是很多食材以合适的比例组合在一起，可以有很不一样的风味。',
					isFriend: true,
					next: 9003,
					delay: 4000
				},
				8: {
					chatType: 1,//私聊2-9003选项内容
					actorId: 6,
					msg: '啊，这我记得很清楚^^',
					isFriend: true,
					next: 9,
					delay: 1500
				},
				9: {
					chatType: 1,
					actorId: 6,
					msg: '我并不是一开始就加入了Ancient Aliens的',
					isFriend: true,
					next: 10,
					delay: 3000
				},
				10: {
					chatType: 1,
					actorId: 6,
					msg: '我热爱厨艺，美味的食物能让人感觉到幸福，但是家里的长辈...不是很支持我。所以我课余时间一直在学习，不算是打工吧，更多是想要多接触食物。那时候，学校附近有个咖啡馆叫VIVI，我就在那里打工。',
					isFriend: true,
					next: 11,
					delay: 4000
				},
				11: {
					chatType: 1,
					actorId: 6,
					msg: '那个时候，他们一群人经常在那里聚会，讨论原始外星人的事情。他们还拜托我给他们用店里的电视，放相关的纪录片看。',
					isFriend: true,
					next: 12,
					delay: 3000
				},
				12: {
					chatType: 1,
					actorId: 6,
					msg: '一来二去我就和他们熟悉了。回过神来，我就成为他们的一员，大概就是这样吧',
					isFriend: true,
					next: 13,
					delay: 4000
				},
				13: {
					chatType: 1,
					actorId: 6,
					msg: '啊，差不多要去讨论今天的主厨推荐菜品了，我要先下了。别忘了过来餐厅哦，我给你准备最幸福的面包。',
					isFriend: true,
					next: 14,
					delay: 3000
				},
				14: {
					chatType: 1,  
					actorId:7,
					msg: '[长风下线了]',
					isFriend: true,
					next: 15,
					delay: 1000
				},
				9001: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '已经吃啦',
						next: 3,
						delay: 2000
					},
					{
						msg: '我通常……不吃早饭',
						next: 4,
						delay: 2000
					}
					]
				},
				9002: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '听起来怪怪的',
						next: 6,
						delay: 2000
					},
					{
						msg: '一定很好吃',
						next: 7,
						delay: 2000
					}
					]
				},
				9003: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '说来，长风是为什么参加社团的呢？',
						next: 8,
						delay: 1500
					}				
					]
				}
			}
		},
		4:{
			roomName:'韩师愈',
			roomImg:'img/head/shiyu.png',//群聊头像图片链接

			//聊天详细数据map
			chatMsgMap: {
				1: {
					chatType: 1, //1-消息对话，2-回复选项
					actorId: 5,
					msg: '你在线吧？',
					isFriend: true,
					next: 2,    //下一条消息
					delay: 1500    //下一步流程的延迟
				},
				2: {
					chatType: 1,
					actorId: 5,
					msg: '说吧，让你退出这个群聊，需要什么条件？',
					isFriend: true,
					next: 9001,
					delay: 2000
				},
				3: {
					chatType: 1,//私聊3-9001选项1内容
					actorId: 5,
					msg: '我回头和修说让他加上。',
					isFriend: true,
					next: 9002,
					delay: 2000
				},
				4: {
					chatType: 1,//私聊3-9001选项2内容
					actorId: 5,
					msg: '哼。',
					isFriend: true,
					next: 9002,
					delay: 3000
				},
				5: {
					chatType: 1,//私聊3-9002选项内容
					actorId: 5,
					msg: '……我并不是一定要让你离开。但如果你不说自己的目的，我只能当你做可疑人物。',
					isFriend: true,
					next: 6,
					delay: 2000
				},
				6: {
					chatType: 1,
					actorId: 5,
					msg: '如果一个人真的相信原始外星人理论，便很难逃开阴谋论。',
					isFriend: true,
					next: 7,
					delay: 3000
				},
				7: {
					chatType: 1,
					actorId: 5,
					msg: '如果这个世界真的是阴谋论所说的，存在着什么大的秘密。那么，你突然闯入我们的群聊，又拿出了那样一个奇怪的理由，是不是可以说是阴谋的一环呢？',
					isFriend: true,
					next: 8,
					delay: 3000
				},
				8: {
					chatType: 1,
					actorId: 5,
					msg: '自然，我们讨论原始外星人理论不过是业余的一种兴趣而已。但谁知道是否有什么人注意到了我们这个群聊？如果真的存在外星人又和人类有接触，它们是否愿意我们讨论这些呢？如果我们在闲聊中，真的说中了某些事实。它们是否会要试探甚至铲除我们？',
					isFriend: true,
					next: 9,
					delay: 3000
				},
				9: {
					chatType: 1,
					actorId: 5,
					msg: '当然，你可以说这是杞人忧天。但在逻辑上，这是合理的。',
					isFriend: true,
					next: 9003,
					delay: 1500
				},
				10: {
					chatType: 1,//私聊3-9003选项1内容10-11
					actorId: 5,
					msg: '……不谈逻辑谈感性吗？的确，你表现出的善良是容易让人相信你的。',
					isFriend: true,
					next: 11,
					delay: 1500
				},
				11: {
					chatType: 1,
					actorId: 5,
					msg: '但是，真遗憾，在我的世界里，过于感性的人只会中了商海阴谋。',
					isFriend: true,
					next: 15,
					delay: 4000
				},
				12: {
					chatType: 1,//私聊3-9003选项2内容12-13
					actorId: 5,
					msg: '人和人不能知道彼此的思维，我们只能运用逻辑去推定他人的想法。',
					isFriend: true,
					next: 13,
					delay: 2000
				},
				13: {
					chatType: 1,
					actorId: 5,
					msg: '逻辑是在商海沉浮中帮助我的唯一武器。也是我生活的方式。',
					isFriend: true,
					next: 15,
					delay: 4000
				},
				15: {
					chatType: 1,
					actorId: 5,
					msg: '和你讨论这些也没有意义……你若没什么想说的话，我下线了。',
					isFriend: true,
					next: 9004,
					delay: 1500
				},
				16: {
					chatType: 1,//私聊3-选项内容
					actorId: 5,
					msg: '忘了。记得也没有告诉你的必要。',
					isFriend: true,
					next: 17,
					delay: 1500
				},
				17: {
					chatType: 1,  
					actorId:7,
					msg: '[韩师愈下线了]',
					isFriend: true,
					next: 18,
					delay: 1000
				},
				9001: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: 'app根本没有退群的选项',
						next: 3,
						delay: 1000
					},
					{
						msg: '救到人前我不会退出',
						next: 4,
						delay: 1000
					}					
					]
				},
				9002: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '为什么那么想让我离开？',
						next: 5,
						delay: 2000
					}								
					]
				},
				9003: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '虽然逻辑可能，但希望你能相信我',
						next: 10,
						delay: 3000
					},	
					{
						msg: '逻辑根本没有意义',
						next: 12,
						delay: 3000
					}					
					]
				},
				9004: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '等下，可以问问你为什么加入Ancient Aliens？',
						next: 16,
						delay: 4000
					}				
					]
				}
			}
		},
		5:{
			roomName:'尹川',
			roomImg:'img/head/yinchuan.png',//群聊头像图片链接

			//聊天详细数据map
			chatMsgMap: {
				1: {
					chatType: 1, //1-消息对话，2-回复选项
					actorId: 3,
					msg: '@软糖，你有AMY的账号吗？',
					isFriend: true,
					next: 2,    //下一条消息
					delay: 2000    //下一步流程的延迟
				},
				2: {
					chatType: 1,
					actorId: 3,
					msg: '正想要给你前往星空的通行证，却找不到你的小船……',
					isFriend: true,
					next: 9001,
					delay: 2000
				},
				3: {
					chatType: 1,
					actorId: 1, //私聊4-9001选项1内容3-5
					msg: '那一会我把邮箱账号给你吧',
					isFriend: false,
					next: 4,
					delay: 2000
				},
				4: {
					chatType: 1,
					actorId: 3, 
					msg: '呵呵，通往寰宇之美的密码，马上就要展现在你的面前咯……',
					isFriend: true,
					next: 5,
					delay: 1500
				},
				5: {
					chatType: 1,
					actorId: 3, 
					msg: '啊，多么美啊……天之主宰，inanna的身影……',
					isFriend: true,
					next: 9003,
					delay: 3000
				},
				6: {
					chatType: 1,//私聊4-9001选项2内容
					actorId: 3, 
					msg: '……',
					isFriend: true,
					next: 9002,
					delay: 2000
				},
				7: {
					chatType: 1,//私聊4-9002选项内容
					actorId: 3, 
					msg: '哦，多么壮丽的船儿！它将载着人世的美好，前往那永生的天堂和深渊……',
					isFriend: true,
					next: 8,
					delay: 2000
				},
				8: {
					chatType: 1,//私聊4-9002选项内容
					actorId: 3, 
					msg: '通往寰宇之美的密码，在银河之幕下，会缓缓展现在你的面前……',
					isFriend: true,
					next: 5,
					delay: 2000
				},
				9: {
					chatType: 1,//私聊4-9003选项内容9-12
					actorId: 1, 
					msg: '可以问个问题吗？尹川先生是为什么参加这个社团的呢？',
					isFriend: false,
					next: 10,
					delay: 2000
				},
				10: {
					chatType: 1,
					actorId: 3, 
					msg: '当然是群星的指引了！',
					isFriend: true,
					next: 11,
					delay: 3000
				},
				11: {
					chatType: 1,
					actorId: 3, 
					msg: '某日，我在某个地点徘徊，寻找我的某个绝佳idea。在某时，突然地，一道五彩的光芒射入我的人生！我循着这道光芒前进，最终来到了我们的社团教室。',
					isFriend: true,
					next: 12,
					delay: 2000
				},
				12: {
					chatType: 1,
					actorId: 3, 
					msg: '就是这样传奇的故事……',
					isFriend: true,
					next: 9004,
					delay: 2000
				},
				13: {
					chatType: 1,
					actorId: 3, 
					msg: '人类的记忆都是暧昧的。就像是天之河上浮现的美丽泡沫……',
					isFriend: true,
					next: 14,
					delay: 4000
				},
				14: {
					chatType: 1,
					actorId: 3, 
					msg: '期待你前往星空的船票吧，美丽的小姐，我先去准备演唱会的事情了，See you！My love~',
					isFriend: true,
					next: 15,
					delay: 2000
				},
				15: {
					chatType: 1,
					actorId: 7, 
					msg: '[尹川下线了]',
					isFriend: true,
					next: 16,
					delay: 2000
				},
				9001: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '你是说演唱会的票?',
						next: 3,
						delay: 500
					},	
					{
						msg: '呵呵，我马上去造船，尹川大大稍等',
						next: 6,
						delay: 2000
					}					
					]
				},
				9002: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '造好了!我稍后给你邮箱账号',
						next: 7,
						delay: 2000
					}					
					]
				},
				9003: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '呃，打扰下',
						next: 9,
						delay: 500
					}					
					]
				},
				9004: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '这不是什么都不记得吗？',
						next: 13,
						delay: 1000
					}					
					]
				}
			}
		},
		6:{
			roomName:'修Huge',
			roomImg:'img/head/Huge.png',//群聊头像图片链接

			//聊天详细数据map
			chatMsgMap: {
				1: {
					chatType: 1, //1-消息对话，2-回复选项
					actorId: 4,
					msg: '可以，问你，问题吗？',
					isFriend: true,
					next: 9001,    //下一条消息
					delay: 2000    //下一步流程的延迟
				},
				2: {
					chatType: 1,//私聊5-9001选项1-2内容
					actorId: 4,
					msg: '……',
					isFriend: true,
					next: 3,
					delay: 2000
				},
				3: {
					chatType: 1,
					actorId: 4,
					msg: '为什么，你，无法退群？',
					isFriend: true,
					next: 4,
					delay: 1500
				},
				4: {
					chatType: 1,
					actorId: 4,
					msg: '检查代码，有退群的相关代码。但是，界面无法看到。',
					isFriend: true,
					next: 9002,
					delay: 2000
				},
				5: {
					chatType: 1,//私聊5-9002选项内容
					actorId: 4,
					msg: '是因为你自身吗？还是说，因为其他人修改了程序吗？',
					isFriend: true,
					next: 6,
					delay: 1500
				},
				6: {
					chatType: 1,
					actorId: 4,
					msg: '如果是你，为什么？',
					isFriend: true,
					next: 7,
					delay: 4000
				},
				7: {
					chatType: 1,
					actorId: 4,
					msg: '算了……我就是，问问看。你不知道，就算了。',
					isFriend: true,
					next: 9003,
					delay: 1500
				},
				8: {
					chatType: 1,//私聊5-9003选项内容
					actorId: 1,
					msg: '我可以问你个问题吗?',
					isFriend: false,
					next: 9,
					delay: 2000
				},
				9: {
					chatType: 1,
					actorId: 4,
					msg: '问',
					isFriend: true,
					next: 9004,
					delay: 2000
				},
				10: {
					chatType: 1,//私聊5-9004选项内容
					actorId: 4,
					msg: '为了，追随，一个人。',
					isFriend: true,
					next: 9005,
					delay: 1500
				},
				11: {
					chatType: 1,//私聊5-9005选项内容
					actorId: 4,
					msg: '最初，写出了，这个程序的原型的人。',
					isFriend: true,
					next: 12,
					delay: 2000
				},
				12: {
					chatType: 1,
					actorId: 4,
					msg: '是那个人和这个程序，让我接触、喜欢上了编程。',
					isFriend: true,
					next: 13,
					delay: 2000
				},
				13: {
					chatType: 1,
					actorId: 4,
					msg: '之后，因为开发程序，接触了大家。',
					isFriend: true,
					next: 14,
					delay: 2000
				},
				14: {
					chatType: 1,
					actorId: 4,
					msg: '也就被，拉入社团。',
					isFriend: true,
					next: 9006,
					delay: 1500
				},
				15: {
					chatType: 1,//私聊5-9006选项内容
					actorId: 4,
					msg: '……我不清楚，没问过名字吧，只知道是那个人而已。',
					isFriend: true,
					next: 9007,
					delay: 2000
				},
				16: {
					chatType: 1,//私聊5-9007选项1内容16-17
					actorId: 4,
					msg: '我不清楚。',
					isFriend: true,
					next: 17,
					delay: 1500
				},
				17: {
					chatType: 1,
					actorId: 4,
					msg: '别介意，我今天的问题。我会自己，调查看看。',
					isFriend: true,
					next: 22,
					delay: 4000
				},
				20: {
					chatType: 1,//私聊5-9007选项2内容
					actorId: 1,
					msg: '你可真是除了电脑其他都不管呢……',
					isFriend: false,
					next: 21,
					delay: 1500
				},
				21: {
					chatType: 1,
					actorId: 4,
					msg: '是的。',
					isFriend: true,
					next: 17,
					delay: 1500
				},
				22: {
					chatType: 1,
					actorId: 4,
					msg: '那么，再聊。',
					isFriend: true,
					next: 23,
					delay: 2000
				},
				23: {
					chatType: 1,
					actorId: 7,
					msg: '[修Huge下线了]',
					isFriend: true,
					next: 24,
					delay: 2000
				},
				9001: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '可以啊',
						next: 2,
						delay: 1000
					},
					{
						msg: '哎，你怎么说话了？',
						next: 2,
						delay: 1000
					}					
					]
				},
				9002: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '这个问题就算你问我也……',
						next: 5,
						delay: 2000
					}					
					]
				},
				9003: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '等等,修!',
						next: 8,
						delay: 1000
					}					
					]
				},
				9004: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '你为什么会加入Ancient Aliens？',
						next: 10,
						delay: 2000
					}					
					]
				},
				9005: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '追随谁？',
						next: 11,
						delay: 2000
					}					
					]
				},
				9006: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '写出了这个程序原型的是谁？',
						next: 15,
						delay: 3000
					}					
					]
				},
				9007: {
					chatType: 2, //1-消息对话，2-回复选项
					msgOption: [
					{
						msg: '会不会是那个“龙天光”？',
						next: 16,
						delay: 2000
					},	
					{
						msg: '这也行..?',
						next: 20,
						delay: 2000
					}						
					]
				}
			}
		}
	}
};