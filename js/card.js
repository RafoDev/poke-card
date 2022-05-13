import { fetchApi, renderPokemon } from "../utils/util.js";

const card = async () => {
    
    const idPoke = Math.floor(Math.random() * (150-1+1)) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${idPoke}`;
    const pokemon = await fetchApi(url);
    const stats = pokemon.stats.map((ele) => {
        return { stat: ele.stat.name, base_stat: ele.base_stat };
    });
    const statsContainer = document.querySelector('.poke-stats-container');
    const pokeCard = document.getElementById("card");

    renderPokemon(pokemon,stats,pokeCard,statsContainer);
};
export default card;
