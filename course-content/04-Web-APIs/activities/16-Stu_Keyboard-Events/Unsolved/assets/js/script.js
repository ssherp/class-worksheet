var keyEl =document.querySelector("#key")
var codeEL =document.querySelector("#code")
var statusEl =document.querySelector("#status")



function keydownAction(event) {
  event.key
  event.code

  // TODO: Complete keydown function

  console.log(event);
}

function keyupAction() {
  pre
	
  statusEl.innerHTML = "KEYUP Event";
}


document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

