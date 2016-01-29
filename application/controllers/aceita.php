<?php 

if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Aceita extends CI_Controller {
	
	
	public function __construct(){
		
		parent::__construct();
		$this->load->model('aceita_model');
	
	}
	
	//postar pagina de lista.
	public function listar($offset=0){
		
		$limite = 1;
		$dados['aceites'] = $this->aceita_model->getAll($limite, $offset);
		
		/*Paginaчуo*/
		$config['base_url'] = base_url()."aceita/listar";
		$config['per_page'] = $limite;
		$config['total_rows'] = $this->aceita_model->getAllNumRows();
		
		$this->pagination->initialize($config);
		$dados['paginacao'] = $this->pagination->create_links(); 
		
		$this->load->view('aceita/lista',$dados);	
	}
	
	//postar pagina de inclusуo.
	public function incluir(){
		
		$this->load->view('aceita/incluir');
	}
	
	//postar pagina de ediчуo.
	public function editar($aceita_id){
		$dados['aceites'] = $this->aceita_model->getAceite($aceita_id);
		$this->load->view('aceita/editar',$dados);
	}
	
	//postar pagina de exclusуo.
	public function excluir($aceita_id){
		$dados['aceites'] = $this->aceita_model->getAceite($aceita_id);
		$this->load->view('aceita/excluir',$dados);
	}
	
	//postar pagina de exclusуo.
	public function consultar($aceita_id){
		$dados['aceites'] = $this->aceita_model->getAceite($aceita_id);
		$this->load->view('aceita/consultar',$dados);
	}
	
	//inclui um novo registro no bd.
	public function add(){
		
		$campos = array('aceita_descricao');
		
		if($this->validar()==TRUE):
			
			$dados = elements($campos,$this->input->post(NULL,TRUE));
			$this->aceita_model->incluir($dados);
			
		endif;
		
		$this->load->view('aceita/incluir');
	}
	
	//edita um registro existente no bd.
	public function update(){
		
		$campos = array('aceita_id','aceita_descricao');
		$id = elements('aceita_id',$this->input->post(NULL,TRUE));
		
		if($this->validar()==TRUE):
			
			$dados = elements($campos,$this->input->post(NULL,TRUE));
			$this->aceita_model->editar($dados);
			
			redirect('aceita/listar', 'location', 301);
						
		endif;
		
		$dados['aceites'] = $this->aceita_model->getAceite($id['aceita_id']);		
		$this->load->view('aceita/editar',$dados);
	}
	
	
	public function delete($aceita_id){
		
		$this->aceita_model->deletar($aceita_id);
		
		redirect('aceita/listar', 'location', 301);
	}
	
	//faz a validaчуo dos campos que vem da pagina.
	public function validar(){
		
		$this->form_validation->set_rules('aceita_descricao','Descriчуo','trim|required|mmax_length[350]');

		return $this->form_validation->run();
	}
}

?>