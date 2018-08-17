
document.addEventListener('DOMContentLoaded', function(){
    //define reference for the three relements
    let message = document.querySelector('.message');
    let randomNumber = function(){
        return Math.ceil(Math.random() * 9);
    };
    let showNumber = function(){
        let color = document.querySelectorAll('.color');
        for (let i = 0; i < color.length; i++) {
            let element = color[i];
            console.log(element);
            let number = randomNumber();
            console.log(number);
            element.innerHTML = number;
        }
        
    };
     showNumber();
});
