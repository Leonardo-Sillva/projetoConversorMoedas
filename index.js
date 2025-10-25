let valorDoSelectDeMoedas = document.getElementById('moedasSelecionaveis');
const botaoDoFormulario = document.getElementById('btn-converter');
const inputRecebeValor = document.getElementById('recebe-valor');


const calculoRelaçaoAMoeda = botaoDoFormulario.addEventListener('click', () => {
    if(valorDoSelectDeMoedas.value === 'USD'){
        return console.log('é dolar');
    }else if(valorDoSelectDeMoedas.value === 'EUR') {
        return console.log("é euro");
    } else {
        return console.log('é btc');
    }
})

console.log(calculoRelaçaoAMoeda);

