let bt_light = document.getElementById('b_light');
let bt_dark = document.getElementById('b_dark');
let main = document.querySelector('#main');
let logo = document.querySelector('#logo')


bt_light.addEventListener('click',clicar_l);
bt_dark.addEventListener('click',clicar_d);

function clicar_l(){
    console.log('modo light');
    main.classList.add("claro");
    main.classList.remove("escuro");
}

function clicar_d(){
    console.log('modo dark');
    main.classList.add('escuro');
    main.classList.remove('claro');
}

//logo.setAttribute('display', 'none');
//logo.style.display = 'none';