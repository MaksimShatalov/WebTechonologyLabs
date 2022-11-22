function mycheckform(){
	var g = document.forms["formstudent"]["namestudent"].value;
	if(g=="")
	{
		alert("Введіть ПІБ");
		return false;
	}
	var d = document.forms["formstudent"]["emailstudent"].value;
	if(d==""){
		alert("Введіть ел.пошту");
		return false;
	}
	let email = document.querySelector('#email');
	var checkmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	if(!checkmail.test(d)){
		alert("Некоректно введено ел.пошту");
		email.focus();
		email.select();
		return false;
	}
	var numb = document.forms["formstudent"]["numberphone"].value;
	if(numb==""){
		alert("Введіть номер телефону");
		return false;
	}
	let phone = document.querySelector('#phone');
	var checkphone = /^(\+)?(\d{1,2})?[( .-]*(\d{3})[) .-]*(\d{3,4})[ .-]?(\d{4})$/; // /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
	if(!checkphone.test(numb)){
		alert("Некоректно введено номер телефону");
		phone.focus();
		phone.select();
		return false;
	}
	var st = document.forms["formstudent"]["radio"].value;
	if(st == 0)
	{
		alert("Оберіть стать");
		return false;
	}

	var gr = document.forms["formstudent"]["group"].value;
	if(gr =="")
	{
		alert("Введіть групу");
		return false;
	}
}