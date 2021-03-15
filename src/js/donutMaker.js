function DonutMaker() {
    this._donutCount = 0;
    this._autoClickersOwned = 0;
    this._autoClickersCost = 100;

    this.addDonut = function(){
        this._donutCount +=  1;
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

    this.donutClick = function(obj){
        obj._donutCount += obj._autoClickersOwned;
        console.log(obj._donutCount);
    };

    this.activateAutoClickers = function(obj){
        setInterval(this.donutClick, 1000, obj);
    }

    
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

    this.getAutoClickerCount = function(){
        if(this._autoClickersOwned < 0){
            this._autoClickersOwned = 0;
            return this._autoClickersOwned;
        }
        else{
        return this._autoClickersOwned;
        }
    };
};

// const myDonutMaker = new DonutMaker();
// myDonutMaker.addDonut();
// myDonutMaker.addAutoClicker();
// myDonutMaker.addAutoClicker();
// myDonutMaker.activateAutoClickers(myDonutMaker);

