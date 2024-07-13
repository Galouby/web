function mostrarResultado(value){
   document.getElementById("resultado").value += value; 

}
function borrarResultado(){
document.getElementById("resultado").value =""
}
function calcular(){
document.getElementById("resultado").value = eval(document.getElementById("resultado").value)   
}
function raizCuadrado(){
    let raiz = document.getElementById("resultado" , " =").value
   mostrarResultado(  Math.sqrt(raiz), )
}