let valorDoSelectDeMoedas = document.getElementById('moedasSelecionaveis');
const botaoDoFormulario = document.getElementById('btn-converter');
let inputRecebeValor = document.getElementById('recebe-valor');
let inputValorFinal;
const calculoRelaçaoAMoeda = botaoDoFormulario.addEventListener('click', () => {
    inputValorFinal = inputRecebeValor.value
    document.getElementById('campo-valor-moeda-real').innerText = `R$ ${inputValorFinal}`
    if (valorDoSelectDeMoedas.value === 'USD') {
        let calculoDolar = inputValorFinal.replace(/[,]/g, "") / 5.39
        document.getElementById('campo-valor-nome-moeda-aleatoria').innerText = 'Dólar Americano'
        document.getElementById('campo-valor-moeda-aleatoria').innerText=new Intl.NumberFormat("en-US", { style: "currency", 
        currency: "USD" }).format(calculoDolar);


    document.getElementById('img-bandeira-aleatoria').src = "assets/estados-unidos.svg";
    }else if (valorDoSelectDeMoedas.value === 'EUR') {
    let calculoEuro = inputValorFinal.replace(/[,]/g, "") / 6.27
    document.getElementById('campo-valor-nome-moeda-aleatoria').innerText = `Euro`
    document.getElementById('campo-valor-moeda-aleatoria').innerText=new Intl.NumberFormat("en-US", { 
        style: "currency", 
        currency: "EUR" }).format(calculoEuro);
    document.getElementById('img-bandeira-aleatoria').src = "assets/euro.svg";
} else {
    let calculoBitcoin = inputValorFinal.replace(/[,]/g, "") * 0.0000017
    document.getElementById('campo-valor-nome-moeda-aleatoria').innerText = 'Bitcoin'
    document.getElementById('campo-valor-moeda-aleatoria').innerText=new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 8,
        maximumFractionDigits: 8}).format(calculoBitcoin);
    document.getElementById('img-bandeira-aleatoria').src = 'assets/bitcoin.svg'
}
})


