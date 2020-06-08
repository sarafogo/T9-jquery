// BY KAREN GRIGORYAN

/*
    1. Animar os elementos do menu lateral de modo que quando cada um dos links for clicado,
    o scroll acontecerá de forma lenta, direcionado o scroll para o heading correspondente 
        ex. se eu clicar no link 3, o scroll deve me direcionar para o heading 3

    2. Criar o botão de scroll até o topo da página. Lembrando que esse botão só deve aparecer 
    a partir do momento que o scroll começou a ir para baixo. 


*/
console.log('oi')
$(document).ready(function () {

    $('.link1').click(function () {
        $('html', 'body').animate({
            scrollTop: $('#h1').offset().top
        }, 2000);
        console.log('clicado')
    })

    $('.link2').click(function () {
        $('html', 'body').animate({
            scrollTop: $('#h2').offset().top
        }, 2000)
        console.log('clicado')
    })

    $('.link3').click(function () {
        $('html', 'body').animate({
            scrollTop: $('#h3').offset().top
        }, 2000)
        console.log('clicado')
    })

    $(document).scroll(function () {

        let position = $(this).scrollTop()

        if(position > 10){
            $('.scrollTop').css('opacity', '1')
        }else{
            $('.scrollTop').css('opacity', '0')
        }

        $('.scrollTop').click(function(){

            $('html', 'body').animate({
                scrollTop: '0'
            }, 1000)
        })

    })
})


