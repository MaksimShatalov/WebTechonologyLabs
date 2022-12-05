function mycheckform(){
    var password = document.forms["myform"]["pass"].value;
    var mypass = "qwerty2022";
    var passfocus = document.querySelector('#passw');
    var cpass = document.getElementById('passw');
	var cmail = document.getElementById('email');
    var d = document.forms["myform"]["emailuser"].value;
	let email = document.querySelector('#email');
	var checkmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	if(d == ""){
        alert("Введіть ел.пошту");
        cmail.style.border = "1px solid red";
        return false;
    }
	
	if(!checkmail.test(d)){
		cmail.style.border = "1px solid red";
		cmail.style.color = "red";
		alert("Некоректно введено ел.пошту");
		email.focus();
		email.select();
		return false;
	}
	
	
	
	if(password == ""){
        alert("Введіть пароль");
        cpass.style.border = "1px solid red";
        cpass.style.color = "red";
        return false;
    }
    else if(password != mypass){
        alert("Невірний пароль");
        cpass.style.border = "1px solid red";
        return false;
    }
    var stat = document.forms["myform"]["radio"].value;
	if(stat == 0)
	{
		alert("Оберіть хто Ви");
		return false;
	}

    

    var checkcheckbox1 = document.getElementById("checkbox1");
    var checkcheckbox2 = document.getElementById("checkbox2");
    if(!checkcheckbox1.checked && !checkcheckbox2.checked){
        alert("Оберіть хоча б одну галочку");
        return false;
    }
}