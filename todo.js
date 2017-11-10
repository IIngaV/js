check();
function check(){
	var list = document.getElementsByTagName("li");
	list.className="list-group-item";
	for (var i = 0; i < list.length; i++) 
	{
		  /*var span = document.createElement("span");
		  var txt = document.createElement("input");
		  txt.type = "checkbox";*/
		  var btn = document.createElement("BUTTON");
		  var t = document.createTextNode("Delete");
		  btn.className = "check";
		  btn.appendChild(t);
		  list[i].appendChild(btn);
	}
}

function todoList() {
	var item = document.getElementById("todoInput").value;
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
function deleted(){
var list = document.getElementsByClassName("check");
var listd=document.getElementsByTagName("li");
listd.className="list-group-item";
	for (var i = 0; i < list.length; i++) {
		list[i].onclick = function() {
		var del = this.parentElement;
    	del.remove();
		}
	}
}
var elem = document.getElementsByTagName('li');
elem.className = "list-group-item";
elem.onclick =  function(){
	var result = this.parentElement;
	result.style.backgroundColor ="#b94e48";
}
deleted();
