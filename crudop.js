//alert("1");
//employee object created
var employee = [
	{	
		id:1,
		name:'yashvant',
		email:'yashvant@gmail.com'
	},
	{	
		id:2,
		name:'pranav',
		email:'pranav@gmail.com'
	},
	{	
		id:3,
		name:'kevin',
		email:'kevin@gmail.com'
	},
	{	
		id:4,
		name:'sagar',
		email:'sagar@gmail.com'
	}
]


//grabing tbody for insert and display data in it.
var table = document.getElementById('tbody');


employee.forEach((val)=>{

	table.innerHTML += "<tr><td>"+val.id
	+"</td><td>"+val.name
	+"</td><td>"+val.email
	+"</td></td><td><button class='update'>#</button><button class='delete'>X</i></button></td></tr>"	
})

//get error label for validation
var errName = document.getElementById('errname');
var errEmail = document.getElementById('erremail');

//get form
var form = document.getElementById('myForm');

//add submit event
form.addEventListener('submit',addEmployee)

//add new employees
function addEmployee(e){
	e.preventDefault();
	

	var newname = document.getElementById('name').value;
	var newemail = document.getElementById('email').value;

	if(newname==""){
		errName.innerHTML = "name shouldn't be empty";
		errName.style.color = "red";
	}
	else if(newemail==""){
		errEmail.innerHTML = "email shouldn't be empty";
		errEmail.style.color = "red";
	}
	else{
	var newEmp = {
		id:employee.length+1,
		name:newname,
		email:newemail
	}
	//console.log(newEmp)
	employee.push(newEmp)
	document.getElementById('name').value = "";
	document.getElementById('email').value = "";
	for(var i=0;i<1;i++){
		table.innerHTML+="<tr><td>"+newEmp.id
		+"</td><td>"+newEmp.name
		+"</td><td>"+newEmp.email
		+"</td><td><button class='update'>#</button><button class='delete'>X</button></td></tr>"
	}	

	errName.innerHTML = "";
	errEmail.innerHTML = "";
	}	

}	

//delete employee
var tbl = document.querySelector('table');
tbl.addEventListener('click',removeEmployee);

function removeEmployee(e){
	//console.log(e.target.parentNode.parentNode)
	if(e.target.classList.contains('delete')){
		var tr = e.target.parentNode.parentNode;
		tr.remove();
		//console.log(tr)

	}
}

//edit operation
tbl.addEventListener('click',editEmployee);

var updname,updemail;//for storing selected employee

function editEmployee(e){
	// console.log(e.target.textContent)
	if(e.target.classList.contains('update')){

		//console.log(e.target.parentElement.parentElement.textContent)
		document.getElementById('name').value = e.target.parentElement.parentElement.children[1].textContent;
		document.getElementById('email').value = e.target.parentElement.parentElement.children[2].textContent;
		updname = e.target.parentElement.parentElement.children[1];
		updemail = e.target.parentElement.parentElement.children[2];
		//console.log(upd)
		//document.getElementById('name').value
	}
}
//update employee
var update = document.getElementById('upd');
update.addEventListener('click',updateEmployee);

function updateEmployee(){
	var uname = document.getElementById('name').value;
	var uemail = document.getElementById('email').value;
	if(uname==""){
		errName.innerHTML = "name shouldn't be empty";
		errName.style.color = "red";
	}
	else if(uemail==""){
		errEmail.innerHTML = "email shouldn't be empty";
		errEmail.style.color = "red";
	}
	else{
	//alert(1)
	updname.textContent = uname;
	updemail.textContent = uemail;
	console.log(updname,updemail);
	document.getElementById('name').value = "";
	document.getElementById('email').value = "";
	}
}

//search employee

var filter = document.querySelector('#search');
filter.addEventListener('keyup',filterEmployee);

function filterEmployee(e){
	//console.log(e.target.value);
	var text = e.target.value.toLowerCase();
	var emp = table.querySelectorAll('tbody tr');
	//var emp = table.getElementsByTagName('tr');
	//console.log(emp.children[1].textContent)
	Array.from(emp).forEach(function(emp){
		var empname = emp.children[1].textContent;
		//console.log(empname)
		if(empname.toLowerCase().indexOf(text)!=-1){
			emp.style.display = "";
		}else{
			emp.style.display = "none"
		}
	})
	// console.log(emp.textContent)
	// for(var i=0;i<emp.length;i++){
	// 	var empname = emp[i].getElementsByTagName('td')[1];

	// 	if(empname.innerHTML.toLowerCase().indexOf(text)>-1){
	// 		emp[i].style.display = "";
	// 	}else{
	// 		emp[i].style.display = "none";
	// 	}
	// }
}