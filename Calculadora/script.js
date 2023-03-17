let btn_soma = document.querySelector('#btn_soma');
let n1 = document.querySelector('#n1');
let n2 = document.querySelector('#n2');
let element = document.querySelector('#resposta')
let resultado;

function calculo(op){
    if (op == 'soma') {
        resultado = Number(n1.value) + Number(n2.value)
    }
    if (op == 'sub') {
        resultado = Number(n1.value) - Number(n2.value)
    }
    if (op == 'mult') {
        resultado = Number(n1.value) * Number(n2.value)
    }
    if (op == 'div') {
        resultado = Number(n1.value) / Number(n2.value)
    }
    
    return element.innerHTML = resultado;
}
