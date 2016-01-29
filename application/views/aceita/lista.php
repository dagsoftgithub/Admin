<h1>Lista de Aceites</h1>
<?php
	echo anchor('aceita/incluir','incluir');
	
	echo '<br>';
	echo !empty($paginacao) ? $paginacao : '';
	
	echo '<ul>';
	
	foreach($aceites as $a){
		echo '<li>'.$a->aceita_descricao.' - '.anchor('aceita/editar/'.$a->aceita_id,'editar').' - '.anchor('aceita/excluir/'.$a->aceita_id,'excluir').' - '.anchor('aceita/consultar/'.$a->aceita_id,'consultar').'</li>';
	}

	echo '</ul>';
	
	echo !empty($paginacao) ? $paginacao : '';
?>
