function audio( optionalBtn_id, mick_id, urlMale, urlFemele) {
    const audio = document.getElementById('audio');
    const optionalBtn = document.getElementById(optionalBtn_id);
    document.getElementById(mick_id).addEventListener('click', function () {
        audio.removeAttribute('src')
        if (optionalBtn.value === 'male') {
            if((urlMale !== undefined) === true){
                audio.setAttribute('src',`${urlMale}`)
                audio.play();
            }
        } else {
            if((urlFemele !== undefined) === true){
                // audio.removeAttribute('src')
                audio.setAttribute('src',`${urlFemele}`)
                audio.play();
            }
        }

    })
}
