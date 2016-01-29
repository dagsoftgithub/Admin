<?php 

if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Pessoa extends CI_Controller {
	
	
	public function __construct(){
		
		parent::__construct();
		$this->load->model('pessoa_model');
	
	}
	
	//postar pagina de lista.
	public function listar($offset=0){
		
		$limite = 1;
		$dados['pessoas'] = $this->pessoa_model->getAll($limite, $offset);
		
		/*Paginaчуo*/
		$config['base_url'] = base_url()."pessoa/listar";
		$config['per_page'] = $limite;
		$config['total_rows'] = $this->pessoa_model->getAllNumRows();
		
		$this->pagination->initialize($config);
		$dados['paginacao'] = $this->pagination->create_links(); 
		
		$this->load->view('pessoa/lista',$dados);	
	}
	
	//postar pagina de inclusуo.
	public function incluir(){
		
		$this->load->view('pessoa/incluir');
	}
	
	//postar pagina de ediчуo.
	public function editar($admin_id){
		$dados['pessoas'] = $this->pessoa_model->getpessoa($admin_id);
		$this->load->view('pessoa/editar',$dados);
	}
	
	//postar pagina de exclusуo.
	public function excluir($admin_id){
		$dados['pessoas'] = $this->pessoa_model->getpessoa($admin_id);
		$this->load->view('pessoa/excluir',$dados);
	}
	
	//postar pagina de exclusуo.
	public function consultar($admin_id){
		$dados['pessoas'] = $this->pessoa_model->getpessoa($admin_id);
		$this->load->view('pessoa/consultar',$dados);
	}
	
	//inclui um novo registro no bd.
	public function add(){
		
		$campos = array('admin_nome','admin_email','admin_senha');
		
		if($this->validar()==TRUE):
			
			$dados = elements($campos,$this->input->post(NULL,TRUE));
			$dados['admin_senha']=md5($dados['admin_senha']);
			$this->pessoa_model->incluir($dados);
			
		endif;
		
		$this->load->view('pessoa/incluir');
	}
	
	//edita um registro existente no bd.
	public function update(){
		
		$campos = array('admin_id','admin_nome','admin_email','admin_senha');
		$id = elements('admin_id',$this->input->post(NULL,TRUE));
		
		if($this->validar()==TRUE):
			
			$dados = elements($campos,$this->input->post(NULL,TRUE));
			$dados['admin_senha']=md5($dados['admin_senha']);
			$this->pessoa_model->editar($dados);
			
			redirect('pessoa/listar', 'location', 301);
						
		endif;
		
		$dados['pessoas'] = $this->pessoa_model->getpessoa($id['admin_id']);		
		$this->load->view('pessoa/editar',$dados);
	}
	
	
	public function delete($admin_id){
		
		$this->pessoa_model->deletar($admin_id);
		
		redirect('pessoa/listar', 'location', 301);
	}
	
	//faz a validaчуo dos campos que vem da pagina.
	public function validar(){
		
		$this->form_validation->set_rules('admin_nome','Nome','trim|required|mmax_length[250]|ucwords');
		$this->form_validation->set_rules('admin_email','Email','trim|required|mmax_length[250]|strtolower|valid_email');
		$this->form_validation->set_rules('admin_senha','Senha','trim|required|strtolower|mmax_length[16]');
		$this->form_validation->set_rules('admin_senha2','Confirmar Senha','trim|required|strtolower|mmax_length[16]|matches[admin_senha]');

		return $this->form_validation->run();
	}
}

?>