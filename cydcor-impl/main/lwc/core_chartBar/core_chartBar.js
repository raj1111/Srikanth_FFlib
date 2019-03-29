import { LightningElement,  api } from 'lwc';

export default class Core_chartBar extends LightningElement {

    @api percentage;

    style(){
        return `width: ${this.percentage}%`;
    }

}