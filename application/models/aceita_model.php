<?php

if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Aceita_model extends CI_Model {
	
	public function getAll($limite, $offset){
		
		$this->db->limit($limite, $offset);
		$query = $this->db->get('aceita');	
			
		return $query->result();
	}
	
	
	
	public function getAllNumRows(){
		
		return $this->db->get('aceita')->num_rows();
		
	}
	
	public function getAceite($aceita_id){
		
		$query = $this->db->where('aceita_id',$aceita_id)->get('aceita');
		
		return $query->row(0);
			
	}
	
	
	public function incluir($dados=NULL){
		
		if($dados!=NULL):
		
			$this->db->insert('aceita',$dados);
		
		endif;
		
	}
	
	
	public function editar($dados=NULL) {
		
		if($dados!=NULL):
			
			$campos = array('aceita_descricao');
			
			$aceita_id = $dados['aceita_id'];
			$dados = elements($campos,$dados);
			$this->db->where('aceita_id',$aceita_id);
			$this->db->update('aceita',$dados);
		
		endif;
		
	}
	
	public function deletar($aceita_id=NULL){
		
		if($aceita_id!=NULL):
			$this->db->where('aceita_id',$aceita_id)->delete('aceita');
		endif;
			
	}

}

?>