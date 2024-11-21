let input = document.getElementById("screen") ;
Buttons = document.querySelectorAll('button');
let inputValue = "" ;

for(item of Buttons){
    item.addEventListener('click' ,(e)=>{
     buttonText = e.target.innerText ;

     if(buttonText=='X'){
        buttonText = "*" ;

        inputValue += buttonText ;
        input.value = inputValue ;
     }
     else if(buttonText=='='){
        input.value = eval(inputValue);
     }
     else if(buttonText=='C'){
        input.value = "" ;
     }
     else{
        inputValue += buttonText ;
        input.value = inputValue ;
     }

    })
}
    