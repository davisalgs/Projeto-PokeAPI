// função para buscar e exibir informações do Pokémon
function getPokemonData() {
    const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(url) // fazendo a requisição para a API do Pokémon
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon foi não encontrado!');
            }
            return response.json();
        }) 
        .then(data => {
            
            const pokemonInfo = document.getElementById("pokemon-info");
            pokemonInfo.innerHTML = `
                
            <h2>${data.name.toUpperCase()}</h2> 
                <img src="${data.sprites.front_default}" alt="${data.name}" />
                
                <p><strong>Tipo:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
                <p><strong>Habilidades:</strong> ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
                <p><strong>Altura:</strong> ${data.height / 10} m</p>
                <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
            `;
        }) // se a resposta não for ok, lança um erro
        .catch(error => {
            const pokemonInfo = document.getElementById("pokemon-info");
            pokemonInfo.innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
}
