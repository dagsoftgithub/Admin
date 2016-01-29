<?php

/**
 * Controle da classe de login
 *
 * @package		admin
 * @subpackage	controllers
 * @author		Daniel Araújo <daniel.araujo@grupofolha.com.br>
 * @since		2015-12-11
 */

if ( ! defined( "BASEPATH" ) ) {
	exit( "No direct script access allowed" ) ;
}

/**
 * Controle da classe de login
 *
 * @package		admin
 * @subpackage	controllers
 * @author		Daniel Araújo <daniel.araujo@grupofolha.com.br>
 * @since		2015-12-11
 */
class login extends CI_Controller {

	/**
	 * [__construct description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2015-12-18
	 */
	public function __construct() {
		parent::__construct() ;

		$this->load->library( "validation" ) ;
		$this->load->model( "login_model" ) ;

		$_SESSION["title"] = "Admin" ;
	}

	/**
	 * index postar pagina de login.
	 *
	 * @return [type]     [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2015-12-18
	 */
	public function index() {
		//está logado?
		if ( isset( $_SESSION["nome"] ) ) {
			redirect( base_url() . "menu.html" , "location" , 301 ) ;
		}

		$this->load->view( "login/index" ) ;
	}

	/**
	 * check inclui um novo registro no bd.
	 *
	 * @return [type]     [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2015-12-18
	 */
	public function check() {
		//não enviou POST
		if ( ! $_POST ) {
			redirect( base_url() ) ;
		}

		$status = "0000" ;

		$campos["admin_email"] = trim( addslashes( strip_tags( $_POST["admin_email"] ) ) ) ;
		$campos["admin_senha"] = trim( addslashes( strip_tags( $_POST["admin_senha"] ) ) ) ;

		//if ( ! $this->_validate( $campos ) ) {
		//	return ;
		//}

		$campos["admin_senha"] = md5( $campos["admin_senha"] ) ;

		$login = new login_model() ;

		$dados = $this->login_model->get_usuario( $campos ) ;

		if ( count( $dados ) == 0 ) {
			$status = "0101" ;
		}
		else {
			$_SESSION["nome"] = $dados->admin_nome ;
			$_SESSION["empresa"] = $dados->admin_empresa ;
		}

		$this->output->set_content_type( "application/json" ) ;

		$json["resultado"] = json_encode( array( "status" => $status , "mensagem" => $this->lang->line( $status ) ) ) ;

		$this->load->view( "ajax/index" , $json ) ;
	}

	/**
	 * [validate description]
	 *
	 * @param  [type]     $campos [description]
	 * @return [type]             [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2015-12-18
	 */
	private function _validate( $campos ) {
		$erros = array() ;

		$erros["admin_email"] = $this->validation->set_rules( $campos["admin_email"] , "required|min_length:10|email" ) ;
		$erros["admin_senha"] = $this->validation->set_rules( $campos["admin_senha"] , "required|min_length:6" ) ;

		return $this->validation->set_messages( $this , $erros ) ;
	}
}

?>