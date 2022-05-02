/*
*
 * Confirmacao de exclusao de um contato
 @autor Estevao Manhique
 @param idcon
 */
 function confirmar(idcon){
	let resposta = confirm("Confirma a exclusao deste contato")
	if(resposta===true){
		window.location.href = "delete?idcon=" + idcon
	}
}