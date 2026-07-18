const input = document.getElementById("inputPais");
const button = document.getElementById("btnBuscar");
const div = document.getElementById("resultado");


async function buscarPesquisa() {
    try {
        const valorPesquisa = input.value;
        const pesquisa = await fetch("https://api.sampleapis.com/countries/countries")
        const dados = await pesquisa.json();
        const paisEncontrado = dados.find(function (pais) {
            return pais.name.toLowerCase() === valorPesquisa.toLowerCase();
        });
        if (paisEncontrado) {
            div.innerHTML = `
    <h2>${paisEncontrado.name}</h2>
    <div class="info-grid">
        <p>Capital: ${paisEncontrado.capital}</p>
        <p>População: ${paisEncontrado.population.toLocaleString('pt-BR')}</p>
        <p>Sigla: ${paisEncontrado.abbreviation}</p>
        <p>Sistema Monetário: ${paisEncontrado.currency}</p>
        <p>DDI: ${paisEncontrado.phone}</p>
    </div>
    <img src="${paisEncontrado.media.flag}" alt="Bandeira de ${paisEncontrado.name}">
`;
        }
        else {
            div.innerHTML = `
            <p>País não encontrado, confira o nome novamente!</p>
            `
        }
        console.log(paisEncontrado);
    }
    catch (erro) {
        console.log("Erro ao buscar", erro);
    }
}
button.addEventListener("click", buscarPesquisa);
