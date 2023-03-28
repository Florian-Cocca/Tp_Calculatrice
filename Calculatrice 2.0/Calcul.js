class calculatrice{
	constructor(sym){
		this.sym = sym;
	}
	
	addChar(sym){
		document.getElementById("ecran").textContent += sym;
	}

	rep(){
		document.getElementById("ecran").textContent += document.getElementById("resultat").textContent;
	}

	removeChar(){
		if(document.getElementById("ecran").textContent == ""){
			document.getElementById("ecran").textContent = document.getElementById("equation").textContent;
		}
		else{
			document.getElementById("ecran").textContent = document.getElementById("ecran").textContent.replace(/.$/, '');
		}
	}

	clearEquation(){
		document.getElementById("ecran").textContent = "";
	}

	getResult(){
		this.result = eval(document.getElementById("ecran").textContent);
		if(this.result % 1 != 0){
			document.getElementById("resultat").textContent = this.result.toFixed(3);
		}
		else{
			document.getElementById("resultat").textContent = this.result;
		}
		document.getElementById("equation").textContent = document.getElementById("ecran").textContent;
		document.getElementById("ecran").textContent = "";
	}
}

function quack(){
	if(duck == 0){
		document.body.style.backgroundImage = "url('Ducky.jpg')";
		document.body.style.backgroundSize = "20% 20%";
		coin.play();
		duck = 1;
	}
	else{
		document.body.style.backgroundImage = 'none';
		unCoin.play();
		duck = 0;
	}
}

var calc = new calculatrice()

var coin = new Audio('Quack.mp3');

var unCoin = new Audio('Unquack.mp3');

let duck = 0;