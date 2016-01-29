/*********************************************************************************
Pasta:		Javascript
Nome:		MENU
Autor:		Daniel Araujo Gomes
Data:		29/04/2014
Descrição	Ferramenta para criar menu dinamico.
*********************************************************************************/
( function ( $ ) {

	$.extend ( {

		/**
		 * [Method] zeros(numeric:_length, numeric:_value)
		 * [Return] String
		 * [brief]  Method that puts zeros value left.
		 */
		loadjs : function(_file,_method,_arguments) {

			var _file = _file || null,

  			_log = { package : "$ [LOADING]" , method : "[script]" , description : _file } ,
  			_path = window.location.href.toString().split( '/' ).slice( 0 , -1 ).join( '/' ) ,
  			_class = _file.split( "/" ).pop().split( "." ).shift(),

  			success = function() {

	  			_log.description = [ '[SUCCESS] =>' , _file ].join(" ") ;

			  	try { $.log.writeLine( _log ) ; }catch( e ){ console.log( JSON.stringify( _log ) ) }

			  	window["menu"][_class][_method]( _arguments ) ;
	  		},

		  	fail = function() {

		  		_log.description = [ '[FAIL] =>' , _file ].join(" ") ;

			  	try { $.log.writeLine( _log ) ; }catch( e ){ console.log( JSON.stringify( _log ) ) }
		  	},

		  	load = function() {

		  		console.log("Entrei aqui......");

			  	if ( ! window[ "menu" ][ _class ] && _file != null ) {

			  		console.log("Entrei aqui...... vai carregar");
					console.log( [ _path , _file ].join('/'));

			  		$.getScript( [ _path , _file ].join('/') ).done( success ).fail( fail ) ;

			  		return;
			  	}

			  	window["menu"][_class][_method]( _arguments ) ;

		  	}.call()
		}

	} ) ;

} ( jQuery ) ) ;