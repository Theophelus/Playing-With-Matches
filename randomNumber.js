
document.addEventListener('DOMContentLoaded', function(){
    //define reference for the three relements
    let button = document.querySelector('.button');
    let message = document.querySelector('.message');
    let randomNumber = function(){
        return Math.ceil(Math.random() * 9);
    };
    let showNumber = function(element){
        let color = document.querySelectorAll('.color');
        for (let i = 0; i < color.length; i++) {
          element = color[i];
            // console.log(element[0]);
            let number = randomNumber();
            // console.log(number);
            element.innerHTML = number;
            // console.log(element[0]);
        }
    //   console.log(color[0]);
      if(color[0].innerHTML == color[1].innerHTML || color[2].innerHTML == color[1].innerHTML){
          message.innerHTML = 'Two Numbers have matched';
        if(color[0].innerHTML == color[1].innerHTML){
            color[0].classList.add('addColor');
            color[1].classList.add('addColor');
        }
        if(color[2].innerHTML == color[1].innerHTML){
            color[2].classList.add('addColor');
            color[1].classList.add('addColor');
        }
      }else{
        color[0].classList.remove('addColor');
        color[1].classList.remove('addColor');
        color[2].classList.remove('addColor');
        //clear message
        message.innerHTML = '';

      }
    };
    button.addEventListener('click', function(){

        showNumber();

    });
});
