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
const donutButtonImage = document.querySelector('.donutButton > img');
const bakeryLevelElement = document.querySelector('.bakeryLevel')
const bakeryUpgradeCostElement = document.querySelector('.bakeryUpgradeCost');
const bakeryUpgradeButton = document.querySelector('.bakeryUpgradeButton');
let sprinkleColors = ['images/YellowDonut.png'];

const updateGame = (donutMaker)=>{
    donutCountElement.innerText = "Donuts: " + donutMaker.getDonutCount().toFixed(0);
    autoClickerCountElement.innerText = "Auto Clickers Owned: " + donutMaker.getAutoClickersOwned();
    donutMultiplierCountElement.innerText = "Donut Multipliers Owned: " + donutMaker.getDonutMultipliersOwned();
    donutsPerClickElement.innerText = "Donuts Per Click: " + donutMaker.getDonutsPerClick().toFixed(2);
    autoClickerCostElement.innerText = "Purchase Cost: " + donutMaker.getAutoClickersCost() + " Donuts";
    donutMultiplierCostElement.innerText = "Purchase Cost: " + donutMaker.getDonutMultipliersCost() + " Donuts";
    donutsPerMinuteElement.innerText = "Donuts Per Minute: " + donutMaker.getDonutsPerMinute().toFixed(2);
    bakeryLevelElement.innerText = "Bakery Level: " + donutMaker.getBakeryLevel();
    bakeryUpgradeCostElement.innerText = "Next Bakery Upgrade Cost: " + donutMaker.getBakeryUpgradeCost() + " Donuts";


    if (donutMaker._donutCount >= donutMaker._autoClickersCost && donutMaker._bakeryLevel > donutMaker._autoClickersOwned){
        autoClickerButton.style.backgroundColor = "black";
    }
    else{
        autoClickerButton.style.backgroundColor = "grey";
    };
    if (donutMaker._donutCount >= donutMaker._donutMultipliersCost && donutMaker._donutMultipliersOwned < 11){
        donutMultiplierButton.style.backgroundColor = "black";
    }
    else{
        donutMultiplierButton.style.backgroundColor = "grey";
    };
    if (donutMaker._donutCount >= donutMaker._bakeryUpgradeCost){
        bakeryUpgradeButton.style.backgroundColor = "black";
    }
    else{
        bakeryUpgradeButton.style.backgroundColor = "grey";
    };
    
}

const updateSprinkleColors = (donutMaker) => {
    switch (donutMaker.getDonutMultipliersOwned()) {
        case 0:
          break;
        case 1:
          sprinkleColors.push("images/OrangeDonut.png");
          donutMultiplierButton.innerText = "RESEARCH RED SPRINKLES";
          break;
        case 2:
          sprinkleColors.push("images/RedDonut.png");
          donutMultiplierButton.innerText = "RESEARCH LIGHT PINK SPRINKLES";
          break;
        case 3:
            sprinkleColors.push("images/LightPinkDonut.png");
            donutMultiplierButton.innerText = "RESEARCH DARK PINK SPRINKLES";
          break;
        case 4:
            sprinkleColors.push("images/DarkPinkDonut.png");
            donutMultiplierButton.innerText = "RESEARCH PURPLE PINK SPRINKLES";
          break;
        case 5:
            sprinkleColors.push("images/PurpleDonut.png");
            donutMultiplierButton.innerText = "RESEARCH DARK BLUE SPRINKLES";
          break;
        case 6:
            sprinkleColors.push("images/DarkBlueDonut.png");
            donutMultiplierButton.innerText = "RESEARCH LIGHT BLUE SPRINKLES";
            break;
        case 7:
            sprinkleColors.push("images/LightBlueDonut.png");
            donutMultiplierButton.innerText = "RESEARCH BLUE SPRINKLES";
            break;
        case 8:
            sprinkleColors.push("images/BlueDonut.png");
            donutMultiplierButton.innerText = "RESEARCH DARK GREEN SPRINKLES";
        break;
        case 9:
            sprinkleColors.push("images/DarkGreenDonut.png");
            donutMultiplierButton.innerText = "RESEARCH GREEN SPRINKLES";
        break;
        case 10:
            sprinkleColors.push("images/GreenDonut.png");
            donutMultiplierButton.innerText = "RESEARCH LIGHT GREEN SPRINKLES";
        break;
        case 11:
            sprinkleColors.push("images/LightGreenDonut.png");
            donutMultiplierButton.innerText = "SPRINKLE COLORS FULLY RESEARCHED";
        break;
        default:
        break;
    };
}
const clickDonutButton = (button, donutMaker) =>{
    button.addEventListener('click', ()=>{
        donutMaker.addDonut();
        changeDonutImage();
        updateGame(donutMaker);
    });
}

const clickUpgradeBakeryButton = (button, donutMaker) =>{
    button.addEventListener('click', ()=>{
        donutMaker.addBakeryLevel();
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
        updateSprinkleColors(donutMaker);
        updateGame(donutMaker);
    });
}

const clickResetButton = (button, donutMaker) =>{
    button.addEventListener('click', ()=>{
        donutMaker.resetGame();
        updateGame(donutMaker);
    });
}


const changeDonutImage = () => {
    let currentColor;
        if (!currentColor || !currentColor.length) {
            currentColor = sprinkleColors.slice();
            currentColor = currentColor.splice(Math.random() * currentColor.length | 0, 1);
        };
    donutButtonImage.src = currentColor;
}

clickDonutButton(donutButton, appDonutMaker);
clickUpgradeBakeryButton(bakeryUpgradeButton, appDonutMaker);
clickAutoClickerButton(autoClickerButton, appDonutMaker);
clickDonutMultiplierButton(donutMultiplierButton, appDonutMaker);
clickResetButton(gameResetButton, appDonutMaker);
updateGame(appDonutMaker);
updateSprinkleColors(appDonutMaker);
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
