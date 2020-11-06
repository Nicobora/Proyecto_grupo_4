	$('.carousel').carousel({
	  interval: 1000
	});	

	
	function recuperacion() {

		var num = document.getElementById("emailRecuperacion").value.indexOf("@");
		var email = document.getElementById("emailRecuperacion").value;

		if (num == -1 ) {

			alert("No es un e-mail valido!");
		}

		else {

			alert("¡Listo! Te enviamos un email a " + email);
		}
	}