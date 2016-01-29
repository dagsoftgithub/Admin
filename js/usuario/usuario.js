/*****************************************/
/* [author] Daniel Araujo Gomes
/* [date]	26/01/2013
/*****************************************/

/*
 * [Class] USUARIO
 */
menu.usuario = {}

$.extend( menu.usuario , menu.crud );

menu.usuario.property = {package:'[MENU][USUARIO]', method:null, description:null};
menu.usuario.breadcrumb_listar = 'home/usuario/lista';
menu.usuario.breadcrumb_incluir = 'home/usuario/incluir';
menu.usuario.breadcrumb_editar = 'home/usuario/editar';

menu.usuario.reset_senha = function( _url ){

	var _that = this;

	_url = _url || 'menu';

	_that.property.method = '[RESET_SENHA]';

	try{$.log.writeLine(_that.property)}catch(e){console.log('[USUARIO][RESET_SENHA] Module "log" not installed')}

	_that.model({url:_url, success:function(_data){

		console.log('Entrei pombetas' , _data.retorno);

		$.error.show(_data.retorno , _that.form ) ;

	}});
}


menu.usuario.setEvent_after = function(){

	$("input[type='button'][value='Cancelar']").bind( "click", function() { menu.usuario.return(); } );
	$("input[type='button'][value='Restabelecer Senha']").bind( "click", function() { menu.usuario.reset_senha('usuario/reset_senha'); } );
	$("input[type='button'][value='Remover']").bind( "click", function() { menu.usuario.add('usuario/') } );
	$("input[type='button'][value='Gravar']").bind( "click", function() { menu.usuario.add('usuario/add') } );
}