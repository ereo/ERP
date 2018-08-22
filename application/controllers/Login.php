<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	public function index()
	{
		if($this->session->userdata('rol') == 'Administrador')
            redirect(base_url().'index.php/Administrador');
        else if($this->session->userdata('rol') == 'Usuario')
        	redirect(base_url().'index.php/Usuario');
        else 
			$this->load->view('Login_view');
	}

	public function loginMe()
	{
		$user = $this->input->post('user');
		$pssw = $this->input->post('pssw');
		// echo $user;

		if($user!="" && $pssw!="")
		{
			$this->load->model('Login_model');
			$result = $this->Login_model->getUser($user);
			if($result != null){
				if($result->contrasena == $pssw)
				{
					$data = array('user' => $result->usuario,'login' => true,'id' => $result->id,'rol' => $result->tipo);
					//print_r($data);
					$this->session->set_userdata($data);
					$this->Login_model->closeDB();

					echo 	json_encode(
						array(
						'type' => 'success',
						'msg' => 'En linea',
						'user' => $this->session->userdata('rol')
					));
				}
				else
					echo 	json_encode(
								array(
									'type' => 'error',
									'msg' => 'La contraseña es incorrecta.'
							));
				
			}else
				echo 	json_encode(
							array(
								'type' => 'error',
								'msg' => 'La cuenta no existe.'
						));
		}
		else
			echo 	json_encode(
						array(
							'type' => 'error',
							'msg' => 'El usuario y la contraseña son obligatorios.'
					));
	}

	public function logOut(){
		$this->session->sess_destroy();
		redirect(base_url());
	}

	public function Register(){
		$this->load->view('Panel/Registro');
	}
}
