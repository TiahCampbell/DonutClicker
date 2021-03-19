const appDonutMaker = new DonutMaker();

const donutCountElement = document.querySelector('.donutCount');
const donutButton = document.querySelector(".donutButton");

const updateGame = (donutMaker)=>{
    donutCountElement.innerText = donutMaker.getDonutCount();
}

const clickDonutButton = (button, donutMaker) =>{
    button.addEventListener('click', ()=>{
        donutMaker.addDonut();
        updateGame(donutMaker);
    });
}

clickDonutButton(donutButton, appDonutMaker);
updateGame(appDonutMaker);

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
