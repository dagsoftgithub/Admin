<!DOCTYPE html>
<html lang="pt-br">
	<head>

		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="description" content="Site Dagsoft Admin" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title><?php echo $_SESSION['title']; ?></title>

		<link rel="stylesheet" type="text/css" href="<?php echo base_url() ?>css/bootstrap.css" media="screen" />
		<link rel="stylesheet" type="text/css" href="<?php echo base_url() ?>css/site.css" media="screen" />
		<link rel="stylesheet" type="text/css" href="<?php echo base_url() ?>css/login.css" media="screen" />

		<script type="text/javascript" src="<?php echo base_url() ?>js/libraries/jquery-2.1.4.min.js" ></script>
		<script type="text/javascript" src="<?php echo base_url() ?>js/libraries/bootstrap.min.js" ></script>
		<script type="text/javascript" src="<?php echo base_url() ?>js/login/login.js" ></script>
		<script type="text/javascript" src="<?php echo base_url() ?>js/Common/log.js" ></script>
		<script type="text/javascript" src="<?php echo base_url() ?>js/Common/json.js" ></script>
		<script type="text/javascript" src="<?php echo base_url() ?>js/Common/parse.js" ></script>
		<script type="text/javascript" src="<?php echo base_url() ?>js/Common/error.js" ></script>
		<script type="text/javascript" src="<?php echo base_url() ?>js/Common/zeros.js" ></script>
		<script type="text/javascript" src="<?php echo base_url() ?>js/Common/trail.js" ></script>
		<script type="text/javascript" src="<?php echo base_url() ?>js/Common/request.js" ></script>


	</head>

	<body>

		<header>
			<div class="pull-left height-40">Company Name</div>
		</header>

	    <div class="layout-table" >
	    	<div id="content" class="layout-table-cell">
	    		<div id="sceneLogin">

	    			<div class="well well-sm box-content">

	    				<div class="alert alert-dismissible menssagem" role="alert">
  							<strong id="error_type"></strong>&nbsp;<span id="error"></span>
						</div>

	    				<h3><span class="glyphicon glyphicon-user glyphicon-letter-spacing"></span>System Name</h3>
	    				<h5>Please <b>Login </b>or<b> Register</b></h5>
	    				<br>
	    				<form class="form-horizontal text-center">

	    					<div class="form-group has-feedback" style="margin-right:0px ; margin-left:0px">
								<div class="input-group " style="color:black">
									<span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>
									<input type="email" class="form-control" id="admin_email" name="admin_email" placeholder="Email" data-toggle="popover" data-content="" data-trigger="focus" data-placement="top">
								</div>
								<span class="glyphicon glyphicon-remove form-control-feedback" style="text-align:right"></span>
							</div>
							<div class="form-group has-feedback" style="margin-right:0px ; margin-left:0px">
								<div class="input-group" style="color:black">
									<span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
									<input type="password" class="form-control" id="admin_senha" name="admin_senha" placeholder="Password" data-toggle="popover" data-content="" data-trigger="focus" data-placement="top">
								</div>
								<span class="glyphicon glyphicon-remove form-control-feedback" style="text-align:right"></span>
							</div>
							<div class="input-group input-group-100" >
								<div class="pull-left checkbox">
								  <label>
								    <input type="checkbox" value="">
								    	Keep me signed in
								  </label>
								</div>
								<input name="admin_send" id="admin_send" type="button" class="pull-right btn btn-primary" value="Submit"></input>
							</div>

							<h5>Don't have an account ?<a href="" class="btn btn-link">Register now</a></h5>
						</form>
	    			</div>
	    		</div>

	    	</div>
	    </div>

		<footer>
			<div class="pull-left height-40">Logo</div>
			<div class="pull-right height-40">© 2015 - Direitos reservados</div>
		</footer>

	</body>
</html>