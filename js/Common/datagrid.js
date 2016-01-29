/*****************************************/
/* [author] Daniel Araujo Gomes
/* [date]	26/01/2013
/*****************************************/


(function ($) {
	
	$.extend ( {
		
		datagrid : { 
			/**
			 * [Method] writeLine(json:_settings)
			 * [Return] void
			 * [brief]  Method that write log for line.
			 */
			start : function(_settings) {
	
				_settings 				= _settings 			|| {}; 
				_settings.table         = _settings.table       || {};
				_settings.date 			= _settings.date 		|| "";
				_settings.package 		= _settings.package 	|| "";
				_settings.method 		= _settings.method 		|| "";
				_settings.description 	= _settings.description || "";
				
				var  table,_table,header,_header,column,_column,cell,config,mount;
				
					
				/**
				 * [Method] table()
				 * [Return] void
				 * [brief]  Method ?
				 */
				table = function() {
					
					_settings.table.width = _settings.table.width || "0px";
					_settings.table.height = _settings.table.height || "0px";
					_settings.table.container = $('#'+_settings.table.container) || "";
					
					var css = $.datagrid.css.toJson('table');
					
					$.extend(css,{width:_settings.table.width, height:_settings.table.height});
					
					_table = $('<div>').css(css).addClass('table').appendTo(_settings.table.container);
					
					column();
					
				}
				
				/**
				 * [Method] header()
				 * [Return] void
				 * [brief]  Method ?
				 */
				header = function() {
					
					_column = $('.column');
					
					for(length = 0; length < _column.length; length++) { 
						
						$('<div>').html(_header[length]).css($.datagrid.css.toJson('header')).addClass('header').appendTo(_column[length]);
					}
					
					cell();
				}
				
				/**
				 * [Method] coll()
				 * [Return] void
				 * [brief]  Method ?
				 */
				column = function() {
					
					_header = [];
					
					if(_settings.table.data.length!=0) for(_name in _settings.table.data[0]) _header.push(_name);
										
					var length = _header.length;
					
					while(length--) $('<div>').css($.datagrid.css.toJson('column')).addClass('column').appendTo(_table);
					
					header();	
				}
				
				/**
				 * [Method] cell()
				 * [Return] void
				 * [brief]  Method ?
				 */
				cell = function() {
					
					var _col = $('.column');
					
					_col.each(function(_column){
					
						for(length = 0; length < _settings.table.data.length ; length ++) {
							
							$('<div>').addClass('cell').html(_settings.table.data[length][_header[_column]]).css($.datagrid.css.toJson('cell')).appendTo(this);
						
						}
													
						if(_col.length == _column+1) config();

					});
					
				}
				
				/**
				 * [Method] config()
				 * [Return] void
				 * [brief]  Method ?
				 */
				config = function(){
					
					$('.table').scroll(function () { $(".header").css("margin-top", $(this).scrollTop() -28 + 'px');});

					$('.header').each(function() { 
					    
					    $(this).width() > $(this).next().width() ?
					        $(this).nextAll().css('width' , $(this).width() + 'px'):
					        $(this).css('width' , $(this).next().width() + 'px');
					    
					});
					
					$('.column').each(function(){
							
						$(this).children().each(function(_i){ $(this).css('background-color', (_i % 2 == 0)? '#ffffff':'#f3f6fa'); });
					
					});
					
				}
				
				/**
				 * [Method] mount()
				 * [Return] void
				 * [brief]  Method ?
				 */
				mount = function() {table();}.call();
						
			},
			
			/**
			 * [JSON] css()
			 * [CSS]  Cascading Style Sheets.
			 */
			css : {
				
				toJson : function(_css, _image){ 
				
					var _string = JSON.stringify($.datagrid.css[_css]).replace(/\_/g,'-');
					
					if(arguments.length == 2) _string = _string.replace('image.png',_image);
						 
					return	JSON.parse(_string);
				},
				
				table : {
				    position : "relative",
				    border : "solid 1px black",
				    overflow : "auto",
				    white_space : "nowrap",
				    padding_top : "27px",
				    padding_left : "4px",
				    background_color: "#828282"
				},
				
				column : {
				    display : "inline-block",
				    margin_left : "-5px",
				    background_color : "red"
				},
				
				header : {
				    position : "absolute", 
				    margin_top : "-28px",
				    padding : "6px 10px 0px 5px",
				    border : "dotted 1px black",
				    background_color : "white",
				    height : "19px",
				    color : "#798191",
				    font_weight : "bold"
				},
				
				cell : {
				    display : "block",
				    margin_top : "-2px",
				    border : "dotted 1px black",
				    padding : "4px 10px 0px 5px",	
				    height : "19px",
				    cursor: "pointer"
				}
			} 
			
			
		}
		
	})
	
}(jQuery));


