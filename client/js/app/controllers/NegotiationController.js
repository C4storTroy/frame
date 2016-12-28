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
    }
    add(event){
        event.preventDefault();

        //let date = new Date(this._inputDate.value.split('-'));
        //let date = new Date(this._inputDate.value.replace(/-/g, ','));
        //let helper = new DateHelper();

        //let date = helper.textToDate(this._inputDate.value);

        let negotiation = new Negotiation(
            DateHelper.textToDate(this._inputDate.value),
            this._inputQuantity.value,
            this._inputValue.value
        );

        console.log(negotiation);

        console.log(DateHelper.dateToText(negotiation.date));
    }
}