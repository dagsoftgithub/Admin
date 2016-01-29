/*****************************************/
/* [author] Daniel Araujo Gomes
/* [date]	26/01/2013
/*****************************************/

(function ($) {

	$.extend ( {

		log : {
			/**
			 * [Method] writeLine(json:_settings)
			 * [Return] void
			 * [brief]  Method that write log for line.
			 */
			writeLine : function(_settings) {

				_settings 				= _settings 			|| {};
				_settings.date 			= _settings.date 		|| "";
				_settings.package 		= _settings.package 	|| "";
				_settings.method 		= _settings.method 		|| "";
				_settings.description 	= _settings.description || "";

				var  date
					,zeros
					,scrollTo
					,write
					,log_itens 		= $('#log-itens')
					,console 		= $('#console')
					,console_log 	= $('#console-log');


				if(console.length == 0) return;

				/**
				 * [Method] date()
				 * [Return] string
				 * [brief]  Method that return date full.
				 */
				date = function() {

					var _know = [], _date = new Date();

					_know.push(zeros(2,_date.getHours().toString()));
					_know.push(zeros(2,_date.getMinutes().toString()));
					_know.push(zeros(2,_date.getSeconds().toString()));
					_know.push(zeros(3,_date.getMilliseconds().toString()));

					_settings.date = _know.join(":");
				}

				/**
				 * [Method] zeros()
				 * [Return] string
				 * [brief]  Method that returns the value with leading zeros.
				 */
				zeros = function(_length, _value) {

					while (_length > _value.length) _value = '0' + _value;

					return (_value.length > _length)? _value.substr(0,_length) : _value;
				}

				/**
				 * [Method] scrollTo()
				 * [Return] void
				 * [brief]  Method that update scrollbar to down.
				 */
				scrollTo = function() {

					$('.logConsoleCounter').each(function(_index, _element){

						var _value 	 = _element.innerHTML,
							_counter = log_itens.children().length;

						_element.innerHTML = zeros(_counter.toString().length, _value);

						console_log.scrollTop(log_itens.outerHeight());
					});
				}

				/**
				 * [Method] write()
				 * [Return] void
				 * [brief]  Method that write log.
				 */
				write = function() {

				    var _counter   = log_itens.children().length + 1,
				    	_log 	   = $('<div>').appendTo(log_itens);

				    date();

					$('<div>').html(_counter).css($.log.css.toJson('console_counter')).addClass('logConsoleCounter').appendTo(_log);

					$(_log).append([_settings.date,'[ SDK ALERT ]: [APP]',_settings.package,_settings.method,_settings.description].join(" "));

					scrollTo();

				}.call();

			},

			/**
			 * [Method] start()
			 * [Return] void
			 * [brief]  Method that begin console.
			 */
			start : function() {

				var _console = $('#console');

				if (_console.length == 0) {

					var _css_close 	  	  = $.log.css.toJson('console_button','close.png'),
						_css_clear    	  = $.log.css.toJson('console_button','clear.png'),
						_css_hidden       = $.log.css.toJson('console_button','prohibit.png'),
						_css_console  	  = $.log.css.toJson('console'),
						_css_console_bar  = $.log.css.toJson('console_bar'),
						_css_console_log  = $.log.css.toJson('console_log'),

						_local 		 = $('body'),
						_console 	 = $('<div>').css(_css_console).attr('id','console').appendTo(_local),
						_console_bar = $('<div>').css(_css_console_bar).appendTo(_console);

					$('<div>').css(_css_close).html('fechar').bind('click', $.log.close).appendTo(_console_bar);
					$('<div>').css(_css_hidden).html('esconder').bind('click', $.log.hidden).appendTo(_console_bar);
					$('<div>').css(_css_clear).html('limpar').bind('click', $.log.clear).appendTo(_console_bar);

					var _console_log = $('<div>').css(_css_console_log).attr('id','console-log').appendTo(_console);

					$('<div>').attr('id','log-itens').appendTo(_console_log);
				}

				_console.show();
			},

			/**
			 * [Method] hidden()
			 * [Return] void
			 * [brief]  Method that hidden console.
			 */
			hidden : function() { $('#console').hide(); },

			/**
			 * [Method] clear()
			 * [Return] void
			 * [brief]  Method that clear console.
			 */
			clear : function() { $('#log-itens div').remove(); },

			/**
			 * [Method] close()
			 * [Return] void
			 * [brief]  Method that close console.
			 */
			close : function() { $('body #console').remove(); },

			/**
			 * [JSON] css()
			 * [CSS]  Cascading Style Sheets.
			 */
			css : {

				toJson : function(_css, _image){

					var _string = JSON.stringify($.log.css[_css]).replace(/\_/g,'-');

					if(arguments.length == 2) _string = _string.replace('image.png',_image);

					return	JSON.parse(_string);
				},

				console : {
					position : "absolute",
					bottom : "0px",
					left : "0px",
					right : "0px",
					background_color : "black",
					border : "solid 2px #dedede",
					color : "white",
					display : "none"
				},

				console_log : {
					font_size : "15px",
					color : "white",
					height : "289px",
					overflow : "auto",
					margin_top : "8px",
					padding_bottom : "5px",
					letter_spacing : "1px",
					white_space : "nowrap"
				},

				console_counter : {
					display : "inline-block",
					color : "#6060c9",
					white_space : "nowrap",
					text_align : "right",
					margin_right : "10px",
					margin_left : "5px"
				},

				console_bar : {
					overflow : "hidden",
					padding_left : "10px",
					padding_top : "2px",
					padding_bottom : "2px",
					border_top : "solid 1px #dedede",
					border_bottom : "solid 1px #dedede",
					background_color : "#640e0e"
				},

				console_button : {
					float : "left",
					display : "inline-block",
					height : "16px",
					padding : "5px 2px 2px 20px",
					margin_left : "3px",
					margin_right : "5px",
					color : "white",
					cursor : "pointer",
					border : "none",
					background : "url(\'../admin/img/image.png\')",
					background_repeat : "no-repeat",
					background_position : "left center"
				}
			}
		}

	});

}(jQuery));