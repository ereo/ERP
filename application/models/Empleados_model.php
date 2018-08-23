<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Empleados_model extends CI_Model{
    function __construct(){
        parent::__construct();
        $this->load->database();
    }
    public function pushEmpleados($param1)
    {
        $this->db->insert('empleados', $param1);
    }
    public function getEmpleados()
    {
        $this->db->select('*');
        $this->db->from('empleados');
        $this->db->where(array('status' => '1'));
        return $this->db->get()->result();
    }
    
    public function updateEmpleados($param1,$param2)
    {   print_r($param2);
        $this->db->where(array('id' => $param1));
        $this->db->set($param2);
        $this->db->update('empleados');  
    }
    public function dropEmpleados($param1)    
    {
        $this->db->where(array('id' => $param1));
        $this->db->set(array('status' => 0));
        $this->db->update('empleados');  
    }

}