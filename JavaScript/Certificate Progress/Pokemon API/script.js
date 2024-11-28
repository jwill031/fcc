const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const profileImage = document.getElementById("image-container");
const pokemonNameTitle = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defence = document.getElementById("defense");
const spAttack = document.getElementById("special-attack");
const spDefence = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const form = document.getElementById("search-section");

const getData = async () => {
	const name = searchInput.value.toLowerCase();
	try {
		const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name}`;
		await fetch(url)
			.then((res) => res.json())
			.then((data) => {
				//console.log(data);
				//console.log(data.stats[0].base_stat)

				profileImage.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name}">`;
				pokemonNameTitle.innerText = `${data.name.toUpperCase()}`;

				pokeId.textContent = `#${data.id}`;
				weight.textContent = `${data.weight}`;
				height.textContent = `${data.height}`;

				hp.innerText = `${data.stats[0].base_stat}`;
				attack.innerText = `${data.stats[1].base_stat}`;
				defence.innerText = `${data.stats[2].base_stat}`;
				spAttack.innerText = `${data.stats[3].base_stat}`;
				spDefence.innerText = `${data.stats[4].base_stat}`;
				speed.innerText = `${data.stats[5].base_stat}`;

				types.innerHTML = data.types
					.map(
						(obj) =>
							`<span class="type ${obj.type.name}">${obj.type.name}</span>`
					)
					.join(" | ");
			});
	} catch (err) {
		alert("Pokémon not found");
		console.log(err);
	}
};

const clearData = () => {
	profileImage.innerText = "";
	pokemonNameTitle.innerText = "";
	hp.innerText = "";
	defence.innerText = "";
	attack.innerText = "";
	spAttack.innerText = "";
	spDefence.innerText = "";
	speed.innerText = "";
};

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	await getData();
});
