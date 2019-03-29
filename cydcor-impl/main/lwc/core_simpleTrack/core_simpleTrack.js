import { LightningElement } from 'lwc';

export default class Core_simpleTrack extends LightningElement {

    // @track
    itemName = 'Milk';

    handleClick(){
        this.itemName = 'Bread';
        console.log('Item Name is : ' + this.itemName);
    }   

}