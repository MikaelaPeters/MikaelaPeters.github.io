document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("mainHeader").onclick = function() {
    this.style.color = 'black'
  }
})

$( document ).ready(function() {
  $( "#fade" ).click(function() {
    $( "#fade" ).fadeOut( "slow", function() {
    });
  });
});