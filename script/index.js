'use strict';

const container = document.querySelector('.container');
const thanksContainer = document.querySelector('.thanks');

const submitButton = document.getElementById('sb');

const selRes = document.getElementById('selres');
const rates = document.querySelectorAll('.rates');

thanksContainer.addEventListener('click', function () {
    container.style.display = 'block';
    thanksContainer.classList.add('hidden');
    selRes.innerHTML = '';
    document.querySelector('.result').textContent = 'Please Select Number'
    //Short fix problem for now.
})

rates.forEach(rate => {
    rate.addEventListener('click', () => {
        selRes.innerHTML = (rate.innerHTML)
    })
    console.log(rate.innerHTML, rate);
})
//If no number clicked It wont submit. But second time when rate it submit somehow, I will be pleased if you give feedback for solve this. For now  when second rate no number selected, it writes 'please select number'. 
rates.forEach(occurence => {
    let id = occurence.getAttribute('id');
    occurence.addEventListener('click', function () {

        submitButton.addEventListener('click', () => {
            thanksContainer.classList.remove('hidden');
            container.style.display = 'none'
        })
    });
});


button.forEach(function(x){
    x.addEventListener("click",function(){
    result.innerHTML=x.innerHTML;
    });
});