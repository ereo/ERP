var base_url = 'http://localhost/MarketplaceSSI/index.php/';
$(document).ready(function(){
    //LoadUsuarios(); 
    PushTable();
    
});


function openModal(id,Nombre,Apellidos,FechaInicio,Telefono,Direccion) 
{
let fom= '<form class="form-horizontal" action="">'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label">Nombre: </label>'
                        +'</div>'

                        +'<div class="col-md-8 col-lg-3">'
                            +'<input type="text" id="nombre" class="form-control" value="'+Nombre+'" >'
                        +'</div>'

                        +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                            +'<label class="col-form-label mr-2 control-label">Apellidos: </label>'
                        +'</div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="text" id="apellidos" class="form-control" value="'+Apellidos+'" >'
                        +'</div>'

                    +'</div>'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Fecha de inicio: </label>'
                       +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="number" id="fechainicio" class="form-control" value="'+FechaInicio+'" >'
                       +' </div>'

                      +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Telefono: </label>'
                       +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="number" id="telefono" class="form-control" value="'+Telefono+'" >'
                       +' </div>'
                    +'</div>'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Fecha de inicio: </label>'
                       +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="number" id="direccion" class="form-control" value="'+Direccion+'" >'
                       +' </div>'
                    +'</div>'

                    

                    +'</div>'
        +'</form>';
        BootstrapDialog.show({
    title: 'Est-'+id,
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
        'type': 'updateAlumnos',
        'id' : id,
        'Nombre' :       $('#nombre').val(),
        'Apellidos' :     $('#apellidos').val(),
        'FechaInicio' :      $('#fechainicio').val(),
        'Telefono' :    $('#telefono').val(),
        'Direccion' :    $('#direccion').val()
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
        'type': 'dropAlumnos',
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
                            +'<label class="col-form-label mr-2 control-label">Nombre: </label>'
                        +'</div>'

                        +'<div class="col-md-8 col-lg-3">'
                            +'<input type="text" id="nombre" class="form-control" placeholder="" >'
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
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Fecha de inicio: </label>'
                       +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="number" id="fechainicio" class="form-control" placeholder="" >'
                       +' </div>'

                      +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Telefono: </label>'
                       +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="number" id="telefono" class="form-control" placeholder="" >'
                       +' </div>'
                       
                    +'</div>'

                    +'<div class="row form-group">'
                    +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                        +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Direccion: </label>'
                   +' </div>'

                    +'<div class="col-md-8 col-lg-3">'
                       +' <input type="number" id="direccion" class="form-control" placeholder="" >'
                   +' </div>'
                   
                +'</div>'

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

                   $.ajax({
        type:"POST",
        url: base_url+'Administrador/push',
        data:{
        'type': 'pushAlumnos',
        'Nombre' :       $('#nombre').val(),
        'Apellidos' :     $('#apellidos').val(),
        'FechaInicio' :      $('#fechainicio').val(),
        'Telefono' :    $('#telefono').val(),
        'Direccion' :    $('#direccion').val()
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
      {'type': 'getAlumnos'},
      function (data)
      {
        var c = JSON.parse(data);
        $.each(c,function(i,item)
        {
     $('#contenido_tabla').append('<tr>'
        +'<td><a onclick="openModal('+item.id+',\''+item.Nombre+'\',\''+item.Apellidos+'\',\''+item.FechaInicio+'\',\''+item.Telefono+'\',\''+item.Direccion+'\',\''+item.status+'\')" style="cursor:pointer;">Est-'+item.id+'</a></td>'
        +'<td>'+item.Nombre+'</td>'
        +'<td>'+item.Telefono+'</td>'
        +'<td>'+item.Direccion+'</td>'
        +'</tr>');

        });
     });
}

  var DropDataTable = function() 
  { 

    $("#contenido_tabla tr").remove();
  }