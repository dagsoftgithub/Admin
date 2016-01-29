<div class="container-fluid">

	<div class="container-group">
		<ul class="breadcrumb breadcrumb-margin col-md-12"></ul>
	</div>

	<?= html_title( array( "value" => $titulo ) ) ; ?>

	<div id="list-error" class="container-group hide">
		<div class="alert alert-dismissible menssagem" role="alert"><ul></ul></div>
	</div>

	<div class="form-actions">
	    <?= html_input_button( array( "value" => "Cancelar" , "class" => "btn btn-default" ) ) ; ?>
		<?= html_input_button( array( "value" => "Restabelecer Senha" , "class" => "btn btn-warning" ) ) ; ?>
		<?= html_input_button( array( "value" => "Remover" , "class" => "btn btn-danger" ) ) ; ?>
	    <?= html_input_button( array( "value" => "Gravar" , "class" => "btn btn-primary" ) ) ; ?>
	</div>

	<div class="container-group">
		<form class="col-md-12 no-padding">
			<div class="row">
				<div class="form-group col-md-4">
					<?= html_label( array( "value" => "Empresa" , "class" => "control-label requered" , "for" => "admin_empresa" ) ) ; ?>
					<?= html_input_text( array( "name" => "admin_empresa" , "value" => $usuario{"admin_empresa"} ) ) ; ?>
				</div>
			</div>
			<div class="row">
				<div class="form-group col-md-4">
					<?= html_label( array( "value" => "Nome" , "class" => "control-label requered" , "for" => "admin_nome" ) ) ; ?>
					<?= html_input_text( array( "name" => "admin_nome" , "value" => $usuario{"admin_nome"} ) ) ; ?>
				</div>
			</div>
			<div class="row">
				<div class="form-group col-md-4">
					<?= html_label( array( "value" => "E-mail" , "class" => "control-label requered" , "for" => "admin_email" ) ) ; ?>
					<?= html_input_text( array( "name" => "admin_email" , "value" => $usuario{"admin_email"} ) ) ; ?>
				</div>
			</div>
		</form>
	</div>

	<div class="form-actions">
		<?= html_input_button( array( "value" => "Cancelar" , "class" => "btn btn-default" ) ) ; ?>
		<?= html_input_button( array( "value" => "Restabelecer Senha" , "class" => "btn btn-warning" ) ) ; ?>
		<?= html_input_button( array( "value" => "Remover" , "class" => "btn btn-danger" ) ) ; ?>
	    <?= html_input_button( array( "value" => "Gravar" , "class" => "btn btn-primary" ) ) ; ?>
	</div>

</div>