var inputBox1 = document.getElementById('chatinput1');

inputBox1.onkeyup = function(){
    document.getElementById('printchatbox1').innerHTML = inputBox1.value;
}

var inputBox2 = document.getElementById('chatinput2');
// var inputBoxSum = inputBox2.value+inputBox1.value;
// console.log(inputBoxSum);

inputBox2.onkeyup = function(){
    document.getElementById('printchatbox2').innerHTML = inputBox2.value;
    document.getElementById('printchatboxsum').innerHTML = parseInt(inputBox2.value)+parseInt(inputBox1.value);
}

var inputBox3 = document.getElementById('chatinput3');

inputBox3.onkeyup = function(){
    document.getElementById('printchatboxsum2').innerHTML = parseInt(inputBox1.value)+parseInt(inputBox3.value);
}

var inputBox4 = document.getElementById('chatinput4');

inputBox4.onkeyup = function(){
    document.getElementById('printchatboxsum3').innerHTML = parseInt(inputBox2.value)+parseInt(inputBox4.value);
}

