const n1 = parseFloat(document.getElementById("n1").value)
const n2 = parseFloat(document.getElementById("n2").value)
function adicao(){
    const n1 = parseFloat(document.getElementById("n1").value)
    const n2 = parseFloat(document.getElementById("n2").value)
    mais=n1+n2
    document.getElementById("resultado").innerHTML = mais

    
}
function subtracao(){
    const n1 = parseFloat(document.getElementById("n1").value)
    const n2 = parseFloat(document.getElementById("n2").value)
    menos=n1-n2
    document.getElementById("resultado").innerHTML = menos

    
}
function divisao(){
    const n1 = parseFloat(document.getElementById("n1").value)
    const n2 = parseFloat(document.getElementById("n2").value)
    razao=n1/n2
    document.getElementById("resultado").innerHTML = razao

    
}
function multiplicacao(){
    const n1 = parseFloat(document.getElementById("n1").value)
    const n2 = parseFloat(document.getElementById("n2").value)
    mult=n1*n2
    document.getElementById("resultado").innerHTML = mult

    
}