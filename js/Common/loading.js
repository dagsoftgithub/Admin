/*****************************************/
/* [author] Daniel Araujo Gomes
/* [date]	26/01/2013
/*****************************************/

(function ($) {

	$.extend ( {

		/**
		 * [Method] zeros(numeric:_length, numeric:_value)
		 * [Return] String
		 * [brief]  Method that puts zeros value left.
		 */
		loading : function() {

			var _fileUpload = [

				'js/Common/log.js',
				'js/Common/json.js',
				'js/Common/parse.js',
				'js/Common/error.js',
				'js/Common/zeros.js',
				'js/Common/trail.js',
				'js/Common/request.js',
				'js/Common/datagrid.js',
				'js/Common/menu.js',
				'js/Common/loadjs.js',
				'js/logout/logout.js',
				'js/menu/menu.js',
				'js/Common/crud.js',
			],

	  		_log 	= {package:"$ [LOADING]",method:"[script]",description:_fileUpload[0]},
	  		_path 	= window.location.href.toString().split('/').slice(0,-1).join('/'),


		  	next = function(_descriprtion){

			  	_log.description = [_descriprtion,_fileUpload[0]].join(" ");

			  	try {$.log.writeLine(_log);}catch(e){console.log(JSON.stringify(_log))}

			  	console.log(JSON.stringify(_log));

				_fileUpload.splice(0,1);

				if(!_fileUpload[0]) return;

				getScript();

		  	},

	  		success    = function() { next('[SUCCESS] =>'); },

		  	fail 	   = function() { next('[FAIL] =>'); },

		  	getScript  = function() { $.getScript([_path, _fileUpload[0]].join('/')).done(success).fail(fail); },

		  	initialize = function() { if(!_fileUpload[0]) return; getScript(); }.call();

		}.call()

	});

}(jQuery));