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
class Validation {

	/**
	 * Regras
	 *
	 * @access	public
	 * @param	string
	 * @param	string/number
	 * @param	string
	 * @return	bool
	 */
	public function set_rules($value,$functions) {

		foreach($functions as $key => $v){

			if(! method_exists($this, $key))continue;

			$error = call_user_func_array(array($this, $key), array( $value ,  $v ) );

			if($error == '0000') continue;

			return $error;

			break;
		}

		return '0000';
	}

	// --------------------------------------------------------------------

	/**
	 * Mensagens
	 *
	 * @access	public
	 * @param	string
	 * @param	string/number
	 * @param	string
	 * @return	bool
	 */
	public function set_messages($controller,$erros) {

		$filter = array();

		$erros = array_reverse($erros);

		foreach($erros as $key => $value){

			if($value == '0000') continue;

			$filter[$key] = $controller->lang->line($value);
		}

		if(empty($filter)) return true;

		$controller->output->set_content_type('application/json');

		$dados['resultado'] = json_encode(array('status'=> '9999', 'mensagem' => $filter));

		$controller->load->view('ajax/index',$dados);

		return false;

	}

	// --------------------------------------------------------------------

	/**
	 * Valid Email
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function email($str){

		return ( ! preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $str)) ? '0102' : '0000';

	}

	// --------------------------------------------------------------------

	/**
	 * Alpha
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function alpha($str)
	{
		return ( ! preg_match("/^([a-z])+$/i", $str)) ? '0103' : '0000';
	}


	// --------------------------------------------------------------------

	/**
	 * Alpha-numeric
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function alpha_numeric($str)
	{
		return ( ! preg_match("/^([a-z0-9])+$/i", $str)) ? '0104' : '0000';
	}

	// --------------------------------------------------------------------

	/**
	 * Alpha-numeric with underscores and dashes
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function alpha_dash($str)
	{
		return ( ! preg_match("/^([-a-z0-9_-])+$/i", $str)) ? '0105' : '0000';
	}

	// --------------------------------------------------------------------

	/**
	 * Numeric
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function numeric($str)
	{
		return ( ! preg_match( '/^[\-+]?[0-9]*\.?[0-9]+$/', $str)) ? '0106' : '0000';

	}


	// --------------------------------------------------------------------

	/**
	 * Is Numeric
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function is_numeric($str)
	{
		return ( ! is_numeric($str)) ? '0107' : '0000';
	}

	// --------------------------------------------------------------------

	/**
	 * Integer
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function integer($str)
	{
		return ( ! preg_match('/^[\-+]?[0-9]+$/', $str)) ? '0110' : '0000';
	}

	// --------------------------------------------------------------------

	/**
	 * Decimal number
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function decimal($str)
	{
		return ( ! preg_match('/^[\-+]?[0-9]+\.[0-9]+$/', $str)) ? '0111' : '0000';
	}

	// --------------------------------------------------------------------

	/**
	 * Is a Natural number  (0,1,2,3, etc.)
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function is_natural($str)
	{
		return ( ! preg_match( '/^[0-9]+$/', $str)) ? '0112' : '0000';
	}

	// --------------------------------------------------------------------

	/**
	 * Is a Natural number, but not a zero  (1,2,3, etc.)
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function is_natural_no_zero($str)
	{
		if ( ! preg_match( '/^[0-9]+$/', $str))
		{
			return '0113';
		}

		if ($str == 0)
		{
			return '0113';
		}

		return '0000';
	}

	// --------------------------------------------------------------------

	/**
	 * Is a date
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function data($str)
	{
		return (! eregi("^[0-9]{2}/[0-9]{2}/[0-9]{4}$", $str)) ? '0114' : '0000';
	}

	// --------------------------------------------------------------------

	/**
	 * Is a cep
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function cep($str)
	{
		return ( ! eregi("^[0-9]{5}-[0-9]{3}$", $str)) ? '0115' : '0000';
	}

	// --------------------------------------------------------------------

	/**
	 * Greather than
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function greater_than($str, $min)
	{
		if ( ! is_numeric($str))
		{
			return '0116';
		}
		return ($str > $min) ? '0116' : '0000' ;
	}

	// --------------------------------------------------------------------

	/**
	 * Less than
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function less_than($str, $max)
	{
		if ( ! is_numeric($str))
		{
			return '0117';
		}
		return ($str < $max) ? '0117': '0000';
	}

	// --------------------------------------------------------------------

	/**
	 * Minimum Length
	 *
	 * @access	public
	 * @param	string
	 * @param	value
	 * @return	bool
	 */
	public function min_length($str, $val)
	{
		if (preg_match("/[^0-9]/", $val))
		{
			return '0120';
		}

		if (function_exists('mb_strlen'))
		{
			return (mb_strlen($str) < $val) ? '0120' : '0000';
		}

		return (strlen($str) < $val) ? '0120' : '0000';
	}

	// --------------------------------------------------------------------

	/**
	 * Max Length
	 *
	 * @access	public
	 * @param	string
	 * @param	value
	 * @return	bool
	 */
	public function max_length($str, $val)
	{
		if (preg_match("/[^0-9]/", $val))
		{
			return '0121';
		}

		if (function_exists('mb_strlen'))
		{
			return (mb_strlen($str) > $val) ? '0121' : '0000';
		}

		return (strlen($str) > $val) ? '0121' : '0000';
	}

	// --------------------------------------------------------------------

	/**
	 * Required
	 *
	 * @access	public
	 * @param	string
	 * @return	bool
	 */
	public function required($str)
	{
		if ( ! is_array($str))
		{
			return (trim($str) == '') ? '0122' : '0000';
		}
		else
		{
			return ( ! empty($str)) ? '0122' : '0000';
		}
	}

	// --------------------------------------------------------------------

	/**
	 * Match one field to another
	 *
	 * @access	public
	 * @param	string
	 * @param	field
	 * @return	bool
	 */
	public function matches($str, $val)
	{
		//if ( ! isset($_POST[$field]))
		//{
		//	return 0023;
		//}

		//$field = $_POST[$field];

		return ($str != $val) ? '0123' : '0000';
	}

}




?>