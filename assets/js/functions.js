
$( function() {

	$('#process-btn').click(function(){

		let startDate   = $('#datepicker').val();
		let numberDays  = $('#days_number').val();
		let countryCode = $('#country_code').val();

		if(!$.trim(startDate)){
			alert('Please, pick a start date');
		}

		else if(!$.trim(numberDays)){
			alert('Please, enter number days');
		}

		else if(!$.trim(countryCode)){
			alert('Please, enter country code');
		}

		else{
			$('#response').html('');
			$('#response').html('<label for="result">Result:</label><div id="datepicker2"></div>');

			let date1 = new Date(startDate);
			let date2 = new Date(date1.getFullYear(), date1.getMonth(), (date1.getDate() + parseInt(numberDays)));
			let monthDiff = parseInt(date2.getMonth()) - parseInt(date1.getMonth());
			
			$( "#datepicker2" ).datepicker({
				dateFormat: 'mm/dd/yy',
				minDate: new Date(date1),
				maxDate: new Date(date2),
				numberOfMonths: monthDiff + 1,
			});
			
		}

	});

	$( "#datepicker" ).datepicker({
		dateFormat: 'mm/dd/yy',
		changeMonth: true,
		changeYear: true
	});

} );