async function carregarCEP() {
    const cepDigitado = document.getElementById('cep').value
    const urlAPI = `https://viacep.com.br/ws/${cepDigitado}/json/`
    const resposta = await fetch(urlAPI)
    const dadosCEP = await resposta.json()
    console.log(dadosCEP)

    const inputLogradouro = document.getElementById("logradouro")
    const inputBairro = document.getElementById("bairro")
    const inputCidade = document.getElementById("cidade")
    const inputUF = document.getElementById("uf")

    inputLogradouro.value = dadosCEP.logradouro
    inputBairro.value = dadosCEP.bairro
    inputCidade.value = dadosCEP.localidade
    inputUF.value = dadosCEP.uf
}
