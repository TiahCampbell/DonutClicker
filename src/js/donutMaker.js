class DonutMaker {
    constructor() {
        this._donutCount = 0;
        this._autoClickersOwned = 0;
        this._autoClickersCost = 100;
        this._donutMultipliersOwned = 0;
        this._donutMultipliersCost = 50;
        this._donutsPerClick = 1;
        this._donutsPerMinute = 0;
        this._bakeryLevel = 1;
        this._bakeryUpgradeCost = 1000;
    }

        addDonut = () => {
            if (this._donutMultipliersOwned == 0) {
                this._donutCount += 1;
            }
            else {
                this._donutCount += (1 * Math.pow(2.4, this._donutMultipliersOwned));
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
                obj._donutCount += (obj._autoClickersOwned * Math.pow(2.4, obj._donutMultipliersOwned));
            }
        };
       
        addAutoClicker = () => {
            if (this._donutCount >= this._autoClickersCost && this._bakeryLevel > this._autoClickersOwned) {
                this._donutCount -= this._autoClickersCost;
                this._autoClickersOwned += 1;
                this._autoClickersCost *= 2.2;
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
            if (this._donutCount >= this._donutMultipliersCost && this._donutMultipliersOwned < 11) {
                this._donutCount -= this._donutMultipliersCost;
                this._donutMultipliersOwned += 1;
                this._donutMultipliersCost *= 2.2;
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
                this._donutsPerClick = (1 * Math.pow(2.4, this._donutMultipliersOwned));
                return this._donutsPerClick;
            }
        };

        getDonutsPerMinute = () => {
            if (this._donutMultipliersOwned == 0) {
                this._donutsPerMinute = this._autoClickersOwned * 60;
                return this._donutsPerMinute;
            }
            else {
                this._donutsPerMinute = this._autoClickersOwned * Math.pow(2.4, this._donutMultipliersOwned) * 60;
                return this._donutsPerMinute
            }
        };

        addBakeryLevel = () => {
            if (this._donutCount >= this._bakeryUpgradeCost) {
                this._donutCount -= this._bakeryUpgradeCost;
                this._bakeryLevel += 1;
                this._bakeryUpgradeCost *= 5;
            }
        };

        getBakeryLevel = () => {
            return this._bakeryLevel;
        };

        getBakeryUpgradeCost = () => {
            return this._bakeryUpgradeCost;
        };

        resetGame = () => {
        this._donutCount = 0;
        this._autoClickersOwned = 0;
        this._autoClickersCost = 100;
        this._donutMultipliersOwned = 0;
        this._donutMultipliersCost = 50;
        this._donutsPerClick = 1;
        this._donutsPerMinute = 0;
        this._bakeryLevel = 1;
        this._bakeryUpgradeCost = 1000;
        };
    
};


