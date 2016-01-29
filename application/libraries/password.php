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
class Password {
	
	
	
	/**
	 * Regras 
	 *
	 * @access	public
	 * @param	string
	 * @param	string/number
	 * @param	string
	 * @return	bool
	 */
	public function generate($tamanho, $maiuscula, $minuscula, $numeros, $codigos) {
	    
	    $maius = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
	    $minus = "abcdefghijklmnopqrstuwxyz";
	    $numer = "0123456789";
	    $codig = '!@#$%&*()-+.,;?{[}]^><:|';
	 
	    $base  = '';
	    $base .= ($maiuscula) ? $maius : '';
	    $base .= ($minuscula) ? $minus : '';
	    $base .= ($numeros) ? $numer : '';
	    $base .= ($codigos) ? $codig : '';
	 
	    return substr(str_shuffle($base), 0, $tamanho);	
    }
	

}

?>