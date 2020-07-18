function validação(){
	var nome = $("#nome").val();
	var sobrenome = $("#sobrenome").val();
	var cpf = $("#cpf").val();
	var telefone = $("#telefone").val();
	var endereco = $("#endereco").val();

	// primeiro tipo de validação
	if(nome == ""){
		alert("Por favor digite seu nome")
		$("nome").focus();
		return false;
	}

	if(cpf == ""){
		alert("Por favor digite seu cpf")
		$("cpf").focus();
		return false;
	}
	return true;
}
