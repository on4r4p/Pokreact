

const pokemonList = [

    {

        name: "bulbizar",

        imgSrc:

            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

    },

    {

        name: "mew",
        imgSrc:

            "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/151.png"
    },

];

export default function PokemonCard() {
    const pokemon = pokemonList[1]
    return (
        <figure>
            <img src={pokemon.imgSrc} alt={pokemon.name} />
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}