/* Slides */
$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 6000,          // Integer: Time between slide transitions, in milliseconds
});

$(".rslides_portfolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
});

/* Animações */
function setTime (seletor, time) {
  setTimeout( () => {
    $(seletor).addClass("animated fadeInDown");
  }, time)
}

Visibility.onVisible(() => {
  setTime(".introducao h1", 400);
	setTime(".introducao blockquote", 800);
	setTime(".introducao .container div ", 1200);
	setTime(".animar", 1600);
  
	setTime(".introducao_interna h1", 400);
	setTime(".introducao_interna p", 800);
	setTime(".animar_interno", 1200);

});

/* Verificação e Envio do Formulário */
/* 
  PASSOS :
  1- verificar se os dados foram prenchidos coretamente.
  2- enviar o formulario e avisar OK ou FALHA para o usuário.
*/
function verificationAndShipping() {
  const form = document.forms.form

  form.addEventListener('submit', e => e.preventDefault())
  
  const { nome, email, telefone, mensagem } = form

  if(nome.value.trim() == "") {
    $(nome).addClass("animated shakeX"); 
    nome.focus()
    return;
  }
  if(email.value.trim() == "") {
    $(email).addClass("animated shakeX"); 
    email.focus();
    return;
  }
  if(telefone.value.trim() == "") {
    $(telefone).addClass("animated shakeX"); 
    telefone.focus();
    return;
  }
  if(mensagem.value.trim() == "") {
    $(mensagem).addClass("animated shakeX"); 
    mensagem.focus();
    return;
  } else {
    $('.formphp').on('submit', function() {
      var emailContato = "contato@bikcraft.com"; // Escreva aqui o seu e-mail
    
      var that = $(this),
          url = that.attr('action'),
          type = that.attr('method'),
          data = {};
      
      that.find('[name]').each(function(index, value) {
        var that = $(this),
            name = that.attr('name'),
            value = that.val();
            
        data[name] = value;
      });
      
      $.ajax({
        url: url,
        type: type,
        data: data,
        success: function(response) {
        
          if( $('[name="leaveblank"]').val().length != 0 ) {
            $('.formphp').html("<div id='form-erro'></div>");
            $('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
            .hide()
            .fadeIn(1500, function() {
            $('#form-erro');
            });
          } else {
          
            $('.formphp').html("<div id='form-send'></div>");
            $('#form-send').html("<span>Mensagem enviada!</span><p>Em breve eu entro em contato com você. Abraços.</p>")
            .hide()
            .fadeIn(1500, function() {
            $('#form-send');
            });
          };
        },
        error: function(response) {
          $('.formphp').html("<div id='form-erro'></div>");
          $('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
          .hide()
          .fadeIn(1500, function() {
          $('#form-erro');  
        });
        }
      });
      
      return false;
    });
  }

}  

