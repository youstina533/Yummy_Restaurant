let count = 0;
let ops = 0;

const countEl = document.getElementById('counter-value');
const opsEl = document.getElementById('ops-counter');
const decBtn = document.getElementById('decrement-btn');
const statusEl = document.getElementById('current-value-word');


function updateDisplay(){
    countEl.textContent = count;
    decBtn.disabled = count === 0;
    opsEl.textContent = 'ops: ' + ops;
}

//Incremeent Method
document.getElementById('increment-btn').addEventListener('click', () =>{
    count ++;
    ops++
    statusEl.textContent = 'INCREMENTED \u2192' + count;
    updateDisplay();
});

//Decrement Method
document.getElementById('decrement-btn').addEventListener('click', () =>{
   if(count > 0){
    count --;
    ops++;
    statusEl.textContent = count === 0 ? 'REACHED ZERO' : 'DECREMENTED \u2192' + count;
   }
    updateDisplay();
});

//Reset Method
document.getElementById('reset-btn').addEventListener('click', () => {
    count = 0;
    ops ++;
    statusEl.textContent = 'COUNTER RESET';
    updateDisplay();
});

// Keyboard shortcuts 
document.addEventListener('keydown',(e) =>{
    if(e.key === 'ArrowUp' || e.key === '+'){
        document.getElementById('increment-btn').click();
    }
    else if(e.key === 'ArrowDown' || e.key === '-'){
        document.getElementById('decrement-btn').click();
    }
    else if(e.key === 'r' || e.key === 'R'){
        document.getElementById('reset-btn').click();
    }
});
updateDisplay();
