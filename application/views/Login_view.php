<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Iniciar Sesion</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="<?php echo base_url('assets/AdminLTE/bower_components/bootstrap/dist/css/bootstrap.min.css');?>">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="<?php echo base_url('assets/AdminLTE/bower_components/font-awesome/css/font-awesome.min.css');?>">
  <!-- Ionicons -->
  <link rel="stylesheet" href="<?php echo base_url('assets/AdminLTE/bower_components/Ionicons/css/ionicons.min.css');?>">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo base_url('assets/AdminLTE/dist/css/AdminLTE.min.css');?>">
  <!-- iCheck -->
  <link rel="stylesheet" href="<?php echo base_url('assets/AdminLTE/plugins/iCheck/square/blue.css');?>">

  <link rel="stylesheet" href="<?php echo base_url('assets/sources/css/login.css');?>">


  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>
<body class="hold-transition login-page">

<div class="login-page">
  <div class="login-logo">
    <a><b style="color:#ffffff;">Hubbard English</b></a>
  </div>
  <div class="form">
  <p class="login-box-msg" style="font-size: 18px">Iniciar Sesion</p>
    <form class="login-form">

      <div class="form-group has-feedback">
        <input type="text" class="form-control inpLogin" placeholder="Usuario" id="user">
        <span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control inpLogin" placeholder="Contraseña" id="pssw">
        <span class="glyphicon glyphicon-asterisk form-control-feedback"></span>
      </div>
      
      <button type="button" class="btn btn-success btn-primary btn-block btn-flat">Iniciar</button>
    </form>
  </div>
</div>

<script src="<?php echo base_url('assets/AdminLTE/bower_components/jquery/dist/jquery.min.js');?>"></script>
<!-- Bootstrap 3.3.7 -->
<script src="<?php echo base_url('assets/AdminLTE/bower_components/bootstrap/dist/js/bootstrap.min.js');?>"></script>
<!-- iCheck -->
<script src="<?php echo base_url('assets/AdminLTE/plugins/iCheck/icheck.min.js');?>"></script>

<script src="<?php echo base_url('assets/sources/js/jquery-1.11.3.min.js');?>"></script>
<script src="<?php echo base_url('assets/sources/js/login.js');?>"></script>


<script>
  $(function () {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' /* optional */
    });
  });
</script>
</body>
</html>
