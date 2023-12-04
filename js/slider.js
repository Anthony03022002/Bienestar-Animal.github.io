$(document).ready(function (){

    var slider = $('#slider');
    var btnAnterior = $('#btnAnterior');
    var btnSiguiente = $('#btnSiguiente');

    $('#slider .slide:last').insertBefore('#slider .slide:first');

    slider.css( 'margin-left', '-60%')

    function moverDerecha(){
        slider.animate({
            marginLeft: '-72%'
        }, 700, function(){
            $('#slider .slide:first').insertAfter('#slider .slide:last');
            slider.css('margin-left', '-72%');
        });
    }

    btnSiguiente.on('click', moverDerecha);
    
    function moverIzquierda(){
        $('#slider .slide:last').insertBefore('#slider .slide:first');
        slider.css('margin-left', '-110%');
        slider.animate({
            marginLeft: '-40%'
        }, 700)
    }



    btnAnterior.on('click', moverIzquierda);
})