import core_baseComponent from 'c/core_baseComponent';

export default class Core_compTwo extends core_baseComponent {
    constructor(){
        super('Core_compTwo', 'Core_compTwoEvent');
        console.log('Core_compTwo element Instantiated sucessfully');
        this.componentContextMap = {
            value : '',            
        };
    }

    handleChange(event){
        this.componentContextMap.value = event.target.value;
    }
}