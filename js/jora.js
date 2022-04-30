
//BEGIN Маска для телефона
function maskInput(){
    $("#input9").inputmask("+7(999) 999-99-99");
                    
    $.extend($.inputmask.defaults.aliases, {
        'non-negative-integer': {
            regex: {
                    number: function (groupSeparator, groupSize) { return new RegExp("^(\\d*)$"); }
            },
            alias: "decimal"
        }
    });
};
function b3(){
    $('.b3-marker').mouseenter(function(){
        var a = $(this).attr('data-marker3');
        $('.b3-block-info').removeClass('dis_b');
        $('.b3-block-info'+a).addClass('dis_b');
        $('.b3-marker').removeClass('dis_ik');
        $('.b3-marker'+a).addClass('dis_ik');
    });
};




//END Маска для телефона

$(document).ready(function() {
    b3();



$(window).scroll(function(){
        /*if ($(this).scrollTop() > 450) {
            $('#target1')
              .prop('number', 0)
              .animateNumber(
                {
                  number: 3
                },
                4000
              ).addClass('numb-help');
            $('#target2')
              .prop('number', 0)
              .animateNumber(
                {
                  number: 8
                },
                4000
              ).addClass('numb-help');
            $('#target3')
              .prop('number', 0)
              .animateNumber(
                {
                  number: 16
                },
                4000
              ).addClass('numb-help');
            $('#target4')
              .prop('number', 0)
              .animateNumber(
                {
                  number: 87
                },
                4000
              ).addClass('numb-help');
            $('#target5')
              .prop('number', 0)
              .animateNumber(
                {
                  number: 750
                },
                4000
              ).addClass('numb-help');
        }
        if ($(this).scrollTop() > 450) {
            $('.numb-help').removeAttr('id');
        }*/
    });
  

$(function(){
    $(".forma").submit(function(e){
        e.preventDefault();


        var m_method=$(this).attr("method");
        var m_action=$(this).attr("action");
        var m_data=$(this).serialize();
        $.ajax({
            type: m_method,
            url: m_action,
            data: m_data,
            success: function(result){
                $("#okno_owibki").css("display", "block");
                $("#okno_owibki").html(result).addClass("error");

                $("#okno_owibki").fadeIn(3000).delay(5000).fadeOut(1000);
                var close = $("#okno_owibki").text();
                if($("#okno_owibki").text()!=="Îïèøèòå ñâîé âîïðîñ"){
                    $("#okno_owibki").fadeOut(0);
                    $('.hide-forma').addClass('dis_n');
                    //$('.call22').removeClass('dis_n');
                };
            }

        });

    });

});

	
});


