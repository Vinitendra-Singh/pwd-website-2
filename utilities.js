//this is Javascript Function//
function bulbon(clr) {
    document.getElementById('bulb1').src = 'image/pic_bulbon.gif';
    document.getElementById('b1').style.backgroundColor = clr;
    document.getElementById('b1').style.fontSize = '27px';
}
function bulboff(clr) {
    document.getElementById('bulb1').src = 'image/pic_bulboff.gif'
    document.getElementById('b1').style.backgroundColor = clr;
    document.getElementById('b1').style.fontSize = '21px';
}
function clear1() {
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    document.getElementById('n3').value = "";
    document.getElementById('n1').style.backgroundColor = "white"
    document.getElementById('n2').style.backgroundColor = "white"
}
function addnum() {
    num1 = document.getElementById('n1').value
    num2 = document.getElementById('n2').value
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    document.getElementById('n3').value = num1 + num2;
}
function subnum() {
    num1 = document.getElementById('n1').value
    num2 = document.getElementById('n2').value
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    document.getElementById('n3').value = num1 - num2;
}
function mulnum() {
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    document.getElementById('n3').value = num1 * num2;
}
function divnum() {
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    document.getElementById('n3').value = num1 / num2;
}
function changecolor() {
    document.getElementById('n1').style.backgroundColor = "lightgreen"
    document.getElementById('n2').style.backgroundColor = "white"
}
function changecolor1() {
    document.getElementById('n1').style.backgroundColor = "white"
    document.getElementById('n2').style.backgroundColor = "lightgreen"
}
function greater() {
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (num1 > num2) {
        document.getElementById('n3').value = num1 + " is greater than " + num2;
    }
    else if (num2 > num1) {
        document.getElementById('n3').value = num2 + " is greater than" + num1;
    }
    else {
        document.getElementById('n3').value ="both number are equal";
    }
}

function showtable(){
    document.getElementById('numtable').innerHTML = "Table of number n1"
    num1 = parseFloat(document.getElementById('n1').value);
    for(i=1;i<=10;i++)
    document.getElementById('numtable').innerHTML += "<BR>" + num1 + "x" + i + "=" + num1 * i;
}
if (i>5){
}