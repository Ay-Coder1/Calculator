

function display(val){
    document.getElementById('result').value += val;
}
function solve() { 
    let x= document.getElementById('result').value
    let y= eval(x);
    document.getElementById('result').value =y
}
function clearScreen() {
    document.getElementById('result').value='';
}
function deleteBook(){
  const number = document.getElementById('result').value.slice(0, -1);

  document.getElementById('result').value = number;

};


    
