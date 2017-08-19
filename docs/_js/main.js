var TM = {

	loadLibs: function(){
		console.log('loadLibs called')

		return Promise.all([
			TS.load('./_js/submenu.js')
			, TS.load('//cdn.jsdelivr.net/jquery.transit/0.9.12/jquery.transit.min.js')
			, TS.load('//cdn.rawgit.com/topseed/topseed-turbo/master/transit/topseed-transitions-1.3.js') //page transitions
			, TS.load('//cdn.rawgit.com/topseed/topseed-turbo/master/release/topseed-turbo-4.3.js')
		])
		.then(TM.libsLoaded)
	}

	, libsLoaded: function(){
		
		TS.signalAppReady()

		TT.ScontentID = '#content-wrapper'
		TT.handle(function(evt) {

			//Pages on this site happen to have a page index in the name. We use it to detect forward/back
			//In other cases we would keep track of this via a session variable, including on browser forward/back button
			var newArr = evt.toHref.split('/').filter(Boolean)
			var newInd = Number(newArr[newArr.length-1].split('-')[0])
			var oldArr = evt.fromHref.split('/').filter(Boolean)
			var oldInd = Number(oldArr[oldArr.length-1].split('-')[0])
			if (oldInd == NaN) oldInd = 0
			//console.log('oldInd'+oldInd+'/newInd'+newInd)

			if (TT.PRE == evt.typ) {
				if (newInd > oldInd) { //on page forward transitions show immediate feedback by beginning a fade-out
					//TR.fadeOut(TT.ScontentID, evt, 200, .5)
				}
			}
			if (TT.PAGE === evt.typ) {
				$('#appbar').removeClass('appbar-hide') //reset appbar visibility
				$('#appbar').addClass('appbar-show')

				if (newInd > oldInd) { //forward transitions
					//no need for Promise.all here because there's no 'then'
					//TR.fadeIn(TT.ScontentID, evt, 0, null, false) //set opacity to 1 with 0 delay and no content replace
					TR.uncoverDown(TT.ScontentID, evt, 1500)
				}
				else { //backward transitions
					if (evt.toHref.indexOf('agenda')>-1) //going to agenda, custom
						TR.splitVerticalOut(TT.ScontentID, evt, 750)
					else
					{
						Promise.all([
							TR.boxOut(TT.ScontentID, evt, 300, .87, 36, '#303f9f', false)
							, TR.coverUp(TT.ScontentID, evt, 1250, 35)
						]).then(function(){
							TR.boxOutCleanup(TT.ScontentID)
						})
					}
				}
				$('html, body').scrollTop(0)
			}
		})
	}

} //class

TM.loadLibs()

