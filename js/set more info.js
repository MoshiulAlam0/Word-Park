function setInfo(data){
    
    console.log(data[0].sourceUrls[0]);
    const wordName = document.getElementById('word-name');
    wordName.innerText = data[0].word.toUpperCase()

    const phonetic = document.getElementById('phonetic');
    phonetic.innerText = data[0].phonetic;

    audio('optional-btn2', "info-mick", data[0].phonetics[0]?.audio, data[0].phonetics[1]?.audio);
   

    addSynonyms('synonyms', data[0].meanings[0].synonyms)

    setDefinition('definition-list', data[0].meanings[0].definitions)

 if((data[0].meanings[1].partOfSpeech === 'verb') === true){
     addSynonyms('synonyms2', data[0].meanings[1].synonyms)
 
     setDefinition('definition-list2', data[0].meanings[1].definitions)
    
 }  
 
 setSourceUrls(data[0].sourceUrls[0])
}




// for set synonyms 
function addSynonyms(synonymsElement_id, synonyms ){
    let syno;
for(const synonym of synonyms){
    syno += `${synonym}, `
}
const synonymsElement = document.getElementById(synonymsElement_id);
synonymsElement.innerText = syno.slice(0, -2) + '.';
}

// for set defination
function setDefinition(definationElement_id, definations){
    const definitionList =document.getElementById(definationElement_id);
    definitionList.innerHTML = '';
    for(const defination of definations){
        const newLi = document.createElement('li');
        newLi.innerText = defination.definition;
        definitionList.appendChild(newLi)

    }
}


