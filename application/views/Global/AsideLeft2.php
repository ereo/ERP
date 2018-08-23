<header class="main-header">

    <a href="<?php echo base_url();?>" class="logo">

      <span class="logo-mini"><b>Usd</b></span>

      <span class="logo-lg"><b>Usuario</b></span>
    </a>


    <nav class="navbar navbar-static-top">

      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">

          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="<?php echo base_url('assets/AdminLTE/dist/img/user2-160x160.jpg');?>" class="user-image" alt="User Image">
              <span class="hidden-xs">Usuario</span>
            </a>
          </li>
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>

    </nav>
  </header>


  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->


      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">Barra de Navegacion</li>




        <li class="">
          <a href="<?php echo base_url('index.php/Usuario/Vender');?>">
            <i class="fa fa-dashboard"></i> <span>Vender</span>
          </a>
        </li>


        <li>
        <li>
          <a href="<?php echo base_url('index.php/Sesion/logOut');?>">
            <i class="fa fa-share"></i> <span>Cerrar Sesion</span>
          </a>
        </li>

      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
