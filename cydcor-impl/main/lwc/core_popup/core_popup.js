import { LightningElement, track } from 'lwc';

export default class Core_popup extends LightningElement {

    @track openmodel = false;
    @track modalHeader = 'Opportunity Creation';
    @track close = 'Close';
    
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