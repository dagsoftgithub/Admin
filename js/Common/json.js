/*****************************************/
/* [author] Daniel Araujo Gomes
/* [date]	26/01/2013
/*****************************************/

(function ($) {
	
	$.extend ( {
		
		/**
		 * [Method] json()
		 * [Return] void
		 * [brief]  Method .
		 */
		json : function(_value) {
			
			try {$.log.writeLine({package:"$",method:"[JSON]"})}catch(e){console.log(JSON.stringify({package:"$",method:"[JSON]"}))} 
			
			if(typeof _value != 'object') return {}; 
			
			var retorno = {};
			 
			for(_length in _value) {
				
				_value[_length] = $(_value[_length]);
				
				if(typeof _value[_length].val != "function") continue;
				
				retorno[_value[_length].attr('name') || _value[_length].attr('id')] = _value[_length].val();
				
			 }
			
			return retorno;
		}
						
	});
	
}(jQuery));