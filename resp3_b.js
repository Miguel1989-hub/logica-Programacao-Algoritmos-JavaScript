function mostraSituacao (){
	var inVelocidade = document.getElementById("inVelocidade");
	var inVelocidadeCond = document.getElementById("inVelocidadeCond");
	var outSituacao = document.getElementById("outSituacao");

	var velocidadeVia = Number(inVelocidade.value);
	var velocidadeCar = Number(inVelocidadeCond.value);

	if(velocidadeVia == "" || isNaN(velocidadeVia)){
		alert("Insira a velocidade permitida corretamente!");
		inVelocidade.focus();
		return
	}

	if(velocidadeCar == "" || isNaN(velocidadeCar)){
		alert("Insira a velocidade do condutor corretamente!");
		inVelocidadeCond.focus();
		return
	}

	var multa = velocidadeVia * 1.2;

	if(velocidadeCar <= velocidadeVia){
		outSituacao.textContent = "Situação: Sem Multa";
	}

	if (velocidadeCar >= multa) {
		outSituacao.textContent = "Situação: Multa Leve";
	}

	if (velocidadeCar > multa) {
		outSituacao.textContent = "Situação: Multa Grave";
	}

}

	var btVerifica = document.getElementById("btVerifica");
	btVerifica.addEventListener("click", mostraSituacao )
