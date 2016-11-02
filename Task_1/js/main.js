class Person {
	constructor(_fname){
		this.fname = _fname || "Балда";
	}

	toString(){
		return this.fname;
	}
}

//let obj = new Person(document.getElementById("fname").value, document.getElementsByName('pcolor').value, document.getElementsByName('dish').value);

var person = [];
function btnOnClick(){
	//document.body.innerHTML = "";
	let body = document.body;
	let data = {};
	
	data.fname = document.getElementById("name").value;
	person.push(new Person(data.fname));

	let contects = '<div align="center"></>';
	contects += '<p style="color: #D3D3D3"></>';
	contects += '<h1 style="color: #D3D3D3"></>';
	contects += person[0].toString();
	let conChoice;

	var nameDish = document.getElementsByName('dish');
	for (var i = 0; i < nameDish.length; i++) {
		if (nameDish[i].checked != true) {
			continue;
		}
		
    		if (nameDish[i].value === 'burger' ) {
			contects += ", Ваш идеальный вариант костюма для Хэллоуина - Ночной кошмар бабок";
			conChoice = 1;
		} else if (nameDish[i].value === 'potato') {
			contects += ", Ваш идеальный вариант костюма для Хэллоуина - Алексей программист";
			conChoice = 2;
		} else if (nameDish[i].value === 'shaverma'){
			contects += ", Ваш идеальный вариант костюма для Хэллоуина Вечно грустный мальчик";
			conChoice = 3;
		} else if (nameDish[i].value === 'sushi'){
			contects += ", Ваш идеальный вариант костюма для Хэллоуина - Патриций";
			conChoice = 4;
		} else if (nameDish[i].value === 'soul'){
			contects += ", Ваш идеальный вариант костюма для Хэллоуина - Валерия Шуст";
			conChoice = 5;
		}
	}
	
	var nameColor = document.getElementsByName('color');
	for (var i = 0; i < nameColor.length; i++) {
		if (nameColor[i].checked != true) {
		    continue;
		}
		
		if (nameColor[i].value === 'yellow') {
			document.body.style.background = "#FFFF00";
		} else if (nameColor[i].value === 'red') {
   			document.body.style.background = "#FF0000";
		} else if (nameColor[i].value === 'grey') {
			document.body.style.background = "#f3f3f3";
		} else if (nameColor[i].value === 'black') {
			document.body.style.background = "#000000";
		} else if (nameColor[i].value === 'purple') {
			document.body.style.background = "#9B30FF";
		}
	}

	switch(conChoice){
		case 1:
			contects+= "<br><br>" +'<img src="img/Антон1.jpg"></>';
			break;
		case 2:
			contects+= "<br><br>" +'<img src="img/Алексей.jpg"></>';
			break;
		case 3:
			contects+= "<br><br>" +'<img src="img/Тимофей.jpg"></>';
			break;
		case 4:
			contects+= "<br><br>" +'<img src="img/Максим.jpg"></>';
			break;
		case 5:
			contects+= "<br><br>" +'<img src="img/Лера.jpg"></>';
			break;
	}

	contects += "</h1>";
	contects += "</p>";
	contects += "</div>";

	body.innerHTML = contects;
}
