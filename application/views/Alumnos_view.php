<?php $this->load->view('Global/Header');?>
<?php $this->load->view('Global/AsideLeft');?>


<div class="content-wrapper" style="background: white;">

  <section class="content-header">
    <h1>Alumnos<small></small></h1>
  </section>


    <section class="content">

                <div class="row">
                    <div class="col-xs-12">
                        <div class="box">
                            <div class="col-md-0 col-md-offset-11 " style="  padding-bottom: 1%" >
                                <h2 class="box-title" ></h2>
                                <input type="button" value="Agregar" id="Agregar" class="btn btn-success" style="color: #fff; background-color: #5cb85c; border-color: #4cae4c; width: 110px;">
                            </div>
                            <div class="box-body" style="border: 3px solid #E7E7E7;">
                                <table id="Exportar_a_Excel" class="table table-hover no-margin">
                                    <thead>
                                        <tr>
                                          <th>Matricula</th>
                                            <th>Nombre</th>
                                            <th>Telefono</th>
                                            <th>Direccion</th>
                                        </tr>
                                    </thead>
                                    <tbody id="contenido_tabla">
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

    </section>
</div>

<?php $this->load->view('Global/AsideRight');?>
<?php $this->load->view('Global/Footer');?>
<script src="<?php echo base_url();?>assets/sources/js/jquery-1.11.3.min.js"></script>
<script src="<?php echo base_url();?>assets/sources/js/Alumnos.js"></script>
