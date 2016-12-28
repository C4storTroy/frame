class NegotiationController{

    constructor(){
        let $ = document.querySelector.bind(document)   ;
        this._inputQuantity = $('#quantity');
        this._inputDate = $('#date');
        this._inputValue = $('#value');
    }
    add(event){
        event.preventDefault();

        //let date = new Date(this._inputDate.value.split('-'));
        //let date = new Date(this._inputDate.value.replace(/-/g, ','));
        let date = new Date(...
            this._inputDate.value
            .split('-')
            .map(function(item, index){
                return item - index % 2;
                /**if(index == 1){
                    return item-1;
                }
                return item;**/
            })
        );

        console.log(date);
        let negotiation = new Negotiation(
            date,
            this._inputQuantity.value,
            this._inputValue.value
        );

        console.log(negotiation);
    }
}