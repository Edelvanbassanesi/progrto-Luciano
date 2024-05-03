function addnewtask(params) {
    
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;
    var listitem = document.createElement("li");
    listitem.className ="list-item";    

    const textElement = document.createTextNode(text);
    listitem.appendChild(textElement);
    list.appendChild(listitem);
    
}