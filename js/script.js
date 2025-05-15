const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});


const projetos = [
  {
    titulo: "Projeto CEP",
    descricao:
      "Buscador de CEP com informações completas de endereços utilizando API ViaCEP, desenvolvido com JavaScript moderno.",
    imagem: "https://localizarcep.com/assets/images/blog/sobre-cep.jpg",
    link: "link-aqui",
  },
  {
    titulo: "Busca Usuários GitHub",
    descricao: "Busca a foto de perfil do usuário do github",
    imagem: "projetos/busca_github/busca_github.png",
    link: "link-aqui",
  },
];

const galeriaProjetos = document.getElementById("galeriaProjetos");

projetos.forEach(projeto => {

    galeriaProjetos.innerHTML += `
    <article class="project-card">
        <div
        class="project-image"
        style="
            background-image: url('${projeto.imagem}');
        "
        ></div>
        <div class="project-info">
        <h3>${projeto.titulo}</h3>
        <p>
            ${projeto.descricao}
        </p>
        <a href="${projeto.link}" class="project-link">Ver Detalhes</a>
        </div>
    </article>`

})
