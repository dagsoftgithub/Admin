<?php

if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Menu extends CI_Controller {


	public function __construct(){

		parent::__construct();

		if(!isset($_SESSION['nome'])) redirect(base_url().'index.html', 'location', 301);
	}

	public function index(){

		$dados['site']['path'] 	 = array("menu");
		$dados['site']['method'] = array("menu");

		$this->load->view('menu/index', $dados);
	}

}

?>