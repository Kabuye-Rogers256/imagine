var dis = document.getElementById('dis');
var bn = document.getElementById('bnt');
var wrt = document.getElementById('writer');
var all = document.getElementById('all');
var menu = document.getElementById('menu');
var password = document.getElementById('password');
var pwd = document.getElementById('pwd');
var what = document.getElementById('what');
var uplo = document.getElementById('uplo');
var main = document.getElementById('main');
var sub = document.getElementById('sub-main');
var tell = document.getElementById('tell');

var qt = document.getElementById('qout');

function to_quot(text, img, write){
	menu.style.display = 'none';
	bn.style.display = 'inline-block';
	sub.style.display = 'flex';
	// main.style.display = 'none';
	pwd.style.display = 'none';
	uplo.style.display = 'none';
	qt.innerText = text;
	sub.style.backgroundImage = 'url(' + img + ')';
	wrt.innerText = write;
}

function to_main(){
	menu.style.display = 'none';
	sub.style.display = 'none';
	uplo.style.display = 'none';
	pwd.style.display = 'none';
	main.style.display = 'block';
	bn.style.display = 'none';
}


function passwordor(){
	menu.style.display = 'none';
	if(password.value === 'think'){
		password.value = '';
		pwd.style.display = 'none';
		bn.style.display = 'inline-block';
		uplo.style.display = 'block';
	}else{
		if(password.value === ''){
			what.innerText = 'You never enter a word.'
		}else{
			what.innerText = 'wrong password'
		}
		pwd.style.display = 'none';
		if(sub.style.display === 'flex'){
		}else{
			bn.style.display = 'none';
		}
		tell.style.maxHeight = '100%';
		var timed = window.setInterval(()=>{
			tell.style.maxHeight = '0';
		}, 2000);		
	}
}

function passd(){
	menu.style.display = 'none';
	bn.style.display = 'inline-block';
	// pwd.style.display = 'flex';
	menu.style.display = 'block';
}

function the_input(){
	menu.style.display = 'none';
	bn.style.display = 'inline-block';
	menu.style.display = 'none';
	pwd.style.display = 'flex';
}


function work(text, img){
	bn.style.display = 'inline-block';
	dis.style.display = 'flex';
	quote.innerText = text;
	dis.style.backgroundImage = 'url("pex5.jpg")';
}

if(menu.style.display === 'block'){
	all.addEventListener('click', ()=>{
		console.log('no no');
		menu.style.display = 'none';
	});
}else{
	console.log('what');
}
