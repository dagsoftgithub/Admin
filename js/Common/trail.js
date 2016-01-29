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
		trail : function(_settings) {

			try {$.log.writeLine({package:"$",method:"[TRAIL]"})}catch(e){console.log(JSON.stringify({package:"$",method:"[TRAIL]"}))}

			_settings 	  = _settings 	  || {};
			_settings.url = _settings.url || "";

			$(".breadcrumb li:first").nextAll().remove();

			$(_settings.url.split('/')).each(function(_index ,_value){$('<li>').addClass('text-transform-cap').html(_value).appendTo('.breadcrumb');})
		}

	});

}(jQuery));