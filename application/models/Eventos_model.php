<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Eventos_model extends CI_Model{
    function __construct(){
        parent::__construct();
        $this->load->database();
    }
    public function pushEventos($param1)
    {
        $this->db->insert('eventos', $param1);
    }
    public function getEventos()
    {
        $this->db->select('*');
        $this->db->from('eventos');
        $this->db->where(array('status' => '1'));
        return $this->db->get()->result();
    }
    
    public function updateEventos($param1,$param2)
    {   
        $this->db->where(array('id' => $param1));
        $this->db->set($param2);
        $this->db->update('eventos');  
    }
    public function dropEventos($param1)    
    {
        $this->db->where(array('id' => $param1));
        $this->db->set(array('status' => 0));
        $this->db->update('eventos');  
    }

}