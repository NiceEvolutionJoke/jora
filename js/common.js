$(function() {



  var phoneInputs = $('.add-phone-mask');

  if (phoneInputs.length !== 0) {
    phoneInputs.inputmask("+7 (999) 999 99-99", {
      "clearIncomplete": true
    });
  }


});

$('.flowing-scroll').on( 'click', function(){ 
  var el = $(this);
  var dest = el.attr('href'); // получаем направление
  if(dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({ 
          scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
      }, 500 // скорость прокрутки
      );
  }
  return false;
});