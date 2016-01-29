<?php

/**
 * Classe para controle do cadastro de usuario
 *
 * @package		admim
 * @subpackage	classes
 * @author		Daniel Araújo <daniel.araujo@grupofolha.com.br>
 * @since		2015-12-11
 */

if ( ! defined( "BASEPATH" ) ) {
	exit( "No direct script access allowed" ) ;
}

/**
 * Classe para controle do cadastro de usuario
 *
 * @package		admim
 * @subpackage	classes
 * @author		Daniel Araújo <daniel.araujo@grupofolha.com.br>
 * @since		2015-12-11
 */
class usuario extends CI_Controller {

	/**
	 * [__construct description]
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-05
	 */
	public function __construct() {
		parent::__construct() ;

		if ( ! isset( $_SESSION["nome"] ) ) {
			redirect( base_url() . "index.html" , "location" , 301 ) ;
		}

		$this->load->model( "usuario_model" ) ;
	}

	/**
	 * postar pagina de lista.
	 * @param  integer    $offset [description]
	 * @return [type]             [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-05
	 */
	public function listar( $offset = 0 ) {

		$campos = $this->request() ;

		if ( ! empty( $campos{"admin_nome"} ) || ! empty( $campos{"admin_email"} ) ) {
			$where[] = "admin_ativo = 'yes'" ;

			if ( ! empty( $campos{"admin_nome"} ) ) {
				$where[] = sprintf( "admin_nome LIKE '%%%s%%' "	, $campos{"admin_nome"} ) ;
			}

			if ( ! empty( $campos{"admin_email"} ) ) {
				$where[] = sprintf( "admin_email LIKE '%%%s%%' "	, $campos{"admin_email"} ) ;
			}

			$dados["tabela"] = $this->usuario_model->search( array() , $where , $offset ) ;
		}
		else {
			$dados["tabela"] = $this->usuario_model->get_all( $offset ) ;
		}


		/*Paginação*/
		$config["base_url"] = "usuario/listar" ;
		$config["per_page"] = $this->usuario_model->show_limit_rows ;
		$config["total_rows"] = $this->usuario_model->get_record_count() ;
		$config["first_link"] = "Primeiro" ;
		$config["last_link"] = "Ultimo" ;
		$config["next_link"] = "Próximo" ;
		$config["prev_link"] = "Anterior" ;

		$this->pagination->initialize( $config ) ;
		$dados["paginacao"] = $this->pagination->create_links() ;

		$total_rows = $this->usuario_model->get_record_count() ;
		$total_page = ceil( $total_rows / $this->usuario_model->show_limit_rows ) ;

		$dados["total_rows"] = $total_rows ;
		$dados["total_page"] = $total_page ;
		$dados["page_current"] = ceil( ( $offset / $this->usuario_model->show_limit_rows ) + 1 ) ;

		$dados["offset"] = $offset ;

		$this->load->view( "usuario/listing" , $dados ) ;
	}

	/**
	 * inclui um novo registro no bd.
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-05
	 */
	public function add() {
		$status = "0001" ;

		$campos = $this->request() ;

		if ( empty( $campos["admin_id"] ) ) {
			$campos["admin_senha"] = "mudar123" ;
		}

		if ( ! $this->usuario_model->save( $campos ) ) {
			$this->result( false , $this->usuario_model->get_error_message() ) ;
		}
		else {
			$this->result( true , $this->lang->line( $status ) ) ;
		}

	}

	/**
	 * edita um registro existente no bd.
	 * @return [type]     [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-05
	 */
	public function reset_senha() {
		$status = "0002" ;

		$campos = $this->request() ;

		if ( empty( $campos["admin_id"] ) ) {
			$tatus = "0999" ;

			$this->result( $tatus , $this->lang->line( $tatus ) ) ;

			return ;
		}

		$campos["admin_senha"] = "mudar123" ;

		$this->usuario_model->reset_senha( $campos ) ;

		$this->result( $status ) ;
	}

	/**
	 * [delete description]
	 *
	 * @return [type]     [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-05
	 */
	public function delete() {
		$status = "0003" ;

		$campos = $this->request() ;

		$this->usuario_model->deletar( $campos ) ;

		$this->result( $status ) ;
	}

	/**
	 * [request description]
	 *
	 * @return [type]     [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-05
	 */
	public function request() {
		//não enviou POST
		//if ( ! $_POST ) {
		//	redirect( base_url() . "index.html" , "location" , 301 ) ;
		//}

		$campos["admin_id"] = strtoupper( trim( addslashes( strip_tags( isset( $_POST["admin_id"] ) ? $_POST["admin_id"] : null ) ) ) ) ;
		$campos["admin_nome"] = strtoupper( trim( addslashes( strip_tags( isset( $_POST["admin_nome"] ) ? $_POST["admin_nome"] : null ) ) ) ) ;
		$campos["admin_email"] = strtoupper( trim( addslashes( strip_tags( isset( $_POST["admin_email"] ) ? $_POST["admin_email"] : null ) ) ) ) ;
		$campos["admin_empresa"] = strtoupper( trim( addslashes( strip_tags( isset( $_POST["admin_empresa"] ) ? $_POST["admin_empresa"] : null ) ) ) ) ;
		$campos["admin_senha"] = strtoupper( trim( addslashes( strip_tags( isset( $_POST["admin_senha"] ) ? $_POST["admin_senha"] : null ) ) ) ) ;

		return $campos ;
	}

	/**
	 * [view description]
	 *
	 * @param  [type]     $method [description]
	 * @return [type]             [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-05
	 */
	public function view( $primary_key = null ) {
		if ( empty( $primary_key ) ) {
			$dados["titulo"] = "Incluir Usuário." ;
			$dados["usuario"] = $this->request();
		}
		else {
			$dados["usuario"] = $this->usuario_model->get_record( $primary_key ) ;
			$dados["titulo"] = sprintf( "Editar Usuário: %s" , $dados{"usuario"}{"admin_nome"} ) ;
		}

		$this->load->view( "usuario/update" , $dados ) ;
	}

	/**
	 * [result description]
	 *
	 * @param  [type]     $status [description]
	 * @return [type]             [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-05
	 */
	public function result( $status , $mensagem ) {
		$this->output->set_content_type( "application/json" ) ;

		$json["resultado"] = json_encode( array( "status" => $status , "mensagem" => $mensagem ) ) ;

		$this->load->view( "ajax/index" , $json ) ;
	}

}

?>