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
		zeros : function(_length, _value) {
			
			try {$.log.writeLine({package:"$",method:"[ZEROS]"})}catch(e){console.log(JSON.stringify({package:"$",method:"[ZEROS]"}))} 
							
			while (_length > _value.length) _value = '0' + _value;
	
			return (_value.length > _length)? _value.substr(0,_length) : _value;
		}
						
	});
	
}(jQuery));