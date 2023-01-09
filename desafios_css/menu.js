window.onhashchange = function(e){
    // oldURL é a url antiga
    // pega apenas só o que tiver depois do "#". o [1] serve para pegar a segunda parte da spring, sendo a primeira o #
    const oldURL = e.oldURL.split('#')[1]
    const newURL = e.newURL.split('#')[1]
    console.log(oldURL, newURL)
    const oldlink = document.querySelector(`.menu a[href='#${oldURL}']`)
    const newlink = document.querySelector(`.menu a[href='#${newURL}']`)
    oldlink && oldlink.classList.remove('selected')
    newlink && newlink.classList.add('selected')
}