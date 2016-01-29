/*
 *
 *
 */
var logout = {
	
}


logout.init = function (){
	return true;
}

logout.send = function (){
		
	if(!confirm("Você gostaria realmente de sair do sistema ?")) return;
	window.location.href = 'logout';
	
	
}