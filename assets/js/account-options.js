const btnAccountMenu = document.getElementById('icon-menu-account');
const menuAccount = document.querySelector('.account-options');

btnAccountMenu.addEventListener('click', ()=>{
    if(!menuAccount.classList.contains('menu-account--show')) {
        menuAccount.classList.add('menu-account--show');
        return;
    } else {
        menuAccount.classList.remove('menu-account--show');
    }
});