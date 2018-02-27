;(function($){
$(document).ready(function(){
	$.getJSON("data/employees.json")
		.done(function (res){
			if (Array.isArray(res) && res.length) {
				var items = [];
					
				for (var i = 0; i < res.length; i++) {
					var itemStr = '';
					
					(res[i].inoffice) ? itemStr = ("<li class='in'>" + res[i].name + "</li>") : (itemStr = "<li class='out'>" + res[i].name + "</li>");
					items.push(itemStr);
				}
				
				$( "<ul/>", {
					"class": "bulleted",
					html: items.join( "" )

					}).appendTo( "#employeeList" );
			}
		});
	
  var $isotope = $('.bulleted').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.bulleted > li',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.bulleted > li:first-child'
  }
  });
$('.employee-button').on('click', function(event){
	event.preventDefault();
	
	$('.employee-button').removeClass('button-active');
	$(this).addClass('button-active');

	var filterValue = $(this).data('filter');
	$isotope.isotope({ filter: filterValue });
});


});

})(jQuery);




