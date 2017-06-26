'use strict'
loadjs.ready(['polyfills', 'keyLibs'], {// loaded setup libs
	success: function(){

		/* loadjs([

			'./_js/vendor/jquery.jsForm.min.js'
			,'./_js/vendor/jquery.fullpage.min.js'
			,'./_js/vendor/jquery.fullpage.min.css'

			], { success: function(){
				libsLoaded()
			}
		})//loadjs */
		libsLoaded()

	}//suc
})

function toggleSub(toggleEl, show) {
	var wrapperEl = toggleEl.parentNode,
	menuEl = toggleEl.nextElementSibling
	
	function closeDropdownFn() { 
		menuEl.classList.remove('mui--is-open') 
	}

	function openDropdownFn(){
		var wrapperRect = wrapperEl.getBoundingClientRect(),
		toggleRect = toggleEl.getBoundingClientRect()
		var top = toggleRect.top - wrapperRect.top + toggleRect.height
		var left =  toggleRect.left + toggleRect.width - menuEl.width
		menuEl.style.top = top + 'px'
		if (menuEl.classList.contains('mui-dropdown__menu--right'))
			menuEl.style.left = left + 'px'
		else
			menuEl.style.left = wrapperRect.left + 'px'
		
		menuEl.classList.add('mui--is-open')
	}
	show ? openDropdownFn() : closeDropdownFn()
}

function initSubmenu(){

	$('.submenu').hover(function() {
			toggleSub(this.firstChild, true)
		},
		function() {
			toggleSub(this.firstChild, false)
	})

	$('.submenu > a').attr('aria-haspopup','true') //IE, Edge

	$('.submenu > a').click(function() {
			toggleSub(this, true)
	})

	$('.submenu > ul').click(function() {
			toggleSub(this.previousElementSibling, false)
	})

}	


function libsLoaded(){
	
	TS.signalAppReady()

	TT.ScontentID ='#content-wrapper'
	TT.handle(function(evt) {
		//console.log(':')
		if(TT.PRE==evt.typ)  {//start
			//console.log(evt.$new)
			//$('#content-wrapper').fadeTo(100,.2)
		}
		if(TT.PAGE==evt.typ)  {//new pg loaded
			console.log('TT')
			$(TT.ScontentID).html(evt.$new)
			//$('#content-wrapper').fadeTo(100,1)
			
			$('html, body').scrollTop(0)
		}
	})
}


