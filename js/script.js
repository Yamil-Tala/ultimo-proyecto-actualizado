const nav = document.getElementById('nav');
const btn = document.getElementById ('btn');

btn.addEventListener ('click', ()=> {
// alert('men')
if (nav.className=== 'main-header__main-nav-container') {
    nav.className = 'ocultar'
} else {
    nav.className = 'main-header__main-nav-container'
}

});