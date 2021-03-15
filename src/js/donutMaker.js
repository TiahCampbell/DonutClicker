function DonutMaker() {
    this._count = 400;
    this._aCCount = 0;
    this._aCCost = 100;

    this.addDonut = function(){
        this._count +=  1;
    };
    
    this.getDonutCount = function(){
        if(this._count < 0){
            this._count = 0;
            return this._count;
        }
        else{
        return this._count;
        }
    };

    this.donutClick = function(obj){
        obj._count += obj._aCCount;
        console.log(obj._count);
    };

    this.activateAutoClickers = function(obj){
        setInterval(this.donutClick, 1000, obj);
    }

    
    this.addAutoClicker = function(){
        if(this._count >= this._aCCost){
            this._count -= this._aCCost;
            this._aCCount += 1;
            this._aCCost *= 1.1;
            this._aCCost = Math.round(this._aCCost);
        }
        else{
        console.log('You do not have enough donuts to purchase this PowerUp');
        }
    };

    this.getAutoClickerCount = function(){
        if(this._aCCount < 0){
            this._aCCount = 0;
            return this._aCCount;
        }
        else{
        return this._aCCount;
        }
    };
};

const myDonutMaker = new DonutMaker();
myDonutMaker.addDonut();
myDonutMaker.addAutoClicker();
myDonutMaker.addAutoClicker();
myDonutMaker.activateAutoClickers(myDonutMaker);

