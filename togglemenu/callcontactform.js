//debugger;
var formOpen = false;
			
function callContactForm(){
			
	var container = document.createElement('div');
			
	console.log(formOpen);
	container.className = 'popupbox';
	container.className += ' contact';
			
	//Fill it
	//name field
	var senderName = document.createElement('input');
	senderName.setAttribute('type','text');
	senderName.setAttribute('placeholder','Name');
	//mail field
	var senderMail = document.createElement('input');
	senderMail.setAttribute('type','text');
	senderMail.setAttribute('placeholder','Mail Address');
	//message field
	var senderNote = document.createElement('textarea');
	senderNote.setAttribute('type','text');
	senderNote.setAttribute('placeholder','Your Message');
	//submit button
	var submitButton = document.createElement('input');
	submitButton.setAttribute('type','button');
	submitButton.setAttribute('value','Submit');
	
	

	container.appendChild(senderName);
	container.appendChild(senderMail);
	container.appendChild(senderNote);
	container.appendChild(submitButton);
						
	if (!formOpen){
				
		document.body.appendChild(container);

		formOpen = true;
			
	}
	
	else{
				
		return;
				
	}
			
}
			
