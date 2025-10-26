let valorDoSelectDeMoedas = document.getElementById('moedasSelecionaveis');
const botaoDoFormulario = document.getElementById('btn-converter');
let inputRecebeValor = document.getElementById('recebe-valor');
let inputValorFinal;
const calculoRelaçaoAMoeda = botaoDoFormulario.addEventListener('click', () => {
    inputValorFinal = inputRecebeValor.value
    if(valorDoSelectDeMoedas.value === 'USD'){
        return console.log('é dolar');
    }else if(valorDoSelectDeMoedas.value === 'EUR') {
        return console.log("é euro");
    } else {
        return console.log('é btc');
    }
})


