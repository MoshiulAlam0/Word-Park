function dictinaryDataLoad(searchText) {
    console.log(searchText);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`)
        .then(res => res.json())
        .then(data => displayInfo(data))
}


function displayInfo(data) {
    // console.log(data[0].phonetics[1]?.audio);
    const phoneticElement = document.getElementById('phonetic-element'); // phoneticElement
    phoneticElement.innerText = data[0].phonetic;

    audio( 'optional-btn', 'speaker', data[0].phonetics[0]?.audio, data[0].phonetics[1]?.audio); // audio mick

    setInfo(data) // more info set
    
}

   