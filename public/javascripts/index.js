// DOM Ready =============================================================

$(document).ready(function() {
      // Username link click
      $('.uniquepost').hide();

      $('.list-group-item').on('click', function(){


      	event.preventDefault();

      	$.ajax({
      		url: "/posts/post",
      		data: { 
      			"id": $(this).attr('mongo-id')
      		},
      		type: "GET",
      		success: function(response) {
      			$('.uniquepost').show();
      			$('.author').text(response.AUTHOR);
      			$('.title').text(response.TITLE);
      			$('.postbody').text(response.BODY);
      		
      		},
      		error: function(xhr) {
      			console.log(xhr);
      		}
      	});



      });
  });




