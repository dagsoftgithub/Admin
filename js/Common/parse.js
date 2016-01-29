/*****************************************/
/* [author] Daniel Araujo Gomes
/* [date]	26/01/2013
/*****************************************/

(function ($) {
	$.extend({

		/**
		 * [Method] parse()
		 * [Return] void
		 * [brief]  Method .
		 */
		parse : function() {

			try {$.log.writeLine({package:"$",method:"[PARSE]"})}catch(e){console.log(JSON.stringify({package:"$",method:"[PARSE]"}))}

			var _itens = $(':input:not(.btn)'), _length = _itens.length, form = {};

			console.log(_itens);

			while(_length--){

				if(!_itens[_length].jquery) _itens[_length] = $(_itens[_length]);

				form[_itens[_length].attr('name') || _itens[_length].attr('id')] = _itens[_length];
			}

			return form;
		}

	});

}(jQuery));