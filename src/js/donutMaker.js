function Donuts() {
    this._count = 200;

    this.addDonut = function(){
        this._count +=  1;
    };
    
    this.getDonutCount = function(){
        if(this._count < 0){
            this._count = 0;
            return this._count;
        };
        return this._count;
    };

};

function AutoClickers() {
    this._count = 0;
    this._cost = 100;
    
    this.addAutoClicker = function(donuts){
        donuts._count -= this._cost;
        this._count += 1;
        this._cost *= 1.1;
        this._cost = Math.round(this._cost)
    };

    this.getAutoClickerCount = function(){
        if(this._count < 0){
            this._count = 0;
            return this._count;
        };
        return this._count;
    };

    // this.getAutoClickerCost = function(){
    //     if(this._cost < 0){
    //         this._cost = 0;
    //         return this._cost;
    //     };
    //     return this._cost;
    // }
};

const myDonuts = new Donuts();
const myAutoClickers = new AutoClickers();
myDonuts.addDonut();
myAutoClickers.addAutoClicker(myDonuts);
myAutoClickers.addAutoClicker(myDonuts);
myAutoClickers.addAutoClicker(myDonuts);