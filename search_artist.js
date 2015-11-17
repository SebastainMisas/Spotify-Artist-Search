$(document).on("ready", function () {
	
	$(".js-search").on("submit", function (event) {
		event.preventDefault()

		var errors = function() {
				console.log("error")
		};
		var search = function () {
			var value = $(".js-search-input").val();
			var splited_value = value.split(" ");
			var final_value = splited_value.join("+");
			return(final_value);
		};

		$.ajax({
			url: "https://api.spotify.com/v1/search?type=artist&query=" + search(),
			success: function(search_object){
				
				$('.js-search-wrapper ul').empty();

				search_object.artists.items.forEach(function (artist){
					var html = "<li> <h1>" + artist.name + "</h1><br> <img src=" + artist.images[0].url + "> </li><br>";
					$('.js-search-wrapper ul').append(html);
				});
			},
			error: errors,
			dataType: 'json',
		});
	});






});