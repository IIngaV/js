var deal=2;
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
		  btn.appendChild(t);
		  list[i].appendChild(btn);
		  btn.className = "check";
		  /*var btn1 = document.createElement("BUTTON");
		  var t1 = document.createTextNode("Change");
		  btn1.appendChild(t1);
		  list[i].appendChild(btn1);
		  btn1.className = "change";*/
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
 document.getElementById("todoInput").value=null;
 document.getElementById("count").value = deal;
}
function deleted(){
var list = document.getElementsByClassName("check");
var listd=document.getElementsByTagName("li");
listd.className="list-group-item";
	for (var i = 0; i < list.length; i++) {
		list[i].onclick = function() {
		var del = this.parentElement;
    	del.remove();
    	deal--;
    	count();
		}
	}
}
/*function change(){
var list = document.getElementsByClassName("change");
var listd=document.getElementsByTagName("li");
listd.className="list-group-item";
	for (var i = 0; i < list.length; i++) {
		list[i].onclick = function() {
		var del = this.parentElement;
		document.getElementById("todoInput").value=listd[i].innerHTML;
		
    	del.remove();
    	deal--;
    	count();
		}
	}
}*/

function count(){
document.getElementById("count").value = deal;
}
count();
deleted();
change();

