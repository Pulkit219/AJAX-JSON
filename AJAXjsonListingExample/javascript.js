

$(document).ready(function(){

	let $skillsul = $("#skills");
	let $addbtton = $("#add-skill");

	var skillTemplate =$('#skill-template').html();

	//  "" + 
	// "<li>" +
	// "<p><strong>Name:</strong> {{name}}</p>" +
	// "<p><strong>skill:</strong> {{skill}}</p>" +
	// "<p><strong>id:</strong> {{id}}</p>" +
 //    "<button data-id='{{id}}' class='remove'>X</button>"+
 //    "</li>";
	
	function addskill(skill){
		  // $skillsul.append('<li> NAME:' + skill.name + ' SKILL: ' + skill.skill + ' ID :' + skill.id + '</li>');
		  $skillsul.append(Mustache.render(skillTemplate, skill));
	}


/*  GET REQUEST */
$.ajax({
	type: 'GET',
	url: 'http://rest.learncode.academy/api/pulkit/skills',
	success: function(skills){
    $.each(skills, function(i , skill){
    	addskill(skill);
        // $skillsul.append('<li> NAME:' + skill.name + ' SKILL: ' + skill.skill + ' ID :' + skill.id + '</li>');

    });

	},

	error: function(){
		alert(" Request unsuccessful");
	}

});



$addbtton.on('click', function(){

	let data = {
		name:$('#name').val(),
		skill:$('#skill').val()
	};

	$.ajax({
  type: 'POST',
  url: 'http://rest.learncode.academy/api/pulkit/skills',
  data: data,
  success: function(newskill) {
  	addskill(newskill);
    // $skillsul.append('<li> NAME:' + newskill.name + ' SKILL: ' + newskill.skill + ' ID :' + newskill.id + '</li>');
  },

  error: function(){
  	alert("Error saving data");
  }
});

});







$skillsul.delegate('.remove', 'click', function(){

	let $li = $(this).closest('li');
	$.ajax({
  type: 'DELETE',
  url: 'http://rest.learncode.academy/api/pulkit/skills/'+ $(this).attr('data-id'),
  success: function() {
    $li.fadeOut(300, function(){
     $(this).remove();
    });
    console.log('skill Deleted Successfully!');
  }
});

});




$skillsul.delegate('.editskills', 'click', function(){
	let $li = $(this).closest('li');
	$li.find('input.name').val( $li.find('span.name').html());
	$li.find('input.skill').val( $li.find('span.skill').html());
	$li.addClass('edit');
})

$skillsul.delegate('.cancelEdit', 'click', function(){
	$(this).closest('li').removeClass('edit');
	
});

$skillsul.delegate('.saveEdit', 'click', function(){
	let $li = $(this).closest('li');
	let data = {
		name: $li.find('input.name').val(),
		skill:$li.find('input.skill').val()
	};


	$.ajax({
  type: 'PUT',
  data: data,
  url: 'http://rest.learncode.academy/api/pulkit/skills/'+ $li.attr('data-id'),
  success: function() {
    $li.find('span.name').html(data.name);
    $li.find('span.skill').html(data.skill);
    $li.removeClass('edit');
    console.log('Friend Updated Successfully!');
  },

 error: function(){
  	alert("Error updating data");
  }

});

	
});









});

