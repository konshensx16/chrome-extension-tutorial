// connects to the native messaging app
//

chrome.runtime.onMessage.addListener(
	function (request, sender)
	{
		if (request.type == 'info')
		{
			///////////////////////////////
			// connect to the native app //
			///////////////////////////////
			var port = chrome.runtime.connectNative("overseas.media.natice.app.example")

			//////////////////////////////////////
			// send a message to the native app //
			//////////////////////////////////////
			port.postMessage(request.value)

			//////////////////////////////////////////////////////
			// listen for incoming messages from the native app //
			//////////////////////////////////////////////////////
			port.onMessage.addListener(function (message)
			{
				console.log(""message)
			})

			////////////////////////////////
			// when the port disconnects  //
			////////////////////////////////
			port.onDisconnect.addListener(function (error)
			{
				console.log(error)
				console.log("last error:" + chrome.runtime.lastError.message)
			})
		}
	}
)