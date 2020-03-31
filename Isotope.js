$(window).load(function(){
  var $cont = $('#FandD');

  $cont.isotope({
    itemSelector: '.fandd'
  })

  $('#click div p').on('click',function(){
    var select = $(this).data('filter');
    $cont.isotope({
      filter: select
    })
  })
})
