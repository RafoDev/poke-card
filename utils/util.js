const renderPokemon = (pokemon,stats, pokeCard, statsContainer) => {
    const name = pokemon.name;
    const type = pokemon.types[0].type.name;
    const ability = pokemon.abilities[0].ability.name;
    const weight = pokemon.weight;
    const id = pokemon.id;
    const height = pokemon.height;
    const sprite = pokemon.sprites.front_default;

    pokeCard.innerHTML = `   <div class="poke-card-container">
            <div class="poke-card__height-container">
                <p class="poke-card__height">${parseFloat(height) / 10}m</p>
            </div>
            <div class="poke-card__weight-container">
                <p class="poke-card__weight">${parseFloat(weight) / 10}kg</p>
            </div>
            <div class="poke-card__img-container">
                <img class="poke-card__img" src="${sprite}">
            </div>
            <div class="poke-card__info">
                <p class="poke-card__info-number">#${id}</p>
                <div class="poke-card__info-name-container">
                    <p class="poke-card__info-name">${
                    capitalize(name)}</p>
                    <p class="poke-card__info-gender">Genetic Pokémon</p>
                </div>
                <p class="poke-card__info-type">${type}</p>
                <p class="poke-card__info-skill">${capitalize(ability)}</p>
            </div>
        </div>`;

        stats.forEach(e=>{
            statsContainer.innerHTML+=
            `
            <div class="poke-stat__container">
                <label class="poke-stat__label" for="${e.stat}">${capitalize(e.stat)}</label>
                <p class="poke-stat__amount">${e.base_stat}</p>
                <meter class="poke-stat__meter" id="${e.stat}" value="${e.base_stat}" min="0"  low="40"  high="160" max="250"></meter>
            </div>
            `
        })
};



const fetchApi = async (url) => {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data)
        .finally(() => {
        });
};
const capitalize = word => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

export {renderPokemon, fetchApi, capitalize};