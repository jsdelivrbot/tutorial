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

var submenuInitialized = false

function initSubmenu(){

	//if (submenuInitialized) return
	submenuInitialized = true

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
