const btnAccountMenu = document.getElementById('icon-menu-account');
const menuAccount = document.querySelector('.account-options');

const btnInformation = document.getElementById('icon-menu-info');
const menuInfo = document.querySelector('.information');

btnAccountMenu.addEventListener('click', ()=>{
    if(!menuAccount.classList.contains('menu-account--show')) {
        menuAccount.classList.add('menu-account--show');
    } else {
        menuAccount.classList.remove('menu-account--show');
    }
});


btnInformation.addEventListener('click', ()=>{
    if(!menuInfo.classList.contains('information--show')) {
        menuInfo.classList.add('information--show');
    } else {
        menuInfo.classList.remove('information--show');
    }
});

