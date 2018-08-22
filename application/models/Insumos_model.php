<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Insumos_model extends CI_Model{
    function __construct(){
        parent::__construct();
        $this->load->database();
    }
    public function pushInsumos($param1)
    {
        $this->db->insert('insumos', $param1);
    }
    public function getInsumos()
    {
        $this->db->select('*');
        $this->db->from('insumos');
        $this->db->where(array('status' => '1'));
        return $this->db->get()->result();
    }
    
    public function updateInsumos($param1,$param2)
    {   print_r($param2);
        $this->db->where(array('id' => $param1));
        $this->db->set($param2);
        $this->db->update('insumos');  
    }
    public function dropInsumos($param1)    
    {
        $this->db->where(array('id' => $param1));
        $this->db->set(array('status' => 0));
        $this->db->update('insumos');  
    }

}