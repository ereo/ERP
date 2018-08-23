<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Alumnos_model extends CI_Model{
    function __construct(){
        parent::__construct();
        $this->load->database();
    }
    public function pushAlumnos($param1)
    {
        $this->db->insert('listaalumnos', $param1);
    }
    public function getAlumnos()
    {
        $this->db->select('*');
        $this->db->from('listaalumnos');
        $this->db->where(array('status' => '1'));
        return $this->db->get()->result();
    }
    
    public function updateAlumnos($param1,$param2)
    {   
        $this->db->where(array('id' => $param1));
        $this->db->set($param2);
        $this->db->update('listaalumnos');  
    }
    public function dropAlumnos($param1)    
    {
        $this->db->where(array('id' => $param1));
        $this->db->set(array('status' => 0));
        $this->db->update('listaalumnos');  
    }

}