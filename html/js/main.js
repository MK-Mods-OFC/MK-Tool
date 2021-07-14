$(document).on("click", "#submit", function(){
    if($("input[name='number']").val() && $("input[name='loops']").val()){
      $.ajax({
        method: 'GET',
        url: '/attack',
        data:{
          number: $("input[name='number']").val(),
          loops: $("input[name='loops']").val()
        },
        dataType: 'json',
        success: function(response) {
          if(response.success == true){
            document.getElementById('submit').innerHTML = 'Detener el ataque';
            document.getElementById('submit').id = 'stop'
            Swal.fire({
              icon: 'success',
              title: 'OK',
              text: response.text,
              footer: '<a href="https://github.com/MK-Mods-OFC/MK-Tool" target="_blank">Estamos en GitHub</a>'
            });
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: response.text,
              footer: '<a href="https://github.com/MK-Mods-OFC/MK-Tool" target="_blank">Estamos en GitHub</a>'
            });
          }
        }
      });
      return false;
    }
  });

$(document).on("click", "#stop", function(){
  $.ajax({
    method: 'GET',
    url: '/stop',
    data:{
      number: $("input[name='number']").val()
    },
    dataType: 'json',
    success: function(response) {
      if(response.success == true){
        document.getElementById('stop').innerHTML = 'Atacar';
        document.getElementById('stop').id = 'submit'
        Swal.fire({
          icon: 'success',
          title: 'OK',
          text: response.text,
          footer: '<a href="https://github.com/MK-Mods-OFC/MK-Tool" target="_blank">Estamos en GitHub</a>'
        });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.text,
          footer: '<a href="https://github.com/MK-Mods-OFC/MK-Tool" target="_blank">github.com/shketov/bomber-api</a>'
        });
      }
    }
  });
});