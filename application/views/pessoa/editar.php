<?php

	echo form_open('usuario/update');
	
	echo form_fieldset('Editar');
	
	echo form_label('Id:');
	echo form_input(array('name'=>'admin_id'),set_value('admin_id',$usuarios->admin_id));
	
	echo form_label('Nome:');
	echo form_input(array('name'=>'admin_nome'),set_value('admin_nome',$usuarios->admin_nome),'autofocus');
	echo form_error('admin_nome');
	
	echo form_label('E-mail:');
	echo form_input(array('name'=>'admin_email'),set_value('admin_email',$usuarios->admin_email));
	echo form_error('admin_email');
	
	echo form_label('Senha:');
	echo form_password(array('name'=>'admin_senha'),set_value('admin_senha'));
	echo form_error('admin_senha');
	
	echo form_label('Confirma Senha:');
	echo form_password(array('name'=>'admin_senha2'));
	echo form_error('admin_senha2');
	
	echo form_fieldset_close(); 
	
	echo form_submit(array('name'=>'submit'),'salvar');
	echo anchor('usuario/listar','voltar');
	echo form_close();
	 
?>