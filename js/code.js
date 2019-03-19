$(document).ready(function(){
$(".gaatje-img").click(zaaien);
});


function zaaien(){
  $(this).hide();
  $(this).next().show();
}
