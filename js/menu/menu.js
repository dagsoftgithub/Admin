/*****************************************/
/* [author] Daniel Araujo Gomes
/* [date]	26/01/2013
/*****************************************/

/*
 * [Class] MENU
 */
var menu = {

	property:{package:'[MENU]', method:null, description:null},

};

$(document).ready(function(){


	var itens = {
		'Home':{'_id':'home','_function':'getUrl','_file':null,'_arguments':['eu.html']},
		'Estudo':{'_id':'estudo','_function':'getUrl','_file':null,'_arguments':['estudo.html'] },
		'Empresas':{'_id':'empresas','_function':'getUrl','_file':null,'_arguments':['empresas.html'] },
		'Cursos':{'_id':'cursos','_function':'getUrl','_file':null ,'_arguments':['cursos.html']},
		'Conhecimentos':{'_id':'conhecimento','_function':'getUrl','file':null,'_arguments':['conhecimento.html'] },
		'Contatos':{'_id':'contato','_function':'getUrl','_file':null,'_arguments':['contato.html'] },
		'Projetos':{'_id':'projetos','_function': 'getUrl','_file': null,'_arguments':['projetos.html']},
		'Sistemas':{'_id':'sistema','_function': 'sistema.onLoad','_file': '/javascript/sistema.js','_arguments':['sistema.html']},
		'Administração':{'_id':'administracao',"_function": null,"_file": null,"_arguments":null,
			"_sub": {
            	"Permissões": {"_function": null,"_file": null,"_arguments":null,
            		"_sub": {
            			"Usuários": {"_function": "initialize","_file": "js/usuario/usuario.js","_arguments":"usuario/listar", }
            		}
            	}
            }
	    },

	}

	$('#menu').menu(itens);
});
