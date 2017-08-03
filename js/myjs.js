$(document).ready(function() {
	$("#treeMenu").on("click", "a", function() {
		$('#treeMenu li.active').removeClass('active');
		$(this).closest('li').addClass('active');

	});

	$("#daohanglan").on("click", "a", function() {
		$('#daohanglan li.active').removeClass('active');
		$(this).closest('li').addClass('active');

	});

	var myTreeData = [{
		title: '水果',
		url: '#',
		open: true,
		id: 1,
		children: [{
				title: '橘子',
				url: '#',
				id: 1 - 1,
			},
			{
				title: '瓜',
				url: '#',
				id: 1 - 2,
				children: [
					{ title: '西瓜', url: '#', id: 1 - 2 - 1 },
					{ title: '黄瓜', url: '#', id: 1 - 2 - 2 }
				]
			}
		],

	}, {
		title: '坚果',
		url: '#',
		id: 2,
		children: [
			{ title: '向日葵' },
			{ title: '瓜子' }
		]
	}, {
		title: '蔬菜',
		url: '#',
		open: true,
	}];
	var id = myTreeData[0].id;

	$('#myTree').tree({
		data: myTreeData,
		itemCreator: function($li, item) {
			$li.append($('<a>', { href: item.url }).text(item.title));

		}
	});
	$('#myTree li[data-id=1]').addClass('active');
	$("#myTree").on("click", "a", function() {
		$('#myTree li.active').removeClass('active');
		$(this).closest('li').addClass('active');

	});

	$(function() {
		//获得当前<ul>
		var $uList = $(".scroll-box ul");
		var timer = null;
		//触摸清空定时器
		$uList.hover(function() {
				clearInterval(timer);
			},
			function() { //离开启动定时器
				timer = setInterval(function() {
						scrollList($uList);
					},
					1000);
			}).trigger("mouseleave"); //自动触发触摸事件
		//滚动动画
		function scrollList(obj) {
			//获得当前<li>的高度
			var scrollHeight = $("ul li:first").height();
			//滚动出一个<li>的高度
			$uList.stop().animate({
					marginTop: -scrollHeight
				},
				600,
				function() {
					//动画结束后，将当前<ul>marginTop置为初始值0状态，再将第一个<li>拼接到末尾。
					$uList.css({
						marginTop: 0
					}).find("li:first").appendTo($uList);
				});
		}
	});
});