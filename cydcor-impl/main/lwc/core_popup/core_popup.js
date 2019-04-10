import { LightningElement, api, track } from 'lwc';

export default class Core_popup extends LightningElement {

    @track openmodel = false;

    //Public properties
    @api modalHeader = 'Opportunity Creation';
    @api close = 'Close';
    @api cancel = 'Cancel';
    @api save = 'Save';
    @api popupText = 'Show Modal Box using Lightning Web Componentes';
    
    @api
    openmodal() {
        console.log('Called hte child method');
        this.openmodel = true
    }
    closeModal() {
        this.openmodel = false
    } 
    handleSave() {
        console.log('Clicked save');
        this.dispatchEvent(new CustomEvent('save'));
    }

}