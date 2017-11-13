var deal=2;
check();
made();

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
		  btn.appendChild(t);
		  list[i].appendChild(btn);
		  btn.className = "check";
		  var btn1 = document.createElement("BUTTON");
		  var t1 = document.createTextNode("Made");
		  btn1.appendChild(t1);
		  list[i].appendChild(btn1);
		  btn1.className = "made";
		  count();
		  made();
	}
}

function todoList() {
	var item = document.getElementById("todoInput").value;
	var text = document.createTextNode(item);
	var newItem = document.createElement("li");
	newItem.className="list-group-item";
	if (text.length>0){
	newItem.appendChild(text);
	if (document.getElementById("importantCB").checked){
		document.getElementById("todoList").appendChild(newItem).style.backgroundColor ="#b94e48"; 	
	}
	else{
		document.getElementById("todoList").appendChild(newItem);
		
	}
	deal++;
	check();
	count();
	}
	else{
	alert("Дело не может быть пустым");
	}
	document.getElementById("count").value = deal;
	 document.getElementById("todoInput").value=null;
	 
	}
function deleted(){
var list = document.getElementsByClassName("check");
	for (var i = 0; i < list.length; i++) {
		list[i].onclick = function() {
		var del = this.parentElement;
    	del.remove();
    	deal--;
    	count();
		}
	}
}
function made(){
var list = document.getElementsByClassName("made");
	for (var i = 0; i < list.length; i++) {
		list[i].onclick = function() {
		var del = this.parentElement;
		del.style.backgroundColor ="#00a550";
		}
	}
}
function count(){
	document.getElementById("c").innerHTML = deal;
}
count();
deleted();

