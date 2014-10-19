function addText() {
    var input = document.getElementById('input').value;
    var node = document.createElement('li');
    var textnode=document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById('do').appendChild(node);
}