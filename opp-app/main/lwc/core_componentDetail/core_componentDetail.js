import { LightningElement } from 'lwc';

export default class Core_componentDetail extends LightningElement {

    constructor(name, label , required, type){
        this.name = name;
        this.label = label;
        this.required = required;
        this.type = type;
        
    }

}