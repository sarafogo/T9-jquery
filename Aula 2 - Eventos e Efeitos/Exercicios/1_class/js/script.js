/*
  ok 1. Mude o estilo do body para que a font-family seja "Arial, sans-serif"

  ok 2. Preencha os spans do html utilizando JQuery, adicionando informações suas. 
  ATENÇÃO! As informações devem estar estar guardadas em variáveis!

  ok 3. Imagine que você muda com frequencia de opinião sobre um dos seus filmes favoritos. 
  Sendo assim, crie uma variável "favDoMomento" com esse filme

  ok 3. selecione o h1 e altere seu texto para "sobre mim". Acrescente também a classe 'titulo' para que ele 
  fique bacanudo

  ok 4. Adicione as classes 'list' e 'item-list' na lista e nos itens de lista, utilizando JQuery
  
  ok 5. Adicionei uma classe errada! Suma com a classe 'wrongClass', utilizando JQuery
*/

$(document).ready(function () {

  $('body').css('font-family', 'Arial, sans-serif')

  let apelido = 'Sarinha'
  let filmes = 'Matrix, Jogos Vorazes, '
  let cidade = 'Recife'
  let favDoMomento = 'super-heróis em geral'

  $('#nickname').text(apelido).addClass('item-list')
  $('#favoritos').text([filmes, favDoMomento]).addClass('item-list')
  $('#cidade').text(cidade).addClass('item-list')

  $('h1').text('Sobre mim').addClass('titulo')

  $('li').addClass('list')

  $('li').removeClass('wrongClass')


})