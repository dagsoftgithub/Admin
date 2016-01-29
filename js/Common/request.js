/*****************************************/
/* [author] Daniel Araujo Gomes
/* [date]	26/01/2013
/*****************************************/

(function ($) {

	$.extend ( {

		/**
		 * [Method] trail(json:_settings)
		 * [Return] void
		 * [brief]  Method that puts trail of module use now.
		 */
		request : function(_settings) {

			_settings 	  	  = _settings 	  	  || {};
			_settings.url 	  = _settings.url 	  || "";
			_settings.json 	  = _settings.json 	  || {};
			_settings.form 	  = _settings.form 	  || [];
			_settings.success = _settings.success || function(){ return; };

			var success,
				fail,
				_log = {
					package 	: "$",
					method 		: "[REQUEST]",
					description : ['[PARAMETER] =>', JSON.stringify({url : _settings.url,json : _settings.json})].join(" ")
				};

			try {$.log.writeLine(_log)}catch(e){console.log(JSON.stringify(_log))}

			/**
			 * [Method] success(json:_data)
			 * [Return] void
			 * [brief]  Method that is rum success request.
			 */
			success = function(_data) {

				try {

					_data = ( _data.constructor == {}.constructor ) ? _data : JSON.parse( _data ) ;

				    _log.description = [ '[SUCCESS] =>', JSON.stringify(_data) ].join(" ");

					$.log.writeLine(_log);

					$.error.reset();

				}catch(e){console.log(JSON.stringify(_data))}

				if(typeof _settings.success == 'function') _settings.success({retorno : _data});
			}

			/**
			 * [Method] success(...:_data)
			 * [Return] void
			 * [brief]  Method that is rum fail request.
			 */
			fail = function(_data) {

				try {

				    _log.description = [ '[FAIL] =>', _data ].join(" ");

					$.log.writeLine(_log);

				}catch(e){console.log(JSON.stringify(_log))}

				try{

					$.error.show(_data, _settings.form);

				}catch(e){

					try {

						_log.description = ['[FAIL] [ERROR] =>','Module do not installed in the system'].join(" ");

						$.log.writeLine(_log);

					}catch(e){console.log(JSON.stringify(_log))}
				}

			}

			/**
			 * [Method] post()
			 * [Return] void
			 * [brief]  Method send information to server.
			 */
			post = function(){
			  //console.log(_settings.url);
			  //console.log(_settings.json);
			  $.post( _settings.url, _settings.json ).done(success).fail(fail);
			}.call();
		}

	});

}(jQuery));