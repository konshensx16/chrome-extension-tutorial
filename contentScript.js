// runs on the matching webpage
// 
var button = document.createElement("button")
var buttonTextNode = document.createTextNode("Click me to trigger something, somewhere")
var body = document.querySelector("body")
button.appendChild(buttonTextNode);

body.append(button)

button.addEventListener("click", function ()
{
	///////////////////////////////////////////////
	// send a message to the background,js file  //
	///////////////////////////////////////////////
	chrome.runtime.sendMessage({
		type: 'info',
		value: 'Hello world fron Overseas :)'
	})
})