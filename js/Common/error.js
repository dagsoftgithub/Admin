/*****************************************/
/* [author] Daniel Araujo Gomes
/* [date]	26/01/2013
/*****************************************/

(function ($) {
	$.extend({

		/**
		 * [Method] error(jsaon:_data, object:_form)
		 * [Return] void
		 * [brief]  Method check information is correct.
		 */
		error : {

			show : function(_data, _form) {

				var _list_error , _div_error , _ul_error , _mensagem ;

				console.log(_data.mensagem);
				console.log(_data.status);

				try { $.log.writeLine( { package : "$" , method : "[ERROR]" } ) }catch( e ) { console.log( JSON.stringify( { package : "$" , method : "[ERROR]" } ) ) }

				if ( ! $.isArray( _data.mensagem ) ) _data.mensagem = [ { "campo" : "" , "valor" : _data.mensagem } ] ;

				_list_error = $( "#list-error" ) ;

				if ( _list_error.length ) {

					_div_error = _list_error.find( "div" ) ;
					_ul_error  = _div_error.find( "ul" ) ;

					$.each( _data.mensagem , function( _index , _value ) {

						_mensagem = _value["valor"];

						if ( _form[_value["campo"]] ){

							_mensagem = _form[_value["campo"]].prev().text() + ": " + _value["valor"] ;
						}

						_ul_error.append( $( "<li>" ).html( _mensagem ) ) ;

					});

					_list_error.removeClass( "hide" ) ;

					_div_error.addClass( ( _data.status ) ? "alert-success" : "alert-danger" ).show() ;
				}

				$.each( _data.mensagem , function( _id , _value ) {

					if ( _form[_value["campo"]] ) {

						_form[_value["campo"]].attr( { "data-content" : _value["valor"] } ).focus().parents( ".form-group" ).addClass( "has-error" ) ;
					}

				});

				return _data.status ;
			},

			reset : function(){

				$(".has-error").removeClass("has-error");
				$('[data-toggle="popover"]').attr({"data-content":""}).popover();

				_list_error = $('#list-error') ;
				_div_error = _list_error.find('div');
				_ul_error = _div_error.find('ul');

				_div_error.removeClass("alert-danger alert-success").hide();
				_list_error.addClass("hide");
				_ul_error.find("li").remove();

			}

		}

	});

}(jQuery));