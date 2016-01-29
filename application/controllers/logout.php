<?php 

if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Logout extends CI_Controller {
	
	
	public function __construct(){
		
		parent::__construct();
		
		session_destroy();
		
		redirect($this->config->item('base_url').'/index.html', 'location', 301);
		
	}
	
}

?>