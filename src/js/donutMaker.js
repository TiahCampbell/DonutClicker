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
        this._count +=  1;
    };

    this.getAutoClickerCount = function(){
        if(this._count < 0){
            this._count = 0;
            return this._count;
        };
        return this._count;
    };
};

const myDonuts = new Donuts();
const myAutoClickers = new AutoClickers();
myDonuts.addDonut();
myAutoClickers.addAutoClicker(myDonuts);