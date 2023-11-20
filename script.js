
// Pegar quanto ml quer beber no dia e mostrar em quanto falta beber
function calcularQuantoQuerBeber(){
    let quantosMlQuerBeber = document.getElementById('quantosMlQuerBeber');
    console.log(quantosMlQuerBeber.value)
    let quantoFaltaBeber = document.getElementById('quantoFaltaBeber');
    quantoFaltaBeber.innerText = quantosMlQuerBeber.value;
}


 //calcular quanto de água já bebeu, mostrar quanto já beber e atualizar quanto falta beber
 function calcularMlAgua(){
    let mlBebidos = document.getElementById('mlBebidos');
    console.log(mlBebidos.value);
    let quantosMlBebeu = document.getElementById('quantosMlBebeu');
    quantosMlBebeu.innerText = mlBebidos.value;

    let quantosMlQuerBeber = document.getElementById('quantosMlQuerBeber');
    let quantoFaltaBeber = document.getElementById('quantoFaltaBeber');
    let total = quantosMlQuerBeber.value - mlBebidos.value;
    
    quantoFaltaBeber.innerText = total;

}