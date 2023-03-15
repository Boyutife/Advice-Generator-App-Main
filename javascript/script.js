const adviceHeading = document.querySelector('.advice_head');
const adviceTxt = document.querySelector('.advice_txt');
const dice = document.querySelector('.dice_container');



async function fetchData() {
  try {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    getAdvice = data.slip;
    adviceTxt.innerText =`${getAdvice.advice}`;
    adviceHeading.innerText= `ADVICE # ${getAdvice.id}`
    let  angle = Math.floor(Math.random() * 360) + 1;
    dice.style.transform = `rotate(${angle}deg)`;
  } catch(error) {
    console.error(error);
  } 
  console.log(getAdvice.advice, getAdvice.id)
}

fetchData();

dice.addEventListener('click',()=>{
  fetchData();
})








