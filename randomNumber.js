
document.addEventListener('DOMContentLoaded', function(){
    //define reference for the three relements

    // let color = document.querySelectorAll('.color');
    let match = document.querySelector('.match');
    let match2 = document.querySelector('.match2');
    let match3 = document.querySelector('.match3')
// let coloMatch = document.querySelector('.color-match');
    let randomNumber = function(){
        return Math.ceil(Math.random() * 9);
    };
    // window.addEventListener('load', function(){
        match.innerHTML = randomNumber();
        match2.innerHTML = randomNumber();
        match3.innerHTML = randomNumber();

    // });
    ///Define a function
});
