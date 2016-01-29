<?php

if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Usuario_model extends CI_Model {
	
	public function getAll($limite, $offset){
		
		$this->db->limit($limite, $offset);
		$query = $this->db->get('admin');	
			
		return $query->result();
	}
	
	
	
	public function getAllNumRows(){
		
		return $this->db->get('admin')->num_rows();
		
	}
	
	public function getUsuario($admin_id){
		
		$query = $this->db->where('admin_id',$admin_id)->get('admin');
		
		return $query->row(0);
			
	}
	
	
	public function incluir($dados=NULL){
		
		if($dados!=NULL):
		
			$this->db->insert('admin',$dados);
		
		endif;
		
	}
	
	
	public function editar($dados=NULL) {
		
		if($dados!=NULL):
			
			$campos = array('admin_nome','admin_email','admin_senha');
			
			$admin_id = $dados['admin_id'];
			$dados = elements($campos,$dados);
			$this->db->where('admin_id',$admin_id);
			$this->db->update('admin',$dados);
		
		endif;
		
	}
	
	public function deletar($admin_id=NULL){
		
		if($admin_id!=NULL):
			$this->db->where('admin_id',$admin_id)->delete('admin');
		endif;
			
	}

}

?>