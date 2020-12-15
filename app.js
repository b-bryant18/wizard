const charactersList = document.getElementById("charactersList");

const loadCharacters = async () => {
    try {
        const res = await fetch('http://hp-api.herokuapp.com/api/characters');
        let hpCharacters = await res.json();
        displayCharacters(hpCharacters);
        console.log(hpCharacters);
    } catch (err) {
        console.err(err);
    }
}