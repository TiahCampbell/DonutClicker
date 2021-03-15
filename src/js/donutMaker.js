function DonutMaker() {
    this._donutCount = 400;
    this._autoClickersOwned = 0;
    this._autoClickersCost = 100;
    this._donutMultipliersOwned = 0;
    this._donutMultipliersCost = 10;
    this._donutMultiplier = 1.2;

    this.addDonut = function(){
        if(this._donutMultipliersOwned == 0){
            this._donutCount += 1;
        }
        else{
        this._donutCount += (1 * this._donutMultiplier);
        }
    };
    
    this.getDonutCount = function(){
        if(this._donutCount < 0){
            this._donutCount = 0;
            return this._donutCount;
        }
        else{
        return this._donutCount;
        }
    };

    this.autoAddDonut = function(obj){
        if(obj._donutMultipliersOwned == 0){
            obj._donutCount += obj._autoClickersOwned;
        }
        else{
            obj._donutCount += (obj._autoClickersOwned * obj._donutMultiplier);
        }
    };

    this.activateAutoClickers = function(obj){
        setInterval(this.autoAddDonut, 1000, obj);
    };

    this.addAutoClicker = function(){
        if(this._donutCount >= this._autoClickersCost){
            this._donutCount -= this._autoClickersCost;
            this._autoClickersOwned += 1;
            this._autoClickersCost *= 1.1;
            this._autoClickersCost = Math.round(this._autoClickersCost);
        }
        else{
        console.log('You do not have enough donuts to purchase this PowerUp');
        }
    };

    this.getAutoClickersOwned = function(){
        if(this._autoClickersOwned < 0){
            this._autoClickersOwned = 0;
            return this._autoClickersOwned;
        }
        else{
        return this._autoClickersOwned;
        }
    };

    this.addDonutMultiplier = function(){
        if(this._donutCount >= this._donutMultipliersCost){
            this._donutCount -= this._donutMultipliersCost;
            this._donutMultipliersOwned += 1;
            this._donutMultipliersCost *= 1.1;
            this._donutMultipliersCost = Math.round(this._donutMultipliersCost);
        }
        else{
        console.log('You do not have enough donuts to purchase this PowerUp');
        }
    };

    this.getDonutMultipliersOwned = function(){
        if(this._donutMultipliersOwned < 0){
            this._donutMultipliersOwned = 0;
            return this._donutMultipliersOwned;
        }
        else{
        return this._donutMultipliersOwned;
        }
    };
};

// const myDonutMaker = new DonutMaker();
// myDonutMaker.addDonut();
// myDonutMaker.addAutoClicker();
// myDonutMaker.addAutoClicker();
// myDonutMaker.activateAutoClickers(myDonutMaker);
// myDonutMaker.addDonutMultiplier();

