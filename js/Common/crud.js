menu.crud = {
	property:{package:'[MENU] [CRUD]', method:null, description:null},
	form : null,
	json : {},
	content : "#content",
	breadcrumb_listar :"lista",
	breadcrumb_editar :"editar",
	breadcrumb_incluir :"incluir",
	search : {}
}

menu.crud.initialize_before = function(){ console.log("CRUD","initialize_before"); }
menu.crud.initialize_after = function(){ console.log("CRUD","initialize_after"); }
/*
 * [Method] initialize(json:_options)
 * [Return] void
 * [brief]  Method Start module.
 */
menu.crud.initialize = function( _url ){

	var _that = this;

	_url = _url || 'menu';

	_that.initialize_before();

	_that.property.method = '[INITIALIZE]';

	try{$.log.writeLine(_that.property)}catch(e){console.log('[CRUD][INITIALIZE] Module "log" not installed')}

	_that.listar( _url );

	_that.initialize_after();
}

menu.crud.model_before = function(){ console.log("CRUD","model_before"); }
menu.crud.model_after = function(){ console.log("CRUD","model_after"); }
/*
 * [Method] model(json:_options)
 * [Return] void
 * [brief]  Method ?.
 */
menu.crud.model = function(_options){

	var _that = this;

	_that.model_before();

	_that.property.method = '[MODEL]';

	try{$.log.writeLine(_that.property)}catch(e){console.log('[CRUD][MODEL] Module "log" not installed')}

	_options 	  	 = _options 	  	|| {};
	_options.url  	 = _options.url  	|| "";
	_options.json 	 = _options.json 	|| $.json(_that.form);
	_options.form 	 = _options.form 	|| _that.form;
	_options.success = _options.success || function(_data){_that.page(_data, _options)}
	_options.search	 = _options.search 	|| false;
	_options.breadcrumb = _options.breadcrumb || "home";

	if(_options.search == true) _that.search = _options;

	$.request(_options);

	_that.model_after();
}

menu.crud.page_before = function(){ console.log("CRUD","page_before"); }
menu.crud.page_after = function(){ console.log("CRUD","page_after"); }
/*
 * [Method] page(html:_conteudo,json:_options)
 * [Return] void
 * [brief]  Method show pages.
 */
menu.crud.page = function(_content,_options){

	var _that = this;

	_that.page_before();

	_that.property.method = '[PAGE]';

	try{$.log.writeLine(_that.property)}catch(e){console.log('[CRUD][PAGE] Module "log" not installed')}

	$(_that.content).html(_content.retorno);

	$.trail({url:_options.breadcrumb});

	_that.form = $.parse();

	console.log('Valor do Parse = ', _that.form);

	for(_index in _options.json) if( _that.form[_index] ) _that.form[_index].val( _options.json[_index] ) ;

	_that.setEvent();

	_that.page_after();
}


menu.crud.listar_before = function(){ console.log("CRUD","listar_before"); }
menu.crud.listar_after = function(){ console.log("CRUD","listar_after"); }
/**
 * [listar description]
 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
 * @since  2016-01-12
 * @param  {[type]}   _url [description]
 * @return {[type]}        [description]
 */
menu.crud.listar = function( _url ) {

	var _that = this;

	_url = _url || 'menu';

	_that.listar_before();

	_that.property.method = '[LISTAR]';

	try{$.log.writeLine(_that.property)}catch(e){console.log('[CRUD][LISTAR] Module "log" not installed')}

	_that.json = $.json(_that.form);

	_that.model({url:_url,breadcrumb:_that.breadcrumb_listar,json:_that.json,search:true});

	_that.listar_after();

	event.preventDefault();
}

menu.crud.paginar_before = function(){ console.log("CRUD","paginar_before"); }
menu.crud.paginar_after = function(){ console.log("CRUD","paginar_after"); }

/**
 * [paginar description]
 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
 * @since  2016-01-12
 * @param  {[type]}   _url [description]
 * @return {[type]}        [description]
 */
menu.crud.paginar = function( _url ){

	var _that = this;

	_url = _url || 'menu';

	_that.paginar_before();

	_that.property.method = '[PAGINAR]';

	try{$.log.writeLine(_that.property)}catch(e){console.log('[CRUD][PAGINAR] Module "log" not installed')}

	_that.model({url:_url,breadcrumb:_that.breadcrumb_listar,json:_that.json,search:true});

	_that.paginar_after();

	event.preventDefault();
}

menu.crud.return_before = function(){ console.log("CRUD","return_before"); }
menu.crud.return_after = function(){ console.log("CRUD","return_after"); }

/**
 * [return description]
 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
 * @since  2016-01-12
 * @param  {[type]}   _url [description]
 * @return {[type]}        [description]
 */
menu.crud.return = function(){

	var _that = this;

	_that.return_before();

	_that.property.method = '[RETURN]';

	try{$.log.writeLine(_that.property)}catch(e){console.log('[CRUD][RETURN] Module "log" not installed')}

	_that.model(_that.search);

	_that.return_after();

	event.preventDefault();
}

menu.crud.limpar_before = function(){ console.log("CRUD","limpar_before"); }
menu.crud.limpar_after = function(){ console.log("CRUD","limpar_after"); }
/**
 * [limpar description]
 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
 * @since  2016-01-12
 * @return {[type]}   [description]
 */
menu.crud.limpar = function( _url ) {

	var _that = this;

	_url = _url || 'menu';

	_that.limpar_before();

	_that.property.method = '[LIMPAR]';

	try{$.log.writeLine(_that.property)}catch(e){console.log('[CRUD][PAGINAR] Module "log" not installed')}

	_that.json = {};

	_that.model({url:_url,breadcrumb:_that.breadcrumb_listar,json:_that.json,search:true});

	_that.limpar_after();

	event.preventDefault();
}

menu.crud.setEvent_before = function(){ console.log("CRUD","setEvent_before"); }
menu.crud.setEvent_after = function(){ console.log("CRUD","setEvent_after"); }
/**
 * [setEvent description]
 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
 * @since  2016-01-12
 */
menu.crud.setEvent = function(){

	var _that = this;

	_that.setEvent_before();

	_that.property.method = '[SETEVENT]';

	try{$.log.writeLine(_that.property)}catch(e){console.log('[CRUD][SETEVENT] Module "log" not installed')}

	//if(menu.usuario.form["listar_incluir"]) menu.usuario.form["listar_incluir"].bind('click', menu.usuario.incluir);
	//if(menu.usuario.form["listar_voltar"])  menu.usuario.form["listar_voltar"].bind('click', menu.usuario.listar);

	//if(menu.usuario.form["incluir_salvar"]) menu.usuario.form["incluir_salvar"].bind('click', menu.usuario.add);
	//if(menu.usuario.form["incluir_voltar"]) menu.usuario.form["incluir_voltar"].bind('click', menu.usuario.listar);

	$(".paginacao a").addClass('btn btn-default btn-xs').bind('click', function(){ _that.paginar($(this).attr("href")) });

	$(".paginacao strong").addClass('btn btn-primary btn-xs') ;

	$('[data-toggle="popover"]').popover();

	_that.setEvent_after();
}

menu.crud.view_before = function(){ console.log("CRUD","view_before"); }
menu.crud.view_after = function(){ console.log("CRUD","view_after"); }
/**
 * [view description]
 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
 * @since  2016-01-12
 * @param  {[type]}   _url [description]
 * @return {[type]}        [description]
 */
menu.crud.view = function( _url ) {

	var _that = this;

	_url = _url || 'menu';

	_that.view_before();

	_that.property.method = '[VIEW]';

	try{$.log.writeLine(_that.property)}catch(e){console.log('[CRUD][VIEW] Module "log" not installed')}

	_that.json = {};

	_breadcrumb = ( _url.split("/").length == 3 ) ? _that.breadcrumb_editar : _that.breadcrumb_incluir ;

	_that.model({url:_url,breadcrumb:_breadcrumb,json:_that.json});

	_that.view_after();

	event.preventDefault();
}

menu.crud.add_before = function(){ console.log("CRUD","add_before"); }
menu.crud.add_after = function(){ console.log("CRUD","add_after"); }
/**
 * [add description]
 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
 * @since  2016-01-12
 * @param {[type]} _url [description]
 */
menu.crud.add = function( _url ){

	var _that = this;

	_url = _url || 'menu';

	_that.add_before();

	_that.property.method = '[ADD]';

	try{$.log.writeLine(_that.property)}catch(e){console.log('[CRUD][ADD] Module "log" not installed')}

	_that.model({url:_url, success:function(_data){

		if ( $.error.show(_data.retorno , _that.form ) != false ) _that.reset(_data);

	}});

	_that.add_after();
}

menu.crud.reset_before = function(){ console.log("CRUD","reset_before"); }
menu.crud.reset_after = function(){ console.log("CRUD","reset_after"); }
/*
 * [Method] reset()
 * [Return] void
 * [brief]  Method that clean all element inside form.
 */
menu.crud.reset = function(_data){

	var _that = this;

	console.log(_data);

	_that.reset_before();

	_that.property.method = '[RESET]';

	try{$.log.writeLine(_that.property)}catch(e){console.log('[CRUD][RESET] Module "log" not installed')}

	$('form')[0].reset();

	_that.reset_after();
}

/*
 * [Method] delete()
 * [Return] void
 * [brief]  Method that erases user information.
 */
menu.usuario.delete = function (){

	menu.usuario.property.method = '[DELETE]';

	try{$.log.writeLine(menu.usuario.property)}catch(e){console.log('[USUARIO][DELETE] Module "log" not installed')}

	menu.usuario.model({url:'usuario/delete', success:menu.usuario.listar});

}

