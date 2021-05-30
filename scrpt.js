const stg1 = document.querySelector('#stage1');
const stg2 = document.querySelector('#stage2');
const maximum = document.getElementById('maximum');
const start = document.getElementById('start');
const guessInput = document.querySelector('#guess-number');
const guessButton = document.querySelector('#guess-button');
const chances = document.querySelector('.chances');

let totchance , target , maxim;
 
start.addEventListener('click' , startGame)
function startGame(){
    maxim=Number(maximum.value)
    if(maxim>10){
        target=Math.floor(Math.random()*(maxim+1));
        totchance=Math.floor(Math.log2(maxim))+1;
        chances.textContent=totchance;
        stg1.classList.toggle('hidden');
        stg2.classList.toggle('hidden');
    }
    else{
        const wrongNumber = document.querySelector('#stage1 h1');
        wrongNumber.outerHTML='<h1 class="red">عدد وارد شده باید بیشتر از 10 باشد </h1>';
    }
}
guessButton.addEventListener('click',myguess);
function myguess(){
    let urGuess = Number(guessInput.value);
    if(urGuess== target){
        stg2.innerHTML='<p class="win">تبریک حدس شما درست بود </p>'
        return;
    }
    else if(urGuess>target){
        const status=document.querySelector('.status');
        status.innerHTML+=`<span class="blue">${urGuess}</span> `;
    }
    else{
        const status=document.querySelector('.status');
        status.innerHTML+=`<span class="red1">${urGuess}</span> `
    }
    let remainingChances = Number(chances.textContent);
    remainingChances--;
    if(remainingChances>0){
        chances.textContent=remainingChances;
    }
    else{
        stg2.innerHTML='<p class="lose">متاسفانه فرصت شما به پایان رسید</p>';
    }
}

