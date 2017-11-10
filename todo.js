check();
function check(){
	var list = document.getElementsByTagName("LI");
	list.className="list-group-item";
	for (var i = 0; i < list.length; i++) 
	{
		  var span = document.createElement("span");
		  var txt = document.createElement("input");
		  txt.type = "checkbox";
		  span.className = "check";
		  span.appendChild(txt);
		  list[i].appendChild(span);
	}
}

function todoList() {
	var item = document.getElementById("todoInput").value;
	if (item==null){
	var text = document.createTextNode(item);
	var newItem = document.createElement("li");
	newItem.className="list-group-item";
	newItem.appendChild(text);
	if (document.getElementById("importantCB").checked){
		document.getElementById("todoList").appendChild(newItem).style.backgroundColor ="#b94e48";
	}
	else{
		document.getElementById("todoList").appendChild(newItem);
	}
	check();
}
}
function deleted(){
var list = document.getElementsByClassName("check");
var listd=document.getElementsByTagName("LI");
listd.className="list-group-item";
	for (var i = 0; i < list.length; i++) {
		list[i].onclick = function() {
		var del = this.parentElement;
    	del.remove();
		}
	}
}
/*var hover=document.getElementsByTagName("li");
hover.className="list-group-item";
hover.onclick = function(){
	alert("doit");
}*/
/*var elem = document.getElementsByTagName('li');
elem.addEventListener('click', func);
function func() {
	this.parentElement.style.backgroundColor ="#b94e48";
}*/
deleted();
