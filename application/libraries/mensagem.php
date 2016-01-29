<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/*
|--------------------------------------------------------------------------
| Base Site URL
|--------------------------------------------------------------------------
|
| URL to your CodeIgniter root. Typically this will be your base URL,
| WITH a trailing slash:
|
|	http://example.com/
|
| If this is not set then CodeIgniter will guess the protocol, domain and
| path to your installation.
|
*/
class Mensagem {

	/**
	 * [$lista description]
	 * @var array
	 */
	private $_lista = array() ;

	/**
	 * [reset description]
	 *
	 * @return [type]     [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-20
	 */
	public function reset() {
		$this->_lista = array() ;
	}

	/**
	 * [insert description]
	 *
	 * @param  string     $codigo [description]
	 * @param  [type]     $valor  [description]
	 * @return [type]             [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-20
	 */
	public function insert( $codigo = "0000" , $valor = null ) {

		$msg = $this->lang->line( $codigo ) ;

		$this->_lista[$codigo] = ( $msg == false ) ? $value : $msg ;
	}

	public function read() {
		return $this->_lista;
	}
}