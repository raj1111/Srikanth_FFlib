import { LightningElement, api, track } from 'lwc';

export default class Core_popup extends LightningElement {

    @track openmodel = false;

    //Public properties
    @api modalHeader = 'Opportunity Creation';
    @api close = 'Close';
    @api cancel = 'Cancel';
    @api save = 'Save';
    
    
    openmodal() {
        this.openmodel = true
    }
    closeModal() {
        this.openmodel = false
    } 
    saveMethod() {
        alert('save method invoked');
        this.closeModal();
    }

}