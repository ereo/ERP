var base_url = 'http://localhost/MarketplaceSSI/index.php/';
var cantidadv1 = 0;
var preciov1 =0;
$(document).ready(function(){
    //LoadUsuarios(); 
    PushTable();
 


});





function openModal(id,producto,cantidad,precio) 
{
  cantidadv1 = cantidad;
  preciov1 = precio;


 let fom= '<form class="form-horizontal" action="">'

                  +'<div class="row form-group">'
                  +'<div class="col-sm-4 col-md-3 col-lg-2 text-right">'
                  +'<label class="col-form-label mr-2 control-label">Producto: </label>'
                  +'</div>'

                  +'<div class="col-md-8 col-lg-3">'
                  +'<input type="text" id="producto" class="form-control" value="'+producto+'" >'
                  +'</div>'

                  +'<div class="col-sm-4 col-md-3 col-lg-3 text-right">'
                  +'<label class="col-form-label mr-2 control-label">Cantidad: </label>'
                  +'</div>'

                  +'<div class="col-md-8 col-lg-3">'
                  +' <input type="text" id="cantidadmodal" class="form-control" placeholder="" >'
                  +'</div>'

                  +'</div>'

                  +'</div>'

                 

        +'</form>';
        BootstrapDialog.show({
    title: 'Usr-'+id,
    message: $(fom),
    buttons: [{
        label: 'Vender',
        cssClass: 'btn-success',
        action: function(dialogItself)
        {
          if ($('#cantidadmodal').val()>cantidad) {alert('no existe suficiente producto')}
          else 
          {
          
            var x =  parseInt($('#cantidadmodal').val())  * parseInt(precio);

            let fom= '<form action="#" method="post">'
    +'<div class="row">'
    +'<div class="form-group col-md-12" style="text-align: center;">'
    +'<h2>El total es de '+x+'</h2>'
    +'</div>'
    +'</div>'
    +'</form>';
        BootstrapDialog.show({
    title: 'Nuevo Registro',
    message: $(fom),
    buttons: [{
        label: 'Aceptar',
        cssClass: 'btn-success',
        action: function(dialogItself)
        { 
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

          }
      /*    
        $.ajax({
        type:"POST",
        url: base_url+'Administrador/push',
        data:{
        'type': 'updateUsuario',
        'id' : id,
        'nombres' :       $('#nombres').val(),
        'apellidos' :     $('#apellidos').val(),
        'telefono' :      $('#telefono').val(),
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
    });  */
                    dialogItself.close();
   
        }
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




function PushTable()
{
    $.post(base_url+'Administrador/get',
      {'type': 'getInventario'},
      function (data)
      {
        var c = JSON.parse(data);
        $.each(c,function(i,item)
        {
     $('#contenido_tabla').append('<tr>'
        +'<td><a onclick="openModal('+item.id+',\''+item.nombre+'\',\''+item.cantidad+'\',\''+item.precio+'\')" style="cursor:pointer;">#Pd-'+item.id+'</a></td>'
        +'<td>'+item.nombre+'</td>'
        +'<td>'+item.cantidad+'</td>'
        +'<td>'+item.precio+'</td>'
        +'</tr>');

        });
     });
}

/*
function EliminarData(data) {
  $.post(base_url+'Menu/RemoveItem',
      {
        'IdOb' : data
      },
      function (data)
      {
        DropDataTable();
        LoadDataMenu();
        BootstrapDialog.show({
                type: BootstrapDialog.TYPE_SUCCESS,
                title: '¡ATENCIÓN!',
                message: $('<h4 class="text-center"> <strong>'+data+'</strong> </h4>'),
                    size: BootstrapDialog.SIZE_WIDE,
                    tabindex: false,
                buttons: [{
                    label: 'Aceptar',
                    cssClass: 'btn-danger',
                    action: function(dialogItself){
                        dialogItself.close();
                    }
                    }]
            });
     });
}
*/
  var DropDataTable = function() 
  { 

    $("#contenido_tabla tr").remove();
  }
