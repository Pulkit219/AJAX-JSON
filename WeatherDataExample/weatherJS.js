$( document ).ready(function() {
    
$('#btnGetWeather').on('click',function(){
	let cityData = $('#txtCity').val();
	let countryData = $('#txtCountry').val();
	let appid = '2b92ac90c161a8b52a86175509113de9';
	let data1 = cityData + ',' + countryData;
    let dataBack = $('resultDiv');

$.ajax({
	url: 'http://api.openweathermap.org/data/2.5/weather',
	method: 'GET',
	data: {q: data1, appid: appid},
	dataType: 'JSON',
	success: function(data){

		console.log(data);
          // dataBack.html('weather:' + data.weather[0].main + '<br/>' + 
          // 	'Description:' + data.weather[0].description);
	}

});

})









});