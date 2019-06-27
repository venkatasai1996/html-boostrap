

// function printdetails(){
//     var username=document.querySelector('#input1').value;
//     var age=document.getElementById('input2').value;

//     console.log(username,age);
//     document.getElementById('output').innerHTML=`<h2> hi my name is ${username} and my age is ${age}
//   </h2>`
// }

console.log(document)
 function sum(){
    
    var valueone=document.getElementById('input1').value; 
    var valuetwo=document.getElementById('input2').value;
    console.log('sum');
    document.getElementById('output').innerHTML=`
<h2>the sum of two values is ${parseInt(valueone)+parseInt(valuetwo)} </h2>`

 }
 function substraction(){
    
    var valueone=document.getElementById('input1').value; 
    var valuetwo=document.getElementById('input2').value;
    console.log(valueone-valuetwo);
    document.getElementById('output').innerHTML=`
<h2>the substraction of two values is ${(valueone)-(valuetwo)} </h2>`
 }
 function multiplication(){
    
    var valueone=document.getElementById('input1').value; 
    var valuetwo=document.getElementById('input2').value;
    console.log('multiplication');
    document.getElementById('output').innerHTML=`
<h2>the multiplication of two values is ${parseInt(valueone)*parseInt(valuetwo)} </h2>`
 }
 function division(){
    
    var valueone=document.getElementById('input1').value; 
    var valuetwo=document.getElementById('input2').value;
    console.log('division');
    document.getElementById('output').innerHTML=`
<h2>the division of two values is ${parseInt(valueone)/parseInt(valuetwo)} </h2>`
 }
