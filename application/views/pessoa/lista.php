<h1>Lista de Usuários</h1>
<?php
	echo anchor('usuario/incluir','incluir');
	
	echo '<br>';
	echo !empty($paginacao) ? $paginacao : '';
	
	echo '<ul>';
	
	foreach($usuarios as $a){
		echo '<li>'.$a->admin_nome.' - '.$a->admin_email.' - '.anchor('usuario/editar/'.$a->admin_id,'editar').' - '.anchor('usuario/excluir/'.$a->admin_id,'excluir').' - '.anchor('usuario/consultar/'.$a->admin_id,'consultar').'</li>';
	}

	echo '</ul>';
	
	echo !empty($paginacao) ? $paginacao : '';
?>
