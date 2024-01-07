let button = document.querySelector('.expand-button');
let buttonPic = button.querySelector('.expand-button__picture');
let buttonText = button.querySelector('.expand-button__text');

let condition = false;

let switcher = function(){
    if (condition == false){
        buttonText.textContent = 'Скрыть';
        buttonPic.style.transform = 'rotate('+180+'deg)';
        condition = true;
        cleaner();
    } else {
        buttonText.textContent = 'Показать все';
        buttonPic.style.transform = 'rotate('+0+'deg)'
        condition = false;
        detectWrap();
    }
}




let cleaner = function(){
    let items = document.querySelectorAll('.mobile-slider__item');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('hidden');
    }
}

let detectWrap = function(className) {
    className = 'mobile-slider__item';
    let prevItem = {};
    let currItem = {};
    let items = document.getElementsByClassName(className);
    let lineCounter = 1;
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('hidden');    
        currItem = items[i].getBoundingClientRect();
        if (prevItem && prevItem.top < currItem.top) {
            lineCounter++;
        }
        if (lineCounter > 2) {
            items[i].classList.add('hidden');
        }
        prevItem = currItem;
      
    };
}


detectWrap();

window.addEventListener('resize', function(){
    if (condition == false){
        detectWrap();
    }
});





button.addEventListener('click', function(){
    switcher();
});