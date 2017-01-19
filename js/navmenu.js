$(document).ready(function(){
	var nav_top_ul = $('.nav_top ul').first();
	var nav_top_li = nav_top_ul.children();
	var nav_bg = $('.nav_bg');
	var nav_bottom_ul = $('.nav_bottom ul');
	var nav_bottom_li = $('.nav_bottom li');
	
	/*显示二级菜单*/
	function remove_display(){
		nav_bg.removeClass('display_none');
	}
	nav_top_li.on('mouseenter',remove_display);
	nav_bottom_ul.on('mouseenter',remove_display);
	/*隐藏二级菜单*/
	function add_display(){
		nav_bg.addClass('display_none');
	}
	nav_top_li.on('mouseleave',add_display);
	nav_bottom_ul.on('mouseleave',add_display);
	
	function menu_hover(parent,child){
		nav_bottom_ul.eq(parent.index(child)).addClass('active');
	}
	function menu_leave(parent,child){
		nav_bottom_ul.eq(parent.index(child)).removeClass('active');
	}
	
	//一级菜单hover事件
	nav_top_li.bind({
		mouseenter:function(){
			menu_hover(nav_top_li,$(this));
		},
		mouseleave:function(){
			menu_leave(nav_top_li,$(this));
		}
	});
	//二级菜单hover事件
	nav_bottom_ul.bind({
		mouseenter:function(){
			menu_hover(nav_bottom_ul,$(this));
		},
		mouseleave:function(){
			menu_leave(nav_bottom_ul,$(this));
		}
	});
	
	nav_bottom_li.bind({
		mouseenter:function(){
			$(this).addClass('active');
		},
		mouseleave:function(){
			$(this).removeClass('active');
		}
	});
});
