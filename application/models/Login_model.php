<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login_model extends CI_Model{
    function __construct(){
        parent::__construct();
        $this->load->database();
    }
    
    function getUser($user = '')
    {
    	$query = $this->db->get_where('empleados', array('usuario' => $user));
			if($query->num_rows() == 1) 
				return $query->row();
			else
                return null;
    }

    function updatePassword($user,$pssw){
        $this->db->trans_start();
        $this->db->where('user',$user);
        $this->db->set(array('pssw' => md5($pssw)));
        $this->db->update('users');
        $this->db->trans_complete();

        if ($this->db->trans_status() === FALSE)
            return 'error al actualizar.';
        else
            return 'Contraseña actualizada.';
    }

    function closeDB(){
    	$this->db->close();
    }
}