<?php

	echo form_open();
	
	echo form_fieldset('Consulta');
	
	echo form_label('Id:');
	echo form_label(set_value('admin_id',$usuarios->admin_id));
	
	echo form_label('Nome:');
	echo form_label(set_value('admin_nome',$usuarios->admin_nome));
	
	echo form_label('E-mail:');
	echo form_label(set_value('admin_email',$usuarios->admin_email));
		
	echo form_fieldset_close(); 
	
	echo anchor('usuario/listar','voltar');
	echo form_close();
	 
?>