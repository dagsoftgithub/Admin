<?php

	echo form_open('aceita/add');
	
	echo form_fieldset('Incluir');
	
	echo form_label('Descriчуo:');
	echo form_input(array('name'=>'aceita_descricao'),set_value('aceita_descricao'),'autofocus');
	echo form_error('aceita_descricao');
		
	echo form_fieldset_close(); 
	
	echo form_submit(array('name'=>'submit'),'salvar');
	echo anchor('aceita/listar','voltar');
	echo form_close();
	 
?>