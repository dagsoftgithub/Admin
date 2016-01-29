/*****************************************/
/* [author] Daniel Araujo Gomes
/* [date]	26/01/2013
/*****************************************/

(function ($) {

	var $urlBase = null , $dirJavaScript = null , $dirStyle = null , $dirHtml = null , $active = null ;

	$.extend ( {

		scene : {

			/**
			 *
			 *
			 */
			getActive : function () {

				return $active ;
			} ,

			/**
			 *
			 *
			 */
			setUrl : function ( _url ) {

				$url = _url ;
			},

			/**
			 *
			 *
			 */
			setDirJavaScript : function ( _dirJavaScript ) {

				$dirJavaScript = $.sprintf( '{0}{1}' , [ $url , _dirJavaScript ] ) ;
			},

			/**
			 *
			 *
			 */
			setDirStyle : function ( _DirStyle ) {

				$dirStyle = $.sprintf( '{0}{1}' , [ $url , _DirStyle ] ) ;
			},

			/**
			 *
			 *
			 */
			setDirHtml : function ( _DirHtml ) {

				$dirHtml = $.sprintf( '{0}{1}' , [ $url , _DirHtml ] ) ;
			},

			/**
			 * [Method] writeLine(json:_parm)
			 * [Return] void
			 * [brief]  Method that write log for line.
			 */
			show : function( _id , _parm ) {

				_parm = $.extend( {} , _parm ) ;

				var _object = $( $.sprintf( '#scene{0}' , [ _id ] ) ) ;

				if( _object.length == 0 ) {

					$.get( $.sprintf( '{0}scene{1}.html' , [ $dirHtml , _id ] ) , function( data ) {

					  	$( 'sceneContent' ).append( data ) ;

					  	_object = $( $.sprintf( '#scene{0}' , [ _id ] ) );

					  	$.loadjs( $.sprintf( '{0}scene{1}.js' , [ $dirJavaScript , _id ] ) , function() {

					  		try{

					  			window[ $.sprintf( 'scene{0}' , [ _id ] ) ].onLoad() ;

								window[ $.sprintf( 'scene{0}' , [ _id ] ) ].onShow( _parm ) ;

					  		}catch(e){}

					  	});

					  	$("<link/>", {rel: "stylesheet", type: "text/css", href: $.sprintf( "{0}scene{1}.css" , [ $dirStyle , _id ] ) } ).appendTo( "head" ) ;

					  	_object.show() ;

				  	} ) ;

				}else{

					_object.show() ;

					try{

						window[$.sprintf( 'scene{0}' , [_id] )].onShow( _parm ) ;

					}catch(e){}
				}
			},


			/**
			 * @method onHide(string:$id)
			 * @return void
			 * @brief  Esse method esconde a cena.
			 */
			onHide : function( _id ) {

				var _object = $( $.sprintf( '#scene{0}' , [_id] ) ) ;

				if( _object.length == 0 ) return ;

				_object.hide() ;

				try{

					window[$.sprintf( 'scene{0}' , [_id] )].onHide() ;

					$active = null;

				}catch(e){}
			},


			/**
			 * @method onFocus(string:$id)
			 * @return void
			 * @brief  Esse method informa qual a cena ativa.
			 */
			onFocus : function( _id ) {

				$active = $.sprintf( 'scene{0}' , [_id] ) ;
			}
		}

	});

}(jQuery));