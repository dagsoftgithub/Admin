<?php

	echo form_open('usuario/add');
	
	echo form_fieldset('Incluir');
	
	echo form_label('Nome:');
	echo form_input(array('name'=>'admin_nome'),set_value('admin_nome'),'autofocus');
	echo form_error('admin_nome');
	
	echo form_label('E-mail:');
	echo form_input(array('name'=>'admin_email'),set_value('admin_email'));
	echo form_error('admin_email');
	
	echo form_label('Senha:');
	echo form_password(array('name'=>'admin_senha'),set_value('admin_senha'));
	echo form_error('admin_senha');
	
	echo form_label('Confirma Senha:');
	echo form_password(array('name'=>'admin_senha2'));
	echo form_error('admin_senh2');
	
	echo form_fieldset_close(); 
	
	echo form_submit(array('name'=>'submit'),'salvar');
	echo anchor('usuario/listar','voltar');
	echo form_close();
	 
?>