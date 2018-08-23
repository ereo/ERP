var base_url = 'http://localhost/MarketplaceSSI/index.php/';
$(document).ready(function(){
    PushTable();
});


function openModal(id,nombre,Apellido,Numero_segurosocial,Fecha_ingreso,Telefono,Direccion,tipo,usuario,contrasena,status,salario) 
{
  if (tipo == 'Administrador') 
    {var option = '<option value="Administrador">Administrador</option>'
                  +'<option value="Usuario">Usuario</option>'}
  else
    {var option = '<option value="Usuario">Usuario</option>'
                  +'<option value="Administrador">Administrador</option>'}
 let fom= '<form class="form-horizontal" action="">'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label">Nombres: </label>'
                        +'</div>'

                        +'<div class="col-md-8 col-lg-3">'
                            +'<input type="text" id="nombres" class="form-control" value="'+nombre+'">'
                        +'</div>'

                        +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                            +'<label class="col-form-label mr-2 control-label">Apellidos: </label>'
                        +'</div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="text" id="apellidos" class="form-control" value="'+Apellido+'" >'
                        +'</div>'

                    +'</div>'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">NSS: </label>'
                       +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="number" id="telefono" class="form-control" value="'+Numero_segurosocial+'" >'
                       +' </div>'

                        +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                           +' <label class="col-form-label mr-2 control-label">Fecha de ingreso: </label>'
                       +' </div>'

                           +' <div class="col-md-8 col-lg-3">'
                            +'<select id="tipoUser" name="tipoUser">'+Fecha_ingreso+'</select>'
                        +'</div>'
                    +'</div>'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Telefono: </label>'
                       +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="text" name="ciudad" id="usuario" class="form-control" value="'+Telefono+'" >'
                       +' </div>'

                        +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                           +' <label class="col-form-label mr-2 control-label">Direccion: </label>'
                       +' </div>'

                       +' <div class="col-md-8 col-lg-3">'
                            +' <input type="text" name="ciudad" id="usuario" class="form-control" value="'+Direccion+'" >'
                        +'</div>'
                    +'</div>'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Tipo: </label>'
                       +' </div>'

                       +' <div class="col-md-8 col-lg-3">'
                            +'<select id="tipoUser" name="tipoUser">'+tipo+'</select>'
                         +'</div>'

                        +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                           +' <label class="col-form-label mr-2 control-label">Usuario: </label>'
                       +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                            +' <input type="text" name="ciudad" id="usuario" class="form-control" value="'+usuario+'" >'
                        +' </div>'
                    +'</div>'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Salario: </label>'
                       +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                            +' <input type="text" name="ciudad" id="usuario" class="form-control" value="'+salario+'" >'
                        +' </div>'

                        +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                             +' <label class="col-form-label mr-2 control-label">Contraseña: </label>'
                         +' </div>'

                        +' <div class="col-md-8 col-lg-3">'
                             +'<input type="password" limit="10" name="telefono" id="contrasena" class="form-control" placeholder="" >'
                         +'</div>'            

                    +'</div>'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Repetir Contraseña: </label>'
                         +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                          +' <input type="password" name="ciudad" id="repContrasena" class="form-control" placeholder="" >'
                        +' </div>'        

                     +'</div>'

        +'</form>';
        BootstrapDialog.show({
    title: 'Empl-'+id,
    message: $(fom),
    buttons: [{
        label: 'Modificar',
        cssClass: 'btn-success',
        action: function(dialogItself)
        {
            if ($('#contrasena').val() == $('#repContrasena').val()) 
            {
        $.ajax({
        type:"POST",
        url: base_url+'Administrador/update',
        data:{
        'type': 'updateEmpleados',
        'id' : id,
        'nombre' :       $('#nombres').val(),
        'Apellido' :     $('#apellidos').val(),
        'Telefono' :      $('#telefono').val(),
        'contrasena' :    $('#contrasena').val(),
        'usuario' :        $('#usuario').val(),
        'tipo' :        $('#tipoUser').val(),
        },
        success:function (data){
          BootstrapDialog.show({
    title: 'Mensage',
    message: $(data),
    buttons: [{
        label: 'Aceptar',
        cssClass: 'btn-success',
        action: function(dialogItself)
        {
          DropDataTable();
          PushTable();
          dialogItself.close();}
        }]
    });
          
        },
        error:function(jqXHR, textStatus, errorThrown)
        {alert("Error al guardar la información");}
    });  
                    dialogItself.close();
            }
            else 
            {alert("no coinciden las contraseñas");}
        }
        },
        {
            label: 'Eliminar',
            cssClass: 'btn-danger',
            action: function(dialogItself)
            {

              $.ajax({
        type:"POST",
        url: base_url+'Administrador/drop',
        data:{
        'type': 'dropEmpleados',
        'id' : id
        },
        success:function (data){
          BootstrapDialog.show({
    title: 'Mensage',
    message: $(data),
    buttons: [{
        label: 'Aceptar',
        cssClass: 'btn-success',
        action: function(dialogItself)
        {
          DropDataTable();
          PushTable();
          dialogItself.close();}
        }]
    });
          
        },
        error:function(jqXHR, textStatus, errorThrown)
        {alert("Error al guardar la información");}
    });  

              dialogItself.close();}
        },
        {
            label: 'Cerrar',
            cssClass: 'btn-primary',
            action: function(dialogItself)
            {dialogItself.close();}
        }]
    });

}

/*---------------------------------------------------------*/


$('#Agregar').click(function(event) {

  let fom= '<form class="form-horizontal" action="">'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label">Nombres: </label>'
                        +'</div>'

                        +'<div class="col-md-8 col-lg-3">'
                            +'<input type="text" id="nombres" class="form-control" placeholder="" >'
                        +'</div>'

                        +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                            +'<label class="col-form-label mr-2 control-label">Apellidos: </label>'
                        +'</div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="text" id="apellidos" class="form-control" placeholder="" >'
                        +'</div>'

                    +'</div>'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Telefono: </label>'
                       +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="number" id="telefono" class="form-control" placeholder="" >'
                       +' </div>'

                        +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                           +' <label class="col-form-label mr-2 control-label">Tipo de Cuenta: </label>'
                       +' </div>'

                           +' <div class="col-md-8 col-lg-3">'
                            +'<select id="tipoUser" name="tipoUser">'
                              +'<option value="Usuario">Usuario</option>'
                              +'<option value="Administrador">Administrador</option>'
                            +'</select>'
                        +'</div>'
                    +'</div>'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Usuario: </label>'
                       +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="text" name="ciudad" id="usuario" class="form-control" placeholder="" >'
                       +' </div>'

                        +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                           +' <label class="col-form-label mr-2 control-label">Contraseña: </label>'
                       +' </div>'

                       +' <div class="col-md-8 col-lg-3">'
                            +'<input type="password" limit="10" name="telefono" id="contrasena" class="form-control" placeholder="" >'
                        +'</div>'
                    +'</div>'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Rep-Contraseña: </label>'
                       +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="password" name="ciudad" id="repContrasena" class="form-control" placeholder="" >'
                       +' </div>'

             

                    +'</div>'

        +'</form>';
        BootstrapDialog.show({
    title: 'Nuevo Registro',
    message: $(fom),
    buttons: [{
        label: 'Agregar',
        cssClass: 'btn-success',
        action: function(dialogItself)
        {
            if ($('#contrasena').val() == $('#repContrasena').val()) 
            {
                   $.ajax({
        type:"POST",
        url: base_url+'Administrador/push',
        data:{
        'type': 'pushEmpleados',
        'nombre' :       $('#nombres').val(),
        'Apellido' :     $('#apellidos').val(),
        'Telefono' :      $('#telefono').val(),
        'contrasena' :    $('#contrasena').val(),
        'usuario' :        $('#usuario').val(),
        'tipo' :        $('#tipoUser').val(),
        },
        success:function (data){
          BootstrapDialog.show({
    title: 'Mensage',
    message: $(data),
    buttons: [{
        label: 'Aceptar',
        cssClass: 'btn-success',
        action: function(dialogItself)
        {
          DropDataTable();
          PushTable();
          dialogItself.close();}
        }]
    });
          
        },
        error:function(jqXHR, textStatus, errorThrown)
        {alert("Error al guardar la información");}
    });  
                    dialogItself.close();
            }
            else 
            {alert("no coinciden las contraseñas");}
        }
        },
        {
            label: 'Cerrar',
            cssClass: 'btn-danger',
            action: function(dialogItself)
            {dialogItself.close();}
        }]
    });



});


function PushTable()
{
    $.post(base_url+'Administrador/get',
      {'type': 'getEmpleados'},
      function (data)
      {
        var c = JSON.parse(data);
        $.each(c,function(i,item)
        {
     $('#contenido_tabla').append('<tr>'
        +'<td><a onclick="openModal('+item.id+',\''+item.nombre+'\',\''+item.Apellido+'\',\''+item.Numero_segurosocial+'\',\''+item.Fecha_ingreso+'\',\''+item.Telefono+'\',\''+item.Direccion+'\',\''+item.tipo+'\',\''+item.usuario+'\',\''+item.contrasena+'\',\''+item.status+'\',\''+item.salario+'\')" style="cursor:pointer;">Emp-'+item.id+'</a></td>'
        +'<td>'+item.nombre+'</td>'
        +'<td>'+item.Telefono+'</td>'
        +'<td>$'+item.salario+'.00</td>'
        +'<td>'+item.tipo+'</td>'
        +'</tr>');

        });
     });
}

  var DropDataTable = function() 
  { 

    $("#contenido_tabla tr").remove();
  }