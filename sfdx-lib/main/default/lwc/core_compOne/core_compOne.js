import core_baseComponent from 'c/core_baseComponent';

export default class Core_compOne extends core_baseComponent {

    constructor(){
        super('Core_compOne', 'Core_compOneEvent');
        console.log('Core_compOne element Instantiated sucessfully');
        this.componentContextMap = {
            value : '',            
        };
    }

    handleChange(event){
        this.componentContextMap.value = event.target.value;
    }

}