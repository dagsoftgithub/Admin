/*****************************************/
/* [author] Daniel Araujo Gomes
/* [date]	26/01/2013
/*****************************************/

(function ($) {

	$.extend ( {

		sprintf : function( _string , _parm ) {

			_parm = _parm || [];

		    var reg = new RegExp('\\{([0-9]*)\\}','g');

		    var b = _string.replace(reg,function(c, d){

		        return (_parm[d])? _parm[d]:c;

		    });

		    return b;
		}

	});

}(jQuery));



