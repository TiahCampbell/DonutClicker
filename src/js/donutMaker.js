class Donut {
    constructor(){
        this._count = 0;
    }

    addDonut(){
        this._count +=  1;
    }
    
    getDonutCount(){
        if(this._count < 0){
            return 0;
        }
        else{
            return this._count;
        }
    }
}

