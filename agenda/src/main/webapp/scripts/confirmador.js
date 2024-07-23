/**
 * confirmação de exclusao de um contato
 * @author fidel barria
 * @param idcon
 */

function confirmar(idcon){
	let resposta = confirm("Confirma a exclusa deste contato ?")
	if (resposta === true){
		//alert(idcon)
		window.location.href="delete?idcon=" + idcon
	}
}