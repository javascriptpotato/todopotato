function addText() {
    var input = document.getElementById('input').value;
    var node = document.createElement('li');
    var textnode=document.createTextNode(input);

    var checkdone = document.createElement('input');
    checkdone.setAttribute("type","checkbox");
    node.appendChild(checkdone);
    node.appendChild(textnode);
    document.getElementById('do').appendChild(node);

}


