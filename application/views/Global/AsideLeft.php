<header class="main-header">

    <a href="<?php echo base_url();?>" class="logo" style="background:#5396E1;">

      <span class="logo-mini" style="margin-top: 12px ;"><b><img src="<?php echo base_url('assets/sources/iconos/herramientas.png');?>" width="30" height="30" ></b></span>
      
        <span class="logo-lg"><b><?php echo $rol ?></b></span>
      
    </a>


    <nav class="navbar navbar-static-top" style="background:#357BDB;">

      <a href="" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only"></span>
      </a>

    </nav>
  </header>


  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar" style="background:#357BDB; padding-top: 5%;">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar" >
      <!-- Sidebar user panel -->


      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree" style="background:#ffff; color: #000000;">
        <?php if($rol == 'Administrador' || $rol == 'Maestro') {?>
        <li class="" >
          <a href="<?php echo base_url('index.php/Administrador/Alumnos');?>">
          <img src="<?php echo base_url('assets/sources/iconos/alumnos.png');?>" width="20" height="20" > <span style="padding-left: 8px; color: #000000;">Alumnos</span>
          </a>
        </li>
      <?php }?>
      <?php if($rol == 'Administrador' || $rol == 'Recepcionista') { ?>
                <li class="">
            <a href="<?php echo base_url('index.php/Administrador/Empleados');?>">
            <img src="<?php echo base_url('assets/sources/iconos/empleados.png');?>" width="20" height="20"> <span style="padding-left: 8px; color: #000000;">Empleados</span>
          </a>
        </li>
      <?php }?>


    <?php if($rol == 'Administrador' || $rol == 'Recepcionista') { ?>
                <li class="">
          <a href="<?php echo base_url('index.php/Administrador/Insumos');?>">
          <img src="<?php echo base_url('assets/sources/iconos/insumos.png');?>" width="20" height="20"> <span style="padding-left: 8px; color: #000000;">Insumos</span>
          </a>
        </li>
    <?php }?>

     <?php if($rol == 'Administrador' || $rol == 'Recepcionista') { ?>

                <li class="">
         <a href="<?php echo base_url('index.php/Administrador/Promociones');?>">
         <img src="<?php echo base_url('assets/sources/iconos/promociones.png');?>" width="20" height="20"> <span style="padding-left: 8px; color: #000000;">Promociones</span>
          </a>
        </li>
      <?php }?>
      <?php if($rol == 'Administrador' || $rol == 'Maestro') { ?>
                <li class="">
         <a href="<?php echo base_url('index.php/Administrador/Eventos');?>">
           <img src="<?php echo base_url('assets/sources/iconos/calendario.png');?>" width="20" height="20"><span style="padding-left: 8px; color: #000000;">Eventos</span>
          </a>
        </li>
      <?php }?>

      <?php if($rol == 'Administrador' || $rol == 'Maestro') { ?>
          <li class="">
         <a href="<?php echo base_url('index.php/Administrador/Horario');?>">
           <img src="<?php echo base_url('assets/sources/iconos/horario.png');?>" width="20" height="20"><span style="padding-left: 8px; color: #000000;">Horario</span>
          </a>
        </li>
      <?php }?>

        <li>
        <li>
          <a href="<?php echo base_url('index.php/Login/logOut');?>">
          <img src="<?php echo base_url('assets/sources/iconos/salir.png');?>" width="20" height="20"> <span style="padding-left: 8px; color: #000000;">Salir</span>
          </a>
        </li>

      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
