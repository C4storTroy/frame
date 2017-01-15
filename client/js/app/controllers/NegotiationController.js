/**
 * resume:
 * controller added
 * submit controller method
 * Method bind to refer document (using this)
 * date must be constructed using map, arrowfunction
 * adjusting date - date was string
 * spread operator - passing an array as parameter (read more)
 * Arrow function
 */
class NegotiationController{

    constructor(){
        let $ = document.querySelector.bind(document)   ;
        this._inputQuantity = $('#quantity');
        this._inputDate = $('#date');
        this._inputValue = $('#value');
        this._negotiationList = new NegotiationList();
    }
    add(event){
        event.preventDefault();

        this._negotiationList.add(this._createNegotiation());
        //this._negotiationList.negotiations.push(this._createNegotiation());
        this._cleanForm();
        console.log(this._negotiationList.negotiations);
    }

    _createNegotiation(){
        return new Negotiation(
            DateHelper.textToDate(this._inputDate.value),
            this._inputQuantity.value,
            this._inputValue.value);
    }
    _cleanForm(){
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputValue.value = 0.0;
        this._inputDate.focus();
    }
}