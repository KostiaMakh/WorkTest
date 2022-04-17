function showMenu() {
    let menu = document.getElementById('nv')
    if (menu.style.display == 'block'){
        menu.style.display = 'none'
    }
    else {
        menu.style.display = 'block'
    }
}

function showMore(but) {
    let el = document.getElementById('hidenB')
    el.style.maxHeight = 'inherit'
    but.style.display = 'none'
}