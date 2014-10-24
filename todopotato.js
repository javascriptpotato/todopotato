/* Time */

function checkTime(i) {
    if (i<10) {
        i = "0" + i;
    }
    return i;
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers < 10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
}

setInterval(startTime, 500);


/* To do related */

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

    checkdone.addEventListener('click',function(event) {
        node.remove(node.checked);

    });

}


