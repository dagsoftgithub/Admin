<?php

/**
 * Model de login
 *
 * @package		admin
 * @subpackage	model
 * @author		Daniel Araújo <daniel.araujo@grupofolha.com.br>
 * @since		2015-12-11
 */

if ( ! defined( "BASEPATH" ) ) {
	exit( "No direct script access allowed" ) ;
}

/**
 * Model de login
 *
 * @package		admin
 * @subpackage	model
 * @author		Daniel Araújo <daniel.araujo@grupofolha.com.br>
 * @since		2015-12-11
 */
class login_model extends CI_Model {

	/**
	 * [__construct description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2015-12-18
	 */
	public function __construct() {
		parent::__construct() ;
	}


	/**
	 * [getUsuario description]
	 *
	 * @param  [type]     $dados [description]
	 * @return [type]            [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2015-12-18
	 */
	public function get_usuario( $dados ) {
		$admin_email = $dados["admin_email"] ;
		$admin_senha = $dados["admin_senha"] ;

		$this->db->where( "admin_email" , $admin_email ) ;
		$this->db->where( "admin_senha" , $admin_senha ) ;
		$query = $this->db->get( "admin" ) ;

		return $query->row( 0 ) ;
	}

}

?>