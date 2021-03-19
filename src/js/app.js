const appDonutMaker = new DonutMaker();


const donutCountElement = document.querySelector('.donutCount');
const donutButton = document.querySelector(".donutButton");
const autoClickerCountElement = document.querySelector('.autoClickerCount')
const autoClickerButton = document.querySelector(".autoClickerButton");
const donutMultiplierCountElement = document.querySelector('.donutMultiplierCount')
const donutMultiplierButton = document.querySelector(".donutMultiplierButton");
const donutsPerClickElement = document.querySelector('.donutsPerClick')

const updateGame = (donutMaker)=>{
    donutCountElement.innerText = "Donuts: " + donutMaker.getDonutCount();
    autoClickerCountElement.innerText = "Auto Clickers Owned: " + donutMaker.getAutoClickersOwned();
    donutMultiplierCountElement.innerText = "Donut Multipliers Owned: " + donutMaker.getDonutMultipliersOwned();
    donutsPerClickElement.innerText = "Donuts Per Click: " + donutMaker.getDonutsPerClick();

    if (donutMaker._donutCount >= donutMaker._autoClickersCost){
        autoClickerButton.style.backgroundColor = "green";
    }
    else{
        autoClickerButton.style.backgroundColor = "red";
    }
    if (donutMaker._donutCount >= donutMaker._donutMultipliersCost){
        donutMultiplierButton.style.backgroundColor = "green";
    }
    else{
        donutMultiplierButton.style.backgroundColor = "red";
    }
    
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


clickDonutButton(donutButton, appDonutMaker);
clickAutoClickerButton(autoClickerButton, appDonutMaker);
clickDonutMultiplierButton(donutMultiplierButton, appDonutMaker);
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
