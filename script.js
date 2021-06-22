let name = '';
let number = Math.floor(Math.random()* 100)
let guesses =0;


const output= document.querySelector('#output');
const output2= document.querySelector('#output2');
const prompt = document.querySelector('#prompt');
const input = document.querySelector(' #prompt input');
const time = document.querySelector(' #time');


console.log( number);

prompt.addEventListener('submit',toDoSubmit);




function toDoSubmit(event){
  
event.preventDefault();




(isNaN(input.value)==false? 

output2.textContent = ('Я сказал имя а не число')




: processinput(input.value))



processinput2(input.value)
    
    
    
    
    








input.value=name;




input.value='';

return;  
}








function processinput(input){
if(!input) return;


    



if(!name){
    
    output2.remove()
name=input;
output.textContent = (`${name},  было загаданно число от 1 до 100, попытайтесь угадать!  ` )
input.value='';

return;



}




   

 }

 














function processinput2 (input){

  
let guess = Number.parseInt(input)

     if(Number.isNaN(guess)){
        guesses+=1
        time.textContent = (`Попыток ${ guesses}` )
        time.style.color='rgba(0, 255, 0, 1)';
       

     }else if(guess==number){
    
        output.textContent = ( 'Вы отгадали число')
    
    }if(guess<number){
        
        output.textContent = ( 'Ты близок но чуть больше')

    }else if(guess>number){

        output.textContent = ( 'Ты близок но чуть меньше')

    }



}


//Из за того что  parseInt проверяет число попытки выходят только при типе данных string, я не знаю что делать с багами, я еще туплю но надеюсь что скоро
//стану лучше в этом, из за большого количества технологий не успеваешь качесвтенно проработать одну и углубиться!!!!!!!!!!!!!








