<?php

class model extends CI_Model {

	public $show_limit_rows = 50 ;
	protected $record_count = 0 ;
	protected $error_message = array() ;

	/**
	 * [_set_error_message description]
	 *
	 * @param  [type]     $campo [description]
	 * @param  string     $key   [description]
	 * @param  [type]     $value [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-22
	 */
	private function _set_error_message( $campo = null , $key = "0000" , $value = null ) {
		if ( (int) $key == 0 ) {
			return ;
		}

		$msg = $this->lang->line( $key ) ;

		$msg = ( ! $msg ) ? $value : $msg ;

		if ( ! $msg || $msg == null ) {
			return ;
		}

		$this->error_message[] = array( "campo" => $campo , "valor" => $msg ) ;
	}

	private function _reset_error_message() {
		$this->error_message = array() ;
	}

	private function _remove_item_message( $value ) {
		return ( (int) $value != 0 ) ? true : false ;
	}

	private function _set_lang_messages( $value ) {
		return $this->lang->line( $value ) ;
	}

	public function get_error_message() {
		//$this->error_message = array_filter( $this->error_message , array( $this , "_remove_item_message" ) ) ;

		//$this->error_message = array_map( array( $this , "_set_lang_messages" ) , $this->error_message ) ;

		return $this->error_message ;
	}

	public function has_error_message() {
		$error_message = $this->get_error_message() ;

		return ( ! empty( $error_message ) ) ? true : false ;
	}


	/**
	 * [get_object_config description]
	 *
	 * @return [type]     [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-08
	 */
	protected function get_object_config() {
	}

	/**
	 * [search description]
	 *
	 * @param  Array|array $campos [description]
	 * @param  Array|array $where  [description]
	 * @return [type]              [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-11
	 */
	public function search( Array $campos = array() , Array $where = array() , $offset = 0 ) {
		$config = $this->get_object_config() ;

		$select = "SELECT " ;

		$count = " COUNT(*) AS num_rows" ;

		if ( count( $campos ) == 0 ) {
			$fields = " * " ;
		}
		else {
			$fields = implode( " , " , $campos ) ;
		}

		$from = " FROM ". $config{"table"} ;

		$wherever = " WHERE " ;

		if ( count( $where ) > 0 ) {
			$wherever .= implode( " AND " , $where ) ;
		}
		else {
			$wherever .= sprintf( "%s = 'yes'" , $config{"activate_key"} ) ;
		}

		$limit = sprintf( " LIMIT %s, %s " , $offset , $this->show_limit_rows ) ;

		$this->record_count = $this->db->query( $select . $count . $from . $wherever )->row( 0 )->num_rows ;

		$query = $this->db->query( $select . $fields . $from . $wherever . $limit ) ;

		return $query->result() ;
	}

	/**
	 * [getAll] Esta função obtem todos os registros de uma tabela.
	 *
	 * @param  [type]     $offset [description]
	 * @return [type]             [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-08
	 */
	public function get_all( $offset ) {
		$config = $this->get_object_config() ;

		return $this->search( array() , array() , $offset ) ;
	}

	/**
	 * [get_record_count description]
	 *
	 * @return [type]     [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-08
	 */
	public function get_record_count() {
		return $this->record_count ;
	}

	/**
	 * [get_record description]
	 *
	 * @param  [type]     $primary_key [description]
	 * @return [type]                  [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-08
	 */
	public function get_record( $primary_key = null ) {
		$config = $this->get_object_config() ;

		if ( $primary_key == null ) {
			return false ;
		}

		$query = $this->db->where( $config{"primary_key"} , $primary_key )->get( $config{"table"} ) ;

		return $query->row_array( 0 ) ;
	}

	public function is_valid( $campos ) {
		$config = $this->get_object_config() ;

		$this->_reset_error_message() ;

		foreach ( $campos as $key => $value ) {
			$this->_set_error_message( $key , $this->validation->set_rules( $value , $config["fields"][$key] ) ) ;
		}

		return ( $this->has_error_message() ) ? false : true ;
	}

	public function save( $campos ) {
		$config = $this->get_object_config() ;

		if ( ! $this->is_valid( $campos ) ) {
			return false ;
		}

		$primary_key = $config["primary_key"] ;

		$retorno = ( ! empty( $campos ) && ! empty( $campos[$primary_key] ) ) ? $this->update( $campos ) : $this->insert( $campos ) ;

		return $retorno ;
	}

	public function insert( $campos ) {
		$config = $this->get_object_config() ;

		$table = $config["table"] ;

		$this->db->insert( $table , $campos ) ;

		if ( $this->db->_error_message() ) {
			$this->_set_error_message( $this->db->_error_number() , $this->db->_error_message() ) ;

			return false ;
		}

		return true ;
	}

	public function update( $campos ) {
		$config = $this->get_object_config() ;

		$primary_key = $config["primary_key"] ;
		$table = $config["table"] ;

		$this->db->where( $primary_key , $campos[$primary_key] ) ;
		$this->db->update( $table , $campos ) ;

		if ( $this->db->_error_message() ) {
			$this->_set_error_message( $this->db->_error_number() , $this->db->_error_message() ) ;

			return false ;
		}

		return true ;
	}
}

?>