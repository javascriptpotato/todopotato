function addText() {
    var input = document.getElementById('input').value;
    var node = document.createElement('li');
    var textnode=document.createTextNode(input);

    var checkdone = document.createElement('input');
    checkdone.setAttribute("type","checkbox");
    var checkatri = "checkatri";
    checkdone.id = checkatri;

    node.appendChild(checkdone);
    node.appendChild(textnode);
    document.getElementById('do').appendChild(node);

    if (checkdone.checked === true) {
    	alert("It's a start!");
    }

}


