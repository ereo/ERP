<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Administrador extends CI_Controller 
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model("Empleados_model");
		$this->load->model('Alumnos_model');
		$this->load->model('Insumos_model');
		$this->load->model('Promociones_model');
		$this->load->model('Eventos_model');
	}

	public function index()
	{
		if($this->session->userdata('rol') == 'Administrador' || $this->session->userdata('rol') == 'Maestro' || $this->session->userdata('rol') == 'Recepcionista'){
            $data['rol'] = $this->session->userdata('rol');		
            $this->load->view('Global/AsideLeft',$data);
            $this->load->view('InicioA');
		}
        else
        	redirect(base_url());	
	}

	public function Error404()
	{
		$this->load->view('Administrador/Error/Error404');
	}
	public function Error500()
	{
		$this->load->view('Administrador/Error/Error500');
	}

	public function Alumnos()
	{
		if($this->session->userdata('rol') == 'Administrador' || $this->session->userdata('rol') == 'Maestro' || $this->session->userdata('rol') == 'Recepcionista'){
            $data['rol'] = $this->session->userdata('rol');		
			$this->load->view('Global/AsideLeft',$data);
			$this->load->view('Alumnos_view');
		}else
        	redirect(base_url());	
	}

	public function Empleados()
	{
		if($this->session->userdata('rol') == 'Administrador' || $this->session->userdata('rol') == 'Maestro' || $this->session->userdata('rol') == 'Recepcionista'){
            $data['rol'] = $this->session->userdata('rol');		
            $this->load->view('Global/AsideLeft',$data);
            $this->load->view('Empleados_view');
		}else
        	redirect(base_url());	
	}
	public function Insumos()
	{
		if($this->session->userdata('rol') == 'Administrador' || $this->session->userdata('rol') == 'Maestro' || $this->session->userdata('rol') == 'Recepcionista'){
            $data['rol'] = $this->session->userdata('rol');		
            $this->load->view('Global/AsideLeft',$data);
            $this->load->view('Insumos_view');
		}else
        	redirect(base_url());	
	}

	public function Promociones()
	{
		if($this->session->userdata('rol') == 'Administrador' || $this->session->userdata('rol') == 'Maestro' || $this->session->userdata('rol') == 'Recepcionista'){
            $data['rol'] = $this->session->userdata('rol');		
            $this->load->view('Global/AsideLeft',$data);
            $this->load->view('Promociones_view');
		}else
        	redirect(base_url());	
	}

	public function Eventos()
	{
		if($this->session->userdata('rol') == 'Administrador' || $this->session->userdata('rol') == 'Maestro' || $this->session->userdata('rol') == 'Recepcionista'){
            $data['rol'] = $this->session->userdata('rol');		
            $this->load->view('Global/AsideLeft',$data);
            $this->load->view('Eventos_view');
		}else
        	redirect(base_url());	
	}

	public function Horario()
	{
		if($this->session->userdata('rol') == 'Administrador' || $this->session->userdata('rol') == 'Maestro' || $this->session->userdata('rol') == 'Recepcionista'){
            $data['rol'] = $this->session->userdata('rol');		
            $this->load->view('Global/AsideLeft',$data);
            $this->load->view('Horario_view');
		}else
        	redirect(base_url());	
	}
	#-------------------------
	public function push()
	{
		$complete = '<form action="#" method="post">'
		.'<div class="row">'
		.'<div class="form-group col-md-12" style="text-align: center;">'
		.'<h2>Accion completada.</h2>'
		.'</div>'
		.'</div>'
		.'</form>';

		switch ($this->input->post('type')) {
    	case 'pushEmpleados':
	        $queryUsuario = array(
			'nombre' => $this->input->post('nombre'),
			'Apellido' => $this->input->post('Apellido'),
			'Telefono' => $this->input->post('Telefono'),
			'contrasena' => $this->input->post('contrasena'),
			'usuario' => $this->input->post('usuario'),
			'tipo' => $this->input->post('tipo'),
			'status' => 1
			);
			$this->Empleados_model->pushEmpleados($queryUsuario);
			echo $complete;
        break;
        case 'pushAlumnos':
        	$queryInventario = array(
			'Nombre' => $this->input->post('Nombre'),
			'Apellidos' => $this->input->post('Apellidos'),
			'FechaInicio' => $this->input->post('FechaInicio'),
			'Telefono' => $this->input->post('Telefono'),
			'Direccion' => $this->input->post('Direccion'),
			'status' => 1
			);
			$this->Alumnos_model->pushAlumnos($queryInventario);
			echo $complete;
		break;
		case 'pushInsumos':
        	$queryInventario = array(
			'Nombre' => $this->input->post('Nombre'),
			'Cantidad' => $this->input->post('Cantidad'),
			'Precio' => $this->input->post('Precio'),
			'Fecha' => $this->input->post('Fecha'),
			'status' => 1
			);
			$this->Insumos_model->pushInsumos($queryInventario);
			echo $complete;
		break;
		case 'pushPromociones':
        	$queryInventario = array(
			'Nombre' => $this->input->post('Nombre'),
			'Cantidaddescuento' => $this->input->post('Cantidaddescuento'),
			'Motivo' => $this->input->post('Motivo'),
			'Fechainicio' => $this->input->post('Fechainicio'),
			'Fechafin' => $this->input->post('Fechafin'),
			'status' => 1
			);
			$this->Promociones_model->pushPromociones($queryInventario);
			echo $complete;
		break;
		case 'pushEventos':
        	$queryInventario = array(
			'Nombre' => $this->input->post('Nombre'),
			'Descripcion' => $this->input->post('Descripcion'),
			'Fechainicial' => $this->input->post('Fechainicial'),
			'Fechafinal' => $this->input->post('Fechafinal'),
			'status' => 1
			);
			$this->Promociones_model->pushPromociones($queryInventario);
			echo $complete;
        break;
		}
	}

	public function get()
	{
		switch ($this->input->post('type')) {
    	case 'getEmpleados':
			$result = $this->Empleados_model->getEmpleados();
	    	echo json_encode($result);
        break;
        case 'getAlumnos':
			$result = $this->Alumnos_model->getAlumnos();
    		echo json_encode($result);
		break;
		case 'getInsumos':
			$result = $this->Insumos_model->getInsumos();
    		echo json_encode($result);
		break;
		case 'getPromociones':
			$result = $this->Promociones_model->getPromociones();
    		echo json_encode($result);
		break;
		case 'getEventos':
			$result = $this->Eventos_model->getEventos();
    		echo json_encode($result);
        break;
		}
	}


	public function update()
	{
		$complete = '<form action="#" method="post">'
		.'<div class="row">'
		.'<div class="form-group col-md-12" style="text-align: center;">'
		.'<h2>Accion completada.</h2>'
		.'</div>'
		.'</div>'
		.'</form>';

		switch ($this->input->post('type')) {
    	case 'updateEmpleados':
			$queryUsuario = array(
			'nombre' => $this->input->post('nombre'),
			'Apellido' => $this->input->post('apellidos'),
			'Telefono' => $this->input->post('telefono'),
			'contrasena' => $this->input->post('contrasena'),
			'usuario' => $this->input->post('usuario'),
			'tipo' => $this->input->post('tipo')
			);
			$this->Empleados_model->updateEmpleados($this->input->post('id'),$queryUsuario);
			echo $complete;
        break;
        case 'updateAlumnos':
        	$queryInventario = array(
			'Nombre' => $this->input->post('Nombre'),
			'Apellidos' => $this->input->post('Apellidos'),
			'FechaInicio' => $this->input->post('FechaInicio'),
			'Telefono' => $this->input->post('Telefono'),
			'Direccion' => $this->input->post('Direccion')
			);
			$this->Alumnos_model->updateAlumnos($this->input->post('id'),$queryInventario);
			echo $complete;
		break;
		case 'updateInsumos':
		$queryInsumos = array(
			'Nombre' => $this->input->post('Nombre'),
			'Cantidad' => $this->input->post('Cantidad'),
			'Precio' => $this->input->post('Precio'),
			'Fecha' => $this->input->post('Fecha')
			);
			$this->Insumos_model->updateInsumos($this->input->post('id'),$queryInsumos);
			echo $complete;
		break;
		case 'updatePromociones':
		$queryInsumos = array(
			'Nombre' => $this->input->post('Nombre'),
			'Cantidaddescuento' => $this->input->post('Cantidaddescuento'),
			'Motivo' => $this->input->post('Motivo'),
			'Fechainicio' => $this->input->post('Fechainicio'),
			'Fechafin' => $this->input->post('Fechafin')
			);
			$this->Promociones_model->updatePromociones($this->input->post('id'),$queryInsumos);
			echo $complete;
		break;
		}
	

	}
	public function drop()
	{
		$complete = '<form action="#" method="post">'
		.'<div class="row">'
		.'<div class="form-group col-md-12" style="text-align: center;">'
		.'<h2>Accion completada.</h2>'
		.'</div>'
		.'</div>'
		.'</form>';

		switch ($this->input->post('type')) {
    	case 'dropEmpleados':
			$this->Empleados_model->dropEmpleados($this->input->post('id'));
			echo $complete;
        break;
        case 'dropAlumnos':
        	$this->Alumnos_model->dropAlumnos($this->input->post('id'));
			echo $complete;
		break;
		case 'dropInsumos':
        	$this->Insumos_model->dropInsumos($this->input->post('id'));
			echo $complete;
		break;
		case 'dropPromociones':
        	$this->Promociones_model->dropPromociones($this->input->post('id'));
			echo $complete;
        break;
		}
	}

	public function search()
	{
		if ($this->input->post('status') == 1) {
			$query = array(
				'clientes.puntos' => $this->input->post('data')
			);
		}
		if ($this->input->post('status') == 2) {
			$query = array(
				'clientes.nombre' => $this->input->post('data')
			);
		}
		if ($this->input->post('status') == 3) {
			$query = array(
				'telefonos.numero' => $this->input->post('data')
			);
		}
		$result = $this->M_cliente->getSearch($query);
    	echo json_encode($result);
	}




}
