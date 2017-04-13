'use strict'
console.log('CDS')
class CDS {

static get XBASIC() { return  'X-BASIC'}
static get XJT() { return  'X-JWT'}

static fetch(fetch_,ROOT_, url_, data_) {
	console.log('fetching ', url_)
	return fetch_(ROOT_ + url_ , { //1 call
			method: 'post'
			, headers: {
				'Content-Type': 'application/json',
			}
			, body: JSON.stringify(data_)
		}).then(function(response) { //2 returns a promise
			//console.log(response.headers)

			if (!response.ok) {
				console.log('not ok')
				console.log(response)
				throw Error(response.statusText)
			}
			return (response.json())
		})
}//_()

} // class
// browser and phonegap:
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
	module.exports = CDS //node


