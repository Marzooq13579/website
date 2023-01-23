

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



function _0x3f84(){const _0x44d507=['847825mkjDfB','Send','parse','1318740DeVNFT','application/json','personalizations','message','961605upVXSI','subject','10OQOmMJ','value','3435ZFTKfg','log','content','2353EqJRZb','stringify','24NQsFKP','POST','1899779jeReVO','name','\x20\x20Regards,','submitSpan','4398484wSSezT','2a4d17817dmsh3425f990aa06c00p1484d2jsnfde67cd68b5a','email','3eKFcDI','textContent','getElementById','100xoHBng','36564gyaBsw','12EZyknS','Please\x20fill\x20all\x20the\x20fields','from'];_0x3f84=function(){return _0x44d507;};return _0x3f84();}(function(_0x1b8e5c,_0x42ed55){const _0xdea01d=_0x53af,_0x4ad115=_0x1b8e5c();while(!![]){try{const _0x38f152=parseInt(_0xdea01d(0x13f))/0x1*(-parseInt(_0xdea01d(0x152))/0x2)+-parseInt(_0xdea01d(0x14d))/0x3*(-parseInt(_0xdea01d(0x14a))/0x4)+parseInt(_0xdea01d(0x13d))/0x5*(-parseInt(_0xdea01d(0x158))/0x6)+parseInt(_0xdea01d(0x146))/0x7+parseInt(_0xdea01d(0x144))/0x8*(-parseInt(_0xdea01d(0x15c))/0x9)+-parseInt(_0xdea01d(0x150))/0xa*(-parseInt(_0xdea01d(0x155))/0xb)+-parseInt(_0xdea01d(0x151))/0xc*(parseInt(_0xdea01d(0x142))/0xd);if(_0x38f152===_0x42ed55)break;else _0x4ad115['push'](_0x4ad115['shift']());}catch(_0x5aee4c){_0x4ad115['push'](_0x4ad115['shift']());}}}(_0x3f84,0xc5a40));function _0x53af(_0x441986,_0x57756a){const _0x3f8451=_0x3f84();return _0x53af=function(_0x53aff8,_0x3ee84d){_0x53aff8=_0x53aff8-0x13d;let _0x3031ba=_0x3f8451[_0x53aff8];return _0x3031ba;},_0x53af(_0x441986,_0x57756a);}function submitData(){const _0x5d6781=_0x53af;let _0x9cdf93=document[_0x5d6781(0x14f)](_0x5d6781(0x147))['value'],_0x40c955=document[_0x5d6781(0x14f)]('email')[_0x5d6781(0x13e)],_0x464dcb=document['getElementById']('subject')[_0x5d6781(0x13e)],_0x1e6b91=document[_0x5d6781(0x14f)](_0x5d6781(0x15b))[_0x5d6781(0x13e)];if(!_0x9cdf93||!_0x40c955||!_0x464dcb||!_0x1e6b91){alert(_0x5d6781(0x153));return;}if(ValidateEmail(_0x40c955)==![])return;let _0x24bd33='{\x22personalizations\x22:[{\x22to\x22:[{\x22email\x22:\x22marzooqabs@gmail.com\x22}],\x22subject\x22:\x22Hello,\x20Marzooq1234!\x22}],\x22from\x22:{\x22email\x22:\x22null\x22},\x22content\x22:[{\x22type\x22:\x22text/plain\x22,\x22value\x22:\x22Hello,\x20World!\x22}]}',_0x31f097=JSON[_0x5d6781(0x157)](_0x24bd33);console[_0x5d6781(0x140)](_0x31f097),_0x31f097[_0x5d6781(0x154)][_0x5d6781(0x14c)]=_0x40c955,_0x31f097[_0x5d6781(0x15a)][0x0]['subject']=_0x464dcb,_0x31f097[_0x5d6781(0x141)][0x0][_0x5d6781(0x13e)]=_0x1e6b91+_0x5d6781(0x148)+_0x9cdf93,_0x24bd33=JSON[_0x5d6781(0x143)](_0x31f097);const _0x16cfd5={'method':_0x5d6781(0x145),'headers':{'content-type':_0x5d6781(0x159),'X-RapidAPI-Key':_0x5d6781(0x14b),'X-RapidAPI-Host':'rapidprod-sendgrid-v1.p.rapidapi.com'},'body':_0x24bd33};fetch('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',_0x16cfd5),document[_0x5d6781(0x14f)]('submitSpan')[_0x5d6781(0x14e)]='Message\x20Sent!',document['getElementById']('name')[_0x5d6781(0x13e)]='',document[_0x5d6781(0x14f)](_0x5d6781(0x14c))[_0x5d6781(0x13e)]='',document[_0x5d6781(0x14f)](_0x5d6781(0x15d))[_0x5d6781(0x13e)]='',document[_0x5d6781(0x14f)](_0x5d6781(0x15b))[_0x5d6781(0x13e)]='',setTimeout(function(){const _0x599be5=_0x5d6781;document[_0x599be5(0x14f)](_0x599be5(0x149))['textContent']=_0x599be5(0x156);},0xfa0);}