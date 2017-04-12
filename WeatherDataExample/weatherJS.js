$( document ).ready(function() {
    
$('#btnGetWeather').on('click',function(){
	let cityData = $('#txtCity').val();
	let countryData = $('#txtCountry').val();
	let appid = '2b92ac90c161a8b52a86175509113de9';
	let data1 = cityData + ',' + countryData;
    var dataBack = $('#resultDiv');

$.ajax({
	url: 'http://api.openweathermap.org/data/2.5/weather',
	method: 'GET',
	data: {q: data1, appid: appid},
	dataType: 'JSON',
	success: function(data){



          dataBack.html('weather:' + data.weather[0].main + '<br/>' + 
          	'Description:' + data.weather[0].description + '<br/>' + 'pressure:' +
          	data.main.pressure + '<br/>' +
          	'humidity:' + data.main.humidity);
	}

});

})

//thank you  for watching Pulkit







});