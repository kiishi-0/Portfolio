function response(){
    let x = document.getElementById('home');
    if(x.className === 'navigation'){
        x.className += ' response';
    }
    else{
        x.className = 'navigation'
    }
}