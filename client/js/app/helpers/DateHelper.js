class DateHelper {

    /**
     * throw an error if someone try to instantiate ah object
     */
    constructor(){
        throw new Error('DateHelper cant be instantiated');
    }

    static textToDate(text){
        if(!/\d{4}-\d{2}-\d{2}/.test(text)) 
           throw new Error('Date should be like yyyy-mm-dd');
        return new Date(...text.split('-').map((item, index) => item - index % 2));
    }

    static dateToText(date){
       return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }
}