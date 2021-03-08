//query selectors
const form = document.querySelector('form')
const age = document.querySelector('.age')
const feet = document.querySelector('.feet')
const inches = document.querySelector('.inches')
const male = document.querySelector('.male')
const female = document.querySelector('.female')
const weight = document.querySelector('.weight')
const calc = document.querySelector('.calc')
const back = document.querySelector('.back')
const results = document.querySelectorAll('.results li')
//event listener
calc.addEventListener('click', calculate)
back.addEventListener('click', goBack )

function calculate(e){
    e.preventDefault();
    let i = Number(inches.value);
    let f = Number(feet.value);
    let a = Number(age.value);
    let w = Number(weight.value);
    let h = (f * 12) + i;
   
//converting inch to cm , pound to kg
 
h = h * 2.54
w = w / 2.205

let bmr = (10 * w) + (6.25 * h) - (5 * a)

    if(male.checked) {
        bmr += 5
    }else 
    if(female.checked){
        bmr  -= 161
    };

    // adding sedentary calories 
    bmr += bmr * 0.2

    console.log(Math.floor(bmr))
//results
results[0].innerHTML = `Maintain weight - ${Math.floor(bmr)} calories `
results[1].innerHTML = `Mild weight loss - ${Math.floor(bmr * 0.89)} calories`
results[2].innerHTML = `Weight loss - ${Math.floor(bmr * 0.78)} calories `
results[3].innerHTML = `Extreme weight loss - ${Math.floor(bmr * 0.56)} calories `

results.forEach((item,index) =>{

    item.style.animation = `resultFade 0.5s ease forwards ${(index + 3) / 7}s`
})
   form.classList.add('submit-form');

    
}

function goBack(){
    window.location.reload();
}