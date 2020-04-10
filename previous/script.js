$('.example-1 .button').click(function(){
    $(this).parents('.example-1').toggleClass('is-transitioned');
  });
  
  $('.example-2 .switch').click(function(){
    $(this).toggleClass('is-transitioned');
  });
  
  $('.example-3 .btn').click(function(){
    $(this).parents('.layout').find('.alert').toggleClass('is-open');
  });
  
  $('.example-5 .send').click(function(){
    $(this).parents('.email').addClass('is-sent');
    setTimeout(function(){
      $('.email').removeClass('is-sent');  
    }, 1800);
    
  });