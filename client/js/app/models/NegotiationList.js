/**
 * class to build a list of negotiations
 */
class NegotiationList{
    constructor(){
        this._negotiations = [];
    }

    add(negotiation){
        this._negotiations.push(negotiation);
    }

    get negotiations(){
        //return this._negotiations; secure programming
        //creating a copy of array negotiation
        return [].concat(this._negotiations);
    }
}