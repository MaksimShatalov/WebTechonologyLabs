function mycheckform(){
	var c = document.forms["formstudent"]["namestudent"].value;
	if(c=="")
	{
		alert("Введіть ПІБ");
		return false;
	}
	var d = document.forms["formstudent"]["emailstudent"].value;
		if(d=="")
	{
		alert("Введіть ел.пошту");
		return false;
	}
	let h = document.querySelector('#emailstudent');
	var checkmail = [a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}
	if(!checkmail.test(h)){
		alert("Некорктно введено ел.пошту");
		checkmail.focus();
		checkmail.select();
		return false;
	}
	var numb = document.forms["formstudent"]["numberphone"].value;
	if(numb=="")
		{
		alert("Введіть номер телефону");
		return false;
	}
	let g = document.querySelector('#numberphone');
	var k = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
	if(!k.test(numb)){
		alert("Некорктно введено телнфон");
		k.focus();
		k.select();
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