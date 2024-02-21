
const modalContainer = document.getElementById('modal-container');
//  for show modal
document.getElementById('more-btls-btn').addEventListener('click', function(){
    modalContainer.style.display = 'flex'
})

// for hide modal
document.getElementById('x-btn').addEventListener('click', function(){
modalContainer.style.display ='none';
})

// for set sourceUrls
function setSourceUrls(url){
const sourceUrls = document.getElementById('sourceUrls-tag');
sourceUrls.removeAttribute('href');
console.log(sourceUrls);
sourceUrls.setAttribute('href', `${url}`)

}
