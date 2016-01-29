<?php

/**
 * Classe que representa o meu modelo de dados [cadastro de usuario]
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
 * Classe que representa o meu modelo de dados [cadastro de usuario]
 *
 * @package		admim
 * @subpackage	classes
 * @author		Daniel Araújo <daniel.araujo@grupofolha.com.br>
 * @since		2015-12-11
 */
class usuario_model extends model {

	public $show_limit_rows = 50 ;

	/**
	 * [get_object_config description]
	 *
	 * @return [type]     [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-08
	 */
	protected function get_object_config() {
		return array(
			"table" => "admin" ,
			"primary_key" => "admin_id" ,
			"activate_key" => "admin_ativo" ,
			"fields" => array(
				"admin_id" => array(
					"label" => "id" ,
					"type" => "integer" ,
				) ,
				"admin_nome" => array(
					"label" => "Nome" ,
					"type" => "text" ,
					"required" => "yes" ,
					"max_length" => 250 ,
				) ,
				"admin_email" => array(
					"label" => "E-mail" ,
					"type" => "email" ,
					"required" => "yes" ,
					"max_length" => 250 ,
					"min_length" => 10 ,
				) ,
				"admin_senha" => array(
					"label" => "Senha" ,
					"type" => "password" ,
				) ,
				"admin_empresa" => array(
					"label" => "Empresa" ,
					"type" => "text" ,
					"required" => "yes" ,
					"max_length" => 250 ,
				) ,
			) ,
		) ;
	}

	/**
	 * [reset_senha description]
	 *
	 * @param  [type]     $campos [description]
	 * @return [type]             [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-19
	 */
	public function reset_senha( $campos ) {
		$config = $this->get_object_config() ;

		if ( ! empty( $campos ) && ! empty( $campos["admin_senha"] ) ) {
			$fields = array( "admin_senha" => $campos["admin_senha"] ) ;

			$this->db->where( "admin_id" , $campos["admin_id"] ) ;

			$this->db->update( $config["table"] , $fields ) ;
		}
	}
}

?>