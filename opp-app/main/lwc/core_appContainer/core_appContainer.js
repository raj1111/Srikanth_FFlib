import { LightningElement } from 'lwc';

export default class Core_appContainer extends LightningElement {

    constructor(componentDetail){
        // List<List<Component>>
        this.componentList = componentDetail;
    }

}