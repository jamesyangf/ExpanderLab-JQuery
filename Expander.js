$.makeExpander = function(root) {
	root.children('div').each(function () {
		$(this).before('<div class="tab"> ' +
		 '<img class="upDiv" src="up.png" style="height: 25px; width: 25px;"> '+
		 '<img class="downDiv" src="down.png" style="height: 25px; width: 25px;">'+
		 '<div class="content">'+ $(this).attr('title') +'</div>'+
		 '</div>');
	});

	root.children('.tab').children('.content').click(function() {
		if ($(this).css('background-color') === 'rgb(255, 150, 163)') {
         $(this).css('background-color', '#7FFF00');
         $(this).parent().next().slideDown(100);
		} 
		else {
         $(this).css('background-color', 'rgb(255, 150, 163)');
         $(this).parent().next().slideUp(100);
   	}
	});

	root.children('.tab').children('.upDiv').click(function() {
		if ($(this).parent().prev().attr('title')) {
			$(this).parent().prev().prev('.tab').before($(this).parent().next());
			$(this).parent().prev().prev().prev().before($(this).parent());
		}
	});

	root.children('.tab').children('.downDiv').click(function() {
		if ($(this).parent().next().next('.tab')) {
			$(this).parent().next().next().next().after($(this).parent().next());
			$(this).parent().next().next().after($(this).parent());
		}
	});
}