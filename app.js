console.log('js file works');
var searchPerson = encodeURI($('#searchInput').val());

$(document).ready(function(){
	console.log("in the document ready!");

	$("body").on('click', '.submitButton', function(event){
			event.preventDefault();
			searchPerson = $('#searchInput').val();
			console.log($('#searchInput'));
			console.log("SearchPerson"+searchPerson);
			search(searchPerson);
		});

});//end document ready

function callback(data){
	console.log(data.name);
		$("#results").html("");
		$("#results").append("<img src='"+data.avatar_url+"' />");
		$("#results").append("<span class='stuff'>User Login: "+data.login+"</span>");
		$("#results").append("<span class='stuff'>Link to Github Page: <a href='"+data.html_url+"'target='blank'>"+data.html_url+"</a></span>");
		$("#results").append("<span class='stuff'>Bio Information: "+data.bio+"</span>");
		$("#results").append("<br>Link to Github Repos: <a href='https:github.com/"+data.login+"?tab=repositories' target='blank'>repositories</a>");
}

function search(query){
	$.ajax({
		type:'GET',
		dataType:'json',
		crossDomain:true,
		url:'https://api.github.com/users/'+ searchPerson + '?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
		success: function(data){
			console.log("in the success!");
			console.log(data);
			callback(data);
		},
		error: function(){
			$("#results").append("User not found.");
		},
		complete: function(){
			console.log("ajax complete!");
		}
	});
}