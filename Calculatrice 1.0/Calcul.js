function addChar(char){
	document.getElementById("equation").textContent += char;
}

function addSymbol(sym){
	document.getElementById("equation").textContent += (" " + sym + " ");
}

function rep(){
	document.getElementById("equation").textContent += document.getElementById("resultat").textContent;
}

function removeChar(){
	document.getElementById("equation").textContent = document.getElementById("equation").textContent.replace(/.$/, '');
}

function clearEquation(){
	document.getElementById("equation").textContent = "";
}

function getResult(){
	result = eval(document.getElementById("equation").textContent);
	if(result % 1 != 0){
		document.getElementById("resultat").textContent = result.toFixed(3);
	}
	else{
		document.getElementById("resultat").textContent = result;
	}
	document.getElementById("equation").textContent = "";
}