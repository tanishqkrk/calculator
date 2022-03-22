// Theme Section

let toggleTheme = document.querySelector('#toggle');
toggleTheme.addEventListener('click', function(){
    document.body.classList.toggle('dark');
    document.querySelector('.circle').classList.toggle('circle-on');
    document.querySelector('.toggleArea').classList.toggle('toggleAreaOn');
})

// End of JS themes

// Display screen
let display = document.querySelector('.display');     
let before = document.querySelector('.before');
// Defined all buttons that can input in display
let input = document.querySelectorAll('.input');
    for(let i=0; i<input.length; i++){
        input[i].addEventListener('click', function(){
        display.innerHTML += input[i].innerHTML;
    })
    // Show the inner text of any button that has been pressed
}

// Calculation function
let submit = document.querySelector('.equals');
submit.addEventListener('click', calc);
function calc(e){
    before.innerHTML = display.innerHTML
    display.innerText =  eval(display.innerText);
}


// Clear function
let clear = document.querySelector('.clear');
clear.addEventListener('click', function(){
    display.innerText = '';
    before.innerHTML = '';
})


let del = document.querySelector('.bs');
del.addEventListener('click', function(){
    let StrDisplay = String(display.innerText);
    display.innerText = StrDisplay.substring(0, StrDisplay.length - 1);
    
})


// Key press functions

document.addEventListener('keydown', e => {
    if(e.key == 1){
        display.innerText +=1;
        // document.querySelector('.one').classList.toggle('button-off');
    }
    else if(e.key == 2){
        display.innerText +=2;
    }
    else if(e.key == 3){
        display.innerText +=3;
    }
    else if(e.key == 4){
        display.innerText +=4;
    }
    else if(e.key == 5){
        display.innerText +=5;
    }
    else if(e.key == 5){
        display.innerText +=5;
    }
    else if(e.key == 6){
        display.innerText +=6;
    }
    else if(e.key == 7){
        display.innerText +=7;
    }
    else if(e.key == 8){
        display.innerText +=8;
    }
    else if(e.key == 9){
        display.innerText +=9;
    }
    else if(e.key == 0){
        display.innerText +=0;
    }
    else if(e.key == '.'){
        display.innerText += '.';
    }
    else if(e.key ==  '+'){
        display.innerText += '+'; 
    }
    else if(e.key ==  '-'){
        display.innerText += '-';
    }
    else if(e.key ==  '*'){
        display.innerText += '*';
    }
    else if(e.key ==  '/' || e.key == '%'){
        display.innerText +=  '/';
    }
    else if(e.key ==  'Enter'){
        before.innerHTML = display.innerHTML

        display.innerText =  eval(display.innerText);
    }
    else if(e.key ==  'Escape'){
        display.innerText ='';
    before.innerHTML = '';

    }
    else if(e.key ==  'Backspace'){
        let StrDisplay = String(display.innerText);
    display.innerText = StrDisplay.substring(0, StrDisplay.length - 1);
    }
    // console.log(e.key);
})