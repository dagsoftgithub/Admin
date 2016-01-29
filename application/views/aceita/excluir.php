<?php

	echo form_open('aceita/delete/'.set_value('aceita_id',$aceites->aceita_id));
	
	echo form_fieldset('Excluir');
	
	echo form_label('Id:');
	echo form_label(set_value('aceita_id',$aceites->aceita_id));
	
	echo form_label('Descriчуo:');
	echo form_label(set_value('aceita_descricao',$aceites->aceita_descricao));
		
	echo form_fieldset_close(); 
	
	echo form_submit(array('name'=>'submit'),'salvar');
	echo anchor('aceita/listar','voltar');
	echo form_close();
	 
?>