
let counter = document.querySelector('#counter');
let count = 0; 


function increment(){
    count++;
    counter.textContent = count;
}

let intervalID = setInterval(increment, 1000);

function decrement(){
    count --;
    counter.textContent = count; 
}

let plusButton = document.querySelector('#plus');
let minusButton = document.querySelector('#minus'); 

plusButton.addEventListener('click', increment);
minusButton.addEventListener('click', decrement);

let array = [];
let heartsLikes = 1;

let heartButton = document.querySelector('#heart');
heartButton.addEventListener('click', () => { 
    if(array.includes(count)){
        heartsLikes++;
        let likeCount = document.getElementById(`${count}`);
        likeCount.textContent = `You have liked ${count} ${heartsLikes} number of times`
        
    }
    else{
    array.push(count);
    heartsLikes = 1;
    let li = document.createElement('li');
    li.id = `${count}`; 
    li.textContent = `You have liked ${count} ${heartsLikes} number of times`
    document.querySelector('ul').append(li);
}
}
);

let pauseButton = document.querySelector('#pause');

pauseButton.addEventListener('click', () => {
    if(pauseButton.textContent === ' pause '){
        clearInterval(intervalID);
        pauseButton.textContent = 'Resume';
        minusButton.removeEventListener('click',decrement);
        plusButton.removeEventListener('click', increment);
    }
    else {
        intervalID = setInterval(increment, 1000);
            pauseButton.textContent = ' pause ';
            minusButton.addEventListener('click', decrement);
            plusButton.addEventListener('click', increment);
    }
    })

let form = document.querySelector('#comment-form');
form.addEventListener('submit', (event) => {event.preventDefault()
const input = document.getElementById("comment-input");
leaveComment(input.value)})

function leaveComment(comment){
    let p = document.createElement('p')
    p.textContent = `${comment}`
    let ul = document.createElement('ul');
    ul.append(p)
    document.querySelector('#list').append(ul)
}