var TM = {

	loadLibs: function(){
		console.log('loadLibs called')

		return Promise.all([
			TS.load('/docs/_js/submenu.js') //page transitions
			, TS.load('//cdn.jsdelivr.net/jquery.transit/0.9.12/jquery.transit.min.js')
			//, TS.load('//cdn.rawgit.com/topseed/topseed-turbo/master/transit/topseed-transitions-1.1.js') //page transitions
			, TS.load('/docs/_js/topseed-transitions-1.2.js') //page transitions
			, TS.load('//cdn.rawgit.com/topseed/topseed-turbo/master/release/topseed-turbo-4.3.js')
		])
		.then(TM.libsLoaded)
	}

	, libsLoaded: function(){
		
		TS.signalAppReady()

		TT.ScontentID = '#content-wrapper'
		TT.handle(function(evt) {
			if (TT.PRE == evt.typ) {
				//example transitions out:
				/*var newArr = evt.toHref.split('/').filter(Boolean)
				var newInd = Number(newArr[newArr.length-1].split('-')[0])
				var oldArr = evt.fromHref.split('/').filter(Boolean)
				var oldInd = Number(oldArr[oldArr.length-1].split('-')[0])
				console.log('oldInd'+oldInd+'/newInd'+newInd)

				if (newInd > oldInd) {
				{
					TR.boxOut('#content-wrapper', evt, 300, .87, 36, '#303f9f')
				}*/


				/*if (evt.fromHref.indexOf('/speakers/')==-1 && !evt.back) {	
					//TR.fadeOut('#content-wrapper', evt, 50, 0)
					TR.boxOut('#content-wrapper', evt, 300, .87, 36, '#303f9f')
				}*/
			}
			if (TT.PAGE === evt.typ) {
				$('#appbar').removeClass('appbar-hide') //reset appbar visibility
				$('#appbar').addClass('appbar-show')

				//example transitions in:
				//TR.show('#content-wrapper', evt) //no transition, same as $('#content-wrapper').html(evt.$new)
				//TR.fadeIn('#content-wrapper', evt, 150)
				console.log('oldUrl'+(evt.fromHref)+'/newUrl'+(evt.toHref))
				var newArr = evt.toHref.split('/').filter(Boolean)
				var newInd = Number(newArr[newArr.length-1].split('-')[0])
				var oldArr = evt.fromHref.split('/').filter(Boolean)
				var oldInd = Number(oldArr[oldArr.length-1].split('-')[0])
				console.log('oldInd'+oldInd+'/newInd'+newInd)

				if (newInd < oldInd) { 

					console.log('newInd'+newInd+'<oldInd'+oldInd)

					TR.uncoverDown('#content-wrapper', evt, 350)
					//TR.uncoverUp('#content-wrapper', evt, 350)
					//TR.uncoverRight('#content-wrapper', evt, 350)
					//TR.uncoverLeft('#content-wrapper', evt, 350)
				}
				else {

					if (evt.toHref.indexOf('agenda')>-1) { //going to agenda
						TR.splitVerticalOut('#content-wrapper', evt, 350)
					}
					else { //default
						TR.coverUp('#content-wrapper', evt, 350, 35)
						//TR.coverUp('#content-wrapper', evt, 350)
						//TR.coverRight('#content-wrapper', evt, 350)
						//TR.coverLeft('#content-wrapper', evt, 350)
					}
				}
				$('html, body').scrollTop(0)
			}
		})
	}

} //class

TM.loadLibs()

