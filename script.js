let mode = document.getElementById('theme-switch');
let body = document.querySelector('dark-mode');


function response(){
    let x = document.getElementById('home');
    if(x.className === 'navigation'){
        x.className += ' response';
    }
    else{
        x.className = 'navigation'
    }
}

const switchTheme = () =>{
    if(document.body.className === 'dark-mode'){
        // console.log('sup');
        document.body.className = 'light-mode';
    }
}
