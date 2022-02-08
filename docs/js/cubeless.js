// Capitalize all words in a string
function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}

// spawn all of the data for a new cubed person into the page
function spawn(info) {
	// console.log(info);
	$("#spawnphoto").attr( "src", info.picture.large );
	$("#spawnname").text( titleCase(info.name.first) + ' ' + titleCase(info.name.last) );
	$("#spawnplace").text( titleCase(info.location.city) + ', ' + titleCase(info.location.state) );
	// $("#spawnbday").text( Date.parse( info.dob.date ).toString('MMMM d, yyyy') );
	$("#spawnbday").text(info.dob.age + ' years ago' );
	$("#spawnphrase").text( info.login.password );
	$("#spawnalt").text( info.login.username );
	$("#spawnfriend").text( info.nat );
	
	strwords = info.location.street.name.split(' ');
	$("#spawnborn").text( titleCase(strwords[1]) );
	$("#spawnstate").text( info.location.state );
}

function cubeit() {
	$.ajax({
	  url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: function(data) {
		console.log(data.results[0]);
		spawn(data.results[0]);
	  }
	});
}

function spawnagain() {
	window.scrollTo(0, 0);
	window.location.reload(true);
}

// set up the table
$(document).ready(function(){	
	cubeit();
	
	$( "#spawnit" ).click(function() {
		// pause voices
		spawnagain();
	});
});