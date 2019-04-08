import { LightningElement } from 'lwc';

export default class Core_banCard extends LightningElement {

    unifiedBAN = '';
    confirmUnifiedBAN = '';

    captureunifiedBAN(event){
        this.unifiedBAN = event.source.target;
    }
    captureConfirmUnifiedBAN(event){
        this.confirmUnifiedBAN = event.source.target;
    }


}