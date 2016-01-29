/*****************************************/
/* [author] Daniel Araujo Gomes
/* [date]	26/01/2013
/*****************************************/

/**
 *[CLASS] GENERIC
 */
var login = {
	property:{package:'[LOGIN]', method:null, description:null},
	form:{}
}

/**
 * [Method] initialize(json:_options)
 * [Return] void
 * [brief]  Method ?.
 */
login.initialize = function() {

	login.property.method = '[INITIALIZE]';

	$.log.writeLine(login.property);

	login.form = $.parse();

	login.setEvent();

	$.error.reset();
}

/**
 * [Method] setEvent()
 * [Return] void
 * [brief]  Method ?.
 */
login.setEvent = function(){

	login.property.method = '[SETEVENT]';

	$.log.writeLine(login.property);

	$("#admin_send").on('click',login.model.send);
}

/**
 * [Method] model{}
 * [Return] void
 * [brief]  Method ?.
 */
login.model = {

	send:function(){

		login.property.method = '[MODEL] [SEND]';

		$.log.writeLine(login.property);

		$.error.reset();

		$.request({url:"login/check", json:$.json(login.form),form:login.form, success:login.model.success});
	},

	success:function(){

		login.property.method = '[MODEL] [SUCCESS]';

		$.log.writeLine(login.property);

		window.location.href = 'menu';
	}
}

$(document).ready(function(){login.initialize(null);});