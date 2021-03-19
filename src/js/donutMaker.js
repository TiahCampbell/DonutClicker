class DonutMaker {
    constructor() {
        this._donutCount = 400;
        this._autoClickersOwned = 0;
        this._autoClickersCost = 100;
        this._donutMultipliersOwned = 0;
        this._donutMultipliersCost = 10;
        this._donutsPerClick = 1;
        // this._autoClickerInterval = self.setInterval(this.autoAddDonut, 1000);
    }
        addDonut = () => {
            if (this._donutMultipliersOwned == 0) {
                this._donutCount += 1;
            }
            else {
                this._donutCount += (1 * Math.pow(1.2, this._donutMultipliersOwned));
            }
        };

        getDonutCount = () => {
            if (this._donutCount < 0) {
                this._donutCount = 0;
                return this._donutCount;
            }
            else {
                return this._donutCount;
            }
        };

        autoAddDonut = (obj) => {
            if (obj._donutMultipliersOwned == 0) {
                obj._donutCount += obj._autoClickersOwned;
            }
            else {
                obj._donutCount += (obj._autoClickersOwned * Math.pow(1.2, obj._donutMultipliersOwned));
            }
        };

        // activateAutoClickers = () => {
        //     setInterval(this.autoAddDonut, 1000);
        // };

        addAutoClicker = () => {
            if (this._donutCount >= this._autoClickersCost) {
                this._donutCount -= this._autoClickersCost;
                this._autoClickersOwned += 1;
                this._autoClickersCost *= 1.1;
                this._autoClickersCost = Math.round(this._autoClickersCost);
            }
            else {
                console.log('You do not have enough donuts to purchase this PowerUp');
            }
        };

        getAutoClickersOwned = () => {
            if (this._autoClickersOwned < 0) {
                this._autoClickersOwned = 0;
                return this._autoClickersOwned;
            }
            else {
                return this._autoClickersOwned;
            }
        };

        getAutoClickersCost = () => {
            return this._autoClickersCost;
        };

        addDonutMultiplier = () => {
            if (this._donutCount >= this._donutMultipliersCost) {
                this._donutCount -= this._donutMultipliersCost;
                this._donutMultipliersOwned += 1;
                this._donutMultipliersCost *= 1.1;
                this._donutMultipliersCost = Math.round(this._donutMultipliersCost);
            }
            else {
                console.log('You do not have enough donuts to purchase this PowerUp');
            }
        };

        getDonutMultipliersOwned = () => {
            if (this._donutMultipliersOwned < 0) {
                this._donutMultipliersOwned = 0;
                return this._donutMultipliersOwned;
            }
            else {
                return this._donutMultipliersOwned;
            }
        };

        getDonutMultipliersCost = () => {
            return this._donutMultipliersCost;
        };

        getDonutsPerClick = () => {
            if (this._donutMultipliersOwned == 0) {
                this._donutsPerClick = 1;
                return this._donutsPerClick;
            }
            else {
                this._donutsPerClick = (1 * Math.pow(1.2, this._donutMultipliersOwned));
                return this._donutsPerClick;
            }
        };
    
};

// const myDonutMaker = new DonutMaker();
// myDonutMaker.addDonut();
// myDonutMaker.addAutoClicker();
// myDonutMaker.addAutoClicker();
// myDonutMaker.activateAutoClickers(myDonutMaker);
// myDonutMaker.addDonutMultiplier();

