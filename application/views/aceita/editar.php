<?php

	echo form_open('aceita/update');
	
	echo form_fieldset('Editar');
	
	echo form_label('Id:');
	echo form_input(array('name'=>'aceita_id'),set_value('aceita_id',$aceites->aceita_id));
	
	echo form_label('Descriчуo:');
	echo form_input(array('name'=>'aceita_descricao'),set_value('aceita_descricao',$aceites->aceita_descricao),'autofocus');
	echo form_error('aceita_descricao');
	
	echo form_fieldset_close(); 
	
	echo form_submit(array('name'=>'submit'),'salvar');
	echo anchor('aceita/listar','voltar');
	echo form_close();
	 
?>