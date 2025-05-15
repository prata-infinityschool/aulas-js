async function buscarUsuario() {
    const nomeDigitado = document.getElementById("usuario").value

    const urlAPI = `https://api.github.com/users/${nomeDigitado}`
    const resposta = await fetch(urlAPI)
    const informacoesDoUsuario = resposta.json()
    const divResultado = document.getElementById("resultado")
    divResultado.innerHTML = `<img src="${informacoesDoUsuario.avatar_url}" alt="">`;
}