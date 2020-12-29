const charactersList = document.getElementById("charactersList");
const searchBar = document.getElementById("searchBar");
let hpCharacters = [];
console.log(searchBar);

//This runs when user types into search bar
searchBar.addEventListener('keyup', (e) => {
    //The text entered into search bar
    const searchString = (e.target.value.toLowerCase());
    //Filter array based on name or house entered into search bar
    const filteredCharacters = hpCharacters.filter(character => {
        return character.name.toLowerCase().includes(searchString) || character.house.toLowerCase().includes(searchString)
    });
    displayCharacters(filteredCharacters);
});

//This runs when the page loads
const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
        // console.log(hpCharacters);
    } catch (err) {
        console.err(err);
    }
};

const displayCharacters = (characters) => {
    const htmltring = characters
        .map((character) => {
            return `
    <li class= "character">
    <h2>${character.name}</h2>
    <p>House: ${character.house}</p>
    <img src="${character.image}"</img>
    </li>
    `;
        })
        .join('');
    charactersList.innerHTML = htmltring;
};

loadCharacters();