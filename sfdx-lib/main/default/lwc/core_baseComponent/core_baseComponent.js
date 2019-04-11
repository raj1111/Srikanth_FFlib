import { LightningElement,api } from 'lwc';

export default class Core_baseComponent extends LightningElement {
    constructor(componentName){
        super();
        this.componentName = componentName;
        console.log('Base Component Instantiated sucessfully');
    }

    componentContextMap = {};

    @api
    getComponentBody(){
        return this.componentContextMap;
    }

    @api 
    getComponentName(){
        return this.componentName;
    }

}