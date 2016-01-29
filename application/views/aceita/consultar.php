<?php

	echo form_open();
	
	echo form_fieldset('Consulta');
	
	echo form_label('Id:');
	echo form_label(set_value('aceita_id',$aceites->aceita_id));
	
	echo form_label('Descriчуo:');
	echo form_label(set_value('aceita_descricao',$aceites->aceita_descricao));
		
	echo form_fieldset_close(); 
	
	echo anchor('aceita/listar','voltar');
	echo form_close();
	 
?>