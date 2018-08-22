<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Promociones_model extends CI_Model{
    function __construct(){
        parent::__construct();
        $this->load->database();
    }
    public function pushPromociones($param1)
    {
        $this->db->insert('promociones', $param1);
    }
    public function getPromociones()
    {
        $this->db->select('*');
        $this->db->from('promociones');
        $this->db->where(array('status' => '1'));
        return $this->db->get()->result();
    }
    
    public function updatePromociones($param1,$param2)
    {   
        $this->db->where(array('id' => $param1));
        $this->db->set($param2);
        $this->db->update('promociones');  
    }
    public function dropPromociones($param1)    
    {
        $this->db->where(array('id' => $param1));
        $this->db->set(array('status' => 0));
        $this->db->update('promociones');  
    }

}