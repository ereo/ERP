var base_url = 'http://localhost/MarketplaceSSI/index.php/';
$(document).ready(function(){
    PushTable();
});


function openModal(id,Nombre,Cantidad,Precio,Fecha) 
{
 let fom= '<form class="form-horizontal" action="">'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label">Nombres: </label>'
                        +'</div>'

                        +'<div class="col-md-8 col-lg-3">'
                            +'<input type="text" id="nombres" class="form-control" value="'+Nombre+'">'
                        +'</div>'

                        +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                            +'<label class="col-form-label mr-2 control-label">Cantidad: </label>'
                        +'</div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="text" id="cantidad" class="form-control" value="'+Cantidad+'" >'
                        +'</div>'

                    +'</div>'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Precio: </label>'
                       +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="number" id="precio" class="form-control" value="'+Precio+'" >'
                       +' </div>'

                        +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                           +' <label class="col-form-label mr-2 control-label">Fecha: </label>'
                       +' </div>'

                           +' <div class="col-md-8 col-lg-3">'
                           +' <input type="number" id="fecha" class="form-control" value="'+Fecha+'" >'
                        +'</div>'
                    +'</div>'

        +'</form>';
        BootstrapDialog.show({
    title: 'Ins-'+id,
    message: $(fom),
    buttons: [{
        label: 'Modificar',
        cssClass: 'btn-success',
        action: function(dialogItself)
        {
            if ($('#nombres').val() == $('#nombres').val()) 
            {
        $.ajax({
        type:"POST",
        url: base_url+'Administrador/update',
        data:{
        'type': 'updateInsumos',
        'id' : id,
        'Nombre' :       $('#nombres').val(),
        'Cantidad' :     $('#cantidad').val(),
        'Precio' :      $('#precio').val(),
        'Fecha' :    $('#fecha').val()
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
        'type': 'dropInsumos',
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
                            +'<input type="text" id="nombres" class="form-control" value="">'
                        +'</div>'

                        +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                            +'<label class="col-form-label mr-2 control-label">Cantidad: </label>'
                        +'</div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="text" id="cantidad" class="form-control" value="" >'
                        +'</div>'

                    +'</div>'

                    +'<div class="row form-group">'
                        +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                            +'<label class="col-form-label mr-2 control-label" id="label_ciudad">Precio: </label>'
                       +' </div>'

                        +'<div class="col-md-8 col-lg-3">'
                           +' <input type="number" id="precio" class="form-control" value="" >'
                       +' </div>'

                        +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                           +' <label class="col-form-label mr-2 control-label">Fecha: </label>'
                       +' </div>'

                           +' <div class="col-md-8 col-lg-3">'
                           +' <input type="number" id="fecha" class="form-control" value="" >'
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
            if ($('#contrasena').val() == $('#repContrasena').val()) 
            {
                   $.ajax({
        type:"POST",
        url: base_url+'Administrador/push',
        data:{
        'type': 'pushInsumos',
        'Nombre' :       $('#nombres').val(),
        'Cantidad' :     $('#cantidad').val(),
        'Precio' :      $('#precio').val(),
        'Fecha' :    $('#fecha').val()
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
        {'type': 'getPromociones'},
        function (data)
        {
            var c = JSON.parse(data);
            $.each(c,function(i,item)
            {
        $('#contenido_tabla').append('<tr>'
            +'<td><a onclick="openModal('+item.id+',\''+item.Nombre+'\',\''+item.Cantidaddescuento+'\',\''+item.Motivo+'\',\''+item.Fechainicio+'\',\''+item.Fechafin+'\')" style="cursor:pointer;">Ins-'+item.id+'</a></td>'
            +'<td>'+item.Nombre+'</td>'
            +'<td>'+item.Cantidaddescuento+'</td>'
            +'<td>$'+item.Motivo+'.00</td>'
            +'<td>'+item.Fechainicio+'</td>'
            +'<td>'+item.Fechafin+'</td>'
            +'</tr>');

            });
        });
    }

  var DropDataTable = function() 
  { 

    $("#contenido_tabla tr").remove();
  }