const appDonutMaker = new DonutMaker();


const donutCountElement = document.querySelector('.donutCount');
const donutButton = document.querySelector(".donutButton");
const autoClickerCountElement = document.querySelector('.autoClickerCount');
const autoClickerButton = document.querySelector(".autoClickerButton");
const donutMultiplierCountElement = document.querySelector('.donutMultiplierCount');
const donutMultiplierButton = document.querySelector(".donutMultiplierButton");
const donutsPerClickElement = document.querySelector('.donutsPerClick');
const autoClickerCostElement = document.querySelector('.autoClickerCost');
const donutMultiplierCostElement = document.querySelector('.donutMultiplierCost');
const gameResetButton = document.querySelector('.gameResetButton');
const donutsPerMinuteElement = document.querySelector('.donutsPerMinute');

const updateGame = (donutMaker)=>{
    donutCountElement.innerText = "Donuts: " + donutMaker.getDonutCount().toFixed(0);
    autoClickerCountElement.innerText = "Auto Clickers Owned: " + donutMaker.getAutoClickersOwned();
    donutMultiplierCountElement.innerText = "Donut Multipliers Owned: " + donutMaker.getDonutMultipliersOwned();
    donutsPerClickElement.innerText = "Donuts Per Click: " + donutMaker.getDonutsPerClick().toFixed(2);
    autoClickerCostElement.innerText = "Purchase Cost: " + donutMaker.getAutoClickersCost() + " Donuts";
    donutMultiplierCostElement.innerText = "Purchase Cost: " + donutMaker.getDonutMultipliersCost() + " Donuts";
    donutsPerMinuteElement.innerText = "Donuts Per Minute: " + donutMaker.getDonutsPerMinute().toFixed(2);


    if (donutMaker._donutCount >= donutMaker._autoClickersCost){
        autoClickerButton.style.backgroundColor = "black";
    }
    else{
        autoClickerButton.style.backgroundColor = "grey";
    };
    if (donutMaker._donutCount >= donutMaker._donutMultipliersCost){
        donutMultiplierButton.style.backgroundColor = "black";
    }
    else{
        donutMultiplierButton.style.backgroundColor = "grey";
    };
    
}

const clickDonutButton = (button, donutMaker) =>{
    button.addEventListener('click', ()=>{
        donutMaker.addDonut();
        updateGame(donutMaker);
    });
}

const clickAutoClickerButton = (button, donutMaker) =>{
    button.addEventListener('click', ()=>{
        donutMaker.addAutoClicker();
        updateGame(donutMaker);
    });
}

const clickDonutMultiplierButton = (button, donutMaker) =>{
    button.addEventListener('click', ()=>{
        donutMaker.addDonutMultiplier();
        updateGame(donutMaker);
    });
}

const clickResetButton = (button, donutMaker) =>{
    button.addEventListener('click', ()=>{
        donutMaker.resetGame();
        updateGame(donutMaker);
    });
}

clickDonutButton(donutButton, appDonutMaker);
clickAutoClickerButton(autoClickerButton, appDonutMaker);
clickDonutMultiplierButton(donutMultiplierButton, appDonutMaker);
clickResetButton(gameResetButton, appDonutMaker);
updateGame(appDonutMaker);
let autoClickerInterval = setInterval(appDonutMaker.autoAddDonut, 1000, appDonutMaker);
let interval = setInterval(updateGame, 500, appDonutMaker);

function navDropdown() {
    document.getElementById("navDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
