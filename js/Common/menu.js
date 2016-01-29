/*********************************************************************************
Pasta:		Javascript
Nome:		MENU
Autor:		Daniel Araujo Gomes
Data:		29/04/2014
Descrição	Ferramenta para criar menu dinamico.
*********************************************************************************/

(function(jQuery){

    jQuery.fn.menu = function(_menu){

	    _menu = _menu || menu;

	    $this = $(this);

	    if($this.is( "div" )){

	    	$this.append(createMenu(_menu, false));
	    	$this.children("ul:first").removeClass().addClass("nav navbar-nav");

	    	$('.dropdown-submenu > a').submenupicker();
	    }
    }

    var createMenu = function(data , isSub){

	    var ul = $('<ul>');

	    for(i in data){

	        var li = $('<li>');

	        if(typeof(data[i]._sub) === 'object'){

	            if(isSub){

	                var span = $('<span>').addClass('img');

	                var div = $('<a>').html( i + '&nbsp;' ).attr({"data-toggle":"dropdown"});

	                var li_classe = "dropdown-submenu" ;

	                var ul_classe = "dropdown-menu" ;

	            } else {

	                var span = $('<span>').addClass('caret');

	                var div = $('<a>').html( i + '&nbsp;' ).attr({"data-toggle":"dropdown"}).append(span);

	                var li_classe = "dropdown" ;

	                var ul_classe = "dropdown-menu" ;
	            }

	            li.addClass(li_classe).prepend(createMenu(data[i]._sub, true));

	        } else {

	            var div = element(i,data);

	            var ul_classe = "dropdown-menu" ;

	        }

	        ul.addClass(ul_classe).append(li.prepend(div));

	    }
	    return ul;

    }

    var element = function(i,data){

	    var parameter = {

		    _file		: data[i]._file,
	    	_function	: data[i]._function,
	    	_arguments	: data[i]._arguments

	    }

	    var click = function(e){

		    var that = $(this).data("filds");

		    console.log(that._file);
		    console.log(that._function);
		    console.log(that._arguments);

		    $.loadjs(that._file,that._function,that._arguments);
	    }



	    return $('<a>').attr("id",data[i]._id).html(i).data("filds", parameter).on('click',click);

    }

    var menu = {

	    "TESTE.1": {"_function":"exemplo.collection","_file": "javascript/exemplo-1.0.0.js","_arguments":null},
	    "TESTE.2": {"_function": null,"_file": null,"_arguments":null,
	        "_sub": {
	            "TESTE.2.1": {"_function": "$exemplo.loading","_file": "javascript/exemplo-1.0.0.js","_arguments":["teste-a","teste-b"]},
	            "TESTE.2.2": {"_function": null,"_file": null,"_arguments":null},
	            "TESTE.2.3": {"_function": null,"_file": null,"_arguments":null,
	                "_sub": {
	                    "TESTE.2.3.1": {"_function": null,"_file": null,"_arguments":null},
	                    "TESTE.2.3.2": {"_function": null,"_file": null,"_arguments":null,
	                        "_sub": {
	                            "TESTE.2.3.2.1": {"_function": null,"_file": null,"_arguments":null}
	                        }
	                    }

	                }
	            },
	            "TESTE.2.4": {"_function": null,"_file": null,"_arguments":null}
	        }
	    }

	}

})(jQuery);