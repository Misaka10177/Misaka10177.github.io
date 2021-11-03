// JavaScript Document
window.onload = function(){
//	jz
	setTimeout(function(){
		$('.jz').addClass('jz-hide')
	},800)
//	banner
	let i = 0;
	let index_item = $('.banner-item').length
	function banner(){
		$('.banner-wrap').css({
			'transform':'translateX('+ -100/index_item*i +'%)'
		})
		$('.banner-icon').eq(i).addClass('bur').siblings().removeClass('bur')
	}
	setInterval(function(){
		i++
		if(i > index_item -1){
			i = 0
		}
		banner()
	},3000)
	
	$('.banner-item').each(function(index){
		$('.banner-icon img').eq(index).click(function(){
			i = index
			banner()
		})
		
	})
//	倒计时
	$('.time-but').click(function(){
		$('.time').slideToggle(300)
	})
	setInterval(function(){
		let now = new Date()
		let teday = new Date('2021-12-30 8:00:00')
		let getdown = (teday - now)/1000
		let day = parseInt(getdown/60/60/24)
		let hour = parseInt(getdown/60/60%24)
		let min = parseInt(getdown/60%60)
		let sec = parseInt(getdown%60)
		$('.condown').html(' To: '+day+' Day '+hour+' Hours '+min+' Min '+sec+' Sec ')
	})
//	侧边栏
	$('.side-but').click(function(){
		$('aside').toggleClass('aside')
		$('.side-one').toggle(100)
	})
//	返回头部
	$('.return').click(function(){
		$('html,body').animate({
			'scrollTop':'0'
		},500)
	})
//	音乐
	let wall_music = document.getElementById('musi-all')
	let music_but = document.getElementById('musd')
	$('#musd').click(function(){
		if(wall_music.paused){
			wall_music.play()
			$('#musd').addClass('muss')
		}else {
			wall_music.pause()
			$('#musd').removeClass('muss')
		}
	})
	
//	pc-menu
	$('.yd-but').click(function(){
		$('.pc-menu').slideToggle(200)
		$(this).hide(100)
		$('.ydcha-but').show(100)
	})
	$('.ydcha-but').click(function(){
		$('.pc-menu').slideToggle(200)
		$(this).hide(100)
		$('.yd-but').show(100)
	})
}