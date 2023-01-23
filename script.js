

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}



function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true
  }
    alert("Please enter a valid email address!")
    return false
}



function submitData(){

	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let subject = document.getElementById('subject').value;
	let message = document.getElementById('message').value;

	

	if(!name || !email || !subject || !message){
		alert("Please fill all the fields");
		return;
	}

	if(ValidateEmail(email) == false){
		return;
	}

	

	let body = '{"personalizations":[{"to":[{"email":"marzooqabs@gmail.com"}],"subject":"Hello, Marzooq1234!"}],"from":{"email":"null"},"content":[{"type":"text/plain","value":"Hello, World!"}]}'

	let obj = JSON.parse(body);

	console.log(obj)


	obj.from.email = email;
	obj.personalizations[0].subject = subject;
	obj.content[0].value = message+ "  Regards," + name;

	body = JSON.stringify(obj);



	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '2a4d17817dmsh3425f990aa06c00p1484d2jsnfde67cd68b5a',
			'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
		},
		body: body
	};
	
	fetch('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', options)

	document.getElementById('submitSpan').textContent = "Message Sent!";

	document.getElementById('name').value = "";
	document.getElementById('email').value = "";
	document.getElementById('subject').value = "";
	document.getElementById('message').value = "";

	setTimeout(function(){ document.getElementById('submitSpan').textContent = "Send"; }, 4000);

	
}