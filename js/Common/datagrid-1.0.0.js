/***************************************************************************
Pasta:		JavaScript
Autor:		Daniel Araujo Gomes
Data:		25/02/2010
Descrição	Este é o js da DataGrid
****************************************************************************/

/****************************************************************************
variaveis globais deste JavaScript
****************************************************************************/
var undefined, 

/****************************************************************************
Autor:		Daniel Araujo Gomes
Data:		25/02/2010
Descrição	Esta é a função construtora do javascript DataGrid 
****************************************************************************/
datagrid = function(selector,context)
{
  return new datagrid.collection.init();
};

/****************************************************************************
Autor:		Daniel Araujo Gomes
Data:		25/02/2010
Descrição	Este é um atalho para a DataGrid
****************************************************************************/
window.$dg = datagrid;

/****************************************************************************
Autor:		Daniel Araujo Gomes
Data:		25/02/2010
Descrição	Esta é a coleção de funções DataGrid
****************************************************************************/
datagrid.collection = datagrid.prototype = 
{
	/***************************************************************************
	Descrição:	Esta função é executada toda vez que o objeto 
				DataGrid for chamado.
	****************************************************************************/
	init:function() 
	{
		this.onReturn;
		this.chave;
		this.classificacao;
		this.getProgLista;
		this.getProgInclusao;		
		this.getAllReg;
		/**/		
		this.getWidth;
		this.getHeight;
		this.getTitulo;
		this.getContainer;
		this.getHead;	
		this.getTipoInput; 
		this.getColunHide; 
		this.getLinhasShow; 
		this.getFirstReg;
		this.getLastReg; 
		this.getCaption; 
		this.getFoot; 
		this.getEdicao;
		this.getLargura;
		this.getAcao;
		this.getDados;
		this.getMascDados;
		this.getTamField;
		this.getRetorno;
		this.getRetornoCheckebox;
		this.getPrimeiroReg;
		this.getUltimoReg; 
		this.editGrid;
		this.excluiGrid;
		this.salvarGrid;
		this.incluirGrid;
		this.gravarServidor;
		this.mensagem;
		/**/
		return this
	},
	/***************************************************************
	Descrição: Inicia a Data Grid
	***************************************************************/
	start:function( _tml, _container) {					
		
		this.config(_tml, _container);
		
		this.caption();
		this.thead();
		this.tbody(this);
		this.tfoot(this);
		//caso não aja nenhum registro.
		
		//if(this.mensagem == true)
		//	if(this.getDados.length<=0) 
		//		$d().msgEvent('<msg>Não existem registros para o critério especificado na pesquisa.</msg>','msg',true);	
	},
	/***************************************************************
	Descrição: Onde contem os campos de configuração
	***************************************************************/	
	config:function(_tml, _container) {
							
		this.getContainer 	= _container;
		this.getTitulo 		= {'titulo':'Lista de Usuarios'}; //	_tml.titulo
		this.getHead 		= {'field1':{'nome':'A','hide':'false'},
							   'field2':{'nome':'E','hide':'false'},
							   'field3':{'nome':'E','hide':'false'},
							   'field4':{'nome':'Nome','hide':'false'},
							   'field5':{'nome':'E-mail','hide':'false'}}; 
		
		this.getDados 		= eval($d().msgEvent(tml,'NewDataSet',false));
		this.getPaginacao	= eval($d().msgEvent(tml,'dg:paginacao',false));
				
		return this;
	},	
	/***************************************************************
	Descrição: Monta o titulo da Data Grid.
	***************************************************************/
	caption:function() {			

		$('<div>').attr('class','caption').text(this.getTitulo.toString()).appendTo(this.getContainer);
	},
	/***************************************************************
	Descrição: Monta a parte superior onde fica o titulo das colunas
	***************************************************************/
	thead:function()
	{
		this.div = this.getContainer.appendChild(document.createElement('div'));	
		$d(this.div).attr('class','divHead')
		$d(this.div).attr('id','thead'+this.getContainer.id)
		
		this.div2 =	this.div.appendChild(document.createElement('div'));	
		$d(this.div2).attr('class','divHead2')	
		
		this.table = this.div2.appendChild(document.createElement('table'));			
		$d(this.table).attr('cellSpacing','0')
		$d(this.table).attr('cellPadding','0')
		$d(this.table).attr('border','1')
		
		this.tableThead = this.table.appendChild(document.createElement('thead'));
		
		newLine = this.tableThead.insertRow(-1);
		
		for(var index=0;index<this.getHead.length;index++)
		{
			var width = this.getLargura[index];
			var vlHead = this.getHead[index];
			
			if(vlHead == '')
				vlHead = '&nbsp;';
			
			newCell = newLine.insertCell(-1);
			var div = newCell.appendChild(document.createElement('div'));
				$d(div).attr('class','divHeadDatagrid');
				$d(div).setStyle('width:'+width+'px').text(vlHead);
		}	
		
		if(this.getColunHide.length)
		{
			var ColunHide = this.getColunHide;
			var hide=0;			
			$d('tr', this.tableThead).each(function()
			{				
				hide = 0
				$d('td',this).each(function()
				{			
					if(ColunHide[hide]=='hide')
						$d(this).display('none');
					hide++;
				},'')
			},'');
		}
	},
	/***************************************************************
	Descrição: Monta a parte do meio onde fica o conteudo
	***************************************************************/	
	tbody:function(_config)
	{
		var height = eval(_config.getHeight) -43;
		this.div = _config.getContainer.appendChild(document.createElement('div'));
		$d(this.div).attr('class','divHeadAuto')
		$d(this.div).attr('id','tbody'+_config.getContainer.id)		
		$d(this.div).setStyle('height:'+height+'px');
		
		//if(_config.getCaption=='true')
		//	$d(this.div).setStyle('top:40px')
			
		if(_config.getFoot=='true')
			$d(this.div).setStyle('bottom:24px')
		else
		{
			height = eval(height) + 23;
			$d(this.div).setStyle('height:'+height+'px');
		}
		
		if(_config.getCaption=='true')
		{	
			height = eval(height) - 20;
			$d(this.div).setStyle('height:'+height+'px');
		}
		
		this.table = this.div.appendChild(document.createElement('table'));	
		$d(this.table).attr('cellSpacing','0')
		$d(this.table).attr('cellPadding','0')
		$d(this.table).attr('align','center')
		$d(this.table).attr('border','1')		
					
		this.tableTbody = this.table.appendChild(document.createElement('tbody'));	
		//$d(this.tableTbody).attr('id','table'+_config.getContainer.id)
		_config.tableTbody = this.tableTbody;
		
		for(var x=0;x<_config.getDados.length;x++)
		{
			newLine = this.tableTbody.insertRow(-1);
			for(var i=0;i<_config.getHead.length;i++)
			{
				newCell = newLine.insertCell(-1);
				var elemento = new this.input(x,i,_config);
				newCell.appendChild(elemento);
				var tipo = _config.getTipoInput[i];
				if(tipo[0]=='image' || tipo[0]=='link')
				{
					$d(newCell).attr('class','img');
				}
			}
		}
		//Esconde as colunas
		if(_config.getColunHide.length)
		{
			var ColunHide = _config.getColunHide;
			var permicoes = _config.getPermicoes;
			var tipo      = _config.getTipoInput;
			var coll=0;
			$d('tr',this.tableTbody).each(function()
			{
				coll=0;
				$d('td',this).each(function()
				{
					if(coll == 0 || coll == 1)
					{	
						if (permicoes[coll] == '' || permicoes[coll]==undefined || tipo[coll][0]!='image')
						{
							if(ColunHide[coll]=='hide')
							{
								$d(this).display('none');
							}
						}
					}	
					else
					{
						if(ColunHide[coll]=='hide')							
							$d(this).display('none');
					}
					coll++;
				},'')
			},'');
		}
		if(_config.getFoot=='true')
		{
			if(_config.getLinhasShow!='')
			{
				//Esconde os registros que não devem ser mostrados.
				var linha=1;
				var linhaShow = _config.getLinhasShow;
				$d('tr',this.tableTbody).each(function()
				{
					if(linha>linhaShow)$d(this).display('none');
					linha++;
				},'');	
			}
		}

		//cria a lista colorida na grid
		$d('tr',this.tableTbody).attr('class','a',true);	
			
		//quando movimentar o mouse na grid cria a marcação
		//var elementos = $d('tr',this.tableTbody);
		//for(var x=0;x<elementos.length;x++)
		//{
		//	elementos[x].mouseover(function(){$d(elementos[x]).attr('class','b');})
		//	elementos[x].mouseout(function(){$j(elementos[x]).attr('class','a');});
		//}
		
		//movimento do header

		if($d(this.div)[0].addEventListener){					
			$d(this.div)[0].addEventListener('scroll', function()
			{				
				var offsetTrail = this;
				var offsetLeft  = 0;
				while (offsetTrail) 
				{
					var thead = this.id.replace('tbody','thead')
					thead = $d('#'+thead)[0]
					offsetLeft 	+= offsetTrail.scrollLeft;
					offsetTrail  = offsetTrail.offsetParent;
					thead.scrollLeft = offsetLeft;
					thead = thead.offsetParent;
				}
			}, false);		
		}else{
			$d(this.div)[0].onscroll = function()
			{
				var offsetTrail = this;
				var offsetLeft  = 0;
				while (offsetTrail) 
				{
					var thead = this.id.replace('tbody','thead')
					thead = $d('#'+thead)[0]
					offsetLeft 	+= offsetTrail.scrollLeft;
					offsetTrail  = offsetTrail.offsetParent;
					thead.scrollLeft = offsetLeft;
					thead = thead.offsetParent;
				}			
			};
		}		
	},
	/***************************************************************
	Descrição: Adiciona na Data Grid os campos e seus valores.
	***************************************************************/
	input:function(x,i,_config)
	{
		var tipo = _config.getTipoInput[i];
		if(tipo[0]=='image' || tipo[0]=='link'|| tipo[0]=='image_conf')
		{
			if(_config.getDados[x][i] == '')
			{
			 this.input = document.createElement('div');
			 this.input.innerHTML = '&nbsp;';
			 $d(this.input).setStyle('width:'+_config.getLargura[i]+'px');
			 return this.input;
			}			
			this.input = document.createElement('div');
			this.img = this.input.appendChild(document.createElement('img'));		
			this.img.setAttribute('src','/PCO/Imagens/'+tipo[1]);
			this.img.style.cursor=(_config.getAcao[i]!='')? 'pointer':'default';
			if(tipo[0]=='link')
			{
				this.img.onclick = function()
				{											
					$g().download(_config.getDados[x][i]);
					//window.open(_config.getDados[x][i]);
				}
			}
			if(_config.getAcao[i]!='')
			{	
				this.img.onclick = function()
				{															
					
					if(tipo[0]=='image_conf')
					{
						if(confirm('Pressione Ok para continuar ou Cancelar para desistir.')==false){return;}
					}
						
					var parm  = $d().serialize();
						parm += '&CHAVE='+_config.getDados[x][0];
						parm += '&PRIMEIRO_REGISTRO='+_config.getPrimeiroReg;	
													
					for(z=0;z<_config.getDados[x].length;z++)
					{
						parm += '&CELULA'+z+'='+_config.getDados[x][z]
					}

					switch (tipo[1])
					{
						case 'edit.gif':parm +='&CADASTRO=ALTERACAO';break
						case 'delete.gif':parm +='&CADASTRO=EXCLUSAO';break
						case 'view.gif':parm +='&CADASTRO=CONSULTA';break
						case 'gridCancel.gif':
							parm += '&VL_LIBERADO_CONT='+$d('#VL_LIBERADO_CONT').text();
			 				parm += '&VL_UTILIZADO_CONT='+$d('#VL_UTILIZADO_CONT').text();
			 				break
						default: parm +='&CADASTRO=';break
					}					
					
					if (_config.getAcao[i].length<8)
					{
						for(var p =0;p<_config.getHead.length;p++)
						{							
							if(_config.getHead[p].toUpperCase()=='PRG')
							{
								_config.getAcao[i] = _config.getDados[x][p];
							}
						}
					}
					var reg = new Array();
						reg[0] = _config.getDados[x][i];
						reg[1] = _config.getPrimeiroReg;
						reg[2] = _config.getUltimoReg;						
						reg[3] = _config.getAcao[i];
						reg[4] = x;
											
					if(tipo[1]!='gridCancel.gif')
					{	
						$d().ajax('',_config.getAcao[i],'',parm,eval(_config.onReturn),reg)
					}
					else
					{	
						$d('table',$d('#tbody'+_config.getContainer.id)[0]).each(function()
						{	
							this.deleteRow(x);
							
							$d().ajax('',_config.getAcao[i],'',parm,eval(_config.onReturn),reg)
							
						},'')
					}
				}					
			}		
		}else if(tipo=='checkbox' || tipo=='checkboxAjax'|| tipo=='checkboxAcao'){
			var check = _config.getDados[x][i];
			this.input = document.createElement('div');
			if(check!='')
			{
				this.checkbox = document.createElement('input');			
				this.checkbox.type='checkbox';				
				if(typeof check=='string')
				{					
					check = new Array();
					check[0] = _config.getDados[x][i];
					check[1] = _config.getDados[x][i];
				}
				
				check[0] = check[0].replace(/ /g,'');
				if(check[0]!='')
				{				
					this.checkbox.value=check[0];
					this.checkbox.defaultChecked = (check[1] == 'TRUE' || check[1] == 'true')? true:false;
					this.checkbox.style.cursor='pointer';
					this.checkbox.className = 'checkbox';
					if(tipo=='checkboxAjax')
					{
						this.checkbox.onclick = function()
						{	
							_config.getDados[x][i] = (this.checked==true)? 'TRUE':'FALSE';
							_config.getRetorno = (_config.getRetornoCheckebox == undefined || _config.getRetornoCheckebox=='')? 'GRID_BAIXAS':_config.getRetornoCheckebox;
							$g().gravaDataGrid(_config.getDados,_config.getRetorno);
							var parm  = (_config.getAllReg)? $d().serialize():'';
								parm += '&CHAVE='+_config.getDados[x][0];
								parm += '&THIS='+this.checked;
							
							for(z=0;z<_config.getDados[x].length;z++)
							{
								parm += '&CELULA'+z+'='+_config.getDados[x][z]
							}
							
							var reg = new Array();
								reg[0] = _config.getDados[x][i];
								reg[1] = (_config.getPrimeiroReg!='')? _config.getPrimeiroReg:_config.getDados[0][0];
								reg[2] = _config.getDados[_config.getDados.length-1][i];						
								reg[3] = _config.getAcao[i];
							
							$d().ajax('',_config.getAcao[i],'',parm,eval(_config.onReturn),reg)
						}
					}
					if(tipo=='checkbox')
					{				
						this.checkbox.onclick = function()
						{						
							_config.getDados[x][i] = (this.checked==true)? 'TRUE':'FALSE';							
							_config.getRetorno = (_config.getRetornoCheckebox == undefined || _config.getRetornoCheckebox=='')? 'GRID_BAIXAS':_config.getRetornoCheckebox;
															
							$g().gravaDataGrid(_config.getDados,_config.getRetorno);
						}
					}
					if(tipo=='checkboxAcao')
					{				
						this.checkbox.onclick = function()
						{						
							_config.getDados[x][i] = (this.checked==true)? 'TRUE':'FALSE';							
							_config.getRetorno = (_config.getRetornoCheckebox == undefined || _config.getRetornoCheckebox=='')? 'GRID_BAIXAS':_config.getRetornoCheckebox;
							$g().gravaDataGrid(_config.getDados,_config.getRetorno);
															
							var reg = new Array();
							
							for(z=0;z<_config.getDados[x].length;z++)
							{
								reg[z] = _config.getDados[x][z];
							}
							
							reg[reg.length] = this;
							_config.onReturn.call(null,null,reg);
							
						}
					}
					
					if(_config.getEdicao=='true')
						this.checkbox.disabled = true;
						
					this.input.appendChild(this.checkbox);
				}			
			}
		}else{
			this.input = document.createElement('div');
			if(_config.getTipoInput[i]=='select')
			{
				this.input.innerHTML = _config.getDados[x][i][0];
			}
			else
			{
				this.input.innerHTML = _config.getDados[x][i];
				if(tipo=='input')
				{
					if(_config.getMascDados != undefined && _config.getMascDados !='')
					
						if(_config.getMascDados[i]=='MOEDA'||_config.getMascDados[i]=='NR'||_config.getMascDados[i]=='NRV')
							$d(this.input).setStyle('textAlign:right');
					
				}
				this.input.style.cursor='default';
				if (_config.getContainer.id=='listaDdmsHelp')
				{
					this.input.onclick = function()
					{										
						eval(_config.onReturn).call(null,_config.getDados[x]);
					}
				}				
			}
		}
		if (tipo=='numerico')
			$d(this.input).setStyle('textAlign:right');
		
		$d(this.input).setStyle('width:'+_config.getLargura[i]+'px');
		
		 if(this.input.innerHTML == '')
		 	this.input.innerHTML = '&nbsp;';		
		
		return this.input 
	},
	/***************************************************************
	Descrição: Monta a parte inferior da Data Grid. Rodapé
	***************************************************************/
	tfoot:function(_config)
	{
		if(_config.getFoot=='false')return false;
	
		this.div = _config.getContainer.appendChild(document.createElement('div'));
		$d(this.div).attr('class','foot')

		if(_config.getPaginacao[0]=='true')
		{
			this.navegacao = _config.div.appendChild(document.createElement('div'));
			$d(this.navegacao).attr('class','divNavegacao');
			
			if (eval(_config.getDados.length) < eval(_config.getLinhasShow) && _config.getPrimeiroReg == '' && _config.getUltimoReg == '')
			{
				this.tableTfootLabel = _config.navegacao.appendChild(document.createElement('span'));
				$d(this.tableTfootLabel).text('Página: Única');
				$d(this.tableTfootLabel).attr('class','paginaUnica')
			}
			else
			{				
				//verifica se tem registro para navegação para traz do registro atual
				if(_config.getPrimeiroReg!='')
				{				
					this.tableTfootSpan = _config.navegacao.appendChild(document.createElement('img'));			
					$d(this.tableTfootSpan).attr('src','/PCO/Imagens/page-first.gif');						
					$d(this.tableTfootSpan).attr('alt','Anterior');
					$d(this.tableTfootSpan).setStyle('cursor:pointer');
					this.tableTfootSpan.onclick = function()
					{	
						var parm  = (_config.getAllReg)? $d().serialize():'';
							parm += '&PRIMEIRO_REGISTRO=';
							parm += (_config.getPrimeiroReg!='')? _config.getPrimeiroReg:_config.getDados[0][0];					
							parm += '&CLASSIFICACAO_LISTA='+_config.classificacao;
							parm += '&CADASTRO='+$d('#CADASTRO').text();
							parm += '&LISTA=TRUE';
							parm  = parm.replace('&CHAVE=$#CHAVE$','')//apaga o valor chave se tiver

						$d().ajax('',_config.getProgLista,'',parm,function(tml)
						{	
						
							if($d('#CADASTRO').text()=='CONSULTA' || $d('#CADASTRO').text()=='EXCLUSAO')
							{
								tml = tml.replace("<dg:edicao>['true']</dg:edicao>","<dg:edicao>['false']</dg:edicao>");	
							}
								
							_config.start(tml);
							if(_config.getRetorno == undefined || _config.getRetorno=='')
								_config.getRetorno = 'GRID_BAIXAS';
							$g().gravaDataGrid(_config.getDados,_config.getRetorno);
							
							if($d('#CADASTRO').text()=='CONSULTA' || $d('#CADASTRO').text()=='EXCLUSAO')
							{
								$d('input','type:checkbox').attr('disabled','true');
							}								
						},'')
					}			
				}
				else
				{
					this.tableTfootSpan = _config.navegacao.appendChild(document.createElement('img'));			
					this.tableTfootSpan.setAttribute('src','/PCO/Imagens/page-first-disabled.gif');
				}
							
				//verifica se tem registro para navegação para frente do ultimo registro atual
				if(_config.getUltimoReg!='')
				{
					this.tableTfootSpan = _config.navegacao.appendChild(document.createElement('img'));			
					$d(this.tableTfootSpan).attr('src','/PCO/Imagens/page-last.gif');				
					$d(this.tableTfootSpan).attr('alt','Próxima');
					$d(this.tableTfootSpan).setStyle('cursor:pointer');
					this.tableTfootSpan.onclick = function()
					{		
						var parm  = (_config.getAllReg)? $d().serialize():''; 
							parm += '&ULTIMO_REGISTRO=';
							parm += (_config.getUltimoReg!='')? _config.getUltimoReg:_config.getDados[_config.getDados.length-1][0];										
							parm += '&CLASSIFICACAO_LISTA='+_config.classificacao;
							parm += '&CADASTRO='+$d('#CADASTRO').text();
							parm += '&LISTA=TRUE';
							parm  = parm.replace('&CHAVE=$#CHAVE$','')//apaga o valor chave se tiver						
					
						$d().ajax('',_config.getProgLista,'',parm,function(tml)
						{	
							if($d('#CADASTRO').text()=='CONSULTA' || $d('#CADASTRO').text()=='EXCLUSAO')
							{
								tml = tml.replace("<dg:edicao>['true']</dg:edicao>","<dg:edicao>['false']</dg:edicao>");	
							}										
							_config.start(tml);	
							if(_config.getRetorno == undefined || _config.getRetorno=='')
								_config.getRetorno = 'GRID_BAIXAS';
							$g().gravaDataGrid(_config.getDados,_config.getRetorno);	
							
							if($d('#CADASTRO').text()=='CONSULTA' || $d('#CADASTRO').text()=='EXCLUSAO')
							{
								$d('input','type:checkbox').attr('disabled','true');
							}
													
						},'')
					}
				}
				else
				{
					this.tableTfootSpan =_config.navegacao.appendChild(document.createElement('img'));			
					$d(this.tableTfootSpan).attr('src','/PCO/Imagens/page-last-disabled.gif');				
				}
			}
		}
		else
		{
			this.navegacao = _config.div.appendChild(document.createElement('div'));
			$d(this.navegacao).attr('class','divNavegacao');
			
			this.tableTfootLabel = _config.navegacao.appendChild(document.createElement('span'));			
			$d(this.tableTfootLabel).text('Página: Única');
			$d(this.tableTfootLabel).attr('class','paginaUnica')
		}
		if(_config.getPermicoes[2]!='' && _config.getPermicoes[2]!=undefined)
		{
			this.navegacao = _config.div.appendChild(document.createElement('div'));
			$d(this.navegacao).attr('class','divNavegacao');
			
			var reg 	= new Array();			
				reg[3] 	= _config.getProgInclusao;
				
			this.tableTfootSpan = this.navegacao.appendChild(document.createElement('img'));			
			$d(this.tableTfootSpan).attr('src','/PCO/Imagens/new.gif');
			$d(this.tableTfootSpan).attr('alt','Incluir');
			$d(this.tableTfootSpan).attr('class','imgIncluir');
			$d(this.tableTfootSpan).setStyle('cursor:pointer');			
			this.tableTfootSpan.onclick = function()
			{						
				var parm  = $d().serialize(); //obtem todos os campos da tela menos os campos da lista
					parm  = parm.replace('&CHAVE=$#CHAVE$','')//apaga o valor chave se tiver
					parm  = parm.replace('&BOTAO=$#BOTAO$','')//apaga o valor botão se tiver
					try{parm += '&CD_EMPR='+$empregador.isnEmpr;}catch(e){}
					try{parm += '&CD_CB='+$cb.isnCb;}catch(e){}	
				$d().ajax('',_config.getProgInclusao,'',parm,eval(_config.onReturn),reg)
			}
			this.tableTfootLabel = this.navegacao.appendChild(document.createElement('span'));			
			$d(this.tableTfootLabel).text('Incluir');
			$d(this.tableTfootLabel).attr('class','incluir');
			$d(this.tableTfootLabel).setStyle('cursor:pointer');
			
			this.tableTfootLabel.onclick = function()
			{						
				var parm  = $d().serialize(); //obtem todos os campos da tela menos os campos da lista
					parm  = parm.replace('&CHAVE=$#CHAVE$','')//apaga o valor chave se tiver
					parm  = parm.replace('&BOTAO=$#BOTAO$','')//apaga o valor botão se tiver
					try{parm += '&CD_EMPR='+$empregador.isnEmpr;}catch(e){}				
					try{parm += '&CD_CB='+$cb.isnCb;}catch(e){}			
				$d().ajax('',_config.getProgInclusao,'',parm,eval(_config.onReturn),reg)
			}		
		}
		if(_config.getEdicao=='true')	
		{
			//this.tableTfootLabel = this.div.appendChild(document.createElement('label'));			
			//this.tableTfootLabel.innerHTML='|';
			
			this.navegacao = _config.div.appendChild(document.createElement('div'));
			$d(this.navegacao).attr('class','divNavegacao');
			
			//cria o botão de edição da grid			
			if(_config.editGrid!=false)
			{
				this.tableTfootSpan = this.navegacao.appendChild(document.createElement('img'));				
				$d(this.tableTfootSpan).attr('src','/PCO/Imagens/tableEdit.gif');
				$d(this.tableTfootSpan).attr('class','imgEdicao');
				$d(this.tableTfootSpan).attr('alt','Alteração na Grid');
				$d(this.tableTfootSpan).setStyle('cursor:pointer');				
				this.tableTfootSpan.onclick = function()
				{			
					datagrid().editReg(_config,'editar')
				}
			}
			//cria o botão de cancelamento de edição da tabela
			if(_config.excluirGrid!=false)
			{
				this.tableTfootSpan = this.navegacao.appendChild(document.createElement('img'));	
				$d(this.tableTfootSpan).attr('src','/PCO/Imagens/gridCancel.gif');
				$d(this.tableTfootSpan).attr('class','imgEdicao');
				$d(this.tableTfootSpan).attr('alt','Cancelamento de Alteração ou Inclusão na Grid');
				$d(this.tableTfootSpan).setStyle('cursor:pointer');
				this.tableTfootSpan.onclick = function()
				{			
					datagrid().editReg(_config,'cancelar');
				}
			}
			//cria o botão de save da tabela.
			if(_config.salvarGrid!=false)
			{
				this.tableTfootSpan = this.navegacao.appendChild(document.createElement('img'));	
				$d(this.tableTfootSpan).attr('src','/PCO/Imagens/save.gif');
				$d(this.tableTfootSpan).attr('class','imgEdicao');
				$d(this.tableTfootSpan).attr('alt','Salvar valores Alterados ou Inclusos na Grid');
				$d(this.tableTfootSpan).setStyle('cursor:pointer');
				this.tableTfootSpan.onclick = function()
				{			
					datagrid().editReg(_config,'salvar')
					
					if(_config.gravarServidor!=undefined && _config.gravarServidor!='')
					{
						eval(_config.gravarServidor).call(null);
					}
				}
			}
			//cria o botão de save da tabela.
			if(_config.incluirGrid!=false)
			{			
				this.tableTfootSpan = this.navegacao.appendChild(document.createElement('img'));
				$d(this.tableTfootSpan).attr('src','/PCO/Imagens/new.gif');
				$d(this.tableTfootSpan).attr('class','imgEdicao');
				$d(this.tableTfootSpan).attr('alt','Inclusão na Grid');
				$d(this.tableTfootSpan).setStyle('cursor:pointer');
				this.tableTfootSpan.onclick = function()
				{				
					var array = _config.getDados.length;
					_config.getDados[array] = new Array();				
					for (var i=0;i<_config.getHead.length;i++)
					{				
						if(_config.getTipoInput[i]=='checkbox')
							_config.getDados[array][i] = 'false';
						if(_config.getTipoInput[i]=='input' || _config.getTipoInput[i]=='label')
							_config.getDados[array][i] = '';									
					}				
					_config.getContainer.removeChild($d('#tbody'+_config.getContainer.id)[0]);
					datagrid().tbody(_config);
					datagrid().editReg(_config,'editar');				
				}
			}
		}
	},		
	/*********************************************************************************
	Descrição	Gera os objetos para Edição
	*********************************************************************************/
	editReg:function(_config,_acao)
	{
		var x=0;
		var i=0;
		
		$d('tr',_config.tableTbody).each(function()
		{			
			i=0;
			$d('td',this).each(function()
			{								
				if(_config.getTipoInput[i]=='checkbox' || _config.getTipoInput[i]=='input' || _config.getTipoInput[i]=='select')
				{
					if(_acao=='cancelar' || _acao=='salvar')
					{
						if(_acao=='salvar')
						{
							if($d('input',this).val()!=null)
								_config.getDados[x][i] = $d('input',this).val();
						}
						else
						{
							if(_config.getTipoInput[i]=='checkbox')
							{
								if(_config.getDados[x][i]!='' && _config.getDados[x][i].toUpperCase()!='FALSE')
								{
									$d('input',this)[0].checked = true;
									$d('input',this)[0].disabled = true;
								}	
							}
						}
						
						if((_config.getTipoInput[i]=='checkbox'&&_config.getDados[x][i] =='')|| _config.getTipoInput[i]!='checkbox')
						{
							$d(this).text('');							
							var div = this.appendChild(document.createElement('div'));					
							$d(div).setStyle('width:'+_config.getLargura[i]+'px');
							$d(div).text(_config.getDados[x][i].toString());
							if(_config.getTipoInput[i]=='input')
							{
								if(_config.getMascDados != undefined && _config.getMascDados !='')
									if(_config.getMascDados[i]=='MOEDA'||_config.getMascDados[i]=='NR'||_config.getMascDados[i]=='NRV')
										$d(div).setStyle('textAlign:right');
							}
						}
						else
						{
							$d('input',this)[0].disabled = true;
						}
					}
					else
					{
						$d(this).text('');					
						var div = this.appendChild(document.createElement('div'));					
						$d(div).setStyle('width:'+_config.getLargura[i]+'px');
						
						var width = _config.getLargura[i]-10;
						
						if(_config.getTipoInput[i]=='select')
						{						
							if(_config.getDados[x][i].length<=1)
							{
								campo = div.appendChild(document.createElement('label'));							
								$d(campo).text(_config.getDados[x][i][0]);							
							}
							else
							{
								campo = div.appendChild(document.createElement('select'));
								for(var y=0;y<_config.getDados[x][i].length;y++)
								{
									var option = campo.appendChild(document.createElement('option'))
									$d(option).text( _config.getDados[x][i][y].toString()).val( _config.getDados[x][i][y].toString())
								}					
							}
							$d(campo).setStyle('width:'+width+'px');
						}
						else
						{
							campo = document.createElement('input');
					
							if(_config.getTipoInput[i]=='input')
							{								
								campo.type='text';
								campo.style.width = width+'px';														
								campo.className = 'input';
								
								if(_config.getTamField!=undefined || _config_getTamField !='')
								{								
									campo.maxLength = _config.getTamField[i];
								}
									
								var caracter = _config.getMascDados[i];
																
								switch (caracter)
								{			
									case 'NR'  :
										campo.onkeypress = function(event){return $g().kpLista(this,'NR',event)};										
										break //numérico
									case 'NRV' :
										campo.onkeypress = function(event){return $g().kpLista(this,'NRV',event)};										
										break //numérico e virgula
									case 'AN'  :
										campo.onkeypress = function(event){return $g().kpLista(this,'AN',event)};										
										break //Alfa Numerico
									case 'AL'  :
										campo.onkeypress = function(event){return $g().kpLista(this,'AL',event)};										
										break // Alfa
									case 'ANB' :
										campo.onkeypress = function(event){return $g().kpLista(this,'ANB',event)};										
										break //Alfa Numerico e Brancos
									case 'ANBP':
										campo.onkeypress = function(event){return $g().kpLista(this,'ANBP',event)};										
										break //Alfa Numerico , Brancos e ponto
									case 'MOEDA': 
										campo.onkeypress = function(event){return $g().mascMoeda(this,'.', ',',event)};
										break
									default: 
										campo.onkeypress = function(event){return $g().masc(this,caracter,event)};
										break
								}
							}
							campo.className = 'inputMoeda';
							if(_config.getTipoInput[i]=='checkbox')campo.type='checkbox';								
							campo.value=_config.getDados[x][i];
							campo.style.cursor='pointer';
							$d(campo)[0].onfocus = function(){back=true;}
							$d(campo)[0].onblur = function(){back=false;}				
							if(_config.getTipoInput[i]=='checkbox')
							{
								//if(_config.getDados[x][i] == '') return document.createElement('label');
								campo.defaultChecked = (_config.getDados[x][i].toUpperCase() == 'TRUE')?true:'';
								$d(campo)[0].onclick = function()
								{
									this.value = (this.checked==true)? 'TRUE':'FALSE';			
								}
							}else{
								campo.style.border = 'solid 1px';
							}
							div.appendChild(campo);							
						}							
					}
				}
				i++;
			},'')
			x++;
		},'')
		
		if(_config.getRetorno == undefined || _config.getRetorno=='')
			_config.getRetorno = 'GRID_BAIXAS';
		$g().gravaDataGrid(_config.getDados,_config.getRetorno);		
	}
}
datagrid.collection.init.prototype = datagrid.collection;