$(document).ready(function() {
    $(document).foundation();
	$('.button').on('click', function() {
    $(this).closest('.mobile-container').toggleClass('isOpen');
  });
});