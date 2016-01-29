<div class="container-fluid">

	<div class="container-group">
		<ul class="breadcrumb breadcrumb-margin col-md-12"></ul>
	</div>

	<div class="container-group">
		<h1>Usuários</h1>
	</div>

	<div class="container-group">
		<form class="col-md-12 no-padding form-search">
			<fieldset>
				<legend>Busca</legend>
				<div class="row">
					<div class="col-md-4">
						<label class="control-label" for="admin_nome">Nome</label>
						<input type="text" name="admin_nome" class="form-control" id="admin_nome" placeholder="" value="">
					</div>
					<div class="col-md-4">
						<label class="control-label" for="admin_email">E-mail</label>
						<input type="email" name="admin_email" class="form-control" id="admin_email" placeholder="" value="">
					</div>
					<div class="col-md-2 group-btn-search">
						<input type="button" id="btn-buscar" class="btn btn-primary" onclick="menu.usuario.listar('usuario/listar')" value="Buscar">
						<input type="submit" id="btn-limpar" class="btn btn-default" onclick="menu.usuario.limpar('usuario/listar')" value="Limpar">
					</div>
				</div>
			</fieldset>
		</form>
	</div>

	<div class="form-actions">
	    <input type="button" id="btn-criar-1" class="btn btn-success" onclick="menu.usuario.view('usuario/view')" value="Criar">
	</div>

	<div class="container-group">
		<div class="col-md-2 no-padding informacao">Página <?= $page_current ?> de <?= $total_page ?></div>
		<div class="col-md-8 paginacao btn-group text-center no-padding" ><?= ! empty( $paginacao ) ? $paginacao : "" ; ?></div>
		<div class="col-md-2 text-right no-padding informacao"><?= $total_rows ?> resultados encontrados</div>
	</div>

	<div class="container-group">
		<table class="table table-bordered table-striped table-hover" id="table-list">
			<thead>
				<tr>
					<th>Nome</th>
					<th>E-mail</th>
				</tr>
			</thead>
			<tbody>
				<?php
					foreach ( $tabela as $a ) {
						print( "<tr>" ) ;
						printf( "<td><a href='' onclick=\"menu.usuario.view('usuario/view/%s')\">%s</a></td>" , $a->admin_id , $a->admin_nome ) ;
						printf( "<td>%s</td>" , $a->admin_email ) ;
						print( "</tr>" ) ;
					}
				?>
			</tbody>
		</table>
	</div>

	<div class="container-group">
		<div class="col-md-2 no-padding informacao">Página <?= $page_current ?> de <?= $total_page ?></div>
		<div class="col-md-8 paginacao btn-group text-center no-padding" ><?= ! empty( $paginacao ) ? $paginacao : "" ; ?></div>
		<div class="col-md-2 text-right no-padding informacao"><?= $total_rows ?> resultados encontrados</div>
	</div>

	<div class="form-actions">
		<input type="button" id="btn-criar-2" class="btn btn-success" onclick="menu.usuario.view('usuario/view')" value="Criar">
	</div>

</div>