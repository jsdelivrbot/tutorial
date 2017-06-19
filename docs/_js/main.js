'use strict'
loadjs.ready(['polyfills', 'keyLibs'], {// loaded setup libs
	success: function(){

		loadjs([

			'./_js/vendor/jquery.jsForm.min.js'
			,'./_js/vendor/jquery.fullpage.min.js'
			,'./_js/vendor/jquery.fullpage.min.css'

			], { success: function(){
				libsLoaded()
			}
	})//loadjs
	}//suc
})

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